import DailyHealthLogs from "./DailyHealthLogs"
import HealthGoalsCompletionChart from "./HealthGoalsCompletionChart"
import WellnessRadarChart from "./WellnessRadarChart"
import HealthScoreSection from "./HealthScoreSection"
import EnhancedAnatomySection from "./EnhancedAnatomySection"

interface DashboardMainContentProps {
  healthData: any
  setHealthData: (data: any) => void
  userProfile: any
  onEditProfile: () => void
}

export default function DashboardMainContent({
  healthData,
  setHealthData,
  userProfile,
  onEditProfile,
}: DashboardMainContentProps) {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>

      {/* 1. Enhanced Anatomy Section */}
      <EnhancedAnatomySection />

      {/* 2. Daily Health Logs */}
      <DailyHealthLogs healthData={healthData} setHealthData={setHealthData} />

      {/* 3. Health Goals Charts - Stacked Vertically */}
      <div className="space-y-6 mb-6">
        <HealthGoalsCompletionChart healthData={healthData} />
        <WellnessRadarChart healthData={healthData} />
      </div>

      {/* 4. Health Score & Sleep Tracking */}
      <HealthScoreSection />
    </div>
  )
}
