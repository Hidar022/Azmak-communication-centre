import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
    </PageWrapper>
  );
}