export default function HealthStatusCards() {
  const healthData = [
    {
      organ: "Lungs",
      date: "26 Oct 2021",
      status: "warning",
      icon: "🫁",
    },
    {
      organ: "Teeth",
      date: "26 Oct 2021",
      status: "healthy",
      icon: "🦷",
    },
    {
      organ: "Bone",
      date: "26 Oct 2021",
      status: "attention",
      icon: "🦴",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500"
      case "warning":
        return "bg-red-500"
      case "attention":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4 flex-1">
      {healthData.map((item) => (
        <div key={item.organ} className="flex items-center space-x-4">
          <div className="text-2xl">{item.icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{item.organ}</h3>
            <p className="text-sm text-gray-500">Date: {item.date}</p>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${getStatusColor(item.status)} w-3/4`}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
