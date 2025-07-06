"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Building2, 
  FileText, 
  Shield, 
  BarChart3, 
  Globe,
  Activity,
  Target,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  DollarSign,
  UserCheck,
  Database,
  Search,
  Eye,
  Brain,
  Network,
  Satellite,
  Radio,
  Wifi,
  Signal,
  Cpu,
  Server,
  Cloud,
  Lock,
  Key,
  Fingerprint,
  ShieldCheck,
  AlertTriangle,
  Info,
  Clock,
  Calendar,
  MapPin,
  TrendingDown,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart
} from "lucide-react"

interface IntelligenceSynthesisPageProps {
  onNavigate?: (page: string) => void
}

export default function IntelligenceSynthesisPage({ onNavigate }: IntelligenceSynthesisPageProps) {
  const [activeTab, setActiveTab] = useState("client-snapshot")
  const [progressBars, setProgressBars] = useState(false)

  useEffect(() => {
    // Animate progress bars after component mounts
    const timer = setTimeout(() => setProgressBars(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Enhanced data sources with more variety
  const dataSources = [
    { name: "Global News", icon: Globe, color: "from-blue-600 to-blue-800", status: "Active", count: "2.4M" },
    { name: "Financial Filings", icon: FileText, color: "from-orange-500 to-orange-600", status: "Active", count: "45K" },
    { name: "Market Reports", icon: BarChart3, color: "from-teal-600 to-teal-700", status: "Active", count: "12K" },
    { name: "Regulatory Databases", icon: Shield, color: "from-purple-600 to-purple-700", status: "Active", count: "8.2K" },
    { name: "Stakeholder Feeds", icon: Users, color: "from-green-500 to-green-600", status: "Active", count: "156K" },
    { name: "Technology Roadmaps", icon: Target, color: "from-indigo-500 to-indigo-600", status: "Active", count: "3.1K" },
    { name: "Patent Databases", icon: Lightbulb, color: "from-yellow-500 to-yellow-600", status: "Active", count: "89K" },
    { name: "Social Media", icon: Network, color: "from-pink-500 to-pink-600", status: "Active", count: "5.2M" },
    { name: "Academic Research", icon: Brain, color: "from-red-500 to-red-600", status: "Active", count: "67K" },
    { name: "Industry Forums", icon: Users, color: "from-cyan-500 to-cyan-600", status: "Active", count: "234K" },
    { name: "Government Data", icon: Building2, color: "from-gray-600 to-gray-700", status: "Active", count: "12K" },
    { name: "IoT Sensors", icon: Satellite, color: "from-emerald-500 to-emerald-600", status: "Active", count: "892K" }
  ]

  const aiCapabilities = [
    { name: "Autonomous Process Optimization", percentage: 85 },
    { name: "Self-Learning Business Rules", percentage: 72 },
    { name: "Predictive Decision Making", percentage: 68 },
    { name: "Adaptive System Intelligence", percentage: 61 }
  ]

  const clientMetrics = [
    { 
      title: "Quarterly Revenue", 
      value: "$1.2B", 
      change: "+12% YoY growth", 
      icon: DollarSign, 
      color: "blue",
      badge: "Q3 2024"
    },
    { 
      title: "Employee Count", 
      value: "15,400", 
      change: "Across 23 countries", 
      icon: Users, 
      color: "orange",
      badge: "Global"
    },
    { 
      title: "Market Cap", 
      value: "$8.7B", 
      change: "Fortune 500 ranking", 
      icon: Building2, 
      color: "teal",
      badge: "NYSE"
    },
    { 
      title: "Digital Maturity", 
      value: "6.2/10", 
      change: "Industry benchmark: 5.8", 
      icon: Activity, 
      color: "blue-800",
      badge: "Assessment"
    }
  ]

  const strategicInitiatives = [
    "AI-Powered Supply Chain Optimization - Announced $50M investment in AI-driven logistics platform",
    "Sustainability Initiative Launch - Committed to carbon neutrality by 2030",
    "Digital Transformation Acceleration - Established new Chief Digital Officer role"
  ]

  // New clarity tiles data
  const clarityTiles = [
    {
      title: "Data Source Verification",
      description: "Real-time validation of information credibility across all sources",
      icon: ShieldCheck,
      color: "from-green-500 to-green-600",
      metrics: { verified: "98.7%", total: "12.4M", accuracy: "99.2%" }
    },
    {
      title: "Intelligence Freshness",
      description: "Continuous monitoring of data recency and relevance",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
      metrics: { realtime: "85%", hourly: "12%", daily: "3%" }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-[#1a2236] via-[#232b41] to-[#232b41]/80 text-foreground shadow-xl rounded-b-3xl mb-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-foreground font-semibold text-lg">Intelligence Cortex</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Strategic Intelligence
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Synthesis
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Transform client conversations from sales pitches to strategic consultations through AI-driven market
              intelligence, competitive insights, and collaborative problem validation.
            </p>

            <div className="flex items-center justify-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Intelligence Sources</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">5</div>
                <div className="text-sm text-muted-foreground">Insight Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">Real-time</div>
                <div className="text-sm text-muted-foreground">Data Synthesis</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-8 pb-16">
        <div className="container mx-auto max-w-7xl space-y-16">
          
          {/* Intelligence Synthesis Video Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8 px-12 pt-12">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                    <Activity className="h-5 w-5 text-primary" />
                    <span className="text-primary font-semibold">Live Intelligence Synthesis</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">
                    Autonomous AI Agent Network
                  </h2>
                  <p className="text-lg max-w-4xl mx-auto text-muted-foreground">
                    Our intelligent agents continuously monitor and synthesize data from multiple sources, providing
                    real-time strategic intelligence that powers informed decision-making.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-12">
                {/* Video Container */}
                <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background rounded-3xl border border-border/40 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <Activity className="h-24 w-24 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold mb-2">Intelligence Network Active</h3>
                      <p className="text-muted-foreground">Real-time data synthesis in progress</p>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-xl">
                      <div className="relative">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-foreground font-semibold text-sm">Live Intelligence Network</span>
                    </div>
                  </div>

                  {/* NibiruX branding */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <div className="flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-primary rounded-full relative shadow-lg">
                          <div className="absolute inset-1 border border-secondary rounded-full"></div>
                          <div className="absolute inset-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
                        </div>
                      </div>
                      <div>
                        <span className="text-foreground font-bold text-lg">NibiruX</span>
                        <div className="text-primary text-xs">Intelligence Cortex</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Data Sources Grid */}
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-foreground">Intelligence Sources</h3>
                    <Badge variant="outline" className="text-primary border-primary/40">
                      {dataSources.length} Active Sources
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {dataSources.map((source, index) => (
                      <motion.div 
                        key={index} 
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <motion.div 
                          className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10"
                          whileHover={{ 
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            borderColor: "hsl(var(--primary) / 0.6)"
                          }}
                        >
                          <motion.div 
                            className={`w-12 h-12 bg-gradient-to-br ${source.color} rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: 10,
                              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                            }}
                            animate={{
                              boxShadow: [
                                "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                                "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <source.icon className="h-6 w-6 text-white" />
                            </motion.div>
                          </motion.div>
                          <motion.span 
                            className="text-xs font-semibold text-foreground text-center leading-tight mb-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            {source.name}
                          </motion.span>
                          <div className="text-center">
                            <motion.div 
                              className="text-xs text-muted-foreground mb-1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                            >
                              {source.count}
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                              >
                                {source.status}
                              </Badge>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Strategic Intelligence Dashboard */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 pb-8 px-12 pt-12">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 rounded-full">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <span className="text-secondary font-semibold">Challenge Analysis Report</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">
                    Strategic Intelligence Dashboard
                  </h2>
                  <p className="text-lg max-w-4xl mx-auto text-muted-foreground">
                    AI-curated intelligence across five critical dimensions: client profile, market dynamics, regulatory
                    landscape, competitive positioning, and stakeholder priorities.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-12">
                {/* Enhanced Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  {/* AI Investment Gap Chart - Improved with Animations */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-xl rounded-3xl overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-6 px-8 pt-8">
                        <motion.div 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <motion.div 
                            className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <TrendingUp className="h-7 w-7 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">The AI Investment Gap</h3>
                            <Badge className="mt-2 border-primary text-primary bg-primary/5">Critical Market Insight</Badge>
                          </div>
                        </motion.div>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Alternative AI Investment Gap Visualization */}
                        <div className="space-y-8">
                          {/* Main Gap Visualization */}
                          <div className="flex justify-center mb-8">
                            <motion.div 
                              className="relative w-full max-w-md"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1, delay: 0.6 }}
                            >
                              {/* Investment vs Maturity Comparison */}
                              <div className="space-y-6">
                                {/* AI Investment Level */}
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-foreground">AI Investment Level</span>
                                    <motion.span 
                                      className="text-2xl font-bold text-primary"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.5, delay: 1, type: "spring" }}
                                    >
                                      92%
                                    </motion.span>
                                  </div>
                                  <motion.div 
                                    className="w-full bg-white/10 rounded-full h-4 overflow-hidden"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                  >
                                    <motion.div 
                                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                                      initial={{ width: "0%" }}
                                      animate={{ width: "92%" }}
                                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                                    />
                                  </motion.div>
                                </div>

                                {/* AI Maturity Level */}
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-foreground">AI Maturity Level</span>
                                    <motion.span 
                                      className="text-2xl font-bold text-secondary"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                                    >
                                      1%
                                    </motion.span>
                                  </div>
                                  <motion.div 
                                    className="w-full bg-white/10 rounded-full h-4 overflow-hidden"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                                  >
                                    <motion.div 
                                      className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full"
                                      initial={{ width: "0%" }}
                                      animate={{ width: "1%" }}
                                      transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
                                    />
                                  </motion.div>
                                </div>

                                {/* Gap Indicator */}
                                <motion.div 
                                  className="flex items-center justify-center py-4"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8, delay: 2.5 }}
                                >
                                  <div className="text-center">
                                    <div className="text-4xl font-bold text-destructive mb-2">91%</div>
                                    <div className="text-sm text-muted-foreground font-medium">Investment Gap</div>
                                    <div className="text-xs text-destructive/80 mt-1">Critical Opportunity</div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                      {/* Enhanced Legend with Animations */}
                      <motion.div 
                        className="grid grid-cols-2 gap-6 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3 }}
                      >
                        <motion.div 
                          className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-border/40"
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div 
                            className="w-4 h-4 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
                          />
                          <div>
                            <div className="font-semibold text-foreground">AI Investment Growth</div>
                            <div className="text-sm text-muted-foreground">Companies increasing AI spend</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-border/40"
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div 
                            className="w-4 h-4 bg-gradient-to-r from-secondary to-secondary/80 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                          />
                          <div>
                            <div className="font-semibold text-foreground">Full AI Maturity</div>
                            <div className="text-sm text-muted-foreground">Achieved complete integration</div>
                          </div>
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-border/40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.5 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <motion.p 
                          className="text-sm text-foreground leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 4 }}
                        >
                          <strong>Key Insight:</strong> While 92% of companies are increasing AI investment, only 1%
                          have achieved full AI maturity according to recent McKinsey research, revealing a massive
                          opportunity gap.
                        </motion.p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                  {/* 2025 AI Horizon Chart - Improved with Animations */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-xl rounded-3xl overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5 pb-6 px-8 pt-8">
                        <motion.div 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          <motion.div 
                            className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Zap className="h-7 w-7 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">2025 AI Horizon</h3>
                            <Badge className="mt-2 border-secondary text-secondary bg-secondary/5">Emerging Technologies</Badge>
                          </div>
                        </motion.div>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Enhanced Animated Radar Chart */}
                        <div className="flex justify-center mb-8">
                          <motion.div 
                            className="relative w-80 h-80"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                          >
                            <svg width="320" height="320" viewBox="0 0 320 320">
                              {/* Radar Grid */}
                              <circle cx="160" cy="160" r="40" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <circle cx="160" cy="160" r="80" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <circle cx="160" cy="160" r="120" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              
                              {/* Radar Lines */}
                              <line x1="160" y1="160" x2="160" y2="40" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <line x1="160" y1="160" x2="264" y2="100" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <line x1="160" y1="160" x2="264" y2="220" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <line x1="160" y1="160" x2="160" y2="280" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <line x1="160" y1="160" x2="56" y2="220" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              <line x1="160" y1="160" x2="56" y2="100" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
                              
                              {/* Animated Data Polygon */}
                              <motion.polygon 
                                points="160,80 220,120 200,200 120,200 100,120 140,80" 
                                fill="hsl(var(--secondary) / 0.2)" 
                                stroke="hsl(var(--secondary))" 
                                strokeWidth="3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                              />
                              
                              {/* Animated Data Points */}
                              {[
                                { cx: 160, cy: 80 },
                                { cx: 220, cy: 120 },
                                { cx: 200, cy: 200 },
                                { cx: 120, cy: 200 },
                                { cx: 100, cy: 120 },
                                { cx: 140, cy: 80 }
                              ].map((point, index) => (
                                <motion.circle 
                                  key={index}
                                  cx={point.cx} 
                                  cy={point.cy} 
                                  r="6" 
                                  fill="hsl(var(--secondary))" 
                                  stroke="white" 
                                  strokeWidth="2"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.5, 
                                    delay: 1.5 + index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                />
                              ))}
                            </svg>
                          </motion.div>
                        </div>

                        {/* Enhanced AI Capabilities List with Animations */}
                        <div className="space-y-4 mb-6">
                          <motion.h4 
                            className="font-semibold text-lg text-foreground mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.8 }}
                          >
                            Agentic AI Capabilities
                          </motion.h4>
                          
                          {aiCapabilities.map((capability, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-border/40 hover:border-secondary/40 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <motion.div 
                                className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Target className="h-5 w-5 text-white" />
                              </motion.div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium text-foreground">{capability.name}</span>
                                  <span className="text-sm font-semibold text-secondary">{capability.percentage}%</span>
                                </div>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 1, delay: 2.5 + index * 0.1 }}
                                >
                                  <Progress 
                                    value={capability.percentage} 
                                    className="h-2"
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div 
                          className="p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl border border-border/40"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.8 }}
                        >
                          <p className="text-sm text-foreground leading-relaxed">
                            <strong>Strategic Opportunity:</strong> The rise of Agentic AI represents a fundamental
                            shift from traditional automation to autonomous decision-making systems that can adapt and
                            learn independently.
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* New Clarity Tiles Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {clarityTiles.map((tile, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6 + index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-xl rounded-3xl overflow-hidden h-full">
                        <CardHeader className="pb-6 px-8 pt-8">
                          <motion.div 
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                          >
                            <motion.div 
                              className={`w-14 h-14 bg-gradient-to-br ${tile.color} rounded-2xl flex items-center justify-center shadow-lg`}
                              whileHover={{ 
                                scale: 1.1, 
                                rotate: 5,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                              }}
                              animate={{
                                boxShadow: [
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                  "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                ]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                              >
                                <tile.icon className="h-7 w-7 text-white" />
                              </motion.div>
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground">{tile.title}</h3>
                              <p className="text-muted-foreground mt-2">{tile.description}</p>
                            </div>
                          </motion.div>
                        </CardHeader>
                        <CardContent className="p-8">
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(tile.metrics).map(([key, value], metricIndex) => (
                              <motion.div 
                                key={key} 
                                className="text-center p-4 bg-white/5 rounded-xl border border-border/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: 1 + index * 0.2 + metricIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                                  borderColor: "hsl(var(--primary) / 0.3)"
                                }}
                              >
                                <motion.div 
                                  className="text-2xl font-bold text-foreground mb-1"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ 
                                    duration: 0.5, 
                                    delay: 1.2 + index * 0.2 + metricIndex * 0.1,
                                    type: "spring",
                                    stiffness: 300
                                  }}
                                >
                                  {value}
                                </motion.div>
                                <motion.div 
                                  className="text-xs text-muted-foreground capitalize"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.5 + index * 0.2 + metricIndex * 0.1 }}
                                >
                                  {key}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Tabs Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 h-16 bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-border/40">
                    <TabsTrigger value="client-snapshot" className="text-base font-semibold data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:text-primary rounded-xl transition-all flex items-center justify-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Client Snapshot
                    </TabsTrigger>
                    <TabsTrigger value="market-trends" className="text-base font-semibold data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:text-primary rounded-xl transition-all flex items-center justify-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Market Trends
                    </TabsTrigger>
                    <TabsTrigger value="regulatory" className="text-base font-semibold data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:text-primary rounded-xl transition-all flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4" />
                      Regulatory
                    </TabsTrigger>
                    <TabsTrigger value="competitive" className="text-base font-semibold data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:text-primary rounded-xl transition-all flex items-center justify-center gap-2">
                      <Target className="h-4 w-4" />
                      Competitive
                    </TabsTrigger>
                    <TabsTrigger value="stakeholder" className="text-base font-semibold data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:text-primary rounded-xl transition-all flex items-center justify-center gap-2">
                      <Users className="h-4 w-4" />
                      Stakeholder Buzz
                    </TabsTrigger>
                  </TabsList>

                  {/* Tab Content - Client Snapshot */}
                  <TabsContent value="client-snapshot" className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {clientMetrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="bg-white/10 backdrop-blur-sm border border-border/40 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                              <metric.icon className="h-8 w-8 text-primary" />
                              <Badge className="bg-primary/20 text-primary border-primary/40">{metric.badge}</Badge>
                            </div>
                            <h3 className="text-lg font-medium text-foreground mb-4">{metric.title}</h3>
                            <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <ArrowUpRight className="h-4 w-4 text-primary" />
                              {metric.change}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* Strategic Initiatives */}
                    <Card className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-6">Recent Strategic Initiatives</h3>
                      <div className="space-y-4">
                        {strategicInitiatives.map((initiative, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <p className="font-medium text-foreground">{initiative.split(' - ')[0]}</p>
                              <p className="text-sm text-muted-foreground">{initiative.split(' - ')[1]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  {/* Other tab contents can be added here */}
                  <TabsContent value="market-trends" className="space-y-8">
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Market Trends Analysis</h3>
                      <p className="text-muted-foreground">Comprehensive market intelligence and trend analysis coming soon...</p>
                    </Card>
                  </TabsContent>

                  <TabsContent value="regulatory" className="space-y-8">
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Landscape</h3>
                      <p className="text-muted-foreground">Regulatory compliance and governance insights coming soon...</p>
                    </Card>
                  </TabsContent>

                  <TabsContent value="competitive" className="space-y-8">
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Competitive Intelligence</h3>
                      <p className="text-muted-foreground">Competitive analysis and positioning insights coming soon...</p>
                    </Card>
                  </TabsContent>

                  <TabsContent value="stakeholder" className="space-y-8">
                    <Card className="bg-white/10 backdrop-blur-sm border border-border/40 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Stakeholder Sentiment</h3>
                      <p className="text-muted-foreground">Stakeholder analysis and sentiment tracking coming soon...</p>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
} 