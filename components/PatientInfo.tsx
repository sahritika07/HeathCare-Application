export default function PatientInfo() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Health Condition</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-36 h-36 mb-4">
          {/* Circular progress indicator */}
          <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${96 * 2.51} ${(100 - 96) * 2.51}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">96%</span>
            <span className="text-xs text-green-600 font-medium">Health</span>
            <span className="text-xs text-gray-600">Body Condition</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-blue-600">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span>Conditional report based on real-time situation</span>
        </div>
      </div>
    </div>
  )
}
