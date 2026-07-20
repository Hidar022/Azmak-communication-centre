import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function PageHero({
  badge,
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="bg-slate-50 border-b pt-36 pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          {badge && (
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {badge}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>

          {(primaryText || secondaryText) && (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {primaryText && primaryHref && (
                <PrimaryButton href={primaryHref}>
                  {primaryText}
                </PrimaryButton>
              )}

              {secondaryText && secondaryHref && (
                <SecondaryButton href={secondaryHref}>
                  {secondaryText}
                </SecondaryButton>
              )}
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}