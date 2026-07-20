import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className="
        h-12
        rounded-xl
        px-7
        bg-blue-600
        hover:bg-blue-700
        text-white
        shadow-lg
        shadow-blue-200
        transition-all
        hover:-translate-y-0.5
      "
    >
      <Link href={href}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}