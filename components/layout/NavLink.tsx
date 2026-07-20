"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({
  href,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-slate-600 transition-colors duration-200",
        "hover:text-blue-600"
      )}
    >
      {children}
    </Link>
  );
}