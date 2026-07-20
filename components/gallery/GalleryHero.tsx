import { Camera, Images } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[120px]" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <Camera className="h-4 w-4" />
            Our Gallery
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Explore Life at
            <span className="block text-blue-600">
              AZMAK Communication Centre
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Browse through our technology academy, communication centre,
            SIWES programme, student activities, workshops, printing services,
            digital projects and memorable moments captured at AZMAK.
          </p>

          {/* Statistics */}
          <div className="mt-14 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
            <div>
              <Images className="mx-auto h-10 w-10 text-blue-600" />

              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                100+
              </h3>

              <p className="mt-2 text-slate-600">
                Gallery Photos
              </p>
            </div>

            <div>
              <Camera className="mx-auto h-10 w-10 text-blue-600" />

              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                6+
              </h3>

              <p className="mt-2 text-slate-600">
                Categories
              </p>
            </div>

            <div>
              <Images className="mx-auto h-10 w-10 text-blue-600" />

              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                1000+
              </h3>

              <p className="mt-2 text-slate-600">
                Happy Memories
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}