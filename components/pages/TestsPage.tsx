import { Calendar, Download, Eye, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestsPage() {
  const upcomingTests = [
    {
      id: 1,
      name: "Blood Test - Complete Blood Count",
      date: "June 15, 2025",
      time: "09:00 AM",
      doctor: "Dr. Emily Parker",
      location: "Lab Room A",
      preparation: "Fasting required (12 hours)",
      status: "scheduled",
    },
    {
      id: 2,
      name: "Chest X-Ray",
      date: "June 20, 2025",
      time: "02:00 PM",
      doctor: "Dr. Michael Chen",
      location: "Radiology Department",
      preparation: "No special preparation needed",
      status: "scheduled",
    },
    {
      id: 3,
      name: "ECG (Electrocardiogram)",
      date: "June 25, 2025",
      time: "11:00 AM",
      doctor: "Dr. Maria Rodriguez",
      location: "Cardiology Wing",
      preparation: "Avoid caffeine 2 hours before",
      status: "scheduled",
    },
  ]

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
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Medical Tests</h1>
        <p className="text-gray-500">Manage your upcoming tests and view past results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Tests */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-blue-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Tests
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {upcomingTests.map((test) => (
              <div key={test.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {test.date} at {test.time}
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {test.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Doctor:</strong> {test.doctor}
                  </p>
                  <p>
                    <strong>Location:</strong> {test.location}
                  </p>
                  <p>
                    <strong>Preparation:</strong> {test.preparation}
                  </p>
                </div>

                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Tests */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
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
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="h-16 flex flex-col items-center justify-center">
            <Calendar className="w-6 h-6 mb-1" />
            Schedule New Test
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <FileText className="w-6 h-6 mb-1" />
            View All Reports
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <Download className="w-6 h-6 mb-1" />
            Download History
          </Button>
        </div>
      </div>
    </div>
  )
}
