"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  GraduationCap,
  Printer,
  Building2,
  HeartHandshake,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const stats = [
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Students Trained",
  },
  {
    icon: Printer,
    value: 2000,
    suffix: "+",
    label: "Projects Printed",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Organizations Served",
  },
  {
    icon: HeartHandshake,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export function TrustedSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-white py-20"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted Across Katsina
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Building Confidence Through
            <span className="text-blue-600">
              {" "}
              Quality Service
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We have proudly supported students, professionals,
            businesses and organizations with reliable communication,
            digital and technology solutions for years.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex flex-col items-center justify-center p-10 text-center"
              >
                <div className="mb-5 rounded-2xl bg-blue-50 p-4">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="text-4xl font-bold tracking-tight text-slate-900">
                  {inView ? (
                    <>
                      <CountUp
                        end={item.value}
                        duration={2}
                        delay={index * 0.2}
                      />
                      {item.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-600">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}