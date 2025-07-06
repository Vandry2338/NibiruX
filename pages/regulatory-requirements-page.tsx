"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Shield, FileText, AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const regulations = [
  {
    id: 'sox',
    name: 'Sarbanes-Oxley Act (SOX)',
    category: 'Financial Reporting',
    status: 'Compliant',
    priority: 'Critical',
    description: 'Mandates strict controls on financial reporting timelines and accuracy for public companies.',
    requirements: [
      'Documented internal controls over financial reporting',
      'Management assessment of control effectiveness',
      'External auditor attestation of controls'
    ],
    statusColor: 'bg-success/20 text-success',
    priorityColor: 'bg-destructive/20 text-destructive',
    cardAccent: 'from-destructive/30 to-background/10',
  },
  {
    id: 'ifrs16',
    name: 'IFRS 16 Lease Accounting',
    category: 'Accounting Standards',
    status: 'In Progress',
    priority: 'High',
    description: 'Requires detailed lease accounting with specific timing requirements and balance sheet recognition.',
    requirements: [
      'Lease identification and classification',
      'Right-of-use asset recognition',
      'Lease liability measurement'
    ],
    statusColor: 'bg-warning/20 text-warning',
    priorityColor: 'bg-warning/20 text-warning',
    cardAccent: 'from-warning/30 to-background/10',
  },
  {
    id: 'gdpr',
    name: 'GDPR Data Protection',
    category: 'Data Privacy',
    status: 'Compliant',
    priority: 'High',
    description: 'European regulation requiring comprehensive data protection and privacy controls.',
    requirements: [
      'Data protection impact assessments',
      'Privacy by design implementation',
      'Data subject rights management'
    ],
    statusColor: 'bg-success/20 text-success',
    priorityColor: 'bg-warning/20 text-warning',
    cardAccent: 'from-primary/30 to-background/10',
  },
  {
    id: 'pcidss',
    name: 'PCI DSS Compliance',
    category: 'Payment Security',
    status: 'Review Required',
    priority: 'Medium',
    description: 'Security standards for organizations handling credit card information.',
    requirements: [
      'Secure network architecture',
      'Regular security testing',
      'Access control implementation'
    ],
    statusColor: 'bg-destructive/20 text-destructive',
    priorityColor: 'bg-accent/20 text-accent',
    cardAccent: 'from-accent/30 to-background/10',
  },
];

const RegulatoryRequirementsPage = () => {
  const [selectedRegulation, setSelectedRegulation] = useState('sox');
  const selectedReg = regulations.find(r => r.id === selectedRegulation);

  const RegulationCard = ({ regulation, isSelected, onClick }: any) => (
    <div
      onClick={onClick}
      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-xl border-white/20 hover:border-primary/60 hover:shadow-xl ${
        isSelected ? 'ring-2 ring-primary/60 scale-[1.03]' : 'opacity-80 hover:opacity-100'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            regulation.status === 'Compliant' ? 'bg-success' :
            regulation.status === 'In Progress' ? 'bg-warning' : 'bg-destructive'
          }`} />
          <span className="text-xs text-muted-foreground font-medium">{regulation.category}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${regulation.statusColor}`}>{regulation.status}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{regulation.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{regulation.description}</p>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 rounded text-xs font-medium ${regulation.priorityColor}`}>{regulation.priority} Priority</span>
        <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 font-inter relative">
      {/* Page Header */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-foreground font-semibold">Regulatory Requirements</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
              Regulatory
              <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Requirements
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Key compliance and regulatory considerations for your business operations with real-time status tracking.
            </p>
          </div>
        </div>
      </section>
      {/* Regulatory Content */}
      <section className="py-12 px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Regulation Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Key Regulations</h2>
              {regulations.map(regulation => (
                <RegulationCard
                  key={regulation.id}
                  regulation={regulation}
                  isSelected={selectedRegulation === regulation.id}
                  onClick={() => setSelectedRegulation(regulation.id)}
                />
              ))}
            </div>
            {/* Detailed View */}
            <div className="lg:sticky lg:top-8">
              {selectedReg ? (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-white/20">
                  <div className={`p-6 border-b border-white/20 bg-gradient-to-br ${selectedReg.cardAccent}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${
                          selectedReg.status === 'Compliant' ? 'bg-success' :
                          selectedReg.status === 'In Progress' ? 'bg-warning' : 'bg-destructive'
                        }`} />
                        <span className="text-xs text-muted-foreground font-medium">{selectedReg.category}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedReg.statusColor}`}>{selectedReg.status}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{selectedReg.name}</h3>
                    <p className="text-muted-foreground">{selectedReg.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <svg className="h-5 w-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Key Requirements
                    </h4>
                    <div className="space-y-3">
                      {selectedReg.requirements.map((requirement: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80">{requirement}</span>
                        </div>
                      ))}
                    </div>
                    {/* Action Items */}
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h5 className="font-semibold text-foreground mb-2">Next Actions</h5>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {selectedReg.status === 'Compliant' ? (
                          <>
                            <div>• Annual compliance review scheduled</div>
                            <div>• Monitor for regulatory updates</div>
                            <div>• Maintain documentation current</div>
                          </>
                        ) : selectedReg.status === 'In Progress' ? (
                          <>
                            <div>• Complete implementation by Q2 2025</div>
                            <div>• Schedule compliance audit</div>
                            <div>• Update internal controls</div>
                          </>
                        ) : (
                          <>
                            <div>• Immediate assessment required</div>
                            <div>• Develop remediation plan</div>
                            <div>• Assign compliance team</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center">
                  <div className="text-muted-foreground">
                    <svg className="h-12 w-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <p className="text-lg font-medium">Select a regulation to view details</p>
                    <p className="text-sm mt-2">Choose from the regulations on the left to see compliance requirements and next steps.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegulatoryRequirementsPage; 