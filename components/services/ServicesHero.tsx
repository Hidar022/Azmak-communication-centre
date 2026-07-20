"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Printer,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24 lg:py-32">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-100 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              <Printer className="h-4 w-4" />
              Communication Centre
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Professional Printing &
              <span className="block text-blue-600">
                Documentation Services
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Whether you're a student, business owner or organization,
              AZMAK Communication Centre provides fast, affordable and
              high-quality printing and documentation services that
              you can trust.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Professional Printing",
                "Photocopying",
                "Scanning & Typing",
                "Lamination & Spiral Binding",
                "Business Documentation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>

              ))}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

             <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
            render={<Link href="tel:+2340000000000" />}
            variant="outline"
            size="lg"
            >
            <PhoneCall className="mr-2 h-4 w-4" />
            Call Now
            </Button>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 p-8 text-white">

                <Printer className="h-14 w-14" />

                <h3 className="mt-6 text-3xl font-bold">
                  Why Choose AZMAK?
                </h3>

                <p className="mt-4 text-blue-100 leading-7">
                  We deliver professional communication services using
                  modern equipment, experienced staff and affordable
                  pricing for students, businesses and organizations.
                </p>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-600">
                    10+
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Services
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-600">
                    5K+
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Happy Clients
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-600">
                    99%
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Satisfaction
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-600">
                    Fast
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Turnaround
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}