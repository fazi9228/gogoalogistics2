import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none border";

const variants: Record<Variant, string> = {
  // Warm orange is reserved for the primary call to action.
  primary: "bg-orange text-white border-orange hover:bg-orange-dark hover:border-orange-dark",
  secondary: "bg-navy text-white border-navy hover:bg-navy-light hover:border-navy-light",
  outline: "bg-transparent text-navy border-navy/30 hover:border-navy hover:bg-navy/5",
  ghost: "bg-white text-navy border-line hover:border-navy/40 hover:bg-offwhite",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external = false,
  ...rest
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
