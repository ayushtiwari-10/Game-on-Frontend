"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import "./PlayerMyApplications.css"

const applications = [
  {
    id: 1,
    name: "National Equisterian Academy",
    website: "nea.com",
    location: "Delhi",
    appliedDate: "24hr ago",
    status: "applied",
  },
  {
    id: 2,
    name: "State Golf Club",
    website: "nea.com",
    location: "Delhi",
    appliedDate: "24hr ago",
    status: "saved",
  },
  {
    id: 3,
    name: "Table Tennis Club",
    website: "nea.com",
    location: "Delhi",
    appliedDate: "24hr ago",
    status: "in_progress",
  },
]

function PlayerMyApplications() {
  const [activeTab, setActiveTab] = useState("applied")

  return (
    <div className="my-applications-page">
      <div className="page-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <h2>My Items</h2>
            <div className="sidebar-items">
              <div className="sidebar-item active">
                <span>My Applications</span>
                <span className="count">4</span>
              </div>
              <div className="sidebar-item">
                <span>My Learnings</span>
                <span className="count">3</span>
              </div>
              <div className="sidebar-item">
                <span>Saved articles</span>
                <span className="count">1</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="header">
            <h1>My Applications</h1>
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>

          <div className="tabs">
            <button className={`tab ${activeTab === "saved" ? "active" : ""}`} onClick={() => setActiveTab("saved")}>
              Saved
            </button>
            <button
              className={`tab ${activeTab === "in_progress" ? "active" : ""}`}
              onClick={() => setActiveTab("in_progress")}
            >
              In Progress
            </button>
            <button
              className={`tab ${activeTab === "applied" ? "active" : ""}`}
              onClick={() => setActiveTab("applied")}
            >
              Applied
            </button>
            <button
              className={`tab ${activeTab === "archived" ? "active" : ""}`}
              onClick={() => setActiveTab("archived")}
            >
              Archived
            </button>
          </div>

          <div className="applications-list">
            {applications.map((application) => (
              <div key={application.id} className="application-item">
                <div className="academy-avatar" />
                <div className="application-details">
                  <h3>{application.name}</h3>
                  <p className="website">{application.website}</p>
                  <p className="location">{application.location}</p>
                  <p className="applied-date">Applied {application.appliedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default PlayerMyApplications

