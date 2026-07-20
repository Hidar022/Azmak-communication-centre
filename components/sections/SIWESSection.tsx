"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ApplicationStep } from "@/components/shared/ApplicationStep";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description:
      "Sign up to access the AZMAK student portal and begin your SIWES application.",
  },
  {
    number: 2,
    title: "Complete Your Application",
    description:
      "Fill in your personal information, institution details and upload the required documents.",
  },
  {
    number: 3,
    title: "Application Review",
    description:
      "Our team reviews your application and notifies you once you have been approved.",
  },
  {
    number: 4,
    title: "Start Your Training",
    description:
      "Begin practical industry training with mentorship, projects and weekly assessments.",
  },
];

export function SIWESSection() {
  return (
    <section
      id="siwes"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="SIWES Programme"
          title="Start Your Technology Journey With Confidence"
          description="Our structured SIWES programme gives students practical experience, mentorship and real projects that prepare them for the workplace."
        />

        {/* Steps */}

        <div className="mt-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                <ApplicationStep {...step} />

                {index !== steps.length - 1 && (
                  <>
                    {/* Desktop Arrow */}

                    <div className="absolute left-full top-20 z-10 hidden w-16 -translate-x-3 lg:block">
                      <svg
                        viewBox="0 0 120 20"
                        className="h-5 w-full text-blue-300"
                        fill="none"
                      >
                        <path
                          d="M0 10H105"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />

                        <path
                          d="M105 2L118 10L105 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>

                    {/* Mobile Arrow */}

                    <div className="my-6 flex justify-center lg:hidden">
                      <svg
                        viewBox="0 0 20 80"
                        className="h-16 w-5 text-blue-300"
                        fill="none"
                      >
                        <path
                          d="M10 0V65"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />

                        <path
                          d="M2 65L10 78L18 65"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-8 py-14 text-center text-white shadow-2xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            SIWES Applications Open
          </span>

          <h3 className="mt-6 text-3xl font-bold md:text-4xl">
            Ready to Begin Your SIWES Training?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Join students gaining practical industry experience through
            structured mentorship, real-world software projects, teamwork and
            weekly assessments at AZMAK Communication Centre.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <PrimaryButton href="/register">
              Apply for SIWES
            </PrimaryButton>

            <SecondaryButton href="/academy">
              Explore Academy
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}