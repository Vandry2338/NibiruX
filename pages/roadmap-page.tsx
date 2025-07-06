import React from 'react';

export default function RoadmapPage() {
  const phases = [
    {
      id: 'phase-1',
      name: 'Foundation Phase',
      duration: 'Q1 2024',
      status: 'Completed',
      milestones: [
        { name: 'Infrastructure Setup', completed: true, date: 'Jan 15, 2024' },
        { name: 'Team Formation', completed: true, date: 'Feb 1, 2024' },
        { name: 'Technology Stack Selection', completed: true, date: 'Feb 28, 2024' }
      ]
    },
    {
      id: 'phase-2',
      name: 'Development Phase',
      duration: 'Q2 2024',
      status: 'In Progress',
      milestones: [
        { name: 'Core Platform Development', completed: true, date: 'Mar 15, 2024' },
        { name: 'AI Integration', completed: false, date: 'Apr 30, 2024' },
        { name: 'Security Implementation', completed: false, date: 'May 15, 2024' }
      ]
    },
    {
      id: 'phase-3',
      name: 'Testing & Validation',
      duration: 'Q3 2024',
      status: 'Planned',
      milestones: [
        { name: 'Beta Testing', completed: false, date: 'Jul 1, 2024' },
        { name: 'User Acceptance Testing', completed: false, date: 'Aug 15, 2024' },
        { name: 'Performance Optimization', completed: false, date: 'Sep 30, 2024' }
      ]
    },
    {
      id: 'phase-4',
      name: 'Launch & Scale',
      duration: 'Q4 2024',
      status: 'Planned',
      milestones: [
        { name: 'Production Launch', completed: false, date: 'Oct 15, 2024' },
        { name: 'Market Expansion', completed: false, date: 'Nov 30, 2024' },
        { name: 'Full Scale Operations', completed: false, date: 'Dec 31, 2024' }
      ]
    }
  ];

  const metrics = [
    { name: 'Overall Progress', value: '45%', color: 'text-blue-400' },
    { name: 'On Schedule', value: '85%', color: 'text-green-400' },
    { name: 'Budget Utilized', value: '62%', color: 'text-yellow-400' },
    { name: 'Quality Score', value: '92%', color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Transformation Roadmap</h1>
          <p className="text-slate-300 text-lg">
            Strategic roadmap for digital transformation and AI implementation
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-slate-300">{metric.name}</div>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Implementation Timeline</h2>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={phase.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      phase.status === 'Completed' ? 'bg-green-500 text-white' :
                      phase.status === 'In Progress' ? 'bg-blue-500 text-white' :
                      'bg-slate-600 text-slate-300'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{phase.name}</h3>
                      <div className="text-slate-300 text-sm">{phase.duration}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    phase.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                    phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-slate-500/20 text-slate-300'
                  }`}>
                    {phase.status}
                  </div>
                </div>

                <div className="space-y-3">
                  {phase.milestones.map((milestone, mIndex) => (
                    <div key={mIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          milestone.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-slate-400'
                        }`}>
                          {milestone.completed && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${milestone.completed ? 'text-white' : 'text-slate-300'}`}>
                          {milestone.name}
                        </span>
                      </div>
                      <div className="text-slate-400 text-sm">{milestone.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Risk Assessment</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Technical Risk</span>
                  <span className="text-yellow-400 font-semibold">Medium</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Timeline Risk</span>
                  <span className="text-green-400 font-semibold">Low</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Budget Risk</span>
                  <span className="text-yellow-400 font-semibold">Medium</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300 text-sm">Complete AI integration by end of Q2</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300 text-sm">Begin security implementation</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300 text-sm">Prepare for beta testing phase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 