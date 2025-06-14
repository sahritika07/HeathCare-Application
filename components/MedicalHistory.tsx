import { ChevronRight } from "lucide-react"

export default function MedicalHistory() {
  const medicalHistory = [
    { title: "Backpain Checkup", date: "02/03/2025", icon: "🏥", doctor: "Dr. Sarah Johnson" },
    { title: "Neurological Test", date: "02/05/2025", icon: "🧠", doctor: "Dr. Michael Chen" },
    { title: "Knee Surgery", date: "02/05/2025", icon: "🦴", doctor: "Dr. Robert Williams" },
    { title: "Health Checkup", date: "02/05/2025", icon: "✅", doctor: "Dr. Emily Parker" },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h3>

      <div className="space-y-3">
        {medicalHistory.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">
                  {item.date} • {item.doctor}
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  )
}
