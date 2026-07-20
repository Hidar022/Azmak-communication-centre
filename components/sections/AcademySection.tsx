"use client";

import {
  Brain,
  Code2,
  Database,
  Shield,
  Laptop,
  Palette,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CourseCard } from "@/components/shared/CourseCard";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const courses = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Frontend and Backend development using modern technologies.",
    duration: "12 Weeks",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Learn Machine Learning, AI fundamentals and practical applications.",
    duration: "10 Weeks",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Analyze, visualize and interpret data using modern tools.",
    duration: "8 Weeks",
  },
  {
    icon: Laptop,
    title: "Python Programming",
    description: "Master Python through practical projects and problem solving.",
    duration: "8 Weeks",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Design modern interfaces and user experiences.",
    duration: "6 Weeks",
    },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Coming soon — foundational cybersecurity training.",
    duration: "Coming Soon",
  },
];

export function AcademySection() {
  return (
    <section
      id="academy"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Technology Academy"
          title="Develop Practical Skills That Employers Value"
          description="Our training combines theory with real-world projects, mentorship and hands-on experience to prepare students for internships, careers and entrepreneurship."
        />

        {/* Learning Journey */}
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Learn Fundamentals",
              "Build Real Projects",
              "Work With Mentors",
              "Graduate With Confidence",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {index + 1}
                </div>

                <p className="mt-4 font-semibold text-slate-900">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              icon={course.icon}
              title={course.title}
              description={course.description}
              duration={course.duration}
              href="/academy"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <PrimaryButton href="/siwes/apply">
            Apply for SIWES Training
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}