"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface HealthMetricsPieChartProps {
  healthData: any
}

export default function HealthMetricsPieChart({ healthData }: HealthMetricsPieChartProps) {
  // Calculate percentages based on daily targets
  const targets = {
    sleepHours: 8,
    waterIntake: 3,
    steps: 10000,
    caloriesBurned: 500,
  }

  const data = [
    {
      name: "Sleep",
      value: Math.min((healthData.sleepHours / targets.sleepHours) * 100, 100),
      color: "#6366f1",
      actual: `${healthData.sleepHours} hrs`,
      target: `${targets.sleepHours} hrs`,
    },
    {
      name: "Water",
      value: Math.min((healthData.waterIntake / targets.waterIntake) * 100, 100),
      color: "#3b82f6",
      actual: `${healthData.waterIntake} L`,
      target: `${targets.waterIntake} L`,
    },
    {
      name: "Steps",
      value: Math.min((healthData.steps / targets.steps) * 100, 100),
      color: "#10b981",
      actual: `${healthData.steps.toLocaleString()}`,
      target: `${targets.steps.toLocaleString()}`,
    },
    {
      name: "Calories",
      value: Math.min((healthData.caloriesBurned / targets.caloriesBurned) * 100, 100),
      color: "#f59e0b",
      actual: `${healthData.caloriesBurned} kcal`,
      target: `${targets.caloriesBurned} kcal`,
    },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-600">Actual: {data.actual}</p>
          <p className="text-sm text-gray-600">Target: {data.target}</p>
          <p className="text-sm font-medium">{data.value.toFixed(1)}% of target</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Daily Goals Progress</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry: any) => (
                <span style={{ color: entry.color, fontSize: "12px" }}>
                  {value}: {entry.payload.value.toFixed(0)}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
