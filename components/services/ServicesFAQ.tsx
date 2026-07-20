"use client";

import { Accordion } from "@/components/ui/accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Container } from "@/components/layout/Container";

const faqs = [
  {
    question: "What types of documents can you print?",
    answer:
      "We print assignments, reports, projects, dissertations, business documents, flyers, posters, certificates, forms and many other document types in both black & white and colour.",
  },
  {
    question: "Do you offer colour printing?",
    answer:
      "Yes. We provide high-quality colour printing as well as standard black and white printing depending on your needs.",
  },
  {
    question: "Can I send my document before coming?",
    answer:
      "Yes. You can send your files through email or WhatsApp (where available), allowing us to prepare everything before you arrive.",
  },
  {
    question: "Do you laminate certificates and ID cards?",
    answer:
      "Absolutely. We laminate certificates, identification cards, licenses and other important documents to help protect them from damage.",
  },
  {
    question: "Do you bind final year projects?",
    answer:
      "Yes. We provide professional spiral binding and project finishing services for undergraduate and postgraduate students.",
  },
  {
    question: "How long does printing usually take?",
    answer:
      "Most jobs are completed within a few minutes. Larger printing or binding requests may require additional time depending on the quantity and finishing options.",
  },
  {
    question: "Do you provide graphic design services?",
    answer:
      "Yes. We design flyers, banners, invitation cards, business cards, logos and other promotional materials for individuals and businesses.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Our working hours can be updated on the website. You can also contact us directly to confirm availability during holidays or special periods.",
  },
];

export function ServicesFAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Questions Customers Often Ask
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Here are answers to some of the most common questions about our
            communication and printing services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
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
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-base leading-7 text-slate-600">
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