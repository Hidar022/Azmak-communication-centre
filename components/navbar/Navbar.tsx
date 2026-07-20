"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div className="mt-5 flex h-20 items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-6 backdrop-blur-xl shadow-lg">

          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Button
              className="hidden rounded-full px-6 lg:flex"
            >
              Apply for SIWES
            </Button>

            <MobileNav />
          </div>

        </div>
      </Container>
    </motion.header>
  );
}