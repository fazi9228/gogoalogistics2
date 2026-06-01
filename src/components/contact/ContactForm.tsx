"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon, CheckIcon } from "@/components/ui/Icon";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

// Indian mobile numbers: 10 digits, optionally +91 / 0 prefix.
const phoneRe = /^(\+?91[-\s]?|0)?[6-9]\d{9}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  const phone = values.phone.replace(/\s/g, "");
  if (!phone) {
    errors.phone = "We need a phone number to reply.";
  } else if (!phoneRe.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  // Email is optional, but if provided it must be valid.
  if (values.email.trim() && !emailRe.test(values.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }

  if (!values.service) {
    errors.service = "Please choose what you'd like to send.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your shipment.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A few more details will help us quote accurately.";
  }

  return errors;
}

const fieldBase =
  "mt-1 w-full border bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-mute focus:border-navy focus:ring-2 focus:ring-orange/30";

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(key: keyof Fields) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true,
      message: true,
    });
    if (Object.keys(found).length === 0) {
      // No backend is wired in this starter. The form validates, then we
      // hand the enquiry to WhatsApp with the details prefilled so no lead
      // is lost. Replace this with an API route / email service in production.
      setSubmitted(true);
    }
  }

  function buildWhatsAppMessage(): string {
    const serviceLabel =
      services.find((s) => s.slug === values.service)?.title ?? values.service;
    return [
      "New enquiry from the website:",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Service: ${serviceLabel}`,
      `Details: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center bg-orange text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy">
          Thanks, {values.name.split(" ")[0]}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slatey">
          Your details are ready. Tap below to send them to us on WhatsApp and
          we&apos;ll reply with a quote — usually within minutes during working
          hours.
        </p>
        <a
          href={whatsappLink(buildWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 bg-[#25D366] px-5 text-sm font-semibold text-white hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues(initial);
            setTouched({});
            setErrors({});
          }}
          className="mt-3 block w-full text-xs font-medium text-slatey underline-offset-2 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Full name <span className="text-orange">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldBase} ${
              errors.name ? "border-red-500" : "border-line"
            }`}
            placeholder="e.g. Maria Fernandes"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone / WhatsApp <span className="text-orange">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBase} ${
              errors.phone ? "border-red-500" : "border-line"
            }`}
            placeholder="10-digit mobile number"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email <span className="text-mute">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBase} ${
              errors.email ? "border-red-500" : "border-line"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-semibold text-navy">
            What would you like to send? <span className="text-orange">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            onBlur={() => handleBlur("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`${fieldBase} ${
              errors.service ? "border-red-500" : "border-line"
            }`}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-navy">
            Shipment details <span className="text-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldBase} resize-y ${
              errors.message ? "border-red-500" : "border-line"
            }`}
            placeholder="Destination, rough weight and what you're sending — e.g. 'Documents to Dubai, around 300g'."
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-dark sm:w-auto"
      >
        Send enquiry
      </button>
      <p className="mt-3 text-xs text-mute">
        We&apos;ll only use your details to respond to this enquiry.
      </p>
    </form>
  );
}
