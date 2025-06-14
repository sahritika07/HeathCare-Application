import { Phone, Mail, MessageCircle, FileText, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
  const faqItems = [
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by going to the Calendar page and clicking on an available time slot, or by calling our support line.",
    },
    {
      question: "How can I access my test results?",
      answer:
        "Test results are available in the Tests section once they're ready. You'll receive a notification when new results are available.",
    },
    {
      question: "Can I update my personal information?",
      answer:
        "Yes, you can update your personal information by clicking on your profile picture in the header and selecting 'Edit Profile'.",
    },
    {
      question: "How do I contact my doctor directly?",
      answer:
        "You can message your doctor directly through the Chat section. For urgent matters, please call our emergency line.",
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer:
        "For medical emergencies, please call 911 immediately. For urgent but non-emergency situations, call our 24/7 hotline.",
    },
  ]

  const supportTickets = [
    {
      id: "TK-001",
      subject: "Unable to download test results",
      status: "Open",
      date: "June 5, 2025",
      priority: "Medium",
    },
    {
      id: "TK-002",
      subject: "Appointment rescheduling issue",
      status: "Resolved",
      date: "May 28, 2025",
      priority: "Low",
    },
    {
      id: "TK-003",
      subject: "Billing inquiry",
      status: "In Progress",
      date: "May 25, 2025",
      priority: "High",
    },
  ]

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
        <p className="text-gray-500">Get help and support for your healthcare needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Options */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Emergency Hotline</p>
                  <p className="text-sm text-gray-600">+1 (555) 911-HELP</p>
                  <p className="text-xs text-blue-600">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">General Support</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-CARE</p>
                  <p className="text-xs text-green-600">Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-sm text-gray-600">support@healthcare.com</p>
                  <p className="text-xs text-purple-600">Response within 24hrs</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <MessageCircle className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Live Chat</p>
                  <p className="text-sm text-gray-600">Chat with our team</p>
                  <p className="text-xs text-orange-600">Available now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Support Tickets</h2>

            <div className="space-y-3">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{ticket.id}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        ticket.status === "Open"
                          ? "bg-red-100 text-red-800"
                          : ticket.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 mb-1">{ticket.subject}</p>
                  <p className="text-xs text-gray-500">{ticket.date}</p>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4">
              <FileText className="w-4 h-4 mr-2" />
              Create New Ticket
            </Button>
          </div>
        </div>

        {/* FAQ and Contact Form */}
        <div className="lg:col-span-2">
          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea placeholder="Please describe your issue in detail..." rows={6} />
              </div>

              <Button className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
