"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity } from "lucide-react"

interface DataPoint {
  label: string
  value: number
  trend?: number
  color?: string
}

interface DataVisualizationProps {
  title: string
  data: DataPoint[]
  type?: "bar" | "pie" | "trend"
  className?: string
}

export function DataVisualization({ title, data, type = "bar", className = "" }: DataVisualizationProps) {
  const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null)

  const maxValue = Math.max(...data.map((d) => d.value))

  const renderBarChart = () => (
    <div className="space-y-4">
      {data.map((point, index) => (
        <motion.div
          key={point.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">{point.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">{point.value.toLocaleString()}</span>
              {point.trend && (
                <Badge variant={point.trend > 0 ? "default" : "destructive"} className="text-xs">
                  {point.trend > 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(point.trend)}%
                </Badge>
              )}
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(point.value / maxValue) * 100}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`h-full rounded-full ${point.color || "bg-gradient-to-r from-primary to-secondary"}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderPieChart = () => {
    const total = data.reduce((sum, point) => sum + point.value, 0)
    let cumulativePercentage = 0

    return (
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((point, index) => {
              const percentage = (point.value / total) * 100
              const strokeDasharray = `${percentage} ${100 - percentage}`
              const strokeDashoffset = -cumulativePercentage
              cumulativePercentage += percentage

              return (
                <motion.circle
                  key={point.label}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={point.color || `hsl(${index * 60}, 70%, 50%)`}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="cursor-pointer hover:stroke-width-10 transition-all"
                  initial={{ strokeDasharray: "0 100" }}
                  animate={{ strokeDasharray }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  onClick={() => setSelectedPoint(point)}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{total.toLocaleString()}</div>
              <div className="text-sm text-slate-600">Total</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderTrendChart = () => (
    <div className="space-y-6">
      {data.map((point, index) => (
        <motion.div
          key={point.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${point.color || "bg-primary"}`} />
            <span className="font-medium text-slate-700">{point.label}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-slate-900">{point.value.toLocaleString()}</span>
            {point.trend && (
              <div className={`flex items-center gap-1 ${point.trend > 0 ? "text-green-600" : "text-red-600"}`}>
                {point.trend > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span className="font-semibold">{Math.abs(point.trend)}%</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <Card className={`bg-white/50 backdrop-blur-sm border-0 shadow-xl ${className}`}>
      <CardHeader className="bg-gradient-to-r from-slate-50/80 to-slate-100/80">
        <CardTitle className="flex items-center gap-2 text-slate-900">
          {type === "bar" && <BarChart3 className="h-5 w-5 text-primary" />}
          {type === "pie" && <PieChart className="h-5 w-5 text-secondary" />}
          {type === "trend" && <Activity className="h-5 w-5 text-accent" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {type === "bar" && renderBarChart()}
        {type === "pie" && renderPieChart()}
        {type === "trend" && renderTrendChart()}

        {selectedPoint && type === "pie" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20"
          >
            <h4 className="font-semibold text-slate-900">{selectedPoint.label}</h4>
            <p className="text-2xl font-bold text-primary">{selectedPoint.value.toLocaleString()}</p>
            <p className="text-sm text-slate-600">
              {((selectedPoint.value / data.reduce((sum, point) => sum + point.value, 0)) * 100).toFixed(1)}% of total
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
