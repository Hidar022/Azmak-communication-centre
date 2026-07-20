"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  duration: string;
}

export function CourseCard({
  icon: Icon,
  title,
  description,
  duration,
  href,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: .25 }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300 hover:shadow-lg"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
        <Icon className="h-7 w-7 text-blue-600 transition group-hover:scale-110" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
        {duration}
      </div>

      <Link
        href={href}
        className="mt-6 inline-flex items-center font-semibold text-blue-600"
      >
        Learn More

        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}