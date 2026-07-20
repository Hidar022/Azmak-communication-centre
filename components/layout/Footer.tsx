"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Navigation,
  MessageCircle,
} from "lucide-react";

import { Container } from "./Container";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Technology Academy", href: "/academy" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const programmes = [
  "SIWES Training",
  "Web Development",
  "Artificial Intelligence",
  "Data Analytics",
  "Python Programming",
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold text-xl">
                A
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  AZMAK
                </h2>

                <p className="text-sm text-slate-400">
                  Communication Centre
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Empowering students, professionals and
              businesses through technology, innovation
              and reliable communication services.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Programmes */}

          <div>

            <h3 className="text-lg font-semibold">
              Technology Academy
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {programmes.map((programme) => (
                <p
                  key={programme}
                  className="text-slate-400"
                >
                  {programme}
                </p>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-blue-500" />

                <span className="text-slate-400">
                  Katsina, Nigeria
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-blue-500" />

                <span className="text-slate-400">
                  +234 XXX XXX XXXX
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-blue-500" />

                <span className="text-slate-400">
                  info@azmak.com
                </span>

              </div>

            </div>

            <div className="mt-8 flex gap-4">
            <Link
                href="tel:+2348000000000"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
            >
                <Phone size={18} />
            </Link>

            <Link
                href="https://wa.me/2348000000000"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
            >
                <MessageCircle size={18} />
            </Link>

            <Link
                href="https://maps.google.com"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
            >
                <Navigation size={18} />
            </Link>


            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 py-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AZMAK Communication Centre.
            All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full bg-blue-600 p-3 transition hover:scale-105"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </Container>
    </footer>
  );
}