"use client";

import { motion } from "framer-motion";
import {
  Printer,
  Copy,
  ScanLine,
  FileText,
  BookOpen,
  Image,
  Palette,
  Briefcase,
  IdCard,
  BadgeCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const services = [
  {
    icon: Printer,
    title: "Printing",
    description:
      "High-quality black & white and colour printing for assignments, reports, projects and business documents.",
  },
  {
    icon: Copy,
    title: "Photocopying",
    description:
      "Fast photocopying services for students, offices, schools and organizations.",
  },
  {
    icon: ScanLine,
    title: "Scanning",
    description:
      "Professional document scanning with high-quality digital copies in PDF and image formats.",
  },
  {
    icon: FileText,
    title: "Typing & Document Preparation",
    description:
      "Accurate typing, formatting, editing and preparation of professional documents.",
  },
  {
    icon: BookOpen,
    title: "Spiral Binding",
    description:
      "Strong and neat spiral binding for final-year projects, reports and manuals.",
  },
  {
    icon: BadgeCheck,
    title: "Lamination",
    description:
      "Protect important certificates, ID cards and documents with durable lamination.",
  },
  {
    icon: Image,
    title: "Passport Photographs",
    description:
      "Instant passport photographs for admissions, applications and official documents.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative flyer, banner, logo, invitation card and promotional material design.",
  },
  {
    icon: Briefcase,
    title: "Business Documentation",
    description:
      "Preparation of proposals, invoices, letters, presentations and office documents.",
  },
  {
    icon: IdCard,
    title: "Student Project Support",
    description:
      "Complete printing, formatting and binding solutions for academic projects.",
  },
];

export function ServicesList() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Complete Communication Centre Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From simple document printing to complete business documentation,
            AZMAK Communication Centre provides reliable services with quality,
            speed and professionalism.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}