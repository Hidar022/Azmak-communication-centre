"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const highlights = [
  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Most printing and documentation requests are completed quickly without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Quality",
    description:
      "We use reliable equipment and quality materials to deliver clean, sharp and durable results.",
  },
  {
    icon: Users,
    title: "Friendly Support",
    description:
      "Our experienced team is always available to guide students, businesses and organizations.",
  },
];

const benefits = [
  "High-quality colour and black & white printing",
  "Professional document formatting and typing",
  "Affordable pricing for students and businesses",
  "Modern equipment for reliable output",
  "Quick delivery with excellent customer service",
  "Convenient one-stop communication centre",
];

export function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Our Communication Centre
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Everything You Need Under One Roof
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At AZMAK Communication Centre, we provide dependable printing,
              documentation and business support services designed to save you
              time while delivering professional results.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you're printing a final-year project, photocopying
              important documents, scanning certificates or preparing business
              materials, our team ensures every job is handled with care and
              precision.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Card */}

            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                Trusted by Students & Businesses
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                From academic projects and assignments to business documents,
                presentations and marketing materials, AZMAK has become a
                trusted destination for reliable communication services.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}