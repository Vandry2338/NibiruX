"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Zap, Globe, Shield, BarChart3, ArrowUpRight, Calendar, DollarSign, CheckCircle, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const focusAreas = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    priority: 'High',
    impact: 'Transformational',
    timeline: 'Q1-Q4 2025',
    investment: '$2.4M',
    description: 'Comprehensive digitization of core business processes and customer experiences.',
    objectives: [
      'Implement AI-powered automation across finance operations',
      'Deploy cloud-first infrastructure strategy',
      'Establish data-driven decision making framework',
      'Launch digital customer experience platform'
    ],
    kpis: [
      { metric: 'Process Automation', current: 35, target: 80 },
      { metric: 'Digital Revenue %', current: 42, target: 70 },
      { metric: 'Customer Digital Adoption', current: 58, target: 85 }
    ],
    icon: Zap,
    color: 'text-primary',
    gradient: 'from-primary/30 to-secondary/30',
    cardAccent: 'from-primary/30 to-background/10',
  },
  {
    id: 'market-expansion',
    title: 'Market Expansion',
    priority: 'Medium',
    impact: 'High',
    timeline: 'Q2-Q3 2025',
    investment: '$1.8M',
    description: 'Strategic expansion into new geographic markets and customer segments.',
    objectives: [
      'Launch operations in Southeast Asian markets',
      'Develop SMB customer segment strategy',
      'Establish strategic partnerships',
      'Build localized product offerings'
    ],
    kpis: [
      { metric: 'New Market Revenue', current: 0, target: 25 },
      { metric: 'Market Share Growth', current: 18.7, target: 22 },
      { metric: 'Customer Acquisition', current: 2847, target: 4200 }
    ],
    icon: Globe,
    color: 'text-success',
    gradient: 'from-success/30 to-accent/30',
    cardAccent: 'from-success/30 to-background/10',
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence',
    priority: 'High',
    impact: 'Incremental',
    timeline: 'Q1-Q2 2025',
    investment: '$950K',
    description: 'Optimize operations for efficiency, quality, and cost effectiveness.',
    objectives: [
      'Implement lean process optimization',
      'Enhance quality management systems',
      'Develop supplier relationship management',
      'Establish performance monitoring dashboard'
    ],
    kpis: [
      { metric: 'Operational Efficiency', current: 72, target: 90 },
      { metric: 'Cost Reduction %', current: 8, target: 15 },
      { metric: 'Quality Score', current: 4.2, target: 4.8 }
    ],
    icon: Target,
    color: 'text-warning',
    gradient: 'from-warning/30 to-primary/30',
    cardAccent: 'from-warning/30 to-background/10',
  }
];

const StrategicFocusAreasPage = () => {
  const [selectedFocusArea, setSelectedFocusArea] = useState('digital-transformation');

  const FocusAreaCard = ({ area, isSelected, onClick }: any) => (
    <div
      onClick={onClick}
      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-xl border-white/20 hover:border-primary/60 hover:shadow-xl ${
        isSelected ? 'ring-2 ring-primary/60 scale-[1.03]' : 'opacity-80 hover:opacity-100'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center`}>
          <area.icon className="h-6 w-6 text-foreground" />
        </div>
        <div className="text-right">
          <div className={`text-xs px-2 py-1 rounded-full font-medium ${
            area.priority === 'High' ? 'bg-destructive/20 text-destructive' :
            area.priority === 'Medium' ? 'bg-warning/20 text-warning' : 'bg-primary/20 text-primary'
          }`}>
            {area.priority} Priority
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">Investment</div>
          <div className="font-semibold text-foreground">{area.investment}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Timeline</div>
          <div className="font-semibold text-foreground">{area.timeline}</div>
        </div>
      </div>
    </div>
  );

  const selectedArea = focusAreas.find(area => area.id === selectedFocusArea);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Page Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Target className="h-5 w-5" />
              <span className="text-foreground font-semibold">Strategic Focus Areas</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Focus Areas
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Identify and prioritize strategic initiatives based on data-driven insights to drive sustainable growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Content */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl space-y-8">
          
          {/* Strategic Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/20 hover:border-primary/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Active Initiatives</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/20 hover:border-success/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-success mb-1">$5.15M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/20 hover:border-warning/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-warning" />
                </div>
                <div className="text-2xl font-bold text-warning mb-1">18M</div>
                <div className="text-sm text-muted-foreground">Expected ROI</div>
              </CardContent>
            </Card>
          </div>

          {/* Focus Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Focus Area Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Strategic Initiatives</h2>
              {focusAreas.map(area => (
                <FocusAreaCard 
                  key={area.id}
                  area={area}
                  isSelected={selectedFocusArea === area.id}
                  onClick={() => setSelectedFocusArea(area.id)}
                />
              ))}
            </div>

            {/* Detailed View */}
            <div className="lg:sticky lg:top-8">
              {selectedArea ? (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-white/20">
                  <div className={`p-6 border-b border-white/20 bg-gradient-to-br ${selectedArea.cardAccent}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${selectedArea.gradient} rounded-2xl flex items-center justify-center`}>
                        <selectedArea.icon className="h-8 w-8 text-foreground" />
                      </div>
                      <div className="text-right">
                        <div className={`text-xs px-3 py-1 rounded-full font-medium ${
                          selectedArea.priority === 'High' ? 'bg-destructive/20 text-destructive' :
                          selectedArea.priority === 'Medium' ? 'bg-warning/20 text-warning' : 'bg-primary/20 text-primary'
                        }`}>
                          {selectedArea.priority} Priority
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{selectedArea.impact} Impact</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{selectedArea.title}</h3>
                    <p className="text-muted-foreground">{selectedArea.description}</p>
                  </div>
                  
                  <div className="p-6">
                    {/* Objectives */}
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Key Objectives
                    </h4>
                    <div className="space-y-3 mb-6">
                      {selectedArea.objectives.map((objective: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{objective}</span>
                        </div>
                      ))}
                    </div>

                    {/* KPIs */}
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-warning" />
                      Key Performance Indicators
                    </h4>
                    <div className="space-y-4">
                      {selectedArea.kpis.map((kpi: any, index: number) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-foreground">{kpi.metric}</span>
                            <span className="text-sm text-muted-foreground">{kpi.current} → {kpi.target}</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${(kpi.current / kpi.target) * 100}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Current: {kpi.current}</span>
                            <span>Target: {kpi.target}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Investment Details */}
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Investment</div>
                          <div className="text-lg font-bold text-foreground">{selectedArea.investment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                          <div className="text-lg font-bold text-foreground">{selectedArea.timeline}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center">
                  <div className="text-muted-foreground">
                    <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Select a focus area to view details</p>
                    <p className="text-sm mt-2">Choose from the strategic initiatives on the left to see objectives and KPIs.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Strategic Roadmap */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-white/20">
              <CardTitle className="text-xl font-heading font-bold text-foreground">Strategic Roadmap 2025</CardTitle>
              <p className="text-muted-foreground">Timeline view of strategic initiatives and key milestones</p>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Q1 2025 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-sm">Q1</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Jan - Mar 2025</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-sm font-medium text-foreground">Digital Transformation</div>
                      <div className="text-xs text-muted-foreground">AI automation deployment</div>
                    </div>
                    <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                      <div className="text-sm font-medium text-foreground">Operational Excellence</div>
                      <div className="text-xs text-muted-foreground">Process optimization</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2025 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-success font-bold text-sm">Q2</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Apr - Jun 2025</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-sm font-medium text-foreground">Market Expansion</div>
                      <div className="text-xs text-muted-foreground">Southeast Asia launch</div>
                    </div>
                    <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                      <div className="text-sm font-medium text-foreground">Operational Excellence</div>
                      <div className="text-xs text-muted-foreground">Quality systems</div>
                    </div>
                  </div>
                </div>

                {/* Q3 2025 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-bold text-sm">Q3</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Jul - Sep 2025</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-sm font-medium text-foreground">Digital Transformation</div>
                      <div className="text-xs text-muted-foreground">Cloud infrastructure</div>
                    </div>
                    <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-sm font-medium text-foreground">Market Expansion</div>
                      <div className="text-xs text-muted-foreground">SMB segment launch</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-destructive font-bold text-sm">Q4</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Oct - Dec 2025</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-sm font-medium text-foreground">Digital Transformation</div>
                      <div className="text-xs text-muted-foreground">Customer platform launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">Strategic Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-primary/20">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accelerate Digital Initiatives</h4>
                  <p className="text-muted-foreground text-sm">Prioritize AI automation and cloud infrastructure to maintain competitive advantage in rapidly evolving market.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-secondary/20">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Balance Growth & Excellence</h4>
                  <p className="text-muted-foreground text-sm">Ensure operational excellence foundations support sustainable market expansion and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategicFocusAreasPage; 