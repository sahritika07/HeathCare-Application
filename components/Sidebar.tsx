"use client"
import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
  onClose?: () => void // Add onClose prop for mobile
}

const navigationItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "history", icon: History, label: "History" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "appointments", icon: Clock, label: "Appointments" },
  { id: "statistics", icon: BarChart3, label: "Statistics" },
  { id: "tests", icon: TestTube, label: "Tests" },
  { id: "chat", icon: MessageCircle, label: "Chat" },
  { id: "support", icon: HelpCircle, label: "Support" },
]

export default function Sidebar({ activePage, setActivePage, onClose }: SidebarProps) {
  const { isDarkMode } = useTheme()

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId)
    // Auto-close sidebar on mobile when an option is clicked
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="h-full flex flex-col justify-between p-6">
      <div>
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-800 dark:text-gray-200">care.</span>
        </h2>

        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">General</h2>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Settings at the bottom */}
      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("settings")
          }}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            activePage === "settings"
              ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  )
}
