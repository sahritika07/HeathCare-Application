import Image from 'next/image'

export default function EnhancedAnatomySection() {
  const healthData = [
  {
    organ: "Lungs",
    date: "26 May 2025",
    status: "warning",
    color: "red",
    progress: "50%",
    iconComponent: (
      <span className="text-3xl">🫁</span>
    ),
  },
  {
    organ: "Teeth",
    date: "7 June 2025",
    status: "healthy",
    color: "cyan",
    progress: "90%",
    iconComponent: (
      <span className="text-3xl">🦷</span>
    ),
  },
  {
    organ: "Bone",
    date: "15 June 2025",
    status: "attention",
    color: "pink",
    progress: "65%",
    iconComponent: (
      <span className="text-3xl">🦴</span>
    ),
  },
]


  const getStatusColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500"
      case "cyan":
        return "bg-cyan-500"
      case "pink":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCardBorder = (color: string) => {
    switch (color) {
      case "red":
        return "border-red-200 bg-white"
      case "cyan":
        return "border-cyan-200 bg-white"
      case "pink":
        return "border-pink-200 bg-white"
      default:
        return "border-gray-200 bg-white"
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Anatomy Illustration */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-4 relative">
          <div className="w-full min-h-[400px] bg-gradient-to-b from-gray-50 to-white rounded-lg flex items-center justify-center relative">
            <Image
              src="/images/human1.png"
              alt="Human Anatomy"
              width={200}
              height={80}
              className="object-contain"
            />

            {/* Health indicators */}
            <div className="absolute top-[100px] right-[-20px]">
              <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1">
                <span className="text-red-200">❤️</span>
                <span>Healthy Heart</span>
              </div>
            </div>

            <div className="absolute bottom-[100px] left-[1px]">
              <div className="bg-cyan-400 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1">
                <span>🦵</span>
                <span>Healthy Leg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Status Cards */}
        <div className="w-full md:w-1/2 space-y-4">
          {healthData.map((item, index) => (
            <div key={index} className={`p-4 rounded-xl border mt-14 ${getCardBorder(item.color)} shadow-sm`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {item.iconComponent}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.organ}</h3>
                    <p className="text-sm text-gray-500">Date: {item.date}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getStatusColor(item.color)}`}
                    style={{ width: item.progress }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
