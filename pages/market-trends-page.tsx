"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

const NibiruXLogo = () => (
  <div className="w-10 h-10 border-2 border-primary rounded-full relative shadow-lg">
    <div className="absolute inset-1 border border-secondary rounded-full"></div>
    <div className="absolute inset-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
  </div>
);

const TrendCard = ({ title, adoption, impact, period, description, implications, color }: {
  title: string;
  adoption: number;
  impact: string;
  period: string;
  description: string;
  implications: string[];
  color: string;
}) => (
  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 overflow-hidden shadow-lg">
    {/* Ambient Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 bg-${color} rounded-lg flex items-center justify-center`}>
          <TrendingUp className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 bg-${color}/20 text-${color}-300 rounded-full`}>{period}</span>
            <span className={`text-xs px-2 py-1 ${impact === 'High Impact' ? 'bg-red-500/20 text-red-300' : 'bg-orange-500/20 text-orange-300'} rounded-full`}>
              {impact}
            </span>
          </div>
        </div>
      </div>
      {/* Adoption Rate */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground text-sm">Adoption:</span>
          <span className={`text-2xl font-bold text-${color}-400`}>{adoption}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className={`bg-${color}-500 h-2 rounded-full transition-all duration-2000 ease-out`}
            style={{ width: `${adoption}%` }}
          />
        </div>
      </div>
      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      {/* Key Implications */}
      <div>
        <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          Key Implications
        </h4>
        <div className="space-y-2">
          {implications.map((implication, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 bg-${color}-400 rounded-full mt-2 flex-shrink-0`} />
              <span className="text-muted-foreground text-sm">{implication}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MarketTrendsPage = () => {
  const [trendData, setTrendData] = useState({
    aiFinancial: 0,
    realTimeReporting: 0
  });

  useEffect(() => {
    // Animate adoption percentages
    const targets = { aiFinancial: 78, realTimeReporting: 45 };
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setTrendData({
        aiFinancial: Math.floor(targets.aiFinancial * progress),
        realTimeReporting: Math.floor(targets.realTimeReporting * progress)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setTrendData(targets);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const trends = [
    {
      title: "AI-Powered Financial Automation",
      adoption: trendData.aiFinancial,
      impact: "High Impact",
      period: "2024-2025",
      description: "Artificial intelligence is revolutionizing financial processes, with 78% of organizations implementing AI-driven invoice processing and payment automation.",
      implications: [
        "Reduced processing times by 60-80%",
        "Improved accuracy rates to 99%+",
        "Enhanced fraud detection capabilities",
        "Significant cost reduction in manual processes"
      ],
      color: "primary"
    },
    {
      title: "Real-Time Financial Reporting",
      adoption: trendData.realTimeReporting,
      impact: "Medium Impact",
      period: "2024-2026",
      description: "Organizations are shifting from monthly to real-time financial reporting, enabling faster decision-making and improved business agility.",
      implications: [
        "Instant visibility into financial performance",
        "Faster month-end close processes",
        "Enhanced strategic decision-making",
        "Improved stakeholder confidence"
      ],
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>
      {/* Page Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-foreground font-semibold">Market Trends</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
              Market
              <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Trends
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Key market developments and emerging trends shaping the industry landscape and 
              business transformation.
            </p>
          </div>
        </div>
      </section>
      {/* Trends Content */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Trend Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <TrendCard key={index} {...trend} />
            ))}
          </div>
          {/* Market Analysis Summary */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-white/20">
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Market Analysis Summary</h3>
              <p className="text-muted-foreground">Strategic insights from current market trends and their business implications</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Market Growth */}
                <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">12.8%</div>
                  <div className="text-sm text-muted-foreground">Annual Market Growth</div>
                </div>
                {/* Innovation Index */}
                <div className="text-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">85</div>
                  <div className="text-sm text-muted-foreground">Innovation Index Score</div>
                </div>
                {/* Digital Adoption */}
                <div className="text-center p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">67%</div>
                  <div className="text-sm text-muted-foreground">Digital Transformation Rate</div>
                </div>
              </div>
              {/* Strategic Recommendations */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-white/20">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Strategic Recommendations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Accelerate AI Integration</div>
                      <div className="text-sm text-muted-foreground">Prioritize AI-powered automation to stay competitive in the rapidly evolving market</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Invest in Real-Time Infrastructure</div>
                      <div className="text-sm text-muted-foreground">Build capabilities for real-time reporting and decision-making systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketTrendsPage; 