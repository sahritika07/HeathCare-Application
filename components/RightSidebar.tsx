import UserProfile from "./UserProfile"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import PatientInfo from "./PatientInfo"
import MedicalHistory from "./MedicalHistory"
import HealthMetricsPieChart from "./HealthMetricsPieChart"



interface RightSidebarProps {
  userProfile: any
  healthData: any
  onEditProfile: () => void
}

export default function RightSidebar({ userProfile, healthData, onEditProfile }: RightSidebarProps) {
  return (
    <div className="h-full overflow-y-auto p-4">

      <UserProfile userProfile={userProfile} onEditProfile={onEditProfile} />
      <CalendarView />
      <PatientInfo />
      <HealthMetricsPieChart healthData={healthData} />
      <UpcomingSchedule />
      <MedicalHistory />
    </div>
  )
}
