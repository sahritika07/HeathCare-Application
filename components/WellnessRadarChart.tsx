"use client"

import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface WellnessRadarChartProps {
  healthData: any
}

export default function WellnessRadarChart({ healthData }: WellnessRadarChartProps) {
  // Calculate wellness scores for different categories (0-100 scale)
  const calculateWellnessScores = () => {
    // Nutrition score (mock data - in real app would come from food tracking)
    const nutrition = 75

    // Sleep score based on sleep hours (optimal: 7-9 hours)
    const sleepScore =
      healthData.sleepHours >= 7 && healthData.sleepHours <= 9
        ? 100
        : Math.max(0, 100 - Math.abs(8 - healthData.sleepHours) * 15)

    // Exercise score based on steps (optimal: 10000+ steps)
    const exerciseScore = Math.min(100, (healthData.steps / 10000) * 100)

    // Hydration score based on water intake (optimal: 3L)
    const hydrationScore = Math.min(100, (healthData.waterIntake / 3) * 100)

    // Vitals score (mock data - in real app would come from health measurements)
    const vitals = 85

    return {
      nutrition,
      sleep: sleepScore,
      exercise: exerciseScore,
      hydration: hydrationScore,
      vitals,
    }
  }

  const scores = calculateWellnessScores()
  const overallScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.values(scores).length

  const data = {
    labels: ["Nutrition", "Sleep", "Exercise", "Hydration", "Vitals"],
    datasets: [
      {
        label: "Current Score",
        data: Object.values(scores),
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(99, 102, 241, 1)",
      },
      {
        label: "Target Score",
        data: [100, 100, 100, 100, 100],
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        borderColor: "rgba(34, 197, 94, 0.5)",
        borderWidth: 1,
        borderDash: [5, 5],
        pointBackgroundColor: "rgba(34, 197, 94, 0.5)",
        pointBorderColor: "rgba(34, 197, 94, 0.5)",
        pointRadius: 3,
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
          label: (context: any) => `${context.dataset.label}: ${context.parsed.r.toFixed(1)}/100`,
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: "#374151",
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Improvement"
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Wellness Score</h2>

      <div className="relative h-80 mb-6">
        <Radar data={data} options={options} />
      </div>

      <div className="text-center mb-6">
        <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>{overallScore.toFixed(0)}/100</div>
        <div className={`text-sm font-medium ${getScoreColor(overallScore)}`}>{getScoreLabel(overallScore)}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {Object.entries(scores).map(([category, score], index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 capitalize">{category}</div>
            <div className={`text-lg font-semibold ${getScoreColor(score)}`}>{score.toFixed(0)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
