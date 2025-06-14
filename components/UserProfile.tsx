"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"

interface UserProfileProps {
  userProfile: any
  onEditProfile?: () => void
}

export default function UserProfile({ userProfile, onEditProfile }: UserProfileProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">My Profile</h2>
        <button onClick={onEditProfile} className="cursor-pointer">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="flex items-start space-x-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" />
          <AvatarFallback className="bg-gray-200 text-gray-600 text-lg">
            {userProfile.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{userProfile.weight} kg</span>
            <span className="text-sm text-gray-500">{userProfile.bloodGroup}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-1">{userProfile.name}</h3>
          <p className="text-sm text-gray-500">
            {userProfile.gender} • {userProfile.age} years old
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-xs">💧</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Blood Pressure</p>
            <p className="text-sm font-semibold">
              120/80 <span className="text-xs text-gray-400">mm Hg</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-xs">❤️</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Heart rate</p>
            <p className="text-sm font-semibold">
              120/80 <span className="text-xs text-gray-400">mm Hg</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
