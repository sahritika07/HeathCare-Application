import DailyHealthLogs from "./DailyHealthLogs"
import HealthGoalsCompletionChart from "./HealthGoalsCompletionChart"
import WellnessRadarChart from "./WellnessRadarChart"
import HealthScoreSection from "./HealthScoreSection"
import EnhancedAnatomySection from "./EnhancedAnatomySection"
import { Search, Bell} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
        <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search"
                      className="pl-10 w-60 lg:w-80 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                    />
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
            <Bell className="w-5 h-5" />
          </Button>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>

      {/* 1. Enhanced Anatomy Section */}
      <EnhancedAnatomySection />

      {/* 3. Health Goals Charts - Stacked Vertically */}
      <div className="space-y-6 mb-6">
        <HealthGoalsCompletionChart healthData={healthData} />
        <WellnessRadarChart healthData={healthData} />
      </div>

      {/* 2. Daily Health Logs */}
      <DailyHealthLogs healthData={healthData} setHealthData={setHealthData} />

      

      {/* 4. Health Score & Sleep Tracking */}
      <HealthScoreSection />
    </div>
  )
}
