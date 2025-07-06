"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign, Users, Truck, TrendingUp, TrendingDown, BarChart3, CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- Business Functions Data ---
const businessFunctions = [
  {
    id: "finance",
    name: "Finance & Accounting",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600",
    kpis: [
      { name: "Revenue Growth", value: "12.5%", target: "15%", status: "warning", trend: 2.3 },
      { name: "Operating Margin", value: "18.2%", target: "20%", status: "warning", trend: -1.1 },
      { name: "Cash Flow", value: "$2.4M", target: "$3M", status: "danger", trend: -5.2 },
      { name: "DSO (Days)", value: "42", target: "30", status: "danger", trend: 8.5 },
      { name: "Cost per Invoice", value: "$12.50", target: "$8.00", status: "danger", trend: 15.2 },
      { name: "Budget Variance", value: "8.5%", target: "5%", status: "warning", trend: 3.2 },
      { name: "Accounts Receivable Turnover", value: "8.7x", target: "12x", status: "warning", trend: -2.1 },
      { name: "Working Capital Ratio", value: "1.8", target: "2.5", status: "danger", trend: -8.3 },
      { name: "EBITDA Margin", value: "22.1%", target: "25%", status: "warning", trend: 1.5 },
      { name: "Financial Close Cycle", value: "7 days", target: "5 days", status: "warning", trend: 12.0 },
      { name: "Audit Findings", value: "8", target: "3", status: "danger", trend: 25.5 },
      { name: "Compliance Score", value: "87%", target: "95%", status: "warning", trend: -3.2 },
    ],
    insights: {
      summary:
        "Finance operations showing mixed performance with revenue growth below target and cash flow concerns requiring immediate attention.",
      risks: [
        "Extended payment cycles impacting cash flow",
        "Rising processing costs reducing efficiency",
        "Budget overruns in Q3 operations",
        "Compliance gaps in regulatory reporting",
      ],
      opportunities: [
        "Automation of AP/AR processes",
        "Digital payment adoption",
        "Predictive cash flow modeling",
        "AI-powered expense management",
      ],
    },
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    icon: TrendingUp,
    color: "from-pink-500 to-pink-600",
    kpis: [
      { name: "Sales Growth", value: "9.8%", target: "12%", status: "warning", trend: 1.2 },
      { name: "Lead Conversion Rate", value: "18.5%", target: "20%", status: "warning", trend: 0.8 },
      { name: "Customer Acquisition Cost", value: "$320", target: "$250", status: "danger", trend: 7.5 },
      { name: "Churn Rate", value: "6.2%", target: "4%", status: "danger", trend: 2.1 },
      { name: "Average Deal Size", value: "$18,000", target: "$20,000", status: "warning", trend: -1.5 },
      { name: "Campaign ROI", value: "112%", target: "120%", status: "warning", trend: 2.2 },
      { name: "Market Share", value: "22.5%", target: "25%", status: "warning", trend: 0.9 },
      { name: "Customer Lifetime Value", value: "$4,200", target: "$5,000", status: "warning", trend: 1.7 },
      { name: "Win Rate", value: "32%", target: "35%", status: "warning", trend: 0.5 },
      { name: "Sales Cycle Length", value: "45 days", target: "40 days", status: "danger", trend: 3.8 },
      { name: "Upsell Ratio", value: "1.3x", target: "1.5x", status: "warning", trend: 0.2 },
      { name: "Brand Awareness", value: "78%", target: "85%", status: "warning", trend: 1.1 },
    ],
    insights: {
      summary:
        "Sales and marketing are performing steadily, but churn and acquisition costs are above target. Focus on retention and digital campaigns recommended.",
      risks: [
        "High customer churn impacting growth",
        "Rising acquisition costs",
        "Longer sales cycles",
        "Brand awareness below target",
      ],
      opportunities: [
        "Personalized marketing automation",
        "Customer loyalty programs",
        "AI-driven lead scoring",
        "Omnichannel campaign optimization",
      ],
    },
  },
  {
    id: "operations",
    name: "Operations & Supply Chain",
    icon: Truck,
    color: "from-blue-500 to-blue-600",
    kpis: [
      { name: "Order Fulfillment Rate", value: "94.2%", target: "98%", status: "warning", trend: 1.1 },
      { name: "Inventory Turnover", value: "7.1x", target: "8x", status: "warning", trend: 0.7 },
      { name: "On-Time Delivery", value: "89%", target: "95%", status: "danger", trend: -2.3 },
      { name: "Supply Chain Cost", value: "$1.2M", target: "$1M", status: "danger", trend: 4.5 },
      { name: "Backorder Rate", value: "3.8%", target: "2%", status: "danger", trend: 1.2 },
      { name: "Supplier Lead Time", value: "18 days", target: "14 days", status: "danger", trend: 2.7 },
      { name: "Production Downtime", value: "2.1%", target: "1%", status: "danger", trend: 0.9 },
      { name: "Perfect Order Rate", value: "85%", target: "90%", status: "warning", trend: 1.5 },
      { name: "Logistics Cost per Unit", value: "$2.80", target: "$2.00", status: "danger", trend: 0.6 },
      { name: "Capacity Utilization", value: "78%", target: "85%", status: "warning", trend: 2.2 },
      { name: "Return Rate", value: "4.5%", target: "3%", status: "danger", trend: 1.1 },
      { name: "Forecast Accuracy", value: "82%", target: "90%", status: "warning", trend: 1.8 },
    ],
    insights: {
      summary:
        "Operations are facing supply chain bottlenecks and cost overruns. Improving supplier management and logistics efficiency is critical.",
      risks: [
        "Supplier delays impacting delivery",
        "High logistics costs",
        "Production downtime",
        "Inventory imbalances",
      ],
      opportunities: [
        "Supplier collaboration platforms",
        "Real-time inventory tracking",
        "Predictive maintenance",
        "AI-powered demand forecasting",
      ],
    },
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    kpis: [
      { name: "Employee Turnover", value: "12.1%", target: "8%", status: "danger", trend: 2.5 },
      { name: "Time to Fill", value: "32 days", target: "25 days", status: "danger", trend: 3.1 },
      { name: "Absenteeism Rate", value: "4.2%", target: "3%", status: "danger", trend: 1.0 },
      { name: "Training Hours per Employee", value: "18", target: "20", status: "warning", trend: 0.6 },
      { name: "Engagement Score", value: "74%", target: "80%", status: "warning", trend: 1.3 },
      { name: "Diversity Ratio", value: "38%", target: "45%", status: "warning", trend: 0.9 },
      { name: "Promotion Rate", value: "6.5%", target: "8%", status: "warning", trend: 0.4 },
      { name: "Compensation Ratio", value: "0.92", target: "1.0", status: "warning", trend: 0.1 },
      { name: "Benefits Utilization", value: "68%", target: "75%", status: "warning", trend: 0.7 },
      { name: "Internal Mobility", value: "9.2%", target: "12%", status: "warning", trend: 0.3 },
      { name: "HR Cost per Employee", value: "$1,200", target: "$1,000", status: "danger", trend: 2.2 },
      { name: "Compliance Incidents", value: "3", target: "0", status: "danger", trend: 1.0 },
    ],
    insights: {
      summary:
        "HR is challenged by high turnover and absenteeism. Focus on engagement, diversity, and internal mobility to improve outcomes.",
      risks: [
        "High employee turnover",
        "Absenteeism impacting productivity",
        "Compliance incidents",
        "Rising HR costs",
      ],
      opportunities: [
        "Employee engagement programs",
        "Diversity and inclusion initiatives",
        "AI-driven talent acquisition",
        "Upskilling and internal mobility",
      ],
    },
  },
];

function KPIGauge({ kpi }: { kpi: any }) {
  let statusColor =
    kpi.status === "danger"
      ? "bg-red-500/80 text-red-100"
      : kpi.status === "warning"
      ? "bg-yellow-500/80 text-yellow-900"
      : "bg-green-500/80 text-green-900";
  let trendIcon = kpi.trend > 0 ? <TrendingUp className="w-4 h-4 inline" /> : <TrendingDown className="w-4 h-4 inline" />;
  let trendColor = kpi.trend > 0 ? "text-green-400" : "text-red-400";
  return (
    <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-inner min-w-[140px]">
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusColor}`}>{kpi.status === "danger" ? "Critical" : kpi.status === "warning" ? "Warning" : "On Track"}</span>
        <span className={`text-xs ${trendColor}`}>{trendIcon} {Math.abs(kpi.trend)}%</span>
      </div>
      <div className="text-lg font-bold text-foreground/90">{kpi.value}</div>
      <div className="text-xs text-muted-foreground">Target: {kpi.target}</div>
      <div className="text-xs text-muted-foreground font-medium mt-1">{kpi.name}</div>
    </div>
  );
}

export default function BusinessIntelligenceDashboard() {
  const [selectedFunction, setSelectedFunction] = useState<string>(businessFunctions[0].id);
  const selectedFunctionData = businessFunctions.find((f) => f.id === selectedFunction);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 px-0 md:px-8 py-8">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent mb-2">
          How Well Do You <span className="bg-gradient-to-r from-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">Know Your Business?</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">Real-time business intelligence across every function, KPI, and process. Instantly spot risks, opportunities, and performance gaps.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="rounded-xl bg-white/10 px-6 py-3 shadow-inner border border-white/10">
            <span className="text-2xl font-bold text-foreground">4</span>
            <span className="ml-2 text-sm text-muted-foreground">Business Functions</span>
          </div>
          <div className="rounded-xl bg-white/10 px-6 py-3 shadow-inner border border-white/10">
            <span className="text-2xl font-bold text-foreground">12</span>
            <span className="ml-2 text-sm text-muted-foreground">KPIs per Function</span>
          </div>
          <div className="rounded-xl bg-white/10 px-6 py-3 shadow-inner border border-white/10">
            <span className="text-2xl font-bold text-foreground">Real-time</span>
            <span className="ml-2 text-sm text-muted-foreground">Monitoring</span>
          </div>
        </div>
      </motion.div>

      {/* Filter Section */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-fuchsia-400" />
          <span className="text-base font-semibold text-foreground">Business Function:</span>
          <select
            className="ml-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            value={selectedFunction}
            onChange={(e) => setSelectedFunction(e.target.value)}
          >
            {businessFunctions.map((f) => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-400/30">KPI</Badge>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-400/30">Risk</Badge>
          <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-400 border-yellow-400/30">Opportunity</Badge>
        </div>
      </motion.div>

      {/* KPI Grid */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {selectedFunctionData?.kpis.map((kpi, idx) => (
          <KPIGauge key={kpi.name} kpi={kpi} />
        ))}
      </motion.div>

      {/* Insights Panels */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Performance Summary */}
        <Card className="bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-fuchsia-400">Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/80">{selectedFunctionData?.insights.summary}</p>
          </CardContent>
        </Card>
        {/* Key Risks */}
        <Card className="bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-yellow-400">Key Risks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 text-sm text-foreground/80 space-y-1">
              {selectedFunctionData?.insights.risks.map((risk, idx) => (
                <li key={idx}>{risk}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* Opportunities */}
        <Card className="bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-emerald-400">Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 text-sm text-foreground/80 space-y-1">
              {selectedFunctionData?.insights.opportunities.map((opp, idx) => (
                <li key={idx}>{opp}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bottom Section (as in screenshot 4) */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="max-w-5xl mx-auto mt-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-fuchsia-900/30 via-emerald-900/20 to-background/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow">
        <div className="flex-1 text-left">
          <h3 className="text-lg font-bold text-foreground mb-2">AI-Powered Business Health Monitoring</h3>
          <p className="text-sm text-muted-foreground">All metrics are updated in real-time. Leverage predictive analytics and AI-driven insights to stay ahead of risks and opportunities across every business function.</p>
        </div>
        <div className="flex gap-4 items-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
          <span className="text-base font-semibold text-emerald-400">All Systems Operational</span>
        </div>
      </motion.div>
    </motion.div>
  );
} 