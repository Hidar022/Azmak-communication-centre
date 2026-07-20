"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  services: string[];
  totalServices: string;
  footer: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  services,
  totalServices,
  footer,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
        <Icon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:rotate-6" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <div className="my-8 space-y-4">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-blue-600" />

            <span className="text-slate-700">
              {service}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">
            {totalServices}
          </p>

          <p className="mt-1 text-sm text-slate-600">
            {footer}
          </p>
        </div>

        <Link
          href={href}
          className="mt-6 inline-flex items-center font-semibold text-blue-600 transition-all group-hover:gap-3"
        >
          Learn More

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}