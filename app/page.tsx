"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import DashboardMainContent from "@/components/DashboardMainContent"
import HistoryPage from "@/components/pages/HistoryPage"
import ChatPage from "@/components/pages/ChatPage"
import CalendarPage from "@/components/pages/CalendarPage"
import StatisticsPage from "@/components/pages/StatisticsPage"
import TestsPage from "@/components/pages/TestsPage"
import SupportPage from "@/components/pages/SupportPage"
import SettingsPage from "@/components/pages/SettingsPage"
import AppointmentsPage from "@/components/pages/AppointmentsPage"
import UserProfileModal from "@/components/UserProfileModal"
import UserProfile from "@/components/UserProfile"
import CalendarView from "@/components/CalendarView"
// import PatientInfo from "@/components/PatientInfo"
import HealthMetricsPieChart from "@/components/HealthMetricsPieChart"
import UpcomingSchedule from "@/components/UpcomingSchedule"
import MedicalHistory from "@/components/MedicalHistory"


import { Button } from "@/components/ui/button"
import { Bell} from "lucide-react"

export default function HealthcareDashboard() {
  const [activePage, setActivePage] = useState("dashboard")
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  // Health data state that will be shared across components
  const [healthData, setHealthData] = useState({
    sleepHours: 7.5,
    waterIntake: 2.4,
    steps: 8750,
    caloriesBurned: 420,
  })

  // User profile state
  const [userProfile, setUserProfile] = useState({
    name: "JOHNSON",
    age: 35,
    gender: "Male",
    weight: 67,
    height: 175,
    bloodGroup: "A+",
    email: "alanwalker@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Health Street, Medical City, MC 12345",
    emergencyContact: "Jane Dylan - +1 (555) 987-6543",
  })

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <span className="text-white text-2xl font-bold">H</span>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden transition-colors">
      {/* Header */}
      {/* <Header userProfile={userProfile} onProfileClick={() => setShowProfileModal(true)} /> */}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Left Sidebar */}
        <div
          className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 fixed lg:relative z-50 lg:z-auto
          w-80 lg:w-1/5 lg:min-w-[250px] h-full
          bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-in-out
        `}
        >
          <Sidebar activePage={activePage} setActivePage={setActivePage} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Conditional Layout based on active page */}
        {activePage === "dashboard" ? (
          /* Dashboard Layout: Responsive Center + Right Container */
          <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto">
            {/* Center Content */}
            <div className="flex-1 lg:flex-[3]">
              <DashboardMainContent
                healthData={healthData}
                setHealthData={setHealthData}
                userProfile={userProfile}
                onEditProfile={() => setShowProfileModal(true)}
              />
            </div>

            

            {/* Right Sidebar - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block lg:flex-[2] bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
             <Header userProfile={userProfile} onProfileClick={() => setShowProfileModal(true)} /> 
              <div className="p-4">
                <UserProfile userProfile={userProfile} onEditProfile={() => setShowProfileModal(true)} />
                                        
                <CalendarView />
                {/* <PatientInfo /> */}
                <HealthMetricsPieChart healthData={healthData} />
                <UpcomingSchedule />
                <MedicalHistory />
              </div>
            </div>
          </div>
        ) : (
          /* Other Pages Layout: Full Width Content */
          <div className="flex-1 overflow-y-auto">
            {activePage === "history" && <HistoryPage />}
            {activePage === "chat" && <ChatPage />}
            {activePage === "calendar" && <CalendarPage />}
            {activePage === "statistics" && <StatisticsPage healthData={healthData} />}
            {activePage === "tests" && <TestsPage />}
            {activePage === "support" && <SupportPage />}
            {activePage === "settings" && <SettingsPage />}
            {activePage === "appointments" && <AppointmentsPage />}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {showProfileModal && (
        <UserProfileModal
          userProfile={userProfile}
          setUserProfile={setUserProfile}
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </div>
  )
}
