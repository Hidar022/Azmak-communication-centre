"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { navigation } from "@/constants/navigation";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-12 flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}

            <Button className="mt-6 rounded-xl">
              Apply for SIWES
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}