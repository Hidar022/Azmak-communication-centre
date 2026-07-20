"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Container } from "@/components/layout/Container";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Technology Training",
    category: "Technology",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    id: 2,
    title: "Printing Services",
    category: "Printing",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    id: 3,
    title: "Student Projects",
    category: "Students",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    id: 4,
    title: "SIWES Programme",
    category: "SIWES",
    image: "/images/gallery/gallery-4.jpg",
  },

  // Add more images here later 👇
  // {
  //   id: 5,
  //   title: "Workshop",
  //   category: "Technology",
  //   image: "/images/gallery/gallery-5.jpg",
  // },
];

const filters = [
  "All",
  ...Array.from(new Set(gallery.map((item) => item.category))),
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return gallery;

    return gallery.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  function openImage(index: number) {
    setSelectedIndex(index);
  }

  function closeImage() {
    setSelectedIndex(null);
  }

  function nextImage() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % filteredImages.length
    );
  }

  function previousImage() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + filteredImages.length) %
        filteredImages.length
    );
  }

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  return (
    <section className="py-24">
      <Container>
        {/* Filters */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition

                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-blue-100"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openImage(index)}
              className="group relative h-80 overflow-hidden rounded-3xl"
            >
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-lg font-bold text-white">
                  {image.title}
                </h3>

                <p className="text-sm text-slate-200">
                  {image.category}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}

        {selectedImage && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6">
            <button
              onClick={closeImage}
              className="absolute right-6 top-6 rounded-full bg-white p-3"
            >
              <X />
            </button>

            <button
              onClick={previousImage}
              className="absolute left-6 rounded-full bg-white p-3"
            >
              <ChevronLeft />
            </button>

            <div className="relative h-[80vh] w-full max-w-5xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 rounded-full bg-white p-3"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}