import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white">
        <GalleryHero />

        <GalleryGrid />
      </main>

      <Footer />
    </>
  );
}