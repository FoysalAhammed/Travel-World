import React, { useState, useRef, useEffect } from 'react'
import { FaWhatsapp, FaTimes, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaPaperPlane, FaRobot } from 'react-icons/fa'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const companyInfo = {
  name: 'Dynamic Travels',
  phone: '+8801614008001',
  email: 'info@dynamictravels.com',
  address: 'House 1/B, Road 35, Gulshan 2, Dhaka 1212',
  hours: '9:00 AM - 10:00 PM (Everyday)',
  whatsapp: '+8801614008001'
}

const quickQuestions = [
  'What are your popular tour packages?',
  'How can I book a tour?',
  'What are your payment methods?',
  'Do you offer visa services?'
]

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI travel assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [showContacts, setShowContacts] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMessage])
      setNewMessage('')

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. Our team will assist you shortly. Meanwhile, you can check our popular packages or contact us directly through WhatsApp for faster response.",
          sender: 'ai',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    })
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-violet-600 hover:bg-violet-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <IoChatbubbleEllipsesOutline className="text-2xl" />
        )}
      </button>

      {/* Chat Panel */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-xl transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaRobot className="text-2xl" />
            <div>
              <h3 className="font-semibold">AI Travel Assistant</h3>
              <p className="text-xs text-white/90">Dynamic Travels</p>
            </div>
          </div>
          <button 
            onClick={() => setShowContacts(!showContacts)}
            className="text-white/90 hover:text-white text-sm underline"
          >
            {showContacts ? 'Back to Chat' : 'Contact Us'}
          </button>
        </div>

        {!showContacts ? (
          <>
            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-violet-600 text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-[10px] mt-1 ${
                      message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-3 border-t border-gray-100">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setNewMessage(question)}
                    className="flex-shrink-0 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 resize-none bg-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 max-h-32"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:hover:bg-violet-600 text-white p-2 rounded-xl transition-colors"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Contact Options */}
            <div className="p-4 space-y-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
                <div>
                  <div className="font-medium">Chat on WhatsApp</div>
                  <div className="text-sm text-white/90">Typically replies instantly</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white p-3 rounded-xl transition-colors"
              >
                <FaPhoneAlt className="text-xl" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-sm text-white/90">{companyInfo.phone}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-sm text-white/90">{companyInfo.email}</div>
                </div>
              </a>
            </div>

            {/* Company Info */}
            <div className="border-t border-gray-100 p-4 space-y-3">
              <div className="flex items-start gap-3 text-gray-600">
                <FaClock className="text-lg text-violet-600 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Business Hours</div>
                  <div className="text-sm">{companyInfo.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-lg text-violet-600 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Office Address</div>
                  <div className="text-sm">{companyInfo.address}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  )
}

export default FloatingChat 