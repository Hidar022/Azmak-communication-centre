"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors duration-300 hover:text-blue-600",
        active && "text-blue-600"
      )}
    >
      {children}

      {active && (
        <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600" />
      )}
    </Link>
  );
}