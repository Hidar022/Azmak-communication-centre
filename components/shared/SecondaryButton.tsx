import Link from "next/link";

import { Button } from "@/components/ui/button";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export function SecondaryButton({
  href,
  children,
}: SecondaryButtonProps) {
  return (
    <Button
      render={<Link href={href} />}
      variant="outline"
      size="lg"
      className="h-12 rounded-xl px-6"
    >
      {children}
    </Button>
  );
}