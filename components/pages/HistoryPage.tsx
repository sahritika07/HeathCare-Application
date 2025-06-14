import { Calendar, Clock, TrendingUp, Award } from "lucide-react"

export default function HistoryPage() {
  const historyData = [
    {
      month: "June 2025",
      entries: [
        {
          date: "June 15, 2025",
          title: "Annual Physical Examination",
          doctor: "Dr. Emily Parker",
          details: "Complete health assessment with blood work and imaging",
          targets: [
            { name: "Blood Pressure", target: "120/80", achieved: "118/78", status: "achieved" },
            { name: "Cholesterol", target: "<200 mg/dL", achieved: "185 mg/dL", status: "achieved" },
            { name: "Weight", target: "70 kg", achieved: "72 kg", status: "in-progress" },
          ],
        },
        {
          date: "June 5, 2025",
          title: "Dental Cleaning",
          doctor: "Dr. Cameron Williamson",
          details: "Regular dental cleaning and checkup",
          targets: [
            { name: "Plaque Index", target: "<15%", achieved: "12%", status: "achieved" },
            { name: "Flossing Routine", target: "Daily", achieved: "5x/week", status: "in-progress" },
          ],
        },
      ],
    },
    {
      month: "May 2025",
      entries: [
        {
          date: "May 22, 2025",
          title: "Physiotherapy Session",
          doctor: "Dr. Kevin Djones",
          details: "Lower back rehabilitation exercises and assessment",
          targets: [
            { name: "Pain Level", target: "0-2/10", achieved: "3/10", status: "in-progress" },
            { name: "Mobility", target: "Full range", achieved: "80% range", status: "in-progress" },
            { name: "Core Strength", target: "Level 3", achieved: "Level 2", status: "in-progress" },
          ],
        },
        {
          date: "May 10, 2025",
          title: "Cardiologist Appointment",
          doctor: "Dr. Maria Rodriguez",
          details: "Heart health assessment and ECG",
          targets: [
            { name: "Resting Heart Rate", target: "<70 bpm", achieved: "68 bpm", status: "achieved" },
            { name: "Exercise Capacity", target: ">8 METs", achieved: "9.2 METs", status: "achieved" },
          ],
        },
      ],
    },
  ]

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Patient History</h1>
        <p className="text-gray-500">Detailed medical history and progress tracking</p>
      </div>

      <div className="space-y-8">
        {historyData.map((monthData, monthIndex) => (
          <div key={monthIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {monthData.month}
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {monthData.entries.map((entry, entryIndex) => (
                <div key={entryIndex} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {entry.date}
                        <span className="mx-2">•</span>
                        {entry.doctor}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{entry.details}</p>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Targets & Progress
                    </h4>

                    <div className="space-y-3">
                      {entry.targets.map((target, targetIndex) => (
                        <div key={targetIndex} className="flex items-center justify-between">
                          <div className="flex items-center">
                            {target.status === "achieved" ? (
                              <Award className="w-4 h-4 text-green-500 mr-2" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border-2 border-orange-400 mr-2"></div>
                            )}
                            <span className="text-sm font-medium">{target.name}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Target: {target.target}</span>
                            <span className="mx-2">|</span>
                            <span
                              className={
                                target.status === "achieved"
                                  ? "text-green-600 font-medium"
                                  : "text-orange-600 font-medium"
                              }
                            >
                              Achieved: {target.achieved}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
