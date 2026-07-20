import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
}