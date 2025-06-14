"use client"

import { Search, Bell, Plus, LogOut, Moon, Sun } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"
import { useTheme } from "@/contexts/ThemeContext"
import { useRouter } from "next/navigation"

interface HeaderProps {
  userProfile: any
  onProfileClick: () => void
}

export default function Header({ userProfile, onProfileClick }: HeaderProps) {
  const { logout } = useAuth()
  const { isDarkMode, toggleDarkMode } = useTheme()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/auth/login")
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-gray-800 dark:text-gray-200">care.</span>
          </h1>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              className="pl-10 w-60 lg:w-80 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
            <Bell className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-cyan-400 text-white text-sm">
                  {userProfile.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={onProfileClick}>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-indigo-600 hover:bg-indigo-700 hidden sm:flex">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
