"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const appointments = [
    { date: new Date(2025, 5, 10), title: "Dental Checkup", time: "09:00 AM", doctor: "Dr. Cameron Williamson" },
    { date: new Date(2025, 5, 15), title: "Physical Therapy", time: "11:00 AM", doctor: "Dr. Kevin Djones" },
    { date: new Date(2025, 5, 22), title: "Cardiologist", time: "02:00 PM", doctor: "Dr. Maria Rodriguez" },
    { date: new Date(2025, 5, 28), title: "General Checkup", time: "10:00 AM", doctor: "Dr. Emily Parker" },
  ]

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100 bg-gray-50"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayAppointments = appointments.filter(
        (appt) => appt.date.getDate() === day && appt.date.getMonth() === month && appt.date.getFullYear() === year,
      )

      days.push(
        <div key={day} className="h-24 border border-gray-100 p-1 overflow-hidden">
          <div className={`text-right mb-1 ${dayAppointments.length > 0 ? "font-bold" : ""}`}>{day}</div>
          <div className="space-y-1">
            {dayAppointments.map((appt, idx) => (
              <div
                key={idx}
                className="text-xs p-1 rounded bg-indigo-100 text-indigo-800 truncate"
                title={`${appt.title} - ${appt.time} - ${appt.doctor}`}
              >
                {appt.time} - {appt.title}
              </div>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-500">View and manage your appointments</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md border border-gray-200">
            <CalendarIcon className="w-5 h-5 text-indigo-600" />
            <span className="font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
          </div>
          <Button variant="outline" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 text-center font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">{renderCalendarDays()}</div>
      </div>

      {/* Upcoming Appointments */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
        <div className="grid grid-cols-2 gap-4">
          {appointments.map((appt, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{appt.title}</h3>
                  <p className="text-sm text-gray-500">
                    {appt.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} •{" "}
                    {appt.time}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{appt.doctor}</p>
                </div>
                <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Confirmed</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
