"use client"

import { useState } from "react"
import { Moon, Droplet, Activity, Edit2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface DailyHealthLogsProps {
  healthData: any
  setHealthData: (data: any) => void
}

export default function DailyHealthLogs({ healthData, setHealthData }: DailyHealthLogsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [tempData, setTempData] = useState({ ...healthData })

  const handleEdit = () => {
    setTempData({ ...healthData })
    setIsEditing(true)
  }

  const handleSave = () => {
    setHealthData({ ...tempData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleChange = (field: string, value: string) => {
    setTempData({
      ...tempData,
      [field]: Number.parseFloat(value) || 0,
    })
  }

  // Calculate percentages based on daily targets
  const targets = {
    sleepHours: 8,
    waterIntake: 3,
    steps: 10000,
    caloriesBurned: 500,
  }

  // Data for the pie chart - using current data when not editing, temp data when editing
  const getPieData = () => {
    const data = isEditing ? tempData : healthData
    return [
      {
        name: "Sleep",
        value: Math.min((data.sleepHours / targets.sleepHours) * 100, 100),
        color: "#6366f1",
        actual: `${data.sleepHours} hrs`,
        target: `${targets.sleepHours} hrs`,
      },
      {
        name: "Water",
        value: Math.min((data.waterIntake / targets.waterIntake) * 100, 100),
        color: "#3b82f6",
        actual: `${data.waterIntake} L`,
        target: `${targets.waterIntake} L`,
      },
      {
        name: "Steps",
        value: Math.min((data.steps / targets.steps) * 100, 100),
        color: "#10b981",
        actual: `${data.steps.toLocaleString()}`,
        target: `${targets.steps.toLocaleString()}`,
      },
      {
        name: "Calories",
        value: Math.min((data.caloriesBurned / targets.caloriesBurned) * 100, 100),
        color: "#f59e0b",
        actual: `${data.caloriesBurned} kcal`,
        target: `${targets.caloriesBurned} kcal`,
      },
    ]
  }

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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Daily Health Logs</h2>
        {!isEditing ? (
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sleep Hours */}
        <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <Moon className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">Sleep Hours</h3>
            {isEditing ? (
              <Input
                type="number"
                value={tempData.sleepHours}
                onChange={(e) => handleChange("sleepHours", e.target.value)}
                className="mt-1 h-8 text-lg font-semibold"
                step="0.1"
                min="0"
                max="24"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-900">{healthData.sleepHours} hrs</p>
            )}
          </div>
        </div>

        {/* Water Intake */}
        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Droplet className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">Water Intake</h3>
            {isEditing ? (
              <Input
                type="number"
                value={tempData.waterIntake}
                onChange={(e) => handleChange("waterIntake", e.target.value)}
                className="mt-1 h-8 text-lg font-semibold"
                step="0.1"
                min="0"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-900">{healthData.waterIntake} L</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">Steps</h3>
            {isEditing ? (
              <Input
                type="number"
                value={tempData.steps}
                onChange={(e) => handleChange("steps", e.target.value)}
                className="mt-1 h-8 text-lg font-semibold"
                step="10"
                min="0"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-900">{healthData.steps.toLocaleString()}</p>
            )}
          </div>
        </div>

        {/* Calories Burned */}
        <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-xl">🔥</span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500">Calories Burned</h3>
            {isEditing ? (
              <Input
                type="number"
                value={tempData.caloriesBurned}
                onChange={(e) => handleChange("caloriesBurned", e.target.value)}
                className="mt-1 h-8 text-lg font-semibold"
                step="10"
                min="0"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-900">{healthData.caloriesBurned} kcal</p>
            )}
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      {/* <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Daily Goals Progress</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={getPieData()}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {getPieData().map((entry, index) => (
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
      </div> */}
    </div>
  )
}
