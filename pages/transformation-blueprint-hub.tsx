import React from 'react';

export default function TransformationBlueprintHub() {
  const blueprints = [
    {
      id: 'bp-1',
      name: 'Digital Transformation Blueprint',
      category: 'Technology',
      status: 'Active',
      progress: 75,
      description: 'Comprehensive digital transformation strategy for enterprise modernization',
      phases: ['Assessment', 'Planning', 'Implementation', 'Optimization'],
      timeline: '12 months',
      budget: '$2.5M'
    },
    {
      id: 'bp-2',
      name: 'AI Integration Framework',
      category: 'AI/ML',
      status: 'In Progress',
      progress: 45,
      description: 'Strategic framework for AI integration across business processes',
      phases: ['Discovery', 'Pilot', 'Scale', 'Optimize'],
      timeline: '18 months',
      budget: '$1.8M'
    },
    {
      id: 'bp-3',
      name: 'Cloud Migration Strategy',
      category: 'Infrastructure',
      status: 'Planning',
      progress: 25,
      description: 'Multi-cloud migration strategy with security and compliance focus',
      phases: ['Assessment', 'Migration', 'Validation', 'Optimization'],
      timeline: '24 months',
      budget: '$3.2M'
    }
  ];

  const metrics = [
    { name: 'Active Blueprints', value: '3', color: 'text-blue-400' },
    { name: 'Total Investment', value: '$7.5M', color: 'text-green-400' },
    { name: 'Avg Progress', value: '48%', color: 'text-yellow-400' },
    { name: 'Success Rate', value: '92%', color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Transformation Blueprint Hub</h1>
          <p className="text-slate-300 text-lg">
            Strategic blueprints for digital transformation and organizational change
          </p>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-slate-300">{metric.name}</div>
            </div>
          ))}
        </div>

        {/* Blueprint Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Active Blueprints</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blueprints.map((blueprint) => (
              <div key={blueprint.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{blueprint.name}</h3>
                    <div className="text-slate-300 text-sm">{blueprint.category}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    blueprint.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                    blueprint.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {blueprint.status}
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4">{blueprint.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 text-sm">Progress</span>
                    <span className="text-white font-semibold">{blueprint.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${blueprint.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Phases */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Phases</h4>
                  <div className="flex flex-wrap gap-2">
                    {blueprint.phases.map((phase, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded">
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="text-white font-medium">{blueprint.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Budget:</span>
                    <span className="text-green-400 font-semibold">{blueprint.budget}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Insights */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Strategic Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Transformation Priorities</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Technology Modernization</span>
                  <span className="text-green-400 font-semibold">High</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Process Automation</span>
                  <span className="text-yellow-400 font-semibold">Medium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Data Strategy</span>
                  <span className="text-green-400 font-semibold">High</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Change Management</span>
                  <span className="text-blue-400 font-semibold">Critical</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Success Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Efficiency Gains</span>
                  <span className="text-green-400 font-semibold">+35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Cost Reduction</span>
                  <span className="text-green-400 font-semibold">-28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Time to Market</span>
                  <span className="text-green-400 font-semibold">-45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">User Satisfaction</span>
                  <span className="text-green-400 font-semibold">+42%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 