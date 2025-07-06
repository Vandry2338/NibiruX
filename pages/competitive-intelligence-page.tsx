"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Eye,
  Search,
  PieChart,
  LineChart,
  Filter,
  TrendingDown,
  Award,
  Star,
  Cloud
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CompetitiveIntelligencePageProps {
  onNavigate?: (page: string) => void
}

export default function CompetitiveIntelligencePage({ onNavigate }: CompetitiveIntelligencePageProps) {
  const [selectedFunction, setSelectedFunction] = useState("all")
  const [animationProgress, setAnimationProgress] = useState(0)

  // Business functions for filter
  const businessFunctions = [
    { value: "all", label: "All Functions" },
    { value: "finance", label: "Finance & Accounting" },
    { value: "hr", label: "Human Resources" },
    { value: "operations", label: "Operations" },
    { value: "sales", label: "Sales & Marketing" },
    { value: "it", label: "IT & Technology" },
    { value: "supply", label: "Supply Chain" },
    { value: "customer", label: "Customer Service" }
  ]

  // Mock data for historical trends
  const historicalTrendsData = {
    all: [
      { month: "Jan", client: 65, competitor1: 70, competitor2: 68, competitor3: 72 },
      { month: "Feb", client: 68, competitor1: 72, competitor2: 70, competitor3: 74 },
      { month: "Mar", client: 72, competitor1: 75, competitor2: 73, competitor3: 76 },
      { month: "Apr", client: 75, competitor1: 78, competitor2: 76, competitor3: 79 },
      { month: "May", client: 78, competitor1: 80, competitor2: 78, competitor3: 81 },
      { month: "Jun", client: 82, competitor1: 83, competitor2: 81, competitor3: 84 }
    ],
    finance: [
      { month: "Jan", client: 60, competitor1: 65, competitor2: 63, competitor3: 67 },
      { month: "Feb", client: 63, competitor1: 67, competitor2: 65, competitor3: 69 },
      { month: "Mar", client: 67, competitor1: 70, competitor2: 68, competitor3: 71 },
      { month: "Apr", client: 70, competitor1: 73, competitor2: 71, competitor3: 74 },
      { month: "May", client: 73, competitor1: 75, competitor2: 73, competitor3: 76 },
      { month: "Jun", client: 76, competitor1: 78, competitor2: 76, competitor3: 79 }
    ],
    hr: [
      { month: "Jan", client: 70, competitor1: 68, competitor2: 70, competitor3: 69 },
      { month: "Feb", client: 73, competitor1: 71, competitor2: 73, competitor3: 72 },
      { month: "Mar", client: 76, competitor1: 74, competitor2: 76, competitor3: 75 },
      { month: "Apr", client: 79, competitor1: 77, competitor2: 79, competitor3: 78 },
      { month: "May", client: 82, competitor1: 80, competitor2: 82, competitor3: 81 },
      { month: "Jun", client: 85, competitor1: 83, competitor2: 85, competitor3: 84 }
    ]
  }

  // Mock data for competitor market analysis
  const competitorAnalysisData = {
    all: [
      { competitor: "TechCorp", marketShare: 28, growth: 15, focus: "AI/ML", strength: 85 },
      { competitor: "InnovateTech", marketShare: 22, growth: 12, focus: "Cloud", strength: 78 },
      { competitor: "Digital Dynamics", marketShare: 18, growth: 8, focus: "Analytics", strength: 72 },
      { competitor: "Future Systems", marketShare: 15, growth: 20, focus: "IoT", strength: 88 },
      { competitor: "Smart Solutions", marketShare: 12, growth: 5, focus: "Automation", strength: 65 }
    ],
    finance: [
      { competitor: "TechCorp", marketShare: 25, growth: 12, focus: "Financial AI", strength: 82 },
      { competitor: "InnovateTech", marketShare: 20, growth: 10, focus: "Cloud Finance", strength: 75 },
      { competitor: "Digital Dynamics", marketShare: 18, growth: 6, focus: "Financial Analytics", strength: 70 },
      { competitor: "Future Systems", marketShare: 16, growth: 18, focus: "Blockchain", strength: 85 },
      { competitor: "Smart Solutions", marketShare: 10, growth: 4, focus: "Process Automation", strength: 62 }
    ],
    hr: [
      { competitor: "TechCorp", marketShare: 30, growth: 18, focus: "HR Analytics", strength: 88 },
      { competitor: "InnovateTech", marketShare: 24, growth: 14, focus: "Cloud HR", strength: 80 },
      { competitor: "Digital Dynamics", marketShare: 20, growth: 10, focus: "Talent Analytics", strength: 75 },
      { competitor: "Future Systems", marketShare: 14, growth: 22, focus: "AI Recruitment", strength: 90 },
      { competitor: "Smart Solutions", marketShare: 8, growth: 6, focus: "HR Automation", strength: 68 }
    ]
  }

  // Mock data for client vs competitor focus
  const clientVsCompetitorData = {
    all: {
      client: { ai: 85, cloud: 70, analytics: 75, automation: 80, security: 90 },
      competitors: [
        { name: "TechCorp", ai: 90, cloud: 75, analytics: 80, automation: 85, security: 88 },
        { name: "InnovateTech", ai: 70, cloud: 95, analytics: 75, automation: 70, security: 85 },
        { name: "Digital Dynamics", ai: 75, cloud: 70, analytics: 95, automation: 75, security: 80 },
        { name: "Future Systems", ai: 85, cloud: 80, analytics: 70, automation: 90, security: 75 },
        { name: "Smart Solutions", ai: 60, cloud: 65, analytics: 70, automation: 95, security: 70 }
      ]
    },
    finance: {
      client: { ai: 80, cloud: 75, analytics: 85, automation: 75, security: 95 },
      competitors: [
        { name: "TechCorp", ai: 85, cloud: 80, analytics: 90, automation: 80, security: 92 },
        { name: "InnovateTech", ai: 65, cloud: 90, analytics: 80, automation: 70, security: 88 },
        { name: "Digital Dynamics", ai: 70, cloud: 75, analytics: 95, automation: 75, security: 85 },
        { name: "Future Systems", ai: 80, cloud: 85, analytics: 75, automation: 85, security: 80 },
        { name: "Smart Solutions", ai: 55, cloud: 70, analytics: 75, automation: 90, security: 75 }
      ]
    },
    hr: {
      client: { ai: 90, cloud: 65, analytics: 80, automation: 85, security: 85 },
      competitors: [
        { name: "TechCorp", ai: 95, cloud: 70, analytics: 85, automation: 90, security: 88 },
        { name: "InnovateTech", ai: 75, cloud: 90, analytics: 80, automation: 75, security: 85 },
        { name: "Digital Dynamics", ai: 80, cloud: 70, analytics: 95, automation: 80, security: 80 },
        { name: "Future Systems", ai: 90, cloud: 80, analytics: 70, automation: 95, security: 75 },
        { name: "Smart Solutions", ai: 65, cloud: 65, analytics: 75, automation: 90, security: 70 }
      ]
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationProgress(prev => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const currentTrendsData = historicalTrendsData[selectedFunction as keyof typeof historicalTrendsData] || historicalTrendsData.all
  const currentAnalysisData = competitorAnalysisData[selectedFunction as keyof typeof competitorAnalysisData] || competitorAnalysisData.all
  const currentFocusData = clientVsCompetitorData[selectedFunction as keyof typeof clientVsCompetitorData] || clientVsCompetitorData.all

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-background/80 via-background/60 to-muted/30 text-foreground relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="flex flex-col items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Context Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 border border-white/20 text-base font-semibold text-primary tracking-wide shadow-md">
                <span className="mr-2"><Eye className="h-5 w-5 text-primary" /></span>
                Intelligence Cortex
              </span>
            </div>
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight leading-tight">
              Challenge Analysis <span className="block bg-gradient-to-r from-primary via-orange-400 to-secondary bg-clip-text text-transparent">Report</span>
            </h1>
            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl text-center mt-4">
              AI-powered analysis of organizational challenges with strategic impact assessment and transformation roadmap recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
              <Eye className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-2">
                Competitive Intelligence
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time competitive analysis and market positioning insights
              </p>
            </div>
          </motion.div>

          {/* Business Function Filter */}
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by Business Function:</span>
            </div>
            <Select value={selectedFunction} onValueChange={setSelectedFunction}>
              <SelectTrigger className="w-80 bg-white/10 backdrop-blur-sm border-white/20 text-foreground">
                <SelectValue placeholder="Select business function" />
              </SelectTrigger>
              <SelectContent className="bg-background/95 backdrop-blur-sm border-border">
                {businessFunctions.map((func) => (
                  <SelectItem key={func.value} value={func.value} className="text-foreground">
                    {func.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 px-8">
        <div className="container mx-auto max-w-7xl space-y-16">
          
          {/* Historical Trends Graph */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20 pb-8 px-12 pt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <LineChart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Historical Trends Analysis
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Performance comparison over the last 6 months
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-12">
                <div className="space-y-6">
                  {/* Chart Legend */}
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Your Company</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                      <span className="text-foreground font-medium">Competitor 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">Competitor 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
                      <span className="text-foreground font-medium">Competitor 3</span>
                    </div>
                  </div>

                  {/* Chart Visualization */}
                  <div className="h-80 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                    <div className="h-full flex items-end justify-between gap-4">
                      {currentTrendsData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div className="text-sm text-muted-foreground mb-2">{data.month}</div>
                          <div className="w-full flex flex-col gap-1">
                            {/* Client Performance */}
                            <motion.div 
                              className="bg-primary rounded-t-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${data.client}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              style={{ height: `${data.client}%` }}
                            />
                            {/* Competitor 1 */}
                            <motion.div 
                              className="bg-secondary rounded-t-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${data.competitor1}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                              style={{ height: `${data.competitor1}%` }}
                            />
                            {/* Competitor 2 */}
                            <motion.div 
                              className="bg-accent rounded-t-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${data.competitor2}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                              style={{ height: `${data.competitor2}%` }}
                            />
                            {/* Competitor 3 */}
                            <motion.div 
                              className="bg-muted-foreground rounded-t-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${data.competitor3}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                              style={{ height: `${data.competitor3}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Competitor Market Analysis Graph */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-accent/20 pb-8 px-12 pt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Competitor Market Analysis
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Market share, growth rates, and strategic focus areas
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Market Share Chart */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Market Share Distribution</h3>
                    <div className="space-y-4">
                      {currentAnalysisData.map((competitor, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-foreground">{competitor.competitor}</span>
                              <span className="text-lg font-bold text-secondary">{competitor.marketShare}%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>Focus: {competitor.focus}</span>
                              <span className="text-green-400">+{competitor.growth}%</span>
                            </div>
                            <Progress 
                              value={competitor.strength} 
                              className="h-2 mt-2"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Growth Comparison */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Growth Rate Comparison</h3>
                    <div className="space-y-4">
                      {currentAnalysisData.map((competitor, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-foreground">{competitor.competitor}</span>
                              <span className={`text-lg font-bold ${competitor.growth > 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                                +{competitor.growth}%
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>Market Strength</span>
                              <span>{competitor.strength}/100</span>
                            </div>
                            <Progress 
                              value={competitor.growth} 
                              className="h-2 mt-2"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Client vs Competitor Focus - Animated Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/20 to-primary/20 pb-8 px-12 pt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Client vs. Competitor Focus Analysis
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Strategic focus areas and competitive positioning
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-12">
                <div className="space-y-8">
                  {/* Focus Areas */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {[
                      { name: "AI/ML", icon: Zap, color: "from-purple-500 to-pink-500" },
                      { name: "Cloud", icon: Cloud, color: "from-blue-500 to-cyan-500" },
                      { name: "Analytics", icon: BarChart3, color: "from-green-500 to-emerald-500" },
                      { name: "Automation", icon: Activity, color: "from-orange-500 to-red-500" },
                      { name: "Security", icon: Shield, color: "from-indigo-500 to-purple-500" }
                    ].map((area, areaIndex) => (
                      <div key={area.name} className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <area.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-4">{area.name}</h3>
                        
                        {/* Client Performance */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Your Company</span>
                            <span className="text-sm font-semibold text-primary">
                              {currentFocusData.client[area.name.toLowerCase() as keyof typeof currentFocusData.client]}%
                            </span>
                          </div>
                          <motion.div 
                            className="h-2 bg-white/10 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: Number(areaIndex) * 0.1 + 0.5 }}
                          >
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                              initial={{ width: 0 }}
                              animate={{ width: `${currentFocusData.client[area.name.toLowerCase() as keyof typeof currentFocusData.client]}%` }}
                              transition={{ duration: 1, delay: Number(areaIndex) * 0.1 + 0.5 }}
                            />
                          </motion.div>
                        </div>

                        {/* Competitor Average */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Competitor Avg</span>
                            <span className="text-sm font-semibold text-secondary">
                              {Math.round(
                                currentFocusData.competitors.reduce((sum, comp) => 
                                  sum + comp[area.name.toLowerCase() as keyof typeof comp], 0
                                ) / currentFocusData.competitors.length
                              )}%
                            </span>
                          </div>
                          <motion.div 
                            className="h-2 bg-white/10 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: Number(areaIndex) * 0.1 + 0.7 }}
                          >
                            <motion.div 
                              className="h-full bg-gradient-to-r from-secondary to-accent"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: `${Math.round(
                                  currentFocusData.competitors.reduce((sum, comp) => 
                                    sum + comp[area.name.toLowerCase() as keyof typeof comp], 0
                                  ) / currentFocusData.competitors.length
                                )}%` 
                              }}
                              transition={{ duration: 1, delay: Number(areaIndex) * 0.1 + 0.7 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Competitive Positioning Matrix */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Competitive Positioning Matrix</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentFocusData.competitors.map((competitor, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                              <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{competitor.name}</h4>
                              <p className="text-sm text-muted-foreground">Competitor</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {Object.entries(competitor).filter(([key]) => key !== 'name').map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground capitalize">{key}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div 
                                      className="h-full bg-gradient-to-r from-accent to-primary"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${value}%` }}
                                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground">{value}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
} 