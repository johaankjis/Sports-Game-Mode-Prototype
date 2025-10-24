"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, TrendingDown, Users, Clock, Package } from "lucide-react"

// Mock telemetry data
const sessionData = [
  { day: "Mon", avgSession: 28, sessions: 145 },
  { day: "Tue", avgSession: 32, sessions: 167 },
  { day: "Wed", avgSession: 35, sessions: 189 },
  { day: "Thu", avgSession: 31, sessions: 178 },
  { day: "Fri", avgSession: 29, sessions: 156 },
  { day: "Sat", avgSession: 38, sessions: 234 },
  { day: "Sun", avgSession: 42, sessions: 267 },
]

const retentionData = [
  { day: "Day 1", retained: 100 },
  { day: "Day 3", retained: 78 },
  { day: "Day 7", retained: 62 },
  { day: "Day 14", retained: 51 },
  { day: "Day 30", retained: 43 },
]

const rarityDistribution = [
  { name: "Diamond", value: 8, color: "#3b82f6" },
  { name: "Gold", value: 22, color: "#eab308" },
  { name: "Silver", value: 35, color: "#9ca3af" },
  { name: "Bronze", value: 35, color: "#f97316" },
]

const onboardingFunnel = [
  { step: "Tutorial Start", users: 1000, completion: 100 },
  { step: "First Pack", users: 920, completion: 92 },
  { step: "Team Build", users: 850, completion: 85 },
  { step: "First Game", users: 780, completion: 78 },
  { step: "Tutorial Complete", users: 720, completion: 72 },
]

const economyMetrics = [
  { metric: "Avg Coins/Day", value: 1250, change: 12 },
  { metric: "Packs Opened/Day", value: 3.2, change: 8 },
  { metric: "Cards/Pack", value: 4.8, change: -2 },
  { metric: "Diamond Drop Rate", value: 2.1, change: 5 },
]

const kpiMetrics = [
  { label: "Avg Session Length", value: "34 min", target: "30 min", status: "success", icon: Clock },
  { label: "Onboarding Completion", value: "72%", target: "60%", status: "success", icon: Users },
  { label: "Day 7 Retention", value: "62%", target: "50%", status: "success", icon: TrendingUp },
  { label: "Packs Opened", value: "3.2/day", target: "3.0/day", status: "success", icon: Package },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Telemetry insights and performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiMetrics.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.label} className="p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <Badge variant={kpi.status === "success" ? "default" : "secondary"} className="gap-1">
                    <TrendingUp className="h-3 w-3" />
                    On Target
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                </div>
                <p className="text-xs text-muted-foreground">Target: {kpi.target}</p>
              </div>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="engagement" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
        </TabsList>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Session Length Trends</h3>
                <p className="text-sm text-muted-foreground">Average session duration over the past week</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="avgSession"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Avg Session (min)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Daily Active Sessions</h3>
                <p className="text-sm text-muted-foreground">Total sessions per day</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sessions" fill="hsl(var(--accent))" name="Sessions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        {/* Retention Tab */}
        <TabsContent value="retention" className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Player Retention Curve</h3>
                  <p className="text-sm text-muted-foreground">Percentage of players returning over time</p>
                </div>
                <Badge className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +25% vs baseline
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="retained"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    name="Retention %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Key Retention Metrics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Day 1 Retention</span>
                    <span className="text-lg font-bold text-foreground">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Day 7 Retention</span>
                    <span className="text-lg font-bold text-foreground">62%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Day 30 Retention</span>
                    <span className="text-lg font-bold text-foreground">43%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Improvement vs Baseline</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Session Length</span>
                    <Badge className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +13%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Retention</span>
                    <Badge className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +25%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Onboarding</span>
                    <Badge className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +18%
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Rarity Distribution</h3>
                  <p className="text-sm text-muted-foreground">Card rarity odds from pack openings</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={rarityDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {rarityDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Economy Metrics</h3>
                <div className="space-y-4">
                  {economyMetrics.map((metric) => (
                    <div key={metric.metric} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{metric.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{metric.value}</span>
                          <Badge variant={metric.change > 0 ? "default" : "secondary"} className="gap-1">
                            {metric.change > 0 ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            {Math.abs(metric.change)}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Balance Assessment</h3>
                <p className="text-sm text-muted-foreground">Economy health indicators</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-medium text-foreground">Progression Pacing</p>
                  <p className="text-2xl font-bold text-green-500">Balanced</p>
                  <p className="text-xs text-muted-foreground">XP curve is fair and engaging</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-medium text-foreground">Rarity Odds</p>
                  <p className="text-2xl font-bold text-green-500">Fair</p>
                  <p className="text-xs text-muted-foreground">Drop rates meet expectations</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-medium text-foreground">Reward Frequency</p>
                  <p className="text-2xl font-bold text-green-500">Optimal</p>
                  <p className="text-xs text-muted-foreground">Players feel rewarded</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Onboarding Tab */}
        <TabsContent value="onboarding" className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Onboarding Funnel</h3>
                  <p className="text-sm text-muted-foreground">Player progression through tutorial</p>
                </div>
                <Badge className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +18% completion
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={onboardingFunnel} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis type="number" className="text-xs" />
                  <YAxis dataKey="step" type="category" width={120} className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="users" fill="hsl(var(--primary))" name="Users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Drop-off Analysis</h3>
                <div className="space-y-3">
                  {onboardingFunnel.map((step, index) => {
                    const dropoff = index > 0 ? onboardingFunnel[index - 1].users - step.users : 0
                    const dropoffPercent =
                      index > 0 ? ((dropoff / onboardingFunnel[index - 1].users) * 100).toFixed(1) : 0
                    return (
                      <div key={step.step} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{step.step}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">{step.completion}%</span>
                          {index > 0 && (
                            <Badge variant="secondary" className="text-xs">
                              -{dropoffPercent}%
                            </Badge>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Confusion Reduction</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border bg-green-500/10 p-4">
                    <p className="text-sm font-medium text-foreground">Before Iteration</p>
                    <p className="text-3xl font-bold text-foreground">60%</p>
                    <p className="text-xs text-muted-foreground">Players confused during onboarding</p>
                  </div>
                  <div className="rounded-lg border border-green-500 bg-green-500/10 p-4">
                    <p className="text-sm font-medium text-foreground">After Iteration</p>
                    <p className="text-3xl font-bold text-green-500">20%</p>
                    <p className="text-xs text-muted-foreground">40% reduction in confusion</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
