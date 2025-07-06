"use client"

import React from 'react';
import { motion } from "framer-motion"
import { Brain, Search, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AIUseCaseExplorerProps {
  onNavigateToDeepDive: (id: string) => void
  onBack: () => void
}

export default function AIUseCaseExplorer({ onNavigateToDeepDive, onBack }: AIUseCaseExplorerProps) {
  const useCases = [
    {
      id: 'invoice-matching',
      title: 'Invoice Matching & Processing',
      description: 'Automated invoice processing with AI-powered matching and validation',
      category: 'Finance',
      impact: 'High',
      complexity: 'Medium',
      roi: '85%'
    },
    {
      id: 'customer-service',
      title: 'Intelligent Customer Service',
      description: 'AI-powered chatbots and customer support automation',
      category: 'Customer Experience',
      impact: 'High',
      complexity: 'Low',
      roi: '120%'
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance',
      description: 'Machine learning models for equipment maintenance prediction',
      category: 'Operations',
      impact: 'Medium',
      complexity: 'High',
      roi: '95%'
    },
    {
      id: 'demand-forecasting',
      title: 'Demand Forecasting',
      description: 'Advanced analytics for supply chain and inventory optimization',
      category: 'Supply Chain',
      impact: 'High',
      complexity: 'Medium',
      roi: '110%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-white mb-4">AI Use Case Explorer</h1>
          <p className="text-slate-300 text-lg">
            Discover and analyze AI opportunities across your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigateToDeepDive(useCase.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {useCase.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    useCase.impact === 'High' ? 'bg-green-500/20 text-green-300' :
                    useCase.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {useCase.impact} Impact
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {useCase.title}
              </h3>
              
              <p className="text-slate-300 text-sm mb-4">
                {useCase.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-slate-400">Complexity:</span>
                  <span className={`font-medium ${
                    useCase.complexity === 'Low' ? 'text-green-400' :
                    useCase.complexity === 'Medium' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {useCase.complexity}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">ROI:</span>
                  <span className="text-green-400 font-semibold ml-1">{useCase.roi}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Explore Use Case
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">AI Readiness Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-slate-300">Data Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">72%</div>
              <div className="text-slate-300">Technical Infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">68%</div>
              <div className="text-slate-300">Organizational Readiness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 