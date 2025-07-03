"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, type LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  trend?: number
  trendLabel?: string
  icon?: LucideIcon
  description?: string
  color?: "primary" | "secondary" | "accent" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MetricCard({
  title,
  value,
  trend,
  trendLabel,
  icon: Icon,
  description,
  color = "primary",
  size = "md",
  className = "",
}: MetricCardProps) {
  const colorClasses = {
    primary: "from-primary/10 to-primary/5 border-primary/20",
    secondary: "from-secondary/10 to-secondary/5 border-secondary/20",
    accent: "from-accent/10 to-accent/5 border-accent/20",
    success: "from-green-500/10 to-green-500/5 border-green-500/20",
    warning: "from-yellow-500/10 to-yellow-500/5 border-yellow-500/20",
    danger: "from-red-500/10 to-red-500/5 border-red-500/20",
  }

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  }

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  const getTrendIcon = () => {
    if (!trend) return <Minus className="h-4 w-4" />
    return trend > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />
  }

  const getTrendColor = () => {
    if (!trend) return "text-slate-500"
    return trend > 0 ? "text-green-600" : "text-red-600"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card
        className={`bg-gradient-to-br ${colorClasses[color]} border shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <CardContent className={sizeClasses[size]}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {Icon && <Icon className={`h-5 w-5 ${iconColors[color]}`} />}
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">{title}</h3>
              </div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-2"
              >
                <span className="text-3xl font-bold text-slate-900">{value}</span>
              </motion.div>

              {description && <p className="text-sm text-slate-600 mb-3">{description}</p>}

              {trend !== undefined && (
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`${getTrendColor()} border-current`}>
                    <div className="flex items-center gap-1">
                      {getTrendIcon()}
                      <span className="font-semibold">
                        {trend > 0 ? "+" : ""}
                        {trend}%
                      </span>
                    </div>
                  </Badge>
                  {trendLabel && <span className="text-xs text-slate-500">{trendLabel}</span>}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
