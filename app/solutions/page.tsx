import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="Digital Solutions"
          title="Technology Solutions for Modern Businesses"
          description="We help businesses grow through websites, branding, digital transformation, consulting and tailored IT solutions."
          primaryText="Request a Consultation"
          primaryHref="/contact"
          secondaryText="Explore Services"
          secondaryHref="/services"
        />
      </main>

      <Footer />
    </>
  );
}