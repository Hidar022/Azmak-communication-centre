"use client";

import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const gallery = [
  {
    image: "/images/gallery/gallery-1.jpg",
    title: "Technology Training",
    large: true,
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    title: "Printing Services",
    large: true,
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    title: "Student Projects",
    large: true,
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    title: "SIWES Programme",
    large: true,
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Gallery"
          title="Inside AZMAK Communication Centre"
          description="Take a look at our learning environment, communication centre and student activities."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-3xl ${
                item.large ? "md:h-[420px]" : "md:h-[280px]"
              } h-72`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <PrimaryButton href="/gallery">
            View Full Gallery
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}