import Link from "next/link";

type LogoProps = {
  /** Use the light variant on dark (navy) backgrounds. */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Wordmark logo drawn in CSS/SVG — no external image needed.
 * A solid navy "parcel" mark with the GoGoa Logistics wordmark.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/70" : "text-slatey";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="GoGoa Logistics — home"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center bg-orange">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 8 12 3 3 8l9 5 9-5Z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <path d="M12 13v8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${wordColor}`}>
GoGoa<span className="text-orange">Logistics</span>
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Courier &amp; Logistics · Goa
        </span>
      </span>
    </Link>
  );
}
