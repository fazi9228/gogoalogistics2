import Link from "next/link";
import Container from "./Container";

type Crumb = { name: string; href?: string };

type PageHeaderProps = {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
};

/** Compact navy page banner used at the top of inner pages. */
export default function PageHeader({ title, intro, crumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-navy text-white">
      <Container className="py-10 sm:py-12">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
              {crumbs.map((c, i) => (
                <li key={c.name} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-orange">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-white/85">{c.name}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span className="text-white/30" aria-hidden>
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            {intro}
          </p>
        )}
      </Container>
    </div>
  );
}
