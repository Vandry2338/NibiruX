"use client"

import React from 'react';
import { motion } from "framer-motion"
import { Building2, ArrowLeft, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AIVendorComparisonProps {
  useCaseId: string
  onBack: () => void
}

export default function AIVendorComparison({ useCaseId, onBack }: AIVendorComparisonProps) {
  const vendors = [
    {
      id: 'vendor-1',
      name: 'OpenAI',
      logo: '🤖',
      rating: 4.8,
      price: '$$$',
      features: ['GPT-4 Integration', 'Custom Fine-tuning', 'Enterprise Support', 'API Access'],
      pros: ['Leading AI technology', 'Excellent documentation', 'Strong community'],
      cons: ['Higher cost', 'Limited customization'],
      score: 92
    },
    {
      id: 'vendor-2',
      name: 'Anthropic',
      logo: '🧠',
      rating: 4.6,
      price: '$$',
      features: ['Claude Integration', 'Safety-focused', 'Research-backed', 'Custom Models'],
      pros: ['Safety-first approach', 'High-quality outputs', 'Good for enterprise'],
      cons: ['Newer platform', 'Limited integrations'],
      score: 88
    },
    {
      id: 'vendor-3',
      name: 'Google AI',
      logo: '🔍',
      rating: 4.4,
      price: '$$',
      features: ['PaLM API', 'Vertex AI', 'Cloud Integration', 'Scalable'],
      pros: ['Strong cloud integration', 'Good pricing', 'Enterprise ready'],
      cons: ['Complex setup', 'Limited model variety'],
      score: 85
    },
    {
      id: 'vendor-4',
      name: 'Microsoft Azure',
      logo: '☁️',
      rating: 4.3,
      price: '$$',
      features: ['Azure OpenAI', 'Cognitive Services', 'Enterprise Security', 'Global Presence'],
      pros: ['Enterprise security', 'Global infrastructure', 'Good support'],
      cons: ['Complex pricing', 'Vendor lock-in'],
      score: 82
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
            Back to Deep Dive
          </button>
          <h1 className="text-4xl font-bold text-white mb-4">AI Vendor Comparison</h1>
          <p className="text-slate-300 text-lg">
            Compare leading AI vendors for your {useCaseId} implementation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{vendor.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{vendor.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'text-yellow-400' : 'text-slate-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-slate-300 text-sm">{vendor.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">{vendor.score}</div>
                  <div className="text-slate-400 text-sm">Score</div>
                  <div className="text-lg font-semibold text-blue-400 mt-1">{vendor.price}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {vendor.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-green-400 font-semibold mb-2">Pros</h5>
                  <ul className="space-y-1">
                    {vendor.pros.map((pro, index) => (
                      <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                        <svg className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-semibold mb-2">Cons</h5>
                  <ul className="space-y-1">
                    {vendor.cons.map((con, index) => (
                      <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                        <svg className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Select Vendor
                </button>
                <button className="px-4 py-2 border border-white/20 text-white hover:bg-white/10 rounded-lg transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6">Comparison Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">OpenAI</div>
              <div className="text-slate-300 text-sm">Best Overall</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Anthropic</div>
              <div className="text-slate-300 text-sm">Safety Focus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">Google AI</div>
              <div className="text-slate-300 text-sm">Cloud Native</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Azure</div>
              <div className="text-slate-300 text-sm">Enterprise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 