"use client"

import { Heart, MoreHorizontal } from "lucide-react"
import { ResponsiveContainer, XAxis, YAxis, Area, AreaChart } from "recharts"

export default function HeartRateMonitor() {
  // Heart rate data matching the design
  const heartRateData = [
    { time: "00:00", value: 68 },
    { time: "02:00", value: 65 },
    { time: "04:00", value: 62 },
    { time: "06:00", value: 72 },
    { time: "08:00", value: 85 },
    { time: "10:00", value: 78 },
    { time: "12:00", value: 82 },
    { time: "14:00", value: 88 },
    { time: "16:00", value: 75 },
    { time: "18:00", value: 79 },
    { time: "20:00", value: 73 },
    { time: "22:00", value: 69 },
  ]

  const currentHeartRate = 78
  const avgHeartRate = 74
  const maxHeartRate = 88
  const minHeartRate = 62

  const heartRateZones = [
    { name: "Resting (50-70 bpm)", color: "#3b82f6", time: "2h 15m" },
    { name: "Normal (70-85 bpm)", color: "#10b981", time: "18h 30m" },
    { name: "Elevated (85+ bpm)", color: "#f97316", time: "3h 15m" },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Heart Rate Monitor</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">24-hour tracking</p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>

      {/* Current Heart Rate Display */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-full px-6 py-3 shadow-sm mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{currentHeartRate}</span>
          <span className="text-lg font-medium text-gray-500 dark:text-gray-400">bpm</span>
        </div>
        <p className="text-sm text-green-600 font-medium">📈 Normal Range</p>
      </div>

      {/* Heart Rate Chart */}
      <div className="h-64 mb-8 bg-white dark:bg-gray-700 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={heartRateData}>
            <defs>
              <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={["00:00", "22:00"]}
            />
            <YAxis domain={[50, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#heartRateGradient)"
              dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{avgHeartRate}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Average</div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{maxHeartRate}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Max</div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{minHeartRate}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Min</div>
        </div>
      </div>

      {/* Heart Rate Zones */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Heart Rate Zones</h3>
        <div className="space-y-3">
          {heartRateZones.map((zone, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: zone.color }}></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{zone.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{zone.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
