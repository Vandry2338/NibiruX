"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { staggerContainer, fadeInUp } from "@/lib/animations"

interface HeroSectionProps {
  onNavigate?: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-neutral-dark via-neutral-dark to-primary-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corrected_Veo_Prompt_Video_Delivered-ZU6HSP1Vkk2HDKC0h2UadW2xSBfZmu.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Enhanced gradient overlays for premium look while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 via-transparent to-[hsl(var(--secondary))]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content - Moved to bottom center */}
      <div className="relative z-10 flex h-full items-end justify-center pb-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="flex flex-col items-center text-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <motion.div variants={fadeInUp} className="max-w-4xl">
              <p className="text-xl lg:text-2xl xl:text-3xl font-sans text-white/95 leading-relaxed font-light tracking-wide drop-shadow-lg">
                The Intelligence Platform for Digital Transformation.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <Button
                size="lg"
                onClick={() => onNavigate?.("client-selection")}
                className="px-8 py-4 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))] text-white font-semibold text-lg rounded-full font-sans shadow-2xl infosys-shadow transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,124,194,0.4)] border-0"
              >
                Begin Discovery
              </Button>
            </motion.div>

            {/* Marketing Insights Text */}
            <motion.div variants={fadeInUp} className="pt-2">
              <p className="text-lg font-sans text-white/80 font-medium tracking-wide drop-shadow-md">
                Marketing Insights
              </p>
            </motion.div>

            {/* Subtle feature highlights */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 pt-6 text-white/70 text-sm font-sans"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]" />
                <span>AI-Powered Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))]" />
                <span>Process Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]" />
                <span>Digital Transformation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced ambient light effects for premium feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--primary))]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--secondary))]/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(var(--accent))]/5 rounded-full blur-3xl" />
    </section>
  )
}
