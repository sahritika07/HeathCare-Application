"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Activity, Target, TrendingUp, Award, Calendar } from "lucide-react"

interface EnhancedWeeklyStepsProps {
  healthData: any
}

export default function EnhancedWeeklySteps({ healthData }: EnhancedWeeklyStepsProps) {
  const weeklyData = [
    { day: "Mon", steps: 8500, goal: 10000, date: "Dec 9", percentage: 85 },
    { day: "Tue", steps: 9200, goal: 10000, date: "Dec 10", percentage: 92 },
    { day: "Wed", steps: 7800, goal: 10000, date: "Dec 11", percentage: 78 },
    { day: "Thu", steps: 10500, goal: 10000, date: "Dec 12", percentage: 105 },
    { day: "Fri", steps: 9800, goal: 10000, date: "Dec 13", percentage: 98 },
    { day: "Sat", steps: 12000, goal: 10000, date: "Dec 14", percentage: 120 },
    {
      day: "Sun",
      steps: healthData.steps,
      goal: 10000,
      date: "Dec 15",
      percentage: Math.round((healthData.steps / 10000) * 100),
    },
  ]

  const totalSteps = weeklyData.reduce((sum, day) => sum + day.steps, 0)
  const avgSteps = Math.round(totalSteps / weeklyData.length)
  const goalAchieved = weeklyData.filter((day) => day.steps >= day.goal).length
  const bestDay = weeklyData.reduce((max, day) => (day.steps > max.steps ? day : max))
  const weeklyGoal = 70000 // 7 days * 10000 steps
  const weeklyProgress = Math.round((totalSteps / weeklyGoal) * 100)

  const getBarColor = (steps: number, goal: number) => {
    if (steps >= goal) return "#10b981" // Green for goal achieved
    if (steps >= goal * 0.8) return "#f59e0b" // Orange for close to goal
    return "#ef4444" // Red for far from goal
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{`${label} (${data.date})`}</p>
          <p className="text-sm text-blue-600">{`Steps: ${data.steps.toLocaleString()}`}</p>
          <p className="text-sm text-gray-500">{`Goal: ${data.goal.toLocaleString()}`}</p>
          <p className="text-sm font-medium">
            {data.steps >= data.goal ? "🎯 Goal Achieved!" : `${data.percentage}% of goal`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-gradient-to-br  from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Weekly Steps Challenge</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Daily goal: 10,000 steps</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{weeklyProgress}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Weekly Goal</div>
        </div>
      </div>

      {/* Weekly Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Weekly Progress</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {totalSteps.toLocaleString()} / {weeklyGoal.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(weeklyProgress, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center mb-1">
            <Target className="w-4 h-4 text-blue-600 mr-1" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{goalAchieved}/7</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Goals Met</div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{avgSteps.toLocaleString()}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Daily Avg</div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center mb-1">
            <Award className="w-4 h-4 text-yellow-600 mr-1" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{bestDay.steps.toLocaleString()}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Best Day</div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center mb-1">
            <Calendar className="w-4 h-4 text-purple-600 mr-1" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{bestDay.day}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Peak Day</div>
        </div>
      </div>

      {/* Enhanced Steps Chart */}
      <div className="h-80 bg-white dark:bg-gray-700 rounded-lg p-4 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="steps" radius={[6, 6, 0, 0]} maxBarSize={60}>
              {weeklyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.steps, entry.goal)} />
              ))}
            </Bar>
            {/* Goal reference line */}
            <Bar dataKey="goal" fill="transparent" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Daily Breakdown with Enhanced Design */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Daily Breakdown</h3>
        <div className="space-y-2">
          {weeklyData.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 w-12">{day.day}</div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 w-32">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(day.percentage, 100)}%`,
                      backgroundColor: getBarColor(day.steps, day.goal),
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 w-16">{day.percentage}%</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {day.steps.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {day.steps >= day.goal ? "✅ Goal achieved" : `${(day.goal - day.steps).toLocaleString()} to go`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
