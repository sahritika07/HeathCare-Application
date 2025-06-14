"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale)

interface HealthGoalsDoughnutChartProps {
  healthData: any
}

export default function HealthGoalsDoughnutChart({ healthData }: HealthGoalsDoughnutChartProps) {
  // Calculate completion percentages for each health goal
  const targets = {
    sleepHours: 8,
    waterIntake: 3,
    steps: 10000,
    caloriesBurned: 500,
  }

  const completionData = [
    {
      label: "Sleep Goal",
      value: Math.min((healthData.sleepHours / targets.sleepHours) * 100, 100),
      color: "#6366f1",
    },
    {
      label: "Hydration Goal",
      value: Math.min((healthData.waterIntake / targets.waterIntake) * 100, 100),
      color: "#3b82f6",
    },
    {
      label: "Activity Goal",
      value: Math.min((healthData.steps / targets.steps) * 100, 100),
      color: "#10b981",
    },
    {
      label: "Calories Goal",
      value: Math.min((healthData.caloriesBurned / targets.caloriesBurned) * 100, 100),
      color: "#f59e0b",
    },
  ]

  const data = {
    labels: completionData.map((item) => item.label),
    datasets: [
      {
        data: completionData.map((item) => item.value),
        backgroundColor: completionData.map((item) => item.color),
        borderColor: completionData.map((item) => item.color),
        borderWidth: 2,
        cutout: "60%",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.parsed.toFixed(1)}%`,
        },
      },
    },
  }

  const averageCompletion = completionData.reduce((sum, item) => sum + item.value, 0) / completionData.length

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Goals Completion</h2>

      <div className="relative h-64 mb-4">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{averageCompletion.toFixed(0)}%</div>
            <div className="text-sm text-gray-500">Overall</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        {completionData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-gray-700">{item.label.replace(" Goal", "")}</span>
            </div>
            <span className="font-medium text-gray-900">{item.value.toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
