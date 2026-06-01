import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactCta from "@/components/home/ContactCta";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { blogPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Article not found | GoGoa Logistics" };
  }
  return {
    title: `${post.title} | GoGoa Logistics`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <PageHeader
        title={post.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.category },
        ]}
      />

      <article className="py-12 sm:py-14">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 border-b border-line pb-4 text-xs">
            <span className="bg-orange px-2 py-1 font-semibold uppercase tracking-wide text-white">
              {post.category}
            </span>
            <span className="text-mute">{post.readingMinutes} min read</span>
          </div>

          <div className="mt-6 space-y-5">
            {post.body.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink first:text-lg first:text-slatey"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark hover:text-orange"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              Back to all guides
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">
                More on {post.category}
              </h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-base font-semibold text-navy group-hover:text-orange-dark">
                        {r.title}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-mute group-hover:text-orange" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </article>

      <ContactCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
