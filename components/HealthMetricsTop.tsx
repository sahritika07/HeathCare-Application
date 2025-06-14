"use client"

import { MoreHorizontal } from "lucide-react"
import { LineChart, Line, ResponsiveContainer } from "recharts"

export default function HealthMetricsTop() {
  // Mock ECG-style data for heart rate visualization
  const heartRateData = [
    { value: 70 },
    { value: 72 },
    { value: 85 },
    { value: 68 },
    { value: 71 },
    { value: 95 },
    { value: 65 },
    { value: 73 },
    { value: 88 },
    { value: 67 },
    { value: 74 },
    { value: 92 },
    { value: 69 },
    { value: 76 },
    { value: 82 },
    { value: 71 },
    { value: 75 },
    { value: 89 },
    { value: 68 },
    { value: 73 },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Health Rate</h2>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>

      {/* Heart Rate Chart */}
      <div className="h-24 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={heartRateData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#84cc16"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Heart Rate Value */}
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-gray-900">
          140 <span className="text-sm font-normal text-gray-500">bpm</span>
        </div>
      </div>

      {/* Core Strength Section */}
      <div className="pt-2">
        <h3 className="text-base font-medium text-gray-900 mb-4">Core Strength</h3>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Current</div>
            <div className="text-base font-medium text-gray-900">
              21 <span className="text-xs font-normal text-gray-500">sec/sqt</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">Average</div>
            <div className="text-base font-medium text-gray-900">
              3.2 <span className="text-xs font-normal text-gray-500">sec/sqt</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">Max</div>
            <div className="text-base font-medium text-gray-900">
              3.4 <span className="text-xs font-normal text-gray-500">sec/sqt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
