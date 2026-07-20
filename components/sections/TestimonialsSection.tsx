"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

const testimonials = [
  {
    name: "Ibrahim Musa",
    role: "SIWES Student",
    testimonial:
      "The SIWES programme gave me practical experience that I couldn't get in the classroom. I left with confidence and real projects.",
  },
  {
    name: "Fatima Ali",
    role: "Business Owner",
    testimonial:
      "AZMAK has been our trusted partner for printing and document services. The quality and professionalism are outstanding.",
  },
  {
    name: "Aisha Bello",
    role: "Python Student",
    testimonial:
      "The mentors were patient, supportive and always willing to help. I learned by building real projects.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Testimonials"
          title="Success Stories From Our Community"
          description="The best measure of our work is the success of the students, professionals and organizations we have served."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <SecondaryButton href="/gallery">
            View Student Gallery
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}