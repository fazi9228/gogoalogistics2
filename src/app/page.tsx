import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceAreas from "@/components/home/ServiceAreas";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactCta from "@/components/home/ContactCta";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <Faq />
      <ContactCta />
      <FaqJsonLd />
    </>
  );
}
