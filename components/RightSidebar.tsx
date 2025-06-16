import UserProfile from "./UserProfile"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import PatientInfo from "./PatientInfo"
import MedicalHistory from "./MedicalHistory"
import HealthMetricsPieChart from "./HealthMetricsPieChart"
// import { Calendar, Download, Eye, FileText } from "lucide-react"
// import { Button } from "@/components/ui/button"



interface RightSidebarProps {
  userProfile: any
  healthData: any
  onEditProfile: () => void
}

export default function RightSidebar({ userProfile, healthData, onEditProfile }: RightSidebarProps) {
  const pastTests = [
    {
      id: 1,
      name: "Lipid Profile",
      date: "May 28, 2025",
      doctor: "Dr. Emily Parker",
      status: "completed",
      results: "Normal",
      reportAvailable: true,
    },
    {
      id: 2,
      name: "Thyroid Function Test",
      date: "May 15, 2025",
      doctor: "Dr. Sarah Johnson",
      status: "completed",
      results: "Normal",
      reportAvailable: true,
    },
    {
      id: 3,
      name: "Vitamin D Test",
      date: "April 30, 2025",
      doctor: "Dr. Emily Parker",
      status: "completed",
      results: "Low - Supplement recommended",
      reportAvailable: true,
    },
    {
      id: 4,
      name: "Blood Glucose Test",
      date: "April 15, 2025",
      doctor: "Dr. Robert Williams",
      status: "completed",
      results: "Normal",
      reportAvailable: true,
    },
  ]
  return (
    <div className="h-full overflow-y-auto p-4">

      <UserProfile userProfile={userProfile} onEditProfile={onEditProfile} />
      <CalendarView />
      <PatientInfo />
      <HealthMetricsPieChart healthData={healthData} />
      <UpcomingSchedule />
      <MedicalHistory />
      
         {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-green-50 p-4 border-b border-green-100">
            <h2 className="text-xl font-semibold text-green-900 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Past Tests & Results
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {pastTests.map((test) => (
              <div key={test.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {test.date}
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    {test.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>Doctor:</strong> {test.doctor}
                  </p>
                  <p>
                    <strong>Results:</strong>{" "}
                    <span className={test.results.includes("Low") ? "text-orange-600" : "text-green-600"}>
                      {test.results}
                    </span>
                  </p>
                </div>

                {test.reportAvailable && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Report
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
    </div>
  )
}
