import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

import { SectionBadge } from "./SectionBadge";

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-5",
        align === "center" && "mx-auto text-center"
      )}
    >
      {badge && (
        <SectionBadge>
          {badge}
        </SectionBadge>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}