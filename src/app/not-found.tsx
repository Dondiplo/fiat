import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-20 text-center sm:py-28">
      <LogoMark className="h-auto w-28 opacity-90" />
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="display-lg mt-3 text-navy-900">This page could not be found.</h1>
      <p className="mt-4 max-w-md text-muted">The page may have moved. Try searching, or start again from the homepage.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
