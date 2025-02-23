"use client"

import { useState } from "react"
import "./PlayerNotifications.css"

const initialNotifications = [
  {
    id: 1,
    message: "Your application to National Badminton Academy has been accepted! Welcome to the team! 🎉",
    time: "2m",
    read: false,
  },
  {
    id: 2,
    message: "New tournament announcement: Summer Championships 2024! Register now to participate. 🏆",
    time: "1h",
    read: false,
  },
  {
    id: 3,
    message: "Your application to State Golf Club is under review. We'll update you soon! ⏳",
    time: "3h",
    read: true,
  },
  {
    id: 4,
    message: "Don't forget to complete your profile to increase your chances of selection! 📝",
    time: "1d",
    read: true,
  },
]

function PlayerNotifications() {
  const [activeTab, setActiveTab] = useState("all")
  const [notifications, setNotifications] = useState(initialNotifications)

  const handleMarkAsRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === "read") return notif.read
    if (activeTab === "unread") return !notif.read
    return true
  })

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <div className="notifications-header">
          <h1>Your Notifications</h1>
          <i className="fas fa-bell"></i>
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            ALL
          </button>
          <button className={`tab ${activeTab === "read" ? "active" : ""}`} onClick={() => setActiveTab("read")}>
            Read
          </button>
          <button className={`tab ${activeTab === "unread" ? "active" : ""}`} onClick={() => setActiveTab("unread")}>
            Unread
          </button>
        </div>

        <div className="notifications-list">
          {filteredNotifications.map((notification) => (
            <div key={notification.id} className={`notification-card ${notification.read ? "read" : ""}`}>
              <div className="notification-content">
                <img src="https://cdn-icons-png.flaticon.com/512/5336/5336109.png" alt="Notification" className="notification-icon" />
                <p>{notification.message}</p>
              </div>
              <div className="notification-actions">
                <span className="time">{notification.time}</span>
                {!notification.read && (
                  <button className="mark-read-btn" onClick={() => handleMarkAsRead(notification.id)}>
                    <i className="fas fa-check"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayerNotifications

