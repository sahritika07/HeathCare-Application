interface SimpleAppointmentCardProps {
  title: string
  time: string
  icon: string
}

export default function SimpleAppointmentCard({ title, time, icon }: SimpleAppointmentCardProps) {
  return (
    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg">{icon}</span>
      </div>
      <h4 className="font-medium text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  )
}
