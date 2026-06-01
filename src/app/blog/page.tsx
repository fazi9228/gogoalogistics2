import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ContactCta from "@/components/home/ContactCta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { blogPosts, blogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Shipping & Courier Guides for Goa | GoGoa Logistics Blog",
  description:
    "Practical guides on domestic and international shipping from Goa, courier tips, packing advice and logistics help for businesses in Margao and across Goa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Shipping & Courier Guides for Goa | GoGoa Logistics Blog",
    description:
      "Practical guides on shipping from Goa — international courier, packing tips and logistics for local businesses.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        title="Shipping guides & courier tips"
        intro="Practical, no-nonsense advice for sending things from Goa — what it costs, how long it takes and how to avoid the common mistakes."
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
      />

      <Section>
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          <span className="border border-navy bg-navy px-3 py-1.5 text-xs font-semibold text-white">
            All posts
          </span>
          {blogCategories.map((c) => (
            <span
              key={c}
              className="border border-line bg-white px-3 py-1.5 text-xs font-medium text-slatey"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-8 block border border-line bg-white p-6 transition-colors hover:bg-offwhite sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-orange px-2 py-1 font-semibold uppercase tracking-wide text-white">
                {featured.category}
              </span>
              <span className="text-mute">
                {featured.readingMinutes} min read
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-navy group-hover:text-orange-dark">
              {featured.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slatey">
              {featured.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark">
              Read guide
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        )}

        {/* Remaining posts */}
        <div className="mt-px grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white p-6 transition-colors hover:bg-offwhite"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wide text-orange-dark">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold leading-snug text-navy group-hover:text-orange-dark">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">
                {post.excerpt}
              </p>
              <span className="mt-4 text-xs text-mute">
                {post.readingMinutes} min read
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 border border-dashed border-line bg-offwhite p-4 text-sm text-slatey">
          <strong className="text-navy">Building your SEO content?</strong> Add
          new articles in{" "}
          <code className="bg-line px-1 py-0.5 text-xs">src/lib/blog.ts</code> —
          the listing and individual post pages pick them up automatically. Wire
          in MDX or a CMS later without changing these pages.
        </p>
      </Section>

      <ContactCta />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
    </>
  );
}
