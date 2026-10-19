import Image from "next/image";
import Section, { SectionHeading } from "@/components/ui/Section";

const counterPhotos = [
  {
    src: "/images/gogoa-storefront.jpeg",
    alt: "GoGoa Logistics DTDC storefront in Goa",
    caption: "Our storefront",
  },
  {
    src: "/images/gogoa-counter.jpeg",
    alt: "GoGoa Logistics service counter with parcels ready for dispatch",
    caption: "Inside the counter",
  },
  {
    src: "/images/gogoa-shipments.jpeg",
    alt: "Packed parcels waiting at the GoGoa Logistics counter",
    caption: "Parcels ready to move",
  },
];

const serviceBanners = [
  {
    src: "/images/dtdc-services-banner.jpeg",
    alt: "DTDC service banner showing express, international and e-commerce services",
  },
  {
    src: "/images/worldwide-services-banner.jpeg",
    alt: "DTDC Worldwide service banner showing international shipping options",
  },
];

export default function RealPhotos() {
  return (
    <Section>
      <SectionHeading
        eyebrow="From our counter"
        title="A real place, handling real shipments"
        description="These are photos from the GoGoa Logistics counter — the storefront, the work area and the service options available here."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-12">
        <figure className="group relative overflow-hidden bg-navy md:col-span-7">
          <Image
            src={counterPhotos[0].src}
            alt={counterPhotos[0].alt}
            width={1200}
            height={1600}
            className="h-full min-h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white">
            {counterPhotos[0].caption}
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
          {counterPhotos.slice(1).map((photo) => (
            <figure key={photo.src} className="group relative min-h-[220px] overflow-hidden bg-navy">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={1600}
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10 text-sm font-semibold text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {serviceBanners.map((banner) => (
          <Image
            key={banner.src}
            src={banner.src}
            alt={banner.alt}
            width={1600}
            height={900}
            className="h-auto w-full border border-line bg-white object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>
    </Section>
  );
}
