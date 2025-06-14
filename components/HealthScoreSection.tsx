"use client"

import { AreaChart, Area, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"

export default function HealthScoreSection() {
  // Mock health score data over time
  const healthScoreData = [
    { value: 85 },
    { value: 62 },
    { value: 78 },
    { value: 75 },
    { value: 40 },
    { value: 82 },
    { value: 55 },
    { value: 88 },
    { value: 75 },
    { value: 50 },
    { value: 78 },
    { value: 40 },
    { value: 85 },
  ]

  const sleepData = [
    {
      duration: "8 hours 33 minutes",
      score: "Good",
      scoreColor: "bg-purple-100 text-purple-800",
      progressColor: "bg-purple-500",
      progressWidth: "40%",
      percentage: "40%",
    },
    {
      duration: "7 hours 22 minutes",
      score: "Bad",
      scoreColor: "bg-red-100 text-red-800",
      progressColor: "bg-purple-500",
      progressWidth: "60%",
      percentage: "60%",
    },
    {
      duration: "6 hours 19 minutes",
      score: "OK",
      scoreColor: "bg-yellow-100 text-yellow-800",
      progressColor: "bg-purple-500",
      progressWidth: "90%",
      percentage: "90%",
    },
    {
      duration: "5 hours 13 minutes",
      score: "OK",
      scoreColor: "bg-yellow-100 text-yellow-800",
      progressColor: "bg-purple-500",
      progressWidth: "20%",
      percentage: "20%",
    },
    {
      duration: "5 hours 13 minutes",
      score: "Bad",
      scoreColor: "bg-red-100 text-red-800",
      progressColor: "bg-purple-500",
      progressWidth: "20%",
      percentage: "20%",
    },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      {/* Health Score Chart */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">+</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">98.2%</span>
            <span className="text-gray-500">Health Score</span>
          </div>
          <div className="flex space-x-2 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">1d</span>
            <span className="bg-gray-100 px-2 py-1 rounded">1w</span>
            <span className="bg-gray-100 px-2 py-1 rounded">1y</span>
            <span className="bg-gray-100 px-2 py-1 rounded">5y</span>
            <span className="bg-white border border-gray-200 text-gray-900 px-2 py-1 rounded">All Time</span>
          </div>
        </div>

        <div className="h-48 bg-gradient-to-b from-purple-50 to-white">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={healthScoreData}>
              <defs>
                <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                fill="url(#colorHealth)"
                strokeWidth={2}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sleep Tracking Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <h3 className="text-base font-medium text-gray-900">Sleep Level</h3>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm text-gray-500">
            <span>Sleep Score</span>
            <span>Sleep Score</span>
            <span>Sleep Score</span>
          </div>
        </div>

        <div className="space-y-4">
          {sleepData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <span className="text-sm text-gray-900">{item.duration}</span>
              </div>

              <div className="flex items-center space-x-8 flex-1">
                <span className={`text-xs px-2 py-1 rounded ${item.scoreColor}`}>{item.score}</span>

                <div className="flex-1 max-w-24">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.progressColor}`}
                      style={{ width: item.progressWidth }}
                    ></div>
                  </div>
                </div>

                <span className="text-sm text-gray-900 w-12">{item.percentage}</span>

                <div className="flex space-x-2">
                  <button className="text-xs text-red-500 hover:underline">Delete</button>
                  <button className="text-xs text-blue-500 hover:underline">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
