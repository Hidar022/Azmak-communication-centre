"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Printer,
} from "lucide-react";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

const stats = [
  {
    number: "3000+",
    label: "Students Supported",
  },
  {
    number: "15+",
    label: "Professional Services",
  },
  {
    number: "100%",
    label: "Practical Learning",
  },
];

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">

        <ShieldCheck className="h-4 w-4" />

        Trusted Communication Centre & Technology Academy

      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Professional Communication Services
        <span className="block text-blue-600">
          Practical Technology Education
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 text-lg leading-8 text-slate-600">
        AZMAK Communication Centre provides reliable communication services,
        hands-on technology training and structured SIWES programmes that help
        students, professionals and organizations grow with confidence.
      </p>

      {/* Highlights */}

      <div className="mt-10 grid gap-4 sm:grid-cols-3">

        <div className="flex items-center gap-3">

          <GraduationCap className="h-6 w-6 text-blue-600" />

          <span className="text-sm font-medium text-slate-700">
            Technology Academy
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Printer className="h-6 w-6 text-blue-600" />

          <span className="text-sm font-medium text-slate-700">
            Communication Services
          </span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle2 className="h-6 w-6 text-blue-600" />

          <span className="text-sm font-medium text-slate-700">
            SIWES Training
          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">

        <PrimaryButton href="/services">
          Explore Our Services

          <ArrowRight className="ml-2 h-5 w-5" />
        </PrimaryButton>

        <SecondaryButton href="/siwes">
          Apply for SIWES
        </SecondaryButton>

      </div>

      {/* Statistics */}

      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">

        {stats.map((item) => (
          <div key={item.label}>

            <h2 className="text-3xl font-bold text-blue-600">
              {item.number}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </motion.div>
  );
}