"use client"

import { useState } from "react"
import "./TournamentVacancies.css"

const dummyVacancies = [
  {
    id: 1,
    name: "Academy's Name",
    vacancies: 5,
    postedTime: "2hrs ago",
    expiryDate: "10+",
  },
  {
    id: 2,
    name: "Academy's Name",
    vacancies: 3,
    postedTime: "4hrs ago",
    expiryDate: "10+",
  },
  {
    id: 3,
    name: "Academy's Name",
    vacancies: 2,
    postedTime: "6hrs ago",
    expiryDate: "10+",
  },
  {
    id: 4,
    name: "Academy's Name",
    vacancies: 4,
    postedTime: "8hrs ago",
    expiryDate: "10+",
  },
]

function TournamentVacancies() {
  const [activeTab, setActiveTab] = useState("all")
  const [following, setFollowing] = useState([])

  const handleFollow = (id) => {
    setFollowing((prev) => (prev.includes(id) ? prev.filter((followId) => followId !== id) : [...prev, id]))
  }

  const handleApply = (id) => {
    console.log("Applied to vacancy:", id)
  }

  return (
    <div className="vacancies-page">
      <div className="vacancies-container">
        <h2>Vacancy Applications for this tournament are opened by:</h2>

        <div className="vacancy-tabs">
          <button className={`tab-button ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button className={`tab-button ${activeTab === "read" ? "active" : ""}`} onClick={() => setActiveTab("read")}>
            Read
          </button>
          <button
            className={`tab-button ${activeTab === "unread" ? "active" : ""}`}
            onClick={() => setActiveTab("unread")}
          >
            Unread
          </button>
        </div>

        <div className="vacancies-list">
          {dummyVacancies.map((vacancy) => (
            <div key={vacancy.id} className="vacancy-card">
              <div className="vacancy-info">
                <div className="academy-avatar" />
                <div className="vacancy-details">
                  <h3>{vacancy.name}</h3>
                  <p>No. of vacancy</p>
                  <p>Posted {vacancy.postedTime}</p>
                  <p>Exp: {vacancy.expiryDate}</p>
                </div>
              </div>
              <div className="vacancy-actions">
                <button className="apply-btn" onClick={() => handleApply(vacancy.id)}>
                  Apply
                </button>
                <button
                  className={`follow-btn ${following.includes(vacancy.id) ? "following" : ""}`}
                  onClick={() => handleFollow(vacancy.id)}
                >
                  {following.includes(vacancy.id) ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="vacancies-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/logo.png" alt="Game On" className="footer-logo" />
            <span>support@GameOn.com</span>
          </div>
          <div className="footer-center">
            <p>Subscribe for tournament updates</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter email" />
              <button type="button">→</button>
            </div>
          </div>
          <div className="footer-right">
            <button className="join-now-btn">JOIN US NOW</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TournamentVacancies

