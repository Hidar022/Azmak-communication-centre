"use client";

import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

/**
 * Replace these with the real AZMAK coordinates.
 */
const LATITUDE = 12.9908;
const LONGITUDE = 7.6018;

const MAP_URL = `https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=16&output=embed`;

const DIRECTION_URL = `https://www.google.com/maps/dir/?api=1&destination=${LATITUDE},${LONGITUDE}`;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Contact Us"
          title="Let's Start the Conversation"
          description="Whether you're interested in our communication centre, technology academy or SIWES programme, we'd love to hear from you."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <div>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Address
                  </h3>

                  <p className="mt-2 text-slate-600">
                    AZMAK Communication Centre
                    <br />
                    Katsina State, Nigeria
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +234 XXX XXX XXXX
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@azmak.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Opening Hours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Monday - Saturday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-10">
              <PrimaryButton href={DIRECTION_URL}>
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </PrimaryButton>
            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">

            <iframe
              src={MAP_URL}
              className="h-[500px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}