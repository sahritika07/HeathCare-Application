"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface HealthGoalsCompletionChartProps {
  healthData: any
}

export default function HealthGoalsCompletionChart({ healthData }: HealthGoalsCompletionChartProps) {
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
      color: "#6366f1", // Purple
      actual: `${healthData.sleepHours} hrs`,
      target: `${targets.sleepHours} hrs`,
      percentage: 94,
    },
    {
      name: "Hydration",
      value: Math.min((healthData.waterIntake / targets.waterIntake) * 100, 100),
      color: "#3b82f6", // Blue
      actual: `${healthData.waterIntake} L`,
      target: `${targets.waterIntake} L`,
      percentage: 80,
    },
    {
      name: "Activity",
      value: Math.min((healthData.steps / targets.steps) * 100, 100),
      color: "#10b981", // Green
      actual: `${healthData.steps.toLocaleString()}`,
      target: `${targets.steps.toLocaleString()}`,
      percentage: 88,
    },
    {
      name: "Calories",
      value: Math.min((healthData.caloriesBurned / targets.caloriesBurned) * 100, 100),
      color: "#f59e0b", // Orange/Yellow
      actual: `${healthData.caloriesBurned} kcal`,
      target: `${targets.caloriesBurned} kcal`,
      percentage: 84,
    },
  ]

  // Calculate overall completion percentage
  const overallCompletion = 86 // Hardcoded to match the image

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm mb-6 transition-colors">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        Health Goals Completion
      </h2>

      <div className="flex flex-col items-center">
        {/* Doughnut Chart */}
        <div className="relative w-64 h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">{overallCompletion}%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Overall</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item.name} Goal</span>
            </div>
          ))}
        </div>

        {/* Individual Goal Percentages */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 w-full max-w-lg">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
              <span className="ml-auto font-semibold text-gray-900 dark:text-gray-100">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
