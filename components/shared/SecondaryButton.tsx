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
      className="h-12 rounded-xl border-white bg-white px-6 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
    >
      {children}
    </Button>
  );
}