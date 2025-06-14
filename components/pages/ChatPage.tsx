"use client"

import { useState } from "react"
import { Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatPage() {
  const [message, setMessage] = useState("")

  const doctors = [
    {
      id: 1,
      name: "Dr. Emily Parker",
      specialty: "General Physician",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      id: 2,
      name: "Dr. Cameron Williamson",
      specialty: "Dentist",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      id: 3,
      name: "Dr. Kevin Djones",
      specialty: "Physiotherapist",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    {
      id: 4,
      name: "Dr. Maria Rodriguez",
      specialty: "Cardiologist",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
  ]

  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])

  const messages = [
    { id: 1, sender: "doctor", text: "Hello! How can I help you today?", time: "09:30 AM" },
    { id: 2, sender: "user", text: "Hi Dr. Parker, I've been experiencing some back pain recently.", time: "09:32 AM" },
    {
      id: 3,
      sender: "doctor",
      text: "I'm sorry to hear that. Can you describe the pain? Is it sharp or dull? And when did it start?",
      time: "09:33 AM",
    },
    {
      id: 4,
      sender: "user",
      text: "It's a dull pain in my lower back. It started about a week ago after I moved some heavy furniture.",
      time: "09:35 AM",
    },
    {
      id: 5,
      sender: "doctor",
      text: "I see. That sounds like it could be muscle strain. Have you tried any pain relievers or applied heat/cold to the area?",
      time: "09:37 AM",
    },
    {
      id: 6,
      sender: "user",
      text: "I've taken some ibuprofen which helps a bit, and I've used a heating pad in the evenings.",
      time: "09:38 AM",
    },
    {
      id: 7,
      sender: "doctor",
      text: "That's good. I'd recommend continuing with the ibuprofen as directed on the package for another few days. Alternate between heat and ice packs - 20 minutes on, then 20 minutes off. Also, try to avoid heavy lifting and get plenty of rest.",
      time: "09:40 AM",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would add the message to the messages array
      // and potentially send it to a backend
      setMessage("")
    }
  }

  return (
    <div className="flex h-full">
      {/* Doctor List */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedDoctor.id === doctor.id ? "bg-indigo-50" : ""
              }`}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {doctor.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{doctor.name}</p>
                  <p className="text-xs text-gray-500 truncate">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={selectedDoctor.avatar || "/placeholder.svg"} />
              <AvatarFallback>{selectedDoctor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{selectedDoctor.name}</h2>
              <p className="text-sm text-gray-500">{selectedDoctor.online ? "Online" : "Offline"}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    msg.sender === "user" ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-indigo-200" : "text-gray-500"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5 text-gray-600" />
            </Button>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
            />
            <Button onClick={handleSendMessage} disabled={!message.trim()}>
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
