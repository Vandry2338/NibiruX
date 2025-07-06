"use client"

import React from 'react';
import { CompetitiveKPIAnalysis } from '../components/competitive-kpi-analysis';

// Mock data for the KPI analysis
const mockKpiData = {
  yourCompany: {
    name: "Your Company",
    value: 85,
    color: "#007CC2"
  },
  competitors: [
    { name: "Competitor A", value: 78, color: "#10B981", marketShare: "25%" },
    { name: "Competitor B", value: 82, color: "#F59E0B", marketShare: "18%" },
    { name: "Competitor C", value: 75, color: "#EF4444", marketShare: "12%" }
  ],
  benchmarks: {
    bestInClass: { value: 92, label: "Industry Leader" },
    industryAverage: { value: 68, label: "Market Standard" }
  }
};

const mockSelectedKPI = {
  value: "85%",
  description: "Customer Satisfaction Score"
};

interface AIDeepDiveViewProps {
  useCaseId?: string
  onBack?: () => void
  onNavigateToComparison?: (id: string) => void
}

export default function AIDeepDiveView({ useCaseId, onBack, onNavigateToComparison }: AIDeepDiveViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">AI Deep Dive Analysis</h1>
          <p className="text-slate-300 text-lg">
            Comprehensive analysis of AI capabilities and competitive landscape
          </p>
        </div>
        
        <CompetitiveKPIAnalysis kpiData={mockKpiData} selectedKPI={mockSelectedKPI} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Capability Assessment</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Machine Learning Models</span>
                <span className="text-green-400 font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Natural Language Processing</span>
                <span className="text-green-400 font-semibold">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Computer Vision</span>
                <span className="text-yellow-400 font-semibold">Intermediate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Predictive Analytics</span>
                <span className="text-green-400 font-semibold">Advanced</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Competitive Analysis</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Position</span>
                <span className="text-blue-400 font-semibold">Leader</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Technology Stack</span>
                <span className="text-green-400 font-semibold">Cutting-edge</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Innovation Rate</span>
                <span className="text-green-400 font-semibold">High</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Share</span>
                <span className="text-blue-400 font-semibold">Growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 