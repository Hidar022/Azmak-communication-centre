import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";

export default function AcademyPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="Technology Academy"
          title="Learn Practical Technology Skills"
          description="Gain real-world experience in Web Development, Artificial Intelligence, Data Analytics, Python Programming and more through project-based learning and structured mentorship."
          primaryText="Apply for SIWES"
          primaryHref="/siwes/apply"
          secondaryText="Contact Us"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}