import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[55vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-5xl font-extrabold text-orange">404</span>
      <h1 className="mt-3 text-2xl font-bold text-navy">
        That page seems to have gone astray
      </h1>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slatey">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you
        back on track — or message us and we&apos;ll help directly.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
        <Button href="/contact" variant="outline">
          Contact us
        </Button>
      </div>
    </Container>
  );
}
