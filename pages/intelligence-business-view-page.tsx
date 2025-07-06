"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, DollarSign, Users, Target, Activity, ArrowUpRight, ArrowDownRight, BarChart, PieChart, LineChart, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface IntelligenceBusinessViewPageProps {
  onNavigate?: (page: string) => void
}

const NibiruXLogo = () => (
  <div className="w-10 h-10 border-2 border-primary rounded-full relative shadow-lg">
    <div className="absolute inset-1 border border-secondary rounded-full"></div>
    <div className="absolute inset-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
  </div>
);

const MetricCard = ({ icon, title, value, unit, change, changeColor, subtitle, gradient }: {
  icon: React.ReactNode;
  title: string;
  value: number;
  unit?: string;
  change: string;
  changeColor: string;
  subtitle: string;
  gradient: string;
}) => (
  <div className={`bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/20 ${gradient} hover:shadow-xl transition-all duration-300 hover:bg-white/15`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient.replace('border-', '').split('/')[0]} rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <span className={`text-${changeColor}-400 text-sm font-semibold bg-${changeColor}-500/10 px-2 py-1 rounded-full border border-${changeColor}-500/20`}>
        {change}
      </span>
    </div>
    <h3 className="text-muted-foreground text-sm font-medium mb-2">{title}</h3>
    <div className="text-3xl font-bold text-foreground mb-1">
      {typeof value === "number" ? value.toFixed(1) : value}{unit}
    </div>
    <p className="text-muted-foreground text-sm">{subtitle}</p>
  </div>
);

const IntelligenceBusinessViewPage: React.FC<IntelligenceBusinessViewPageProps> = ({ onNavigate }) => {
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    customers: 0,
    satisfaction: 0,
    marketShare: 0,
  });

  useEffect(() => {
    const targets = {
      revenue: 24.8,
      customers: 2847,
      satisfaction: 94.2,
      marketShare: 18.7,
    };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedValues({
        revenue: targets.revenue * progress,
        customers: Math.floor(targets.customers * progress),
        satisfaction: targets.satisfaction * progress,
        marketShare: targets.marketShare * progress,
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(targets);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, []);

  const businessMetrics = [
    {
      category: "Financial Performance",
      metrics: [
        { name: "Revenue Growth", value: "+12.5%", status: "positive" },
        { name: "Profit Margin", value: "18.2%", status: "positive" },
        { name: "Cash Flow", value: "$2.1M", status: "positive" },
        { name: "ROI", value: "24.8%", status: "positive" }
      ]
    },
    {
      category: "Operational Excellence",
      metrics: [
        { name: "Efficiency Rate", value: "94.2%", status: "positive" },
        { name: "Cycle Time", value: "2.3 days", status: "negative" },
        { name: "Quality Score", value: "98.7%", status: "positive" },
        { name: "Uptime", value: "99.9%", status: "positive" }
      ]
    },
    {
      category: "Market Position",
      metrics: [
        { name: "Market Share", value: "18.7%", status: "positive" },
        { name: "Brand Recognition", value: "76.3%", status: "neutral" },
        { name: "Customer Satisfaction", value: "4.8/5", status: "positive" },
        { name: "Competitive Index", value: "92.1", status: "positive" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Navigation Header */}
      <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <NibiruXLogo />
              <div>
                <span className="text-xl font-bold text-foreground">NibiruX</span>
                <div className="text-primary text-xs">Intelligence Cortex</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate?.("client-hub")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to Hub
              </button>
              <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">Business Intelligence</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-4">Business Intelligence Dashboard</h1>
              <p className="text-xl text-muted-foreground max-w-4xl">
                Real-time business metrics, KPIs, and performance analytics with interactive visualizations 
                to drive data-driven decision making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl space-y-8">
          
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={<DollarSign className="h-6 w-6 text-white" />}
              title="Total Revenue"
              value={animatedValues.revenue}
              unit="M"
              change="+12.5%"
              changeColor="green"
              subtitle="vs $22.1M last quarter"
              gradient="border-primary/20"
            />
            <MetricCard
              icon={<Users className="h-6 w-6 text-white" />}
              title="Customers"
              value={animatedValues.customers}
              change="+8.2%"
              changeColor="blue"
              subtitle="New: 312 this month"
              gradient="border-primary/20"
            />
            <MetricCard
              icon={<Target className="h-6 w-6 text-white" />}
              title="Satisfaction"
              value={animatedValues.satisfaction}
              unit="%"
              change="+2.1%"
              changeColor="green"
              subtitle="Customer NPS"
              gradient="border-secondary/20"
            />
            <MetricCard
              icon={<Activity className="h-6 w-6 text-white" />}
              title="Market Share"
              value={animatedValues.marketShare}
              unit="%"
              change="+1.3%"
              changeColor="blue"
              subtitle="vs 17.4% last year"
              gradient="border-primary/20"
            />
          </div>

          {/* Business Metrics */}
          <div className="space-y-8">
            {businessMetrics.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-white/20">
                    <CardTitle className="text-foreground text-xl font-semibold">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                          <span className="text-muted-foreground text-sm font-medium">{metric.name}</span>
                          <span className={`font-bold text-lg ${
                            metric.status === 'positive' ? 'text-green-400' :
                            metric.status === 'negative' ? 'text-red-400' :
                            'text-primary'
                          }`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Strategic Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10 border-b border-white/20">
                <CardTitle className="text-foreground text-xl font-semibold">Strategic Insights</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Key Opportunities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Expand automation to reduce cycle time by 15%</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Increase market share through digital transformation</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Optimize resource utilization to improve efficiency</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      Risk Mitigation
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Monitor conversion rate trends closely</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Address brand recognition gaps</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Review operating expense optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IntelligenceBusinessViewPage 