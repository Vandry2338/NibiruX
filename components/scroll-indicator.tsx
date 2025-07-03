"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer group"
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-sans tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 group-hover:text-[hsl(var(--primary-light))] transition-colors" />
      </div>
    </motion.div>
  )
}
