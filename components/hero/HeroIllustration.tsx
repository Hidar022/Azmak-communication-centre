"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Decorative background */}
      <div className="absolute right-8 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-70" />

      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-blue-50 blur-2xl" />

      {/* Floating Illustration */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[760px] lg:translate-x-8"
      >
        <Image
          src="/illustrations/illustration.png"
          alt="AZMAK Communication Centre"
          width={1200}
          height={900}
          priority
          className="h-auto w-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}