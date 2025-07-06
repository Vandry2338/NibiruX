"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, AlertTriangle, CheckCircle, TrendingUp, PlusCircle, ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const SEVERITY_COLORS = {
  Critical: "bg-destructive/20 text-destructive border-destructive/40",
  High: "bg-warning/20 text-warning border-warning/40",
  Medium: "bg-primary/20 text-primary border-primary/40",
};

const PRIORITY_OPTIONS = [
  { value: "Critical", label: "Critical" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
];

const businessFunctions = [
  {
    id: "procurement",
    name: "Procurement & Sourcing",
    category: "Supply Chain",
    painPoints: [
      {
        id: "manual-invoice",
        title: "Manual Invoice Processing",
        description: "Time-consuming manual invoice processing leading to delays and errors",
      },
      {
        id: "supplier-performance",
        title: "Supplier Performance Issues",
        description: "Inconsistent supplier quality and delivery performance",
      },
      {
        id: "contract-management",
        title: "Contract Management Inefficiencies",
        description: "Poor contract visibility and compliance tracking",
      },
      {
        id: "purchase-order-delays",
        title: "Purchase Order Delays",
        description: "Lengthy approval processes causing procurement delays",
      },
    ],
  },
  {
    id: "production",
    name: "Production & Operations",
    category: "Operations",
    painPoints: [
      {
        id: "line-downtime",
        title: "Production Line Downtime",
        description: "Unplanned equipment failures causing production delays",
      },
      {
        id: "quality-control",
        title: "Quality Control Issues",
        description: "Inconsistent product quality leading to customer complaints",
      },
      {
        id: "manual-planning",
        title: "Manual Production Planning",
        description: "Inefficient manual planning processes leading to suboptimal resource allocation",
      },
      {
        id: "inventory-inefficiencies",
        title: "Inventory Management Inefficiencies",
        description: "Poor inventory tracking resulting in stockouts or excess inventory",
      },
    ],
  },
  {
    id: "quality",
    name: "Quality Assurance",
    category: "Quality Management",
    painPoints: [
      {
        id: "compliance-audit",
        title: "Compliance and Audit Challenges",
        description: "Difficulties in maintaining regulatory compliance and audit readiness",
      },
      {
        id: "documentation-issues",
        title: "Quality Documentation Issues",
        description: "Inconsistent quality documentation and traceability",
      },
      {
        id: "testing-delays",
        title: "Testing Process Delays",
        description: "Lengthy quality testing processes affecting time-to-market",
      },
      {
        id: "non-conformance",
        title: "Non-Conformance Management",
        description: "Poor tracking and resolution of quality non-conformances",
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Distribution",
    category: "Supply Chain",
    painPoints: [
      {
        id: "supply-chain-disruptions",
        title: "Supply Chain Disruptions",
        description: "Supplier delays and logistics issues affecting production schedules",
      },
      {
        id: "warehouse-issues",
        title: "Warehouse Management Issues",
        description: "Inefficient warehouse operations and inventory visibility",
      },
      {
        id: "transportation-delays",
        title: "Transportation Delays",
        description: "Delivery delays affecting customer satisfaction",
      },
      {
        id: "order-fulfillment",
        title: "Order Fulfillment Inefficiencies",
        description: "Slow order processing and shipping operations",
      },
    ],
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    category: "Commercial",
    painPoints: [
      {
        id: "customer-experience",
        title: "Customer Experience Inconsistencies",
        description: "Inconsistent customer experience across channels",
      },
      {
        id: "lead-management",
        title: "Lead Management Issues",
        description: "Poor lead tracking and conversion processes",
      },
      {
        id: "price-competition",
        title: "Price Competition Pressure",
        description: "Intense price competition eroding profit margins",
      },
      {
        id: "market-intelligence",
        title: "Market Intelligence Gaps",
        description: "Limited visibility into market trends and competitor activities",
      },
    ],
  },
  {
    id: "customer-service",
    name: "Customer Service",
    category: "Customer Experience",
    painPoints: [
      {
        id: "long-wait-times",
        title: "Long Customer Wait Times",
        description: "Extended response times affecting customer satisfaction",
      },
      {
        id: "service-request-tracking",
        title: "Service Request Tracking",
        description: "Poor visibility into service request status and resolution",
      },
      {
        id: "knowledge-management",
        title: "Knowledge Management Issues",
        description: "Inconsistent access to product and service information",
      },
      {
        id: "feedback-integration",
        title: "Customer Feedback Integration",
        description: "Limited integration of customer feedback into improvement processes",
      },
    ],
  },
];

const priorityOptions = [
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical":
      return "bg-destructive/20 border-destructive text-destructive";
    case "high":
      return "bg-warning/20 border-warning text-warning";
    case "medium":
      return "bg-accent/20 border-accent text-accent";
    case "low":
      return "bg-muted/20 border-muted text-muted-foreground";
    default:
      return "bg-muted/10 border-muted text-muted-foreground";
  }
};

const defaultPriorities: Record<string, string> = {};
businessFunctions.forEach((fn) => {
  fn.painPoints.forEach((pp) => {
    defaultPriorities[`${fn.id}-${pp.id}`] = "medium";
  });
});

const BusinessChallengeAssessmentPage = () => {
  const [priorities, setPriorities] = useState<Record<string, string>>(defaultPriorities);
  const [customChallenge, setCustomChallenge] = useState("");
  const [customFunction, setCustomFunction] = useState(businessFunctions[0].id);
  const [customPriority, setCustomPriority] = useState("medium");
  const [customChallenges, setCustomChallenges] = useState<any[]>([]);

  // Add navigation function
  const handleNavigate = (page: string) => {
    // This will be passed from the parent component
    if (typeof window !== 'undefined' && window.location) {
      window.location.href = `/client-hub?page=${page}`;
    }
  };

  const handlePriorityChange = (fnId: string, ppId: string, value: string) => {
    setPriorities((prev) => ({ ...prev, [`${fnId}-${ppId}`]: value }));
  };

  const handleAddCustom = () => {
    if (!customChallenge.trim() || !customPriority) return;
    setCustomChallenges((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        functionId: customFunction,
        title: customChallenge,
        priority: customPriority,
      },
    ]);
    setCustomChallenge("");
    setCustomPriority("medium");
  };

  // Progress summary
  const summary = Object.values({
    ...priorities,
    ...customChallenges.reduce<Record<string, string>>((acc, c) => {
      acc[c.id] = c.priority;
      return acc;
    }, {}),
  })
    .filter(Boolean)
    .reduce<Record<string, number>>((acc, p) => {
      acc[p as string] = (acc[p as string] || 0) + 1;
      return acc;
    }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-2xl" />
      </div>

      {/* Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-4">
              Value Chain <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">Challenge Assessment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Assess business challenges across your value chain components to identify strategic improvement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Matrix */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Challenge Cards */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessFunctions.map((fn) => (
              <div key={fn.id} className="space-y-6">
                <Card className="bg-white/5 backdrop-blur-xl border border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex flex-col gap-1">
                      {fn.name}
                      <span className="text-xs font-medium text-muted-foreground">{fn.category}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                {fn.painPoints.map((pp) => (
                  <Card key={pp.id} className="bg-white/10 border border-border shadow-sm">
                    <CardContent className="py-4">
                      <div className="flex flex-col gap-2">
                        <div className="font-semibold text-foreground">{pp.title}</div>
                        <div className="text-xs text-muted-foreground mb-1">{fn.category}</div>
                        <div className="text-sm text-muted-foreground mb-2">{pp.description}</div>
                        <div className="font-medium text-sm mb-1">Business Impact Priority</div>
                        <Select value={priorities[`${fn.id}-${pp.id}`]} onValueChange={(v) => handlePriorityChange(fn.id, pp.id, v)}>
                          <SelectTrigger className="w-full max-w-xs">
                            <SelectValue placeholder="Select impact level..." />
                          </SelectTrigger>
                          <SelectContent>
                            {priorityOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value} className={getPriorityColor(opt.value)}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {/* Custom challenges for this function */}
                {customChallenges.filter((c) => c.functionId === fn.id).map((c) => (
                  <Card key={c.id} className="bg-white/10 border border-border shadow-sm">
                    <CardContent className="py-4">
                      <div className="flex flex-col gap-2">
                        <div className="font-semibold text-foreground">{c.title}</div>
                        <div className="text-xs text-muted-foreground mb-1">Custom Challenge</div>
                        <div className="font-medium text-sm mb-1">Business Impact Priority</div>
                        <div className={`inline-block px-2 py-1 rounded text-xs font-semibold border ${getPriorityColor(c.priority)}`}>{priorityOptions.find((p) => p.value === c.priority)?.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          {/* Details & Add Custom */}
          <div className="space-y-8">
            {/* Details Panel */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  Assessment Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Object.keys(summary).length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
                    <span className="text-4xl mb-2">✔️</span>
                    <span className="text-sm">Select challenge priorities to see progress</span>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {priorityOptions.filter((p) => p.value).map((opt) => (
                      <li key={opt.value} className="flex items-center gap-2">
                        <span className={`inline-block w-3 h-3 rounded-full ${getPriorityColor(opt.value)}`}></span>
                        <span className="capitalize font-medium">{opt.label}:</span>
                        <span className="ml-auto font-bold">{summary[opt.value] || 0}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            {/* Add Custom Challenge */}
            <Card className="bg-white/10 backdrop-blur-xl border border-secondary/40 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-secondary flex items-center gap-2">
                  <PlusCircle className="h-5 w-5 text-secondary" />
                  Add Your Own Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Type a custom challenge..."
                    value={customChallenge}
                    onChange={(e) => setCustomChallenge(e.target.value)}
                    className="bg-background border-border"
                  />
                  <Select value={customFunction} onValueChange={setCustomFunction}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {businessFunctions.map((fn) => (
                        <SelectItem key={fn.id} value={fn.id}>{fn.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={customPriority} onValueChange={setCustomPriority}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select impact level..." />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityOptions.filter((p) => p.value).map((opt) => (
                        <SelectItem key={opt.value} value={opt.value} className={getPriorityColor(opt.value)}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAddCustom} className="mt-2" variant="secondary">Add Challenge</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Matrix Visualization */}
        <div className="container mx-auto max-w-7xl mt-16">
          <Card className="bg-white/90 backdrop-blur-xl border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-accent flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                Impact Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-muted-foreground">Challenge</th>
                      <th className="px-4 py-2 text-left text-muted-foreground">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Render all pain points as rows */}
                    {businessFunctions.flatMap((fn) =>
                      fn.painPoints.map((pp) => (
                        <tr key={`${fn.id}-${pp.id}`} className="border-b border-muted/20">
                          <td className="px-4 py-2 font-medium text-foreground">{pp.title}</td>
                          <td className="px-4 py-2 text-primary">{priorities[`${fn.id}-${pp.id}`] || "-"}</td>
                        </tr>
                      ))
                    )}
                    {/* Render custom challenges as rows */}
                    {customChallenges.map((c) => (
                      <tr key={c.id} className="border-b border-muted/20">
                        <td className="px-4 py-2 font-medium text-foreground">{c.title}</td>
                        <td className="px-4 py-2 text-primary">{c.priority || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Generate Report Button */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button 
              onClick={() => handleNavigate('pain-point-summary')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <FileText className="h-5 w-5 mr-2" />
              Generate Challenge Analysis Report
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessChallengeAssessmentPage; 