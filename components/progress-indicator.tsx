"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, Clock } from "lucide-react"

interface Step {
  id: string
  title: string
  description?: string
  status: "completed" | "current" | "pending"
}

interface ProgressIndicatorProps {
  steps: Step[]
  orientation?: "horizontal" | "vertical"
  className?: string
}

export function ProgressIndicator({ steps, orientation = "horizontal", className = "" }: ProgressIndicatorProps) {
  const getStepIcon = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "current":
        return <Clock className="h-6 w-6 text-primary animate-pulse" />
      case "pending":
        return <Circle className="h-6 w-6 text-slate-300" />
    }
  }

  const getStepColor = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "current":
        return "bg-primary"
      case "pending":
        return "bg-slate-300"
    }
  }

  if (orientation === "vertical") {
    return (
      <div className={`space-y-4 ${className}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${getStepColor(step.status)}`}
              >
                {getStepIcon(step.status)}
              </motion.div>
              {index < steps.length - 1 && (
                <div className={`w-0.5 h-8 mt-2 ${step.status === "completed" ? "bg-green-500" : "bg-slate-300"}`} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <h3
                className={`font-semibold ${step.status === "current" ? "text-primary" : step.status === "completed" ? "text-green-700" : "text-slate-500"}`}
              >
                {step.title}
              </h3>
              {step.description && <p className="text-sm text-slate-600 mt-1">{step.description}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center flex-1"
        >
          <div className="flex items-center w-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${getStepColor(step.status)} relative z-10`}
            >
              {getStepIcon(step.status)}
            </motion.div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${step.status === "completed" ? "bg-green-500" : "bg-slate-300"}`} />
            )}
          </div>
          <div className="text-center mt-3">
            <h3
              className={`text-sm font-semibold ${step.status === "current" ? "text-primary" : step.status === "completed" ? "text-green-700" : "text-slate-500"}`}
            >
              {step.title}
            </h3>
            {step.description && <p className="text-xs text-slate-600 mt-1">{step.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
