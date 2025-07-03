"use client"

import { motion } from "framer-motion"
import { NibiruXLogo } from "./components/nibirux-logo"
import { ScrollIndicator } from "./components/scroll-indicator"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-60">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corrected_Veo_Prompt_Video_Delivered-ZU6HSP1Vkk2HDKC0h2UadW2xSBfZmu.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Logo and Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              <NibiruXLogo />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-xl lg:text-2xl font-['Inter'] text-gray-300 max-w-2xl leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              The Intelligence Platform for Process Transformation.
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-8"
            >
              <motion.button
                className="px-8 py-4 bg-[#007CC2] text-white font-semibold text-lg rounded-full font-['Inter'] shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  brightness: 1.1,
                  boxShadow: "0 20px 40px rgba(0, 124, 194, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Begin Discovery
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <ScrollIndicator />
    </section>
  )
}
