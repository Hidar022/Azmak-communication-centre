"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

export function TestimonialCard({
  name,
  role,
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg"
    >
      <Quote className="h-10 w-10 text-blue-600" />

      <div className="mt-6 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 leading-8 text-slate-600 italic">
        "{testimonial}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold text-slate-900">
          {name}
        </h4>

        <p className="text-sm text-slate-500">
          {role}
        </p>
      </div>
    </motion.div>
  );
}