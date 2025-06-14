// "use client"

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts"
// import HealthMetricsTop from "../HealthMetricsTop"

// interface StatisticsPageProps {
//   healthData: any
// }

// export default function StatisticsPage({ healthData }: StatisticsPageProps) {
//   // Mock data for charts
//   const weeklyData = [
//     { day: "Mon", steps: 8500, water: 2.2, sleep: 7.5, calories: 380 },
//     { day: "Tue", steps: 9200, water: 2.8, sleep: 8.0, calories: 420 },
//     { day: "Wed", steps: 7800, water: 2.1, sleep: 6.5, calories: 350 },
//     { day: "Thu", steps: 10500, water: 3.2, sleep: 8.5, calories: 480 },
//     { day: "Fri", steps: 9800, water: 2.9, sleep: 7.8, calories: 450 },
//     { day: "Sat", steps: 12000, water: 3.5, sleep: 9.0, calories: 520 },
//     {
//       day: "Sun",
//       steps: healthData.steps,
//       water: healthData.waterIntake,
//       sleep: healthData.sleepHours,
//       calories: healthData.caloriesBurned,
//     },
//   ]

//   const monthlyTrends = [
//     { month: "Jan", avgSteps: 8200, avgWater: 2.3, avgSleep: 7.2 },
//     { month: "Feb", avgSteps: 8800, avgWater: 2.5, avgSleep: 7.5 },
//     { month: "Mar", avgSteps: 9200, avgWater: 2.7, avgSleep: 7.8 },
//     { month: "Apr", avgSteps: 9500, avgWater: 2.8, avgSleep: 8.0 },
//     { month: "May", avgSteps: 9800, avgWater: 3.0, avgSleep: 8.2 },
//     { month: "Jun", avgSteps: 10200, avgWater: 3.2, avgSleep: 8.0 },
//   ]

//   const goalCompletion = [
//     { name: "Steps Goal", value: Math.min((healthData.steps / 10000) * 100, 100), color: "#10b981" },
//     { name: "Water Goal", value: Math.min((healthData.waterIntake / 3) * 100, 100), color: "#3b82f6" },
//     { name: "Sleep Goal", value: Math.min((healthData.sleepHours / 8) * 100, 100), color: "#6366f1" },
//     { name: "Calories Goal", value: Math.min((healthData.caloriesBurned / 500) * 100, 100), color: "#f59e0b" },
//   ]

//   return (
//     <div className="p-6 overflow-auto">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
//         <p className="text-gray-500">Track your health metrics and progress over time</p>
//       </div>

//       {/* Health Rate Component - Added at the top */}
//       <div className="mb-8">
//         <HealthMetricsTop />
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Weekly Steps */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Steps</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={weeklyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="steps" fill="#10b981" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Daily Goals Completion */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Goal Completion</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={goalCompletion}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={100}
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {goalCompletion.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="grid grid-cols-2 gap-2 mt-4">
//             {goalCompletion.map((goal, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: goal.color }}></div>
//                 <span className="text-sm text-gray-600">
//                   {goal.name}: {goal.value.toFixed(0)}%
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Water Intake Trend */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Water Intake</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={weeklyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="water" stroke="#3b82f6" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Monthly Trends */}
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Trends</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={monthlyTrends}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="avgSteps" stroke="#10b981" name="Avg Steps" />
//                 <Line type="monotone" dataKey="avgSleep" stroke="#6366f1" name="Avg Sleep (hrs)" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-4 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h3 className="text-sm font-medium text-gray-500">Weekly Average Steps</h3>
//           <p className="text-2xl font-bold text-gray-900 mt-2">
//             {Math.round(weeklyData.reduce((sum, day) => sum + day.steps, 0) / weeklyData.length).toLocaleString()}
//           </p>
//           <p className="text-sm text-green-600 mt-1">+12% from last week</p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h3 className="text-sm font-medium text-gray-500">Weekly Average Water</h3>
//           <p className="text-2xl font-bold text-gray-900 mt-2">
//             {(weeklyData.reduce((sum, day) => sum + day.water, 0) / weeklyData.length).toFixed(1)} L
//           </p>
//           <p className="text-sm text-blue-600 mt-1">+8% from last week</p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h3 className="text-sm font-medium text-gray-500">Weekly Average Sleep</h3>
//           <p className="text-2xl font-bold text-gray-900 mt-2">
//             {(weeklyData.reduce((sum, day) => sum + day.sleep, 0) / weeklyData.length).toFixed(1)} hrs
//           </p>
//           <p className="text-sm text-indigo-600 mt-1">+5% from last week</p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm">
//           <h3 className="text-sm font-medium text-gray-500">Weekly Average Calories</h3>
//           <p className="text-2xl font-bold text-gray-900 mt-2">
//             {Math.round(weeklyData.reduce((sum, day) => sum + day.calories, 0) / weeklyData.length)} kcal
//           </p>
//           <p className="text-sm text-orange-600 mt-1">+15% from last week</p>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import HeartRateMonitor from "../HeartRateMonitor"
import EnhancedWeeklySteps from "../EnhancedWeeklySteps"

interface StatisticsPageProps {
  healthData: any
}

export default function StatisticsPage({ healthData }: StatisticsPageProps) {
  // Mock data for charts
  const weeklyData = [
    { day: "Mon", steps: 8500, water: 2.2, sleep: 7.5, calories: 380 },
    { day: "Tue", steps: 9200, water: 2.8, sleep: 8.0, calories: 420 },
    { day: "Wed", steps: 7800, water: 2.1, sleep: 6.5, calories: 350 },
    { day: "Thu", steps: 10500, water: 3.2, sleep: 8.5, calories: 480 },
    { day: "Fri", steps: 9800, water: 2.9, sleep: 7.8, calories: 450 },
    { day: "Sat", steps: 12000, water: 3.5, sleep: 9.0, calories: 520 },
    {
      day: "Sun",
      steps: healthData.steps,
      water: healthData.waterIntake,
      sleep: healthData.sleepHours,
      calories: healthData.caloriesBurned,
    },
  ]

  const monthlyTrends = [
    { month: "Jan", avgSteps: 8200, avgWater: 2.3, avgSleep: 7.2 },
    { month: "Feb", avgSteps: 8800, avgWater: 2.5, avgSleep: 7.5 },
    { month: "Mar", avgSteps: 9200, avgWater: 2.7, avgSleep: 7.8 },
    { month: "Apr", avgSteps: 9500, avgWater: 2.8, avgSleep: 8.0 },
    { month: "May", avgSteps: 9800, avgWater: 3.0, avgSleep: 8.2 },
    { month: "Jun", avgSteps: 10200, avgWater: 3.2, avgSleep: 8.0 },
  ]

  const goalCompletion = [
    { name: "Steps Goal", value: Math.min((healthData.steps / 10000) * 100, 100), color: "#10b981" },
    { name: "Water Goal", value: Math.min((healthData.waterIntake / 3) * 100, 100), color: "#3b82f6" },
    { name: "Sleep Goal", value: Math.min((healthData.sleepHours / 8) * 100, 100), color: "#6366f1" },
    { name: "Calories Goal", value: Math.min((healthData.caloriesBurned / 500) * 100, 100), color: "#f59e0b" },
  ]

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
        <p className="text-gray-500">Track your health metrics and progress over time</p>
      </div>

      {/* Heart Rate Monitor - NEW */}
      <div className="mb-6">
        <HeartRateMonitor />
      </div>

      <div className="grid grid-cols-1  gap-6 mb-6">
        {/* Enhanced Weekly Steps - NEW */}
        <div className="mb-6">
          <EnhancedWeeklySteps healthData={healthData} />
        </div>


        {/* Daily Goals Completion - ORIGINAL */}
        {/* <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Goal Completion</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={goalCompletion}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {goalCompletion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {goalCompletion.map((goal, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: goal.color }}></div>
                <span className="text-sm text-gray-600">
                  {goal.name}: {goal.value.toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Water Intake Trend - ORIGINAL */}
        <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white rounded-xl p-6 shadow-sm ">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Water Intake</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="water" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
       

        {/* Monthly Trends - ORIGINAL */}
       
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Trends</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="avgSteps" stroke="#10b981" name="Avg Steps" />
                <Line type="monotone" dataKey="avgSleep" stroke="#6366f1" name="Avg Sleep (hrs)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
      </div>

      {/* Summary Cards - ORIGINAL */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Weekly Average Steps</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {Math.round(weeklyData.reduce((sum, day) => sum + day.steps, 0) / weeklyData.length).toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-1">+12% from last week</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Weekly Average Water</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {(weeklyData.reduce((sum, day) => sum + day.water, 0) / weeklyData.length).toFixed(1)} L
          </p>
          <p className="text-sm text-blue-600 mt-1">+8% from last week</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Weekly Average Sleep</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {(weeklyData.reduce((sum, day) => sum + day.sleep, 0) / weeklyData.length).toFixed(1)} hrs
          </p>
          <p className="text-sm text-indigo-600 mt-1">+5% from last week</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Weekly Average Calories</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {Math.round(weeklyData.reduce((sum, day) => sum + day.calories, 0) / weeklyData.length)} kcal
          </p>
          <p className="text-sm text-orange-600 mt-1">+15% from last week</p>
        </div>
      </div>
    </div>
  )
}


