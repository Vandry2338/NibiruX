"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Building2, Eye, EyeOff, Sparkles, Award, BarChart3 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  BarChart,
  Bar,
} from "recharts"

interface CompetitiveKPIAnalysisProps {
  kpiData: any
  selectedKPI: any
}

export function CompetitiveKPIAnalysis({ kpiData, selectedKPI }: CompetitiveKPIAnalysisProps) {
  const [visibleCompetitors, setVisibleCompetitors] = useState<{ [key: string]: boolean }>({})
  const [showBenchmarks, setShowBenchmarks] = useState(true)

  const toggleCompetitor = (name: string) => {
    setVisibleCompetitors((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const getChartData = () => {
    const data = [
      {
        name: kpiData.yourCompany.name,
        value: kpiData.yourCompany.value,
        color: kpiData.yourCompany.color,
        type: "your-company",
      },
    ]

    // Add visible competitors
    kpiData.competitors.forEach((competitor: any) => {
      if (visibleCompetitors[competitor.name]) {
        data.push({
          name: competitor.name,
          value: competitor.value,
          color: competitor.color,
          type: "competitor",
        })
      }
    })

    return data.sort((a, b) => a.value - b.value)
  }

  const getBarChartData = () => {
    const data = [
      {
        name: "Your Company",
        value: kpiData.yourCompany.value,
        fill: kpiData.yourCompany.color,
      },
    ]

    kpiData.competitors.forEach((competitor: any) => {
      if (visibleCompetitors[competitor.name]) {
        data.push({
          name: competitor.name.split(" ")[0], // Shortened name for chart
          value: competitor.value,
          fill: competitor.color,
        })
      }
    })

    return data
  }

  return (
    <div className="space-y-8">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-primary">Your Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-1">{selectedKPI.value}</div>
            <div className="text-sm text-muted-foreground">{selectedKPI.description}</div>
            <Badge variant="default" className="mt-2 bg-primary text-white">
              Current Value
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-700">Best in Class</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-1">{kpiData.benchmarks.bestInClass.value}</div>
            <div className="text-sm text-green-700">{kpiData.benchmarks.bestInClass.label}</div>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
              Target
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-700">Industry Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-1">{kpiData.benchmarks.industryAverage.value}</div>
            <div className="text-sm text-blue-700">{kpiData.benchmarks.industryAverage.label}</div>
            <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">
              Benchmark
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Toggle Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Building2 className="h-5 w-5 text-secondary" />
          Select Competitors to Compare
        </h3>
        <div className="flex flex-wrap gap-3">
          {kpiData.competitors.map((competitor: any) => (
            <motion.div key={competitor.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={visibleCompetitors[competitor.name] ? "default" : "outline"}
                onClick={() => toggleCompetitor(competitor.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  visibleCompetitors[competitor.name]
                    ? "bg-primary hover:bg-primary/90 shadow-lg text-white"
                    : "border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
                }`}
              >
                {visibleCompetitors[competitor.name] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {competitor.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {competitor.marketShare}
                </Badge>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <Card className="shadow-xl border-2 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance Comparison
              </CardTitle>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Show Benchmarks</label>
                <Switch checked={showBenchmarks} onCheckedChange={setShowBenchmarks} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getBarChartData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F8FAFC",
                      border: "2px solid #007CC2",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} />

                  {/* Benchmark Lines */}
                  {showBenchmarks && (
                    <>
                      <ReferenceLine
                        y={kpiData.benchmarks.bestInClass.value}
                        stroke="#10B981"
                        strokeDasharray="5 5"
                        label={{ value: "Best in Class", position: "topRight" }}
                      />
                      <ReferenceLine
                        y={kpiData.benchmarks.industryAverage.value}
                        stroke="#3B82F6"
                        strokeDasharray="5 5"
                        label={{ value: "Industry Average", position: "topRight" }}
                      />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="shadow-xl border-2 border-secondary/20">
          <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10 border-b border-secondary/20">
            <CardTitle className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-secondary" />
              Trend Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[{ name: "Performance" }]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F8FAFC",
                      border: "2px solid #E48400",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Legend />

                  {/* Data Points */}
                  {getChartData().map((item, index) => (
                    <Line
                      key={item.name}
                      type="monotone"
                      dataKey={() => item.value}
                      stroke={item.color}
                      strokeWidth={item.type === "your-company" ? 4 : 2}
                      dot={{ fill: item.color, strokeWidth: 2, r: item.type === "your-company" ? 8 : 6 }}
                      name={item.name}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.competitors
          .filter((competitor: any) => visibleCompetitors[competitor.name])
          .map((competitor: any, index: number) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-lg">{competitor.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{kpiData.metric}</p>
                    <p className="text-2xl font-bold text-foreground">{competitor.value}</p>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      Market Share: {competitor.marketShare}
                    </Badge>
                    <p className="text-sm text-muted-foreground">Revenue: {competitor.revenue}</p>
                  </div>

                  {/* Performance vs Your Company */}
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-muted-foreground mb-1">vs Your Company</p>
                    <div className="flex items-center gap-2">
                      {competitor.value < kpiData.yourCompany.value ? (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600 font-medium">Better Performance</span>
                        </>
                      ) : competitor.value > kpiData.yourCompany.value ? (
                        <>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-red-600 font-medium">Lower Performance</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-blue-600 font-medium">Similar Performance</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>

      {/* Insights and Recommendations */}
      <Card className="shadow-xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Award className="h-6 w-6 text-primary" />
            AI-Powered Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Key Insights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Your current performance of {selectedKPI.value} is{" "}
                  {Number.parseFloat(selectedKPI.value) < kpiData.benchmarks.industryAverage.value ? "above" : "below"}{" "}
                  industry average
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  Best-in-class performance is {kpiData.benchmarks.bestInClass.value}, representing a{" "}
                  {Math.abs(
                    ((Number.parseFloat(selectedKPI.value) - kpiData.benchmarks.bestInClass.value) /
                      kpiData.benchmarks.bestInClass.value) *
                      100,
                  ).toFixed(1)}
                  % gap
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Market leaders show consistent performance in this KPI area
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Recommendations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  Implement process automation to reduce manual handling time
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  Benchmark against top performers for best practice adoption
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  Consider technology investments to close the performance gap
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
