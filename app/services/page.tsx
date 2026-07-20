import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServicesList } from "@/components/services/ServicesList";
import { WorkProcess } from "@/components/services/WorkProcess";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <ServicesHero />
        <ServicesOverview />
        <ServicesList />
        <WorkProcess />
        <ServicesFAQ />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}