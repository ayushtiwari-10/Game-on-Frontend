"use client"

import { useState } from "react"
import "./Notifications.css"

const initialNotifications = [
  {
    id: 1,
    message:
      "Congratulations, [Player Name]! You've successfully registered for the [Tournament Name]. Get ready to showcase your skills and compete for glory! 🏆",
    time: "2m",
    read: false,
  },
  {
    id: 2,
    message:
      "You've been invited to join [Team Name]! Click here to view the invitation and confirm your spot on the roster. Let's win together! ⚡",
    time: "2m",
    read: false,
  },
  {
    id: 3,
    message:
      "Good news, [Player Name]! Your application to [Academy Name] has been approved. Get ready to train with the best and elevate your game! 🌟",
    time: "2m",
    read: true,
  },
  {
    id: 4,
    message:
      "Good news, [Player Name]! Your application to [Academy Name] has been approved. Get ready to train with the best and elevate your game! 🌟",
    time: "2m",
    read: true,
  },
]

function Notifications() {
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
          <h1>Stay Updated with the Latest Notifications</h1>
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
                <img src="https://cdn-icons-png.flaticon.com/512/5336/5336109.png" alt="User" className="user-avatar" />
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

export default Notifications

