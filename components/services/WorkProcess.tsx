"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Printer,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Your Request",
    description:
      "Bring your documents to our communication centre or explain the service you need. Our team will carefully understand your requirements.",
  },
  {
    icon: Search,
    number: "02",
    title: "Review & Confirmation",
    description:
      "We review your files, recommend the best printing or documentation options, and confirm the specifications before starting.",
  },
  {
    icon: Printer,
    number: "03",
    title: "Production",
    description:
      "Your documents are printed, photocopied, scanned, typed, designed or prepared using professional equipment.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Quality Inspection",
    description:
      "Every document is checked for clarity, formatting and finishing to ensure it meets our quality standards.",
  },
  {
    icon: PackageCheck,
    number: "05",
    title: "Collection",
    description:
      "Once everything is complete, your documents are neatly packaged and ready for pickup at the communication centre.",
  },
];

export function WorkProcess() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Simple, Fast & Professional Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We've made our communication services simple and efficient so you
            can get your work done without delays.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical line (desktop) */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex-row lg:items-center"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-sm font-semibold tracking-widest text-blue-600">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Fast Service. Professional Results.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you need one page printed or an entire project prepared,
            AZMAK Communication Centre delivers every job with speed, accuracy
            and attention to detail.
          </p>
        </div>
      </Container>
    </section>
  );
}