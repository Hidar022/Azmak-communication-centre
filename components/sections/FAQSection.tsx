"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "Who can apply for SIWES training?",
    answer:
      "Students from universities, polytechnics and colleges who are required to complete industrial training can apply through the AZMAK portal.",
  },
  {
    question: "Which technology courses are available?",
    answer:
      "We currently offer Web Development, Python Programming, Artificial Intelligence, Data Analytics and UI/UX Design, with more programmes planned.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "No. Our beginner-friendly programmes start from the fundamentals before progressing to practical projects.",
  },
  {
    question: "Do you offer printing and business services?",
    answer:
      "Yes. We provide printing, photocopying, scanning, typing, lamination, spiral binding and other communication centre services.",
  },
  {
    question: "How long does the SIWES programme last?",
    answer:
      "The duration depends on your institution's requirements, but we support students throughout their approved industrial training period.",
  },
  {
    question: "Can organizations partner with AZMAK?",
    answer:
      "Yes. We welcome partnerships with schools, businesses and organizations seeking training or professional document services.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="Frequently Asked Questions"
          title="Questions We Often Receive"
          description="Here are answers to some of the most common questions about AZMAK Communication Centre and our technology programmes."
        />

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}