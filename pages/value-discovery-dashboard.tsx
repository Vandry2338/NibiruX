import React from 'react';

interface ValueDiscoveryDashboardProps {
  activeSection?: string;
}

export default function ValueDiscoveryDashboard({ activeSection = 'executive' }: ValueDiscoveryDashboardProps) {
  const sections = [
    { id: 'executive', name: 'Executive Summary', icon: '📊' },
    { id: 'value-chain', name: 'Value Chain Analysis', icon: '🔗' },
    { id: 'ai-navigator', name: 'AI Navigator', icon: '🤖' }
  ];

  const metrics = [
    { name: 'Total Value Potential', value: '$12.4M', change: '+15%', color: 'text-green-400' },
    { name: 'ROI Projection', value: '285%', change: '+8%', color: 'text-blue-400' },
    { name: 'Implementation Timeline', value: '18 months', change: '-2 months', color: 'text-yellow-400' },
    { name: 'Risk Score', value: 'Low', change: '-12%', color: 'text-purple-400' }
  ];

  const valueChains = [
    {
      id: 'vc-1',
      name: 'Customer Experience',
      value: '$4.2M',
      efficiency: '+35%',
      status: 'High Priority'
    },
    {
      id: 'vc-2',
      name: 'Operations & Supply Chain',
      value: '$3.8M',
      efficiency: '+28%',
      status: 'Medium Priority'
    },
    {
      id: 'vc-3',
      name: 'Technology Infrastructure',
      value: '$2.9M',
      efficiency: '+42%',
      status: 'High Priority'
    },
    {
      id: 'vc-4',
      name: 'Data & Analytics',
      value: '$1.5M',
      efficiency: '+55%',
      status: 'Critical'
    }
  ];

  const aiOpportunities = [
    {
      id: 'ai-1',
      name: 'Predictive Analytics',
      impact: 'High',
      complexity: 'Medium',
      timeline: '6 months',
      value: '$2.1M'
    },
    {
      id: 'ai-2',
      name: 'Process Automation',
      impact: 'High',
      complexity: 'Low',
      timeline: '4 months',
      value: '$1.8M'
    },
    {
      id: 'ai-3',
      name: 'Customer Intelligence',
      impact: 'Medium',
      complexity: 'High',
      timeline: '8 months',
      value: '$1.5M'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Value Discovery Dashboard</h1>
          <p className="text-slate-300 text-lg">
            Comprehensive analysis of value creation opportunities and strategic insights
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex space-x-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-slate-300 mb-2">{metric.name}</div>
              <div className="text-green-400 text-sm">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Content based on active section */}
        {activeSection === 'executive' && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Executive Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Findings</h3>
                  <ul className="space-y-2">
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      $12.4M total value potential identified
                    </li>
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      285% projected ROI over 3 years
                    </li>
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Low risk implementation strategy
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Prioritize customer experience initiatives
                    </li>
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Invest in AI and automation capabilities
                    </li>
                    <li className="text-slate-300 flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Focus on data-driven decision making
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'value-chain' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Value Chain Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {valueChains.map((chain) => (
                <div key={chain.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{chain.name}</h3>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      chain.status === 'Critical' ? 'bg-red-500/20 text-red-300' :
                      chain.status === 'High Priority' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {chain.status}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Value Potential:</span>
                      <span className="text-green-400 font-semibold">{chain.value}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Efficiency Gain:</span>
                      <span className="text-blue-400 font-semibold">{chain.efficiency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'ai-navigator' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">AI Opportunities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {aiOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{opportunity.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Impact:</span>
                      <span className={`font-semibold ${
                        opportunity.impact === 'High' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {opportunity.impact}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Complexity:</span>
                      <span className={`font-semibold ${
                        opportunity.complexity === 'Low' ? 'text-green-400' :
                        opportunity.complexity === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {opportunity.complexity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Timeline:</span>
                      <span className="text-white font-medium">{opportunity.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Value:</span>
                      <span className="text-green-400 font-semibold">{opportunity.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 