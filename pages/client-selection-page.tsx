"use client"

import React from 'react';
import { motion } from "framer-motion"
import { Building2, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ClientSelectionPageProps {
  selectedClient: string | null
  onClientChange: (client: string) => void
}

export default function ClientSelectionPage({ selectedClient, onClientChange }: ClientSelectionPageProps) {
  const clients = [
    {
      id: 'client-1',
      name: 'TechCorp Industries',
      industry: 'Technology',
      size: 'Enterprise',
      logo: '🏢',
      description: 'Leading technology company with global operations',
      projects: 12,
      status: 'Active'
    },
    {
      id: 'client-2',
      name: 'HealthFlow Systems',
      industry: 'Healthcare',
      size: 'Large',
      logo: '🏥',
      description: 'Healthcare technology solutions provider',
      projects: 8,
      status: 'Active'
    },
    {
      id: 'client-3',
      name: 'GreenEnergy Solutions',
      industry: 'Energy',
      size: 'Medium',
      logo: '⚡',
      description: 'Renewable energy technology company',
      projects: 5,
      status: 'Active'
    },
    {
      id: 'client-4',
      name: 'FinTech Innovations',
      industry: 'Finance',
      size: 'Large',
      logo: '💳',
      description: 'Financial technology and digital banking solutions',
      projects: 15,
      status: 'Active'
    },
    {
      id: 'client-5',
      name: 'ManufacturePro',
      industry: 'Manufacturing',
      size: 'Enterprise',
      logo: '🏭',
      description: 'Advanced manufacturing and automation solutions',
      projects: 20,
      status: 'Active'
    },
    {
      id: 'client-6',
      name: 'RetailTech Solutions',
      industry: 'Retail',
      size: 'Medium',
      logo: '🛒',
      description: 'Retail technology and e-commerce platforms',
      projects: 7,
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Client Selection</h1>
          <p className="text-slate-300 text-lg">
            Select a client to view their transformation journey and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 cursor-pointer group ${
                selectedClient === client.id
                  ? 'border-blue-500 bg-blue-500/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => onClientChange(client.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{client.logo}</div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  client.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {client.status}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {client.name}
              </h3>
              
              <p className="text-slate-300 text-sm mb-4">
                {client.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Industry:</span>
                  <span className="text-white font-medium">{client.industry}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Size:</span>
                  <span className="text-white font-medium">{client.size}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Projects:</span>
                  <span className="text-blue-400 font-semibold">{client.projects}</span>
                </div>
              </div>

              <div className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-colors ${
                selectedClient === client.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}>
                {selectedClient === client.id ? 'Selected' : 'Select Client'}
              </div>
            </div>
          ))}
        </div>

        {selectedClient && (
          <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Selected Client Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-slate-300">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.4M</div>
                <div className="text-slate-300">Annual Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
                <div className="text-slate-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 