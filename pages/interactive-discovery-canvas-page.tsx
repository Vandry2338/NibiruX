"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users, Zap, Search, Map, Layers, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InteractiveDiscoveryCanvasPage() {
  const discoveryAreas = [
    {
      name: "Customer Insights",
      icon: Users,
      color: "text-blue-400",
      insights: [
        "Customer journey mapping reveals 3 key pain points",
        "45% of customers prefer digital interactions",
        "Customer satisfaction score: 4.2/5"
      ],
      opportunities: [
        "Implement omnichannel experience",
        "Personalize customer interactions",
        "Enhance self-service capabilities"
      ]
    },
    {
      name: "Process Optimization",
      icon: Target,
      color: "text-green-400",
      insights: [
        "Current process efficiency: 68%",
        "Bottlenecks identified in 4 key areas",
        "Automation potential: 35% of tasks"
      ],
      opportunities: [
        "Streamline approval workflows",
        "Implement RPA for repetitive tasks",
        "Optimize resource allocation"
      ]
    },
    {
      name: "Technology Assessment",
      icon: Zap,
      color: "text-purple-400",
      insights: [
        "Legacy systems account for 40% of IT spend",
        "Cloud adoption rate: 25%",
        "Integration gaps in 6 systems"
      ],
      opportunities: [
        "Modernize core systems",
        "Accelerate cloud migration",
        "Implement API-first architecture"
      ]
    },
    {
      name: "Market Analysis",
      icon: Search,
      color: "text-yellow-400",
      insights: [
        "Market growth rate: 12% annually",
        "Competitive advantage in 3 areas",
        "Emerging trends: AI, IoT, Sustainability"
      ],
      opportunities: [
        "Expand into adjacent markets",
        "Develop AI-powered solutions",
        "Enhance sustainability initiatives"
      ]
    }
  ]

  const discoveryMetrics = [
    {
      title: "Discovery Progress",
      value: "78%",
      icon: Map,
      color: "text-green-400"
    },
    {
      title: "Insights Generated",
      value: "24",
      icon: Lightbulb,
      color: "text-blue-400"
    },
    {
      title: "Opportunities Identified",
      value: "12",
      icon: Target,
      color: "text-purple-400"
    },
    {
      title: "Stakeholders Engaged",
      value: "18",
      icon: Users,
      color: "text-yellow-400"
    }
  ]

  const discoveryPhases = [
    {
      phase: "Phase 1: Discovery",
      status: "Completed",
      activities: [
        "Stakeholder interviews completed",
        "Process mapping finished",
        "Technology assessment done"
      ],
      nextSteps: [
        "Validate findings with stakeholders",
        "Prioritize opportunities",
        "Develop implementation roadmap"
      ]
    },
    {
      phase: "Phase 2: Analysis",
      status: "In Progress",
      activities: [
        "Data analysis in progress",
        "Root cause analysis ongoing",
        "Benchmarking against industry"
      ],
      nextSteps: [
        "Complete gap analysis",
        "Define target state",
        "Calculate ROI projections"
      ]
    },
    {
      phase: "Phase 3: Design",
      status: "Planned",
      activities: [
        "Solution design planning",
        "Architecture development",
        "Change management strategy"
      ],
      nextSteps: [
        "Create detailed designs",
        "Develop prototypes",
        "Plan pilot implementation"
      ]
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
          <h1 className="text-4xl font-bold text-white mb-4">Interactive Discovery Canvas</h1>
          <p className="text-slate-300 text-lg">Dynamic exploration and analysis of business opportunities and challenges</p>
        </motion.div>

        {/* Discovery Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {discoveryMetrics.map((metric, index) => (
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

        {/* Discovery Areas */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Discovery Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {discoveryAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-white/10 ${area.color}`}>
                        <area.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Insights</h4>
                        <ul className="space-y-2">
                          {area.insights.map((insight, insightIndex) => (
                            <li key={insightIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-300 text-sm">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Opportunities</h4>
                        <ul className="space-y-2">
                          {area.opportunities.map((opportunity, oppIndex) => (
                            <li key={oppIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-300 text-sm">{opportunity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Discovery Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-semibold">Discovery Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {discoveryPhases.map((phase, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                        phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {phase.status}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-medium mb-2">Activities</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-300 text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Next Steps</h4>
                        <ul className="space-y-2">
                          {phase.nextSteps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-300 text-sm">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Discovery Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-semibold">Discovery Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Key Findings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Customer experience is the top priority area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Process automation can deliver 35% efficiency gains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Technology modernization is critical for growth</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Strategic Recommendations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Prioritize customer experience transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Accelerate process automation initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Invest in technology modernization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 