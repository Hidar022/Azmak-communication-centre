"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Mentors",
    description:
      "Learn from professionals who guide you through practical projects and real-world challenges.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "Train using current tools, frameworks and technologies that match industry standards.",
  },
  {
    icon: BookOpen,
    title: "Project-Based Learning",
    description:
      "Build real applications and practical experience instead of learning only theory.",
  },
  {
    icon: Users,
    title: "Student Support",
    description:
      "Receive guidance throughout your learning journey, from enrollment to completion.",
  },
  {
    icon: Award,
    title: "Reliable Services",
    description:
      "Professional communication centre services trusted by students and businesses alike.",
  },
  {
    icon: Briefcase,
    title: "Career Readiness",
    description:
      "Develop the technical and professional skills needed for internships and employment.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why"
      className="bg-white py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Why Choose AZMAK"
          title="More Than a Communication Centre"
          description="We combine quality communication services with practical technology education, helping students and businesses grow with confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <PrimaryButton href="/siwes/apply">
            Start Your SIWES Journey
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}