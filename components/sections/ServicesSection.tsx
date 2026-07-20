"use client";

import {
  Cpu,
  Globe,
  Printer,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

const services = [
  {
    icon: Printer,
    title: "Communication Centre",
    description:
      "Professional document and printing services for students, businesses and organizations.",

    services: [
      "Printing & Photocopying",
      "Scanning & Typing",
      "Lamination",
      "Spiral Binding",
    ],

    totalServices: "10+ Services",

    footer:
      "Reliable document solutions for everyday needs.",

    href: "/services",
  },

  {
    icon: Cpu,

    title: "Technology Academy",

    description:
      "Industry-focused technology training designed to prepare students for real-world careers.",

    services: [
      "SIWES Programme",
      "Web Development",
      "Artificial Intelligence",
      "Data Analytics",
    ],

    totalServices: "6 Professional Courses",

    footer:
      "Practical learning with experienced mentors.",

    href: "/academy",
  },

  {
    icon: Globe,

    title: "Digital Solutions",

    description:
      "Helping businesses establish and grow their digital presence with modern technology.",

    services: [
      "Website Development",
      "Business Branding",
      "IT Consultancy",
      "Digital Support",
    ],

    totalServices: "Custom Business Solutions",

    footer:
      "Technology built around your business needs.",

    href: "/solutions",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Our Services"
          title="Everything You Need Under One Roof"
          description="Whether you're a student, entrepreneur or organization, AZMAK provides reliable communication, technology and digital services designed to help you succeed."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}