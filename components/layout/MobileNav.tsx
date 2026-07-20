"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/constants/navigation";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          }
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-12 flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/register"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 font-medium text-white transition hover:bg-blue-700"
            >
              Apply for SIWES
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}