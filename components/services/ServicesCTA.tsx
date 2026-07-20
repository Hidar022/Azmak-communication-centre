"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 py-24">
      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Visit AZMAK Communication Centre Today
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Whether you need professional printing, photocopying, scanning,
            document preparation, graphic design or project binding, our team is
            ready to serve you with speed, quality and professionalism.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
            render={<Link href="tel:+234000000 0000" />}
            variant="outline"
            size="lg"
            >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <Phone className="mx-auto h-8 w-8 text-white" />

              <h3 className="mt-4 font-semibold text-white">
                Call Us
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                +234 XXX XXX XXXX
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <MapPin className="mx-auto h-8 w-8 text-white" />

              <h3 className="mt-4 font-semibold text-white">
                Visit Us
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Katsina, Nigeria
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <ArrowRight className="mx-auto h-8 w-8 text-white" />

              <h3 className="mt-4 font-semibold text-white">
                Fast Service
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Quality work delivered quickly.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}