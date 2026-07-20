"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Container } from "@/components/layout/Container";

import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="outline"
              render={<Link href="/login" />}
            >
              Login
            </Button>

            <Button
              render={<Link href="/siwes/apply" />}
            >
              Apply for SIWES
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}