import { Heart, Zap } from "lucide-react"
import HealthStatusCards from "./HealthStatusCards"

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-start space-x-6">
        {/* Anatomy Illustration */}
        <div className="relative">
          <div className="w-48 h-64 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg flex items-center justify-center relative">
            {/* Human body silhouette placeholder */}
            <div className="w-32 h-56 bg-orange-300 rounded-full opacity-60"></div>

            {/* Health indicators */}
            <div className="absolute top-16 right-2">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Heart className="w-3 h-3" />
                <span>Healthy Heart</span>
              </div>
            </div>

            <div className="absolute bottom-20 left-2">
              <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Zap className="w-3 h-3" />
                <span>Healthy Leg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Status Cards */}
        <HealthStatusCards />
      </div>
    </div>
  )
}
