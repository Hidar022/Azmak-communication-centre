import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

import {
  Building2,
  GraduationCap,
  Printer,
  Globe,
  Target,
  Eye,
  HeartHandshake,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}

        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-28">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />

          <Container>
            <div className="relative mx-auto max-w-4xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                <Building2 className="h-4 w-4" />
                About AZMAK
              </span>

              <h1 className="mt-8 text-5xl font-bold text-slate-900 md:text-6xl">
                Empowering Students,
                <span className="block text-blue-600">
                  Businesses & Innovation
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                AZMAK Communication Centre combines professional communication
                services with modern technology education to help students,
                entrepreneurs and organizations succeed in today's digital
                world.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <PrimaryButton href="/contact">
                  Contact Us
                </PrimaryButton>

                <PrimaryButton href="/academy">
                  Explore Academy
                </PrimaryButton>
              </div>

            </div>
          </Container>
        </section>

        {/* Story */}

        <section className="py-24">
          <Container>

            <div className="grid gap-16 lg:grid-cols-2">

              <div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Our Story
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  AZMAK Communication Centre was established with a vision of
                  providing reliable communication services while equipping
                  students with practical technology skills needed in today's
                  workplace.
                </p>

                <p className="mt-6 leading-8 text-slate-600">
                  From professional printing and document processing to software
                  development training, artificial intelligence and SIWES
                  mentorship, we continue to bridge the gap between education
                  and industry.
                </p>
              </div>

              <div className="grid gap-6">

                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                  <GraduationCap className="h-10 w-10 text-blue-600" />

                  <h3 className="mt-5 text-2xl font-semibold">
                    Technology Academy
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Industry-focused training designed to prepare learners for
                    real careers.
                  </p>
                </div>

                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                  <Printer className="h-10 w-10 text-blue-600" />

                  <h3 className="mt-5 text-2xl font-semibold">
                    Communication Centre
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Professional printing, documentation and business support
                    services.
                  </p>
                </div>

              </div>

            </div>

          </Container>
        </section>

        {/* Mission Vision */}

        <section className="bg-slate-50 py-24">
          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl bg-white p-10 shadow-sm">
                <Target className="h-12 w-12 text-blue-600" />

                <h2 className="mt-6 text-3xl font-bold">
                  Our Mission
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  To deliver quality communication services while empowering
                  individuals with practical technology skills that create
                  employment, innovation and business growth.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-sm">
                <Eye className="h-12 w-12 text-blue-600" />

                <h2 className="mt-6 text-3xl font-bold">
                  Our Vision
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  To become one of Nigeria's leading communication and
                  technology training centres recognized for excellence,
                  innovation and customer satisfaction.
                </p>
              </div>

            </div>

          </Container>
        </section>

        {/* Services */}

        <section className="py-24">
          <Container>

            <div className="text-center">

              <h2 className="text-4xl font-bold">
                What We Do
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-slate-600">
                We provide a combination of communication services and
                technology solutions under one roof.
              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Professional Printing",
                "Photocopying",
                "Scanning & Typing",
                "Technology Training",
                "Website Development",
                "Artificial Intelligence",
                "Python Programming",
                "Data Analytics",
                "SIWES Training",
              ].map((service) => (

                <div
                  key={service}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                  <Globe className="mb-4 h-8 w-8 text-blue-600" />

                  <h3 className="font-semibold">
                    {service}
                  </h3>
                </div>

              ))}

            </div>

          </Container>
        </section>

        {/* Values */}

        <section className="bg-blue-600 py-24 text-white">
          <Container>

            <h2 className="text-center text-4xl font-bold">
              Our Core Values
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              <div className="text-center">
                <Award className="mx-auto h-12 w-12" />

                <h3 className="mt-5 text-2xl font-semibold">
                  Excellence
                </h3>

                <p className="mt-3 text-blue-100">
                  We strive for quality in everything we do.
                </p>
              </div>

              <div className="text-center">
                <Users className="mx-auto h-12 w-12" />

                <h3 className="mt-5 text-2xl font-semibold">
                  Teamwork
                </h3>

                <p className="mt-3 text-blue-100">
                  Working together to achieve greater success.
                </p>
              </div>

              <div className="text-center">
                <HeartHandshake className="mx-auto h-12 w-12" />

                <h3 className="mt-5 text-2xl font-semibold">
                  Integrity
                </h3>

                <p className="mt-3 text-blue-100">
                  Honesty, professionalism and respect guide our work.
                </p>
              </div>

            </div>

          </Container>
        </section>

        {/* CTA */}

        <section className="py-24">
          <Container>

            <div className="rounded-[40px] bg-slate-900 px-10 py-20 text-center text-white">

              <h2 className="text-4xl font-bold">
                Ready to Work With AZMAK?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-slate-300">
                Whether you need professional communication services or want
                to build a successful career in technology, we're ready to help.
              </p>

              <div className="mt-10 flex justify-center">
                <PrimaryButton href="/contact">
                  Contact Us Today
                </PrimaryButton>
              </div>

            </div>

          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}