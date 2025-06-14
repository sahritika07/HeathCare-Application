import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalendarView() {
  const calendarData = [
    { day: "Mon", date: 25, times: ["10:00", "11:00"] },
    { day: "Tue", date: 26, times: ["08:00", "09:00"] },
    { day: "Wed", date: 27, times: ["12:00"] },
    { day: "Thu", date: 28, times: ["10:00", "11:00"] },
    { day: "Fri", date: 29, times: ["14:00"] },
    { day: "Sat", date: 30, times: ["12:00", "14:00"] },
    { day: "Sun", date: 31, times: ["09:00"] },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">October 2021</h2>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarData.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-xs text-gray-500 mb-2">{day.day}</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{day.date}</div>
            <div className="space-y-1">
              {day.times.map((time, index) => (
                <div
                  key={index}
                  className={`text-xs px-1 py-1 rounded ${
                    day.date === 26 && time === "09:00" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="bg-indigo-600 text-white p-3 rounded-lg">
          <h3 className="font-semibold text-sm">Dentist</h3>
          <p className="text-xs opacity-90">09:00-11:00</p>
          <p className="text-xs opacity-90">Dr. Cameron Williamson</p>
        </div>

        <div className="bg-indigo-100 text-indigo-900 p-3 rounded-lg">
          <h3 className="font-semibold text-sm">Physiotherapy</h3>
          <p className="text-xs opacity-75">11:00-12:00</p>
          <p className="text-xs opacity-75">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  )
}
