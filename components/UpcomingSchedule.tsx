import SimpleAppointmentCard from "./SimpleAppointmentCard"

export default function UpcomingSchedule() {
  const scheduleData = {
    thursday: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "✅" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
    ],
    saturday: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
    ],
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">The Upcoming Schedule</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-2 gap-4">
            {scheduleData.thursday.map((appointment, index) => (
              <SimpleAppointmentCard key={index} {...appointment} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-2 gap-4">
            {scheduleData.saturday.map((appointment, index) => (
              <SimpleAppointmentCard key={index} {...appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
