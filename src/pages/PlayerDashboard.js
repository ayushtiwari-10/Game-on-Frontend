"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./PlayerDashboard.css"

function Calendar() {
  const [currentDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button className="calendar-nav">&lt;</button>
        <span>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</span>
        <button className="calendar-nav">&gt;</button>
      </div>
      <div className="weekdays">
        {weekDays.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

function PlayerDashboard() {
  const playerName = "John" // This would come from your auth state
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState("reminder")

  return (
    <div className="dashboard">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div className="logo-section">
            <img src="/logo.png" alt="Game On" className="logo" />
            <span>GAME ON</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/tournaments">Tournaments</Link>
            <Link to="/academies">Academies</Link>
            <Link to="/team-creation">Team Creation</Link>
            <Link to="/my-applications">My Applications</Link>
          </div>
          <div className="user-section">
            <button className="icon-button" onClick={() => navigate("/player-notifications")}>
              <i className="fas fa-bell"></i>
              <span className="notification-dot"></span>
            </button>
            <button className="icon-button" onClick={() => navigate("/profile")}>
              <i className="fas fa-user"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>
          WELCOME <span className="player-name">{playerName}</span>! Ready to elevate your game?
        </h1>
      </section>

      {/* Status Cards */}
      <section className="status-cards">
        <div className="status-card">
          <h2>About your Team Status</h2>
          <div className="card-content">
            <p>No active team</p>
          </div>
        </div>
        <div className="status-card">
          <h2>Upcoming Tournaments</h2>
          <div className="card-content">
            <p>No upcoming tournaments</p>
          </div>
        </div>
        <div className="status-card">
          <h2>Ongoing Tournaments</h2>
          <div className="card-content">
            <p>No ongoing tournaments</p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-left">
          <section className="track-application">
            <h2>Track your application</h2>
            <Link to="/my-applications" className="track-application-link">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(11)-jxtirPVwLhxkyz1BBLgW5PsmBMQtju.png"
                alt="Track Application"
              />
            </Link>
          </section>

          <section className="team-formation">
            <h2>Introducing online team formation feature</h2>
            <Link to="/team-creation" className="team-formation-link">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(12)-ZnUgixzzCclEjWkVKxyrhNVFHtPtQK.png"
                alt="Team Formation"
              />
            </Link>
          </section>

          <section className="quick-actions">
            <button className="action-button" onClick={() => navigate("/academies")}>
              Which academy is for you
            </button>
            <button className="action-button" onClick={() => navigate("/top-players")}>
              See the top players in your area
            </button>
          </section>
        </div>

        {/* Right Column */}
        <div className="dashboard-right">
          <section className="calendar-section">
            <h2>Important Dates</h2>
            <Calendar />
            <div className="calendar-tabs">
              <button
                className={`tab-button ${activeTab === "reminder" ? "active" : ""}`}
                onClick={() => setActiveTab("reminder")}
              >
                Reminder
              </button>
              <button
                className={`tab-button ${activeTab === "updates" ? "active" : ""}`}
                onClick={() => setActiveTab("updates")}
              >
                Updates
              </button>
              <button
                className={`tab-button ${activeTab === "events" ? "active" : ""}`}
                onClick={() => setActiveTab("events")}
              >
                Events
              </button>
            </div>
            <div className="calendar-content">
              {activeTab === "reminder" && (
                <div className="reminders">
                  <p>No upcoming reminders</p>
                </div>
              )}
              {activeTab === "updates" && (
                <div className="updates">
                  <p>No new updates</p>
                </div>
              )}
              {activeTab === "events" && (
                <div className="events">
                  <p>No scheduled events</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Academy partners</p>
        </div>
        <div className="stat-card">
          <h3>100</h3>
          <p>Active tournament listings</p>
        </div>
      </section>
    </div>
  )
}

export default PlayerDashboard

