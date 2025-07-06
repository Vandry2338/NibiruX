"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Check, ChevronsUpDown, Zap, Antenna, ShoppingCart, Factory, Cross, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { staggerContainer, fadeInUp, popIn } from "@/lib/animations"

const clients = [
  "Apex Manufacturing",
  "Global Retail Inc.",
  "StarHub",
  "First National Bank",
  "Unity Healthcare",
  "Quantum Dynamics",
]

// Client to Industry mapping
const clientToIndustryMapping = {
  "Apex Manufacturing": "MFG",
  "Global Retail Inc.": "CRL",
  StarHub: "CMT",
  "First National Bank": "FS",
  "Unity Healthcare": "HIL",
  "Quantum Dynamics": "SURE",
}

const industries = [
  {
    code: "SURE",
    name: "Energy & Utilities",
    subtitle: "Services, Utilities, Energy Transition",
    icon: Zap,
    useCases: "+23 Use Cases",
    gradient: "from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary-light))]",
    borderColor: "border-[hsl(var(--primary))]",
    glowColor: "shadow-[hsl(var(--primary))]/25",
  },
  {
    code: "CMT",
    name: "Tech & Communications",
    subtitle: "Tech, Semicon, Media, Entertainment",
    icon: Antenna,
    useCases: "+31 Use Cases",
    gradient: "from-[hsl(var(--secondary))] via-[hsl(var(--primary))] to-[hsl(var(--accent))]",
    borderColor: "border-[hsl(var(--secondary))]",
    glowColor: "shadow-[hsl(var(--secondary))]/25",
  },
  {
    code: "CRL",
    name: "Retail & Logistics",
    subtitle: "Logistics, CPG, Retail",
    icon: ShoppingCart,
    useCases: "+19 Use Cases",
    gradient: "from-[hsl(var(--accent))] via-[hsl(var(--secondary))] to-[hsl(var(--primary))]",
    borderColor: "border-[hsl(var(--accent))]",
    glowColor: "shadow-[hsl(var(--accent))]/25",
  },
  {
    code: "MFG",
    name: "Manufacturing",
    subtitle: "Auto, Industrial, Metals, Mining, Agro",
    icon: Factory,
    useCases: "+27 Use Cases",
    gradient: "from-[hsl(var(--primary-dark))] via-[hsl(var(--primary))] to-[hsl(var(--accent-dark))]",
    borderColor: "border-[hsl(var(--primary-dark))]",
    glowColor: "shadow-[hsl(var(--primary-dark))]/25",
  },
  {
    code: "HIL",
    name: "Healthcare & Life Sciences",
    subtitle: "Insurance, Life, Provider, Life Sciences",
    icon: Cross,
    useCases: "+22 Use Cases",
    gradient: "from-[hsl(var(--accent))] via-[hsl(var(--primary-light))] to-[hsl(var(--primary))]",
    borderColor: "border-[hsl(var(--accent))]",
    glowColor: "shadow-[hsl(var(--accent))]/25",
  },
  {
    code: "FS",
    name: "Financial Services",
    subtitle: "Banking, Investment, Fintech",
    icon: Building2,
    useCases: "+35 Use Cases",
    gradient: "from-[hsl(var(--primary))] via-[hsl(var(--accent-dark))] to-[hsl(var(--secondary))]",
    borderColor: "border-[hsl(var(--primary))]",
    glowColor: "shadow-[hsl(var(--primary))]/25",
  },
]

interface ContextHubProps {
  selectedClient: string
  onClientChange: (client: string) => void
}

export default function ContextHub({ selectedClient, onClientChange }: ContextHubProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("MFG")
  const [highlightedIndustry, setHighlightedIndustry] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  // Auto-highlight industry when client is selected
  useEffect(() => {
    if (selectedClient && clientToIndustryMapping[selectedClient as keyof typeof clientToIndustryMapping]) {
      const mappedIndustry = clientToIndustryMapping[selectedClient as keyof typeof clientToIndustryMapping]

      // Highlight the mapped industry
      setHighlightedIndustry(mappedIndustry)

      // Auto-select after highlight animation
      const selectTimeout = setTimeout(() => {
        setSelectedIndustry(mappedIndustry)
      }, 800)

      // Remove highlight after animation
      const highlightTimeout = setTimeout(() => {
        setHighlightedIndustry(null)
      }, 2000)

      return () => {
        clearTimeout(selectTimeout)
        clearTimeout(highlightTimeout)
      }
    }
  }, [selectedClient])

  // Dynamic grid calculation based on number of industries
  const getGridCols = () => {
    const count = industries.length
    if (count <= 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    if (count <= 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    if (count <= 6) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    return "grid-cols-2 md:grid-cols-4 lg:grid-cols-8" // For 8+ industries
  }

  return (
    <section
      id="context"
      className="relative py-24 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
              Set the Stage for Discovery.
            </h2>
            <p className="text-lg lg:text-xl font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Begin by selecting your client and confirming their industry to tailor the intelligence and analysis.
            </p>
          </motion.div>

          {/* Futuristic Client Selector */}
          <motion.div variants={fadeInUp} className="flex justify-center relative z-50">
            <div className="w-full max-w-2xl">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-16 px-6 rounded-2xl border-0 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-primary/10 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Search className="h-5 w-5 text-primary" />
                      </div>
                      <span
                        className={cn(
                          "font-sans text-lg",
                          selectedClient ? "text-foreground font-medium" : "text-muted-foreground",
                        )}
                      >
                        {selectedClient || "Search and select a client..."}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50 group-hover:opacity-75 transition-opacity" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-full p-0 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl z-50"
                  align="start"
                >
                  <Command className="bg-transparent">
                    <CommandInput placeholder="Search clients..." className="h-12 text-lg border-0 bg-transparent" />
                    <CommandList className="bg-transparent">
                      <CommandEmpty className="text-muted-foreground py-6">No client found.</CommandEmpty>
                      <CommandGroup className="bg-transparent">
                        {clients.map((client) => (
                          <CommandItem
                            key={client}
                            value={client}
                            onSelect={(currentValue) => {
                              onClientChange(currentValue === selectedClient ? "" : currentValue)
                              setOpen(false)
                            }}
                            className="text-lg py-3 hover:bg-white/10 rounded-lg mx-2 my-1"
                          >
                            <Check
                              className={cn(
                                "mr-3 h-5 w-5 text-primary",
                                selectedClient === client ? "opacity-100" : "opacity-0",
                              )}
                            />
                            {client}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </motion.div>

          {/* Industry Tiles Row - Dynamic Grid */}
          <motion.div variants={fadeInUp} className="w-full pt-8">
            <div className={cn("grid gap-6 w-full", getGridCols())}>
              {industries.map((industry, index) => {
                const IconComponent = industry.icon
                const isSelected = selectedIndustry === industry.code
                const isHighlighted = highlightedIndustry === industry.code

                return (
                  <motion.div
                    key={industry.code}
                    variants={popIn}
                    custom={index}
                    layout
                    className={cn(
                      "group relative w-full h-[32rem] cursor-pointer overflow-hidden transition-all duration-500 transform-gpu backdrop-blur-md shadow-xl border-l-4 rounded-2xl",
                      isSelected
                        ? `ring-2 ring-primary shadow-2xl ${industry.glowColor} scale-105 ${industry.borderColor}`
                        : `hover:ring-2 hover:ring-primary/50 hover:shadow-xl hover:${industry.glowColor} hover:scale-105 border-transparent`,
                    )}
                    onClick={() => setSelectedIndustry(industry.code)}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={cn("absolute inset-0 bg-gradient-to-br opacity-90 rounded-2xl", industry.gradient)}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    />

                    {/* Glass Morphism Overlay */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-10">
                      {/* Industry Icon */}
                      <div className="flex justify-start">
                        <motion.div
                          className="p-4 rounded-xl bg-white/15 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>

                      {/* Industry Title */}
                      <div className="flex-1 flex flex-col justify-center text-center">
                        <motion.h3
                          className="text-5xl lg:text-6xl font-heading font-black text-white drop-shadow-2xl mb-4 tracking-wide"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {industry.code}
                        </motion.h3>
                        <p className="text-lg lg:text-xl text-white/90 font-sans font-bold leading-tight px-2">
                          {industry.subtitle}
                        </p>
                      </div>

                      {/* CTA Text */}
                      <div className="text-center">
                        <div className="text-lg lg:text-xl text-white/80 font-sans font-bold">{industry.useCases}</div>
                      </div>
                    </div>

                    {/* Highlight Animation Overlay */}
                    <AnimatePresence>
                      {isHighlighted && (
                        <motion.div
                          layoutId="highlight"
                          className="absolute inset-0 rounded-2xl border-4 border-primary z-20 pointer-events-none"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1.05, 1, 1],
                            boxShadow: [
                              "0 0 0 rgba(0, 124, 194, 0)",
                              "0 0 30px rgba(0, 124, 194, 0.6)",
                              "0 0 30px rgba(0, 124, 194, 0.6)",
                              "0 0 0 rgba(0, 124, 194, 0)",
                            ],
                          }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Guiding Trail Effect */}
                    <AnimatePresence>
                      {isHighlighted && (
                        <motion.div
                          className="absolute -top-20 left-1/2 w-1 h-20 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: [0, 1, 0], y: [0, 20, 40] }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Selection Summary */}
          {(selectedClient || selectedIndustry) && (
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 text-lg font-sans">
                {selectedClient && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-semibold text-foreground">{selectedClient}</span>
                  </div>
                )}
                {selectedClient && selectedIndustry && <div className="w-px h-6 bg-border" />}
                {selectedIndustry && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-semibold text-foreground">
                      {industries.find((i) => i.code === selectedIndustry)?.name}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
