"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Target, Users, Zap, TrendingDown, Clock, DollarSign, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PainPointCanvasPageProps {
  onNavigate: (page: string) => void;
}

export default function PainPointCanvasPage({ onNavigate }: PainPointCanvasPageProps) {
  const painPointCategories = [
    {
      name: "Customer Experience",
      icon: Users,
      color: "text-red-400",
      painPoints: [
        {
          name: "Long Response Times",
          severity: "High",
          impact: "Customer Satisfaction",
          frequency: "Daily",
          cost: "$50K/month"
        },
        {
          name: "Complex Onboarding",
          severity: "Medium",
          impact: "Conversion Rate",
          frequency: "Weekly",
          cost: "$25K/month"
        },
        {
          name: "Limited Self-Service",
          severity: "Medium",
          impact: "Support Costs",
          frequency: "Daily",
          cost: "$30K/month"
        }
      ]
    },
    {
      name: "Operational Efficiency",
      icon: Target,
      color: "text-yellow-400",
      painPoints: [
        {
          name: "Manual Processes",
          severity: "High",
          impact: "Productivity",
          frequency: "Daily",
          cost: "$75K/month"
        },
        {
          name: "Data Silos",
          severity: "Medium",
          impact: "Decision Making",
          frequency: "Weekly",
          cost: "$40K/month"
        },
        {
          name: "Poor Integration",
          severity: "High",
          impact: "System Reliability",
          frequency: "Daily",
          cost: "$60K/month"
        }
      ]
    },
    {
      name: "Technology Infrastructure",
      icon: Zap,
      color: "text-blue-400",
      painPoints: [
        {
          name: "Legacy Systems",
          severity: "High",
          impact: "Maintenance Costs",
          frequency: "Monthly",
          cost: "$100K/month"
        },
        {
          name: "Security Vulnerabilities",
          severity: "Critical",
          impact: "Risk Management",
          frequency: "Ongoing",
          cost: "$150K/month"
        },
        {
          name: "Scalability Issues",
          severity: "Medium",
          impact: "Growth Capacity",
          frequency: "Quarterly",
          cost: "$45K/month"
        }
      ]
    },
    {
      name: "Financial Performance",
      icon: DollarSign,
      color: "text-green-400",
      painPoints: [
        {
          name: "High Operational Costs",
          severity: "High",
          impact: "Profitability",
          frequency: "Monthly",
          cost: "$200K/month"
        },
        {
          name: "Revenue Leakage",
          severity: "Medium",
          impact: "Revenue Growth",
          frequency: "Weekly",
          cost: "$35K/month"
        },
        {
          name: "Poor Resource Allocation",
          severity: "Medium",
          impact: "Efficiency",
          frequency: "Monthly",
          cost: "$55K/month"
        }
      ]
    }
  ]

  const painPointMetrics = [
    {
      title: "Total Pain Points",
      value: "12",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      title: "High Severity",
      value: "5",
      icon: TrendingDown,
      color: "text-orange-400"
    },
    {
      title: "Monthly Cost Impact",
      value: "$870K",
      icon: DollarSign,
      color: "text-yellow-400"
    },
    {
      title: "Resolution Timeline",
      value: "18 months",
      icon: Clock,
      color: "text-blue-400"
    }
  ]

  const priorityMatrix = [
    {
      quadrant: "High Impact, Low Effort",
      items: [
        "Implement self-service portal",
        "Automate basic processes",
        "Improve data accessibility"
      ],
      color: "text-green-400"
    },
    {
      quadrant: "High Impact, High Effort",
      items: [
        "Legacy system modernization",
        "Security infrastructure upgrade",
        "Process reengineering"
      ],
      color: "text-red-400"
    },
    {
      quadrant: "Low Impact, Low Effort",
      items: [
        "Documentation updates",
        "Minor UI improvements",
        "Training enhancements"
      ],
      color: "text-blue-400"
    },
    {
      quadrant: "Low Impact, High Effort",
      items: [
        "Complete system overhaul",
        "Major organizational changes",
        "Infrastructure rebuild"
      ],
      color: "text-yellow-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Business Challenge Assessment</h1>
          <p className="text-slate-300 text-lg">Comprehensive analysis of business pain points and challenges</p>
        </motion.div>

        {/* Pain Point Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {painPointMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg font-semibold">{metric.title}</CardTitle>
                    <div className={`p-2 rounded-lg bg-white/10 ${metric.color}`}>
                      <metric.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pain Point Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Pain Point Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {painPointCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-white/10 ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.painPoints.map((painPoint, painIndex) => (
                        <div key={painIndex} className="p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium text-sm">{painPoint.name}</span>
                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                              painPoint.severity === 'Critical' ? 'bg-red-500/20 text-red-300' :
                              painPoint.severity === 'High' ? 'bg-orange-500/20 text-orange-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {painPoint.severity}
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>
                              <div className="text-slate-400">Impact</div>
                              <div className="text-white">{painPoint.impact}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Frequency</div>
                              <div className="text-white">{painPoint.frequency}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Cost</div>
                              <div className="text-red-400 font-medium">{painPoint.cost}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Priority Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-semibold">Priority Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {priorityMatrix.map((quadrant, index) => (
                  <div key={index}>
                    <h3 className={`text-lg font-semibold mb-4 ${quadrant.color}`}>{quadrant.quadrant}</h3>
                    <ul className="space-y-2">
                      {quadrant.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-semibold">Recommended Action Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Immediate Actions (0-3 months)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Implement self-service portal for common issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Automate basic repetitive processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Improve data accessibility and reporting</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Strategic Initiatives (3-12 months)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Modernize legacy systems and infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Enhance security and compliance measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Implement comprehensive process reengineering</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <button 
                  onClick={() => onNavigate("pain-point-summary")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                >
                  Generate Detailed Analysis Report
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 