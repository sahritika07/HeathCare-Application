"use client"

import { useState } from "react"
import { X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserProfileModalProps {
  userProfile: any
  setUserProfile: (profile: any) => void
  onClose: () => void
}

export default function UserProfileModal({ userProfile, setUserProfile, onClose }: UserProfileModalProps) {
  const [formData, setFormData] = useState({ ...userProfile })

  const handleSave = () => {
    setUserProfile(formData)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: field === "age" || field === "weight" || field === "height" ? Number.parseInt(value) || 0 : value,
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Select value={formData.bloodGroup} onValueChange={(value) => handleChange("bloodGroup", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => handleChange("height", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="col-span-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="col-span-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <Input
              id="emergencyContact"
              value={formData.emergencyContact}
              onChange={(e) => handleChange("emergencyContact", e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
