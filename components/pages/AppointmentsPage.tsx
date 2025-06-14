"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Plus, Filter, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const appointments = [
    {
      id: 1,
      doctor: {
        name: "Dr. Emily Parker",
        specialty: "General Physician",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "June 15, 2025",
      time: "09:00 AM",
      location: "Main Hospital, Room 302",
      status: "upcoming",
      notes: "Annual physical examination",
    },
    {
      id: 2,
      doctor: {
        name: "Dr. Cameron Williamson",
        specialty: "Dentist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "June 20, 2025",
      time: "02:00 PM",
      location: "Dental Clinic, 2nd Floor",
      status: "upcoming",
      notes: "Regular dental cleaning and checkup",
    },
    {
      id: 3,
      doctor: {
        name: "Dr. Kevin Djones",
        specialty: "Physiotherapist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "May 28, 2025",
      time: "11:00 AM",
      location: "Physiotherapy Center",
      status: "completed",
      notes: "Lower back rehabilitation session",
    },
    {
      id: 4,
      doctor: {
        name: "Dr. Maria Rodriguez",
        specialty: "Cardiologist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "May 15, 2025",
      time: "10:30 AM",
      location: "Heart Center, Room 105",
      status: "completed",
      notes: "Heart health assessment and ECG",
    },
    {
      id: 5,
      doctor: {
        name: "Dr. Robert Williams",
        specialty: "Neurologist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "June 5, 2025",
      time: "03:15 PM",
      location: "Neurology Department",
      status: "cancelled",
      notes: "Headache consultation - cancelled due to doctor's emergency",
    },
  ]

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.notes.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterStatus === "all" || appointment.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-500">Manage your upcoming and past appointments</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="doctor">Select Doctor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-parker">Dr. Emily Parker (General Physician)</SelectItem>
                    <SelectItem value="dr-williamson">Dr. Cameron Williamson (Dentist)</SelectItem>
                    <SelectItem value="dr-djones">Dr. Kevin Djones (Physiotherapist)</SelectItem>
                    <SelectItem value="dr-rodriguez">Dr. Maria Rodriguez (Cardiologist)</SelectItem>
                    <SelectItem value="dr-williams">Dr. Robert Williams (Neurologist)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea id="reason" placeholder="Briefly describe the reason for your appointment" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select defaultValue="main-hospital">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main-hospital">Main Hospital</SelectItem>
                    <SelectItem value="dental-clinic">Dental Clinic</SelectItem>
                    <SelectItem value="heart-center">Heart Center</SelectItem>
                    <SelectItem value="physiotherapy">Physiotherapy Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <DialogTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogTrigger>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Schedule Appointment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search appointments..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-500 w-4 h-4" />
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Appointments</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No appointments found</p>
          </div>
        ) : (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-indigo-100 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={appointment.doctor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{appointment.doctor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{appointment.doctor.name}</h3>
                    <p className="text-sm text-gray-500">{appointment.doctor.specialty}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{appointment.location}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass(appointment.status)}`}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </div>
              </div>

              {appointment.notes && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">{appointment.notes}</p>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {appointment.status === "upcoming" && (
                  <>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      Cancel
                    </Button>
                  </>
                )}
                {appointment.status === "completed" && (
                  <Button variant="outline" size="sm">
                    View Summary
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="ml-auto">
                  More <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
