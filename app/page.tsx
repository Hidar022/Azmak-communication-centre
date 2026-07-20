import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustedSection } from "@/components/sections/TrustedSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { SIWESSection } from "@/components/sections/SIWESSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

      <TrustedSection />

      <AboutSection />

      <ServicesSection />

      <AcademySection />

      <WhyChooseSection />

      <SIWESSection />

      <TestimonialsSection />

      <GallerySection />

      <FAQSection />

      <ContactSection />

      <Footer />
      </main>

    </>
  );
}