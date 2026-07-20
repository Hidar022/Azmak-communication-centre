"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
}

export function ApplicationStep({
  number,
  title,
  description,
}: ApplicationStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group relative h-full"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-3xl bg-blue-500/5 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

      {/* Card */}

      <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue-200 group-hover:shadow-2xl">

        {/* Number */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg ring-8 ring-blue-50 transition duration-300 group-hover:scale-110 group-hover:ring-blue-100">
          <span className="text-3xl font-bold text-white">
            {number}
          </span>
        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-grow leading-7 text-slate-600">
          {description}
        </p>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-center gap-2 text-blue-600">
          <CheckCircle2 className="h-5 w-5" />

          <span className="text-sm font-semibold uppercase tracking-wider">
            Step {number}
          </span>
        </div>
      </div>
    </motion.div>
  );
}