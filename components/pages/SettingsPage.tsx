"use client"

import { useState } from "react"
import { Bell, Shield, Palette, Download, Trash2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    appointments: true,
    testResults: true,
    medications: false,
    healthTips: true,
    emergencyAlerts: true,
  })

  const [privacy, setPrivacy] = useState({
    shareDataWithDoctors: true,
    allowResearchParticipation: false,
    enableLocationServices: true,
    shareAnonymousData: false,
  })

  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "english",
    timezone: "EST",
    dateFormat: "MM/DD/YYYY",
  })

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account preferences and privacy settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notifications */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Notifications
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="appointments">Appointment Reminders</Label>
                <p className="text-sm text-gray-500">Get notified about upcoming appointments</p>
              </div>
              <Switch
                id="appointments"
                checked={notifications.appointments}
                onCheckedChange={(checked) => setNotifications({ ...notifications, appointments: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="testResults">Test Results</Label>
                <p className="text-sm text-gray-500">Notifications when test results are available</p>
              </div>
              <Switch
                id="testResults"
                checked={notifications.testResults}
                onCheckedChange={(checked) => setNotifications({ ...notifications, testResults: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="medications">Medication Reminders</Label>
                <p className="text-sm text-gray-500">Reminders to take your medications</p>
              </div>
              <Switch
                id="medications"
                checked={notifications.medications}
                onCheckedChange={(checked) => setNotifications({ ...notifications, medications: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="healthTips">Health Tips</Label>
                <p className="text-sm text-gray-500">Weekly health tips and recommendations</p>
              </div>
              <Switch
                id="healthTips"
                checked={notifications.healthTips}
                onCheckedChange={(checked) => setNotifications({ ...notifications, healthTips: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emergencyAlerts">Emergency Alerts</Label>
                <p className="text-sm text-gray-500">Critical health alerts and emergencies</p>
              </div>
              <Switch
                id="emergencyAlerts"
                checked={notifications.emergencyAlerts}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emergencyAlerts: checked })}
              />
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Privacy & Security
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="shareData">Share Data with Doctors</Label>
                <p className="text-sm text-gray-500">Allow doctors to access your health data</p>
              </div>
              <Switch
                id="shareData"
                checked={privacy.shareDataWithDoctors}
                onCheckedChange={(checked) => setPrivacy({ ...privacy, shareDataWithDoctors: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="research">Research Participation</Label>
                <p className="text-sm text-gray-500">Allow use of anonymized data for research</p>
              </div>
              <Switch
                id="research"
                checked={privacy.allowResearchParticipation}
                onCheckedChange={(checked) => setPrivacy({ ...privacy, allowResearchParticipation: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="location">Location Services</Label>
                <p className="text-sm text-gray-500">Enable location for nearby healthcare services</p>
              </div>
              <Switch
                id="location"
                checked={privacy.enableLocationServices}
                onCheckedChange={(checked) => setPrivacy({ ...privacy, enableLocationServices: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="anonymous">Anonymous Data Sharing</Label>
                <p className="text-sm text-gray-500">Share anonymous health statistics</p>
              </div>
              <Switch
                id="anonymous"
                checked={privacy.shareAnonymousData}
                onCheckedChange={(checked) => setPrivacy({ ...privacy, shareAnonymousData: checked })}
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">Security</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Enable Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Login History
              </Button>
            </div>
          </div>
        </div>

        {/* Appearance & Preferences */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Appearance & Preferences
          </h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select
                value={preferences.theme}
                onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="language">Language</Label>
              <Select
                value={preferences.language}
                onValueChange={(value) => setPreferences({ ...preferences, language: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select
                value={preferences.timezone}
                onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                  <SelectItem value="CST">Central Time (CST)</SelectItem>
                  <SelectItem value="MST">Mountain Time (MST)</SelectItem>
                  <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dateFormat">Date Format</Label>
              <Select
                value={preferences.dateFormat}
                onValueChange={(value) => setPreferences({ ...preferences, dateFormat: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Data Management
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Export Your Data</h3>
              <p className="text-sm text-gray-500 mb-3">Download a copy of all your health data</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export Health Data
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Delete Account</h3>
              <p className="text-sm text-gray-500 mb-3">Permanently delete your account and all associated data</p>
              <Button variant="destructive" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <Button size="lg">
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
