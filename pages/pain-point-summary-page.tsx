"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  TrendingDown, 
  ArrowLeft, 
  Download, 
  CheckCircle,
  Users,
  Target,
  Zap,
  BarChart3
} from "lucide-react"
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';

interface PainPointSummaryPageProps {
  onNavigate: (page: string) => void
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

export default function PainPointSummaryPage({ onNavigate }: PainPointSummaryPageProps) {
  const summaryMetrics = [
    {
      title: "Total Pain Points",
      value: "12",
      change: "Identified",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      title: "Monthly Cost Impact",
      value: "$870K",
      change: "Total Impact",
      icon: DollarSign,
      color: "text-yellow-400"
    },
    {
      title: "Resolution Timeline",
      value: "18 months",
      change: "Estimated",
      icon: Clock,
      color: "text-blue-400"
    },
    {
      title: "ROI Potential",
      value: "285%",
      change: "3-year projection",
      icon: TrendingDown,
      color: "text-green-400"
    }
  ]

  const painPointSummary = [
    {
      category: "Customer Experience",
      count: 3,
      totalCost: "$105K/month",
      priority: "High",
      icon: Users,
      topIssues: [
        "Long response times affecting satisfaction",
        "Complex onboarding reducing conversions",
        "Limited self-service increasing support costs"
      ]
    },
    {
      category: "Operational Efficiency",
      count: 3,
      totalCost: "$175K/month",
      priority: "High",
      icon: Target,
      topIssues: [
        "Manual processes reducing productivity",
        "Data silos hindering decision making",
        "Poor integration causing system issues"
      ]
    },
    {
      category: "Technology Infrastructure",
      count: 3,
      totalCost: "$295K/month",
      priority: "Critical",
      icon: Zap,
      topIssues: [
        "Legacy systems increasing maintenance costs",
        "Security vulnerabilities creating risks",
        "Scalability issues limiting growth"
      ]
    },
    {
      category: "Financial Performance",
      count: 3,
      totalCost: "$295K/month",
      priority: "High",
      icon: BarChart3,
      topIssues: [
        "High operational costs reducing profitability",
        "Revenue leakage affecting growth",
        "Poor resource allocation decreasing efficiency"
      ]
    }
  ]

  const recommendations = [
    {
      priority: "Immediate (0-3 months)",
      items: [
        {
          name: "Implement Self-Service Portal",
          impact: "Reduce support costs by 30%",
          effort: "Low",
          cost: "$50K"
        },
        {
          name: "Automate Basic Processes",
          impact: "Improve efficiency by 25%",
          effort: "Medium",
          cost: "$100K"
        },
        {
          name: "Improve Data Accessibility",
          impact: "Enhance decision making",
          effort: "Low",
          cost: "$75K"
        }
      ]
    },
    {
      priority: "Short-term (3-6 months)",
      items: [
        {
          name: "Security Infrastructure Upgrade",
          impact: "Reduce risk exposure by 80%",
          effort: "High",
          cost: "$300K"
        },
        {
          name: "Process Reengineering",
          impact: "Improve efficiency by 40%",
          effort: "High",
          cost: "$250K"
        },
        {
          name: "Integration Improvements",
          impact: "Reduce system issues by 60%",
          effort: "Medium",
          cost: "$150K"
        }
      ]
    },
    {
      priority: "Long-term (6-18 months)",
      items: [
        {
          name: "Legacy System Modernization",
          impact: "Reduce maintenance costs by 50%",
          effort: "Very High",
          cost: "$1.2M"
        },
        {
          name: "Complete Digital Transformation",
          impact: "Improve customer experience by 60%",
          effort: "Very High",
          cost: "$2.5M"
        },
        {
          name: "Advanced Analytics Implementation",
          impact: "Enable data-driven decisions",
          effort: "High",
          cost: "$800K"
        }
      ]
    }
  ]

  // Mock data for Priority Distribution
  const functionPriorityData = [
    { name: 'Finance', high: 2, medium: 1, low: 0 },
    { name: 'Technology', high: 1, medium: 1, low: 0 },
    { name: 'Sales', high: 1, medium: 0, low: 1 },
    { name: 'Operations', high: 0, medium: 2, low: 0 },
    { name: 'Procurement', high: 0, medium: 1, low: 1 },
  ];

  const radarLabels = functionPriorityData.map(d => d.name);
  const radarData = {
    labels: radarLabels,
    datasets: [
      {
        label: 'High Priority',
        data: functionPriorityData.map(d => d.high),
        backgroundColor: 'rgba(239, 68, 68, 0.3)', // red-500/30
        borderColor: 'rgba(239, 68, 68, 1)', // red-500
        borderWidth: 2,
        pointBackgroundColor: 'rgba(239, 68, 68, 1)',
        fill: true,
      },
      {
        label: 'Medium Priority',
        data: functionPriorityData.map(d => d.medium),
        backgroundColor: 'rgba(251, 191, 36, 0.2)', // yellow-400/20
        borderColor: 'rgba(251, 191, 36, 1)', // yellow-400
        borderWidth: 2,
        pointBackgroundColor: 'rgba(251, 191, 36, 1)',
        fill: true,
      },
      {
        label: 'Low Priority',
        data: functionPriorityData.map(d => d.low),
        backgroundColor: 'rgba(253, 224, 71, 0.2)', // yellow-300/20
        borderColor: 'rgba(253, 224, 71, 1)', // yellow-300
        borderWidth: 2,
        pointBackgroundColor: 'rgba(253, 224, 71, 1)',
        fill: true,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 3,
        pointLabels: { color: '#fff', font: { size: 14 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: '#fff', stepSize: 1 },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => onNavigate("pain-point-canvas")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Assessment
            </button>
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-4 text-center">
            Challenge Analysis <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Report</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">
            Comprehensive summary of business challenges and strategic recommendations
          </p>
        </motion.div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground text-lg font-semibold">{metric.title}</CardTitle>
                    <div className={`p-2 rounded-lg bg-white/10 ${metric.color}`}>
                      <metric.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-muted-foreground text-sm">{metric.change}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Priority Distribution by Function */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Priority Distribution by Function
            </h2>
            <div className="space-y-6">
              {functionPriorityData.map((fn, idx) => {
                const total = fn.high + fn.medium + fn.low;
                return (
                  <motion.div
                    key={fn.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-background/80 rounded-xl p-4 flex flex-col gap-2 shadow-lg border border-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${fn.high > 0 ? 'bg-red-500' : fn.medium > 0 ? 'bg-orange-400' : 'bg-yellow-300'}`} />
                      <span className="font-semibold text-lg text-foreground">{fn.name}</span>
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{total} challenges</span>
                    </div>
                    <div className="flex items-center gap-1 w-full">
                      <motion.div
                        className="h-6 rounded-l-full bg-red-500"
                        style={{ width: `${(fn.high / total) * 100}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(fn.high / total) * 100}%` }}
                        transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                      />
                      <motion.div
                        className="h-6 bg-orange-400"
                        style={{ width: `${(fn.medium / total) * 100}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(fn.medium / total) * 100}%` }}
                        transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                      />
                      <motion.div
                        className="h-6 rounded-r-full bg-yellow-300"
                        style={{ width: `${(fn.low / total) * 100}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(fn.low / total) * 100}%` }}
                        transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>High Priority: {fn.high}</span>
                      <span>Medium Priority: {fn.medium}</span>
                      <span>Low Priority: {fn.low}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-foreground mb-6">Priority Impact Radar</h2>
            <div className="w-full max-w-md bg-background/80 rounded-2xl p-6 shadow-lg border border-border">
              <Radar data={radarData} options={radarOptions} />
              <div className="flex justify-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> High Priority</div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block" /> Medium Priority</div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" /> Low Priority</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Point Summary */}
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-semibold text-foreground mb-6"
          >
            Pain Point Summary by Category
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {painPointSummary.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10 text-primary">
                          <category.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-foreground text-xl font-semibold">{category.category}</CardTitle>
                          <div className="text-muted-foreground text-sm">{category.count} pain points identified</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        category.priority === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}>
                        {category.priority} Priority
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-400">{category.totalCost}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.topIssues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-foreground text-xl font-semibold">Strategic Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{rec.priority}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {rec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-foreground font-medium text-sm">{item.name}</h4>
                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                              item.effort === 'Low' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                              item.effort === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                              item.effort === 'High' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                              'bg-red-500/20 text-red-300 border border-red-500/30'
                            }`}>
                              {item.effort} Effort
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <div className="text-muted-foreground">Impact</div>
                              <div className="text-foreground">{item.impact}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Estimated Cost</div>
                              <div className="text-green-400 font-medium">{item.cost}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-8"
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-foreground text-xl font-semibold">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Findings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">12 critical pain points identified across 4 categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">$870K monthly cost impact requiring immediate attention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Technology infrastructure is the highest cost category</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Strategic Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">285% ROI potential over 3 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">18-month implementation timeline recommended</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Phased approach to minimize business disruption</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex gap-4">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Report
                </Button>
                <Button 
                  onClick={() => onNavigate("blueprint")}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Create Transformation Blueprint
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 