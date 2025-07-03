"use client"
import { motion } from "framer-motion"
import {
  Database,
  Globe,
  FileText,
  TrendingUp,
  Users,
  Cpu,
  MessageSquare,
  Shield,
  BarChart3,
  BookOpen,
} from "lucide-react"

// Central Logo Component for reusability
const NibiruXLogo = () => (
  <div className="relative w-24 h-24 flex items-center justify-center group">
    <div className="absolute w-full h-full border-2 border-purple-400/50 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
    <div className="absolute w-[70%] h-[70%] border-2 border-sky-400/60 rounded-full animate-[spin_25s_linear_infinite]"></div>
    <div className="absolute w-5 h-1 bg-sky-400 rounded-full rotate-45"></div>
    <div className="absolute w-5 h-1 bg-sky-400 rounded-full -rotate-45"></div>
  </div>
)

export default function IntelligenceSynthesisNetwork() {
  return (
    <div className="w-full min-h-screen bg-slate-900 py-12 px-8 overflow-hidden">
      {/* Header Section with proper spacing */}
      <div className="text-center mb-20 px-4 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-16">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-white font-semibold text-lg">Live Intelligence Synthesis</span>
        </div>

        <div className="space-y-4 pb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-relaxed">
            <span className="block text-white">Autonomous AI</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-relaxed pb-4">
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Agent Network
            </span>
          </h2>
        </div>
      </div>

      {/* Main Video Container */}
      <div className="flex items-center justify-center px-4">
        <div className="relative w-full max-w-6xl">
          {/* Video Background */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.9) contrast(1.1)" }}
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI_Animation_Request_Fulfilled-b4AIxPjtSlqYvnUmqwZ1LsAQR08sjt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30"></div>
          </div>

          {/* Floating NibiruX Logo */}
          <motion.div
            className="absolute top-8 left-8 z-10 flex flex-col items-center"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <NibiruXLogo />
            <h1 className="mt-2 text-2xl lg:text-3xl font-bold tracking-tighter bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              NibiruX
            </h1>
          </motion.div>

          {/* Data Sources Labels */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: Shield, label: "Patents", color: "from-blue-500 to-indigo-600" },
                { icon: BarChart3, label: "Economic Data", color: "from-indigo-500 to-purple-600" },
                { icon: BookOpen, label: "Research", color: "from-purple-500 to-pink-600" },
                { icon: Globe, label: "Global News", color: "from-pink-500 to-rose-600" },
                { icon: FileText, label: "Financial", color: "from-rose-500 to-red-600" },
                { icon: TrendingUp, label: "Markets", color: "from-red-500 to-orange-600" },
                { icon: Users, label: "Stakeholders", color: "from-orange-500 to-yellow-600" },
                { icon: Cpu, label: "Technology", color: "from-yellow-500 to-green-600" },
                { icon: Database, label: "Regulatory", color: "from-green-500 to-emerald-600" },
                { icon: MessageSquare, label: "Social", color: "from-emerald-500 to-teal-600" },
              ].map((source, index) => (
                <motion.div
                  key={source.label}
                  className={`px-3 py-2 rounded-full bg-gradient-to-r ${source.color} bg-opacity-90 backdrop-blur-sm flex items-center gap-2 text-white text-sm font-medium shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <source.icon className="w-4 h-4" />
                  <span>{source.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center mt-16 px-4 max-w-4xl mx-auto">
        <p className="text-lg text-white/80 leading-relaxed">
          Watch our autonomous AI agents work in real-time, synthesizing intelligence from multiple data sources to
          deliver actionable insights and drive strategic decision-making across your organization.
        </p>
      </div>
    </div>
  )
}
