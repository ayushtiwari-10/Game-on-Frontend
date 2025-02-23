"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import "./PlayerApplications.css"

const applications = [
  {
    id: 1,
    name: "John Doe",
    sport: "Football",
    experience: "2+ years",
    appliedDate: "2 days ago",
    status: "pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    sport: "Tennis",
    experience: "3+ years",
    appliedDate: "1 day ago",
    status: "pending",
  },
  {
    id: 3,
    name: "Mike Johnson",
    sport: "Basketball",
    experience: "1+ year",
    appliedDate: "3 days ago",
    status: "pending",
  },
]

function PlayerApplications() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [playerApplications, setPlayerApplications] = useState(applications)

  const handleAccept = (id) => {
    setPlayerApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status: "accepted" } : app)))
  }

  const handleReject = (id) => {
    setPlayerApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status: "rejected" } : app)))
  }

  const filteredApplications = playerApplications.filter((app) => {
    if (activeTab === "accepted") return app.status === "accepted"
    if (activeTab === "rejected") return app.status === "rejected"
    if (activeTab === "pending") return app.status === "pending"
    return true
  })

  return (
    <div className="applications-page">
      <div className="applications-container">
        <h1>Review Player Profiles & Select the Best</h1>

        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button
            className={`tab ${activeTab === "accepted" ? "active" : ""}`}
            onClick={() => setActiveTab("accepted")}
          >
            Accepted
          </button>
          <button className={`tab ${activeTab === "pending" ? "active" : ""}`} onClick={() => setActiveTab("pending")}>
            Pending
          </button>
          <button
            className={`tab ${activeTab === "rejected" ? "active" : ""}`}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected
          </button>
        </div>

        <div className="applications-list">
          {filteredApplications.map((application) => (
            <div key={application.id} className="application-card">
              <div className="player-info">
                <img src="/placeholder.svg" alt={application.name} className="player-avatar" />
                <div className="player-details">
                  <h3>{application.name}</h3>
                  <p>
                    {application.sport} • {application.experience}
                  </p>
                  <p className="applied-date">Applied {application.appliedDate}</p>
                </div>
              </div>
              <div className="action-buttons">
                {application.status === "pending" && (
                  <>
                    <button className="accept-btn" onClick={() => handleAccept(application.id)}>
                      Accept
                    </button>
                    <button className="reject-btn" onClick={() => handleReject(application.id)}>
                      Reject
                    </button>
                  </>
                )}
                {application.status === "accepted" && <span className="status accepted">Accepted</span>}
                {application.status === "rejected" && <span className="status rejected">Rejected</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayerApplications

