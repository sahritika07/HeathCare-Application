import Image from 'next/image';

export default function EnhancedAnatomySection() {
  const healthData = [
    {
      organ: "Lungs",
      date: "26 Okt 2021",
      status: "warning",
      icon: "🫁",
      color: "red",
      iconComponent: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L9 7L12 12L9 17L12 22"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2L15 7L12 12L15 17L12 22"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      organ: "Teeth",
      date: "26 Okt 2021",
      status: "healthy",
      icon: "🦷",
      color: "cyan",
      iconComponent: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 4V20" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 4V20" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 8H20" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16H20" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      organ: "Bone",
      date: "26 Okt 2021",
      status: "attention",
      icon: "🦴",
      color: "orange",
      iconComponent: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L8 12L16 20" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const getStatusColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500"
      case "cyan":
        return "bg-cyan-500"
      case "orange":
        return "bg-orange-500"
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
      case "orange":
        return "border-orange-200 bg-white"
      default:
        return "border-gray-200 bg-white"
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Anatomy Illustration */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-4 relative">
          {/* Placeholder for human anatomy image */}
          <div className="w-full h-64 bg-gradient-to-b from-gray-50 to-white rounded-lg flex items-center justify-center relative">
            <Image  
            src="/images/human.png"   // Path relative to /public
            alt="Human Anatomy"
            width={200}
            height={80}
            className="object-contain"
           
          />

            {/* Health indicators */}
            <div className="absolute top-1/3 right-1/4">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <span className="text-red-200">❤️</span>
                <span>Healthy Heart</span>
              </div>
            </div>

            <div className="absolute bottom-1/4 left-1/4">
              <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <span>🦵</span>
                <span>Healthy Leg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Status Cards */}
        <div className="w-full md:w-1/2 space-y-4">
          {healthData.map((item, index) => (
            <div key={index} className={`p-4 rounded-xl border ${getCardBorder(item.color)} shadow-sm`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {item.color === "red" ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 3C6 3 9 1 12 3C15 1 18 3 18 3C18 3 22 5 22 10C22 15 17 20 12 22C7 20 2 15 2 10C2 5 6 3 6 3Z"
                          fill="#FFCDD2"
                          stroke="#FF6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : item.color === "cyan" ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"
                          fill="#B2EBF2"
                          stroke="#2DD4BF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 7L12 3L4 7V17L12 21L20 17V7Z"
                          fill="#FFE0B2"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.organ}</h3>
                    <p className="text-sm text-gray-500">Date: {item.date}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${getStatusColor(item.color)} w-3/4`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
