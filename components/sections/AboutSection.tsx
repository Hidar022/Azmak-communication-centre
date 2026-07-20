"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Printer,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const features = [
  {
    icon: GraduationCap,
    title: "Technology Academy",
    description:
      "Practical training in Web Development, Artificial Intelligence, Python Programming and Data Analytics.",
  },
  {
    icon: Printer,
    title: "Communication Centre",
    description:
      "Professional printing, photocopying, scanning, typing, lamination and business document services.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted SIWES Partner",
    description:
      "Helping students gain practical industry experience through structured SIWES programmes.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              badge="About AZMAK"
              title="Where Professional Services Meet Technology Education"
              description="AZMAK Communication Centre is more than a print shop. We combine reliable communication services with modern technology training to help students, businesses and professionals grow."
            />

            <p className="mt-6 leading-8 text-slate-600">
              Whether you need quality printing services, professional document
              preparation, or hands-on training in today's most in-demand
              technologies, AZMAK provides an environment built around learning,
              innovation and excellent customer service.
            </p>

            <div className="mt-10">
              <PrimaryButton href="/about">
                Learn More About AZMAK
              </PrimaryButton>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}