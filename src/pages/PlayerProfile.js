"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Edit2, Plus, ExternalLink, ChevronDown, Star } from "react-feather"
import "./PlayerProfile.css"

function PlayerProfile() {
  const [activeTab, setActiveTab] = useState("applications")
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    qualifications: false,
    skills: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-cover">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(17)-JTpOlPmyafwXUu6mi2BfvPsaGYj8Ni.png"
            alt="Cover"
            className="cover-image"
          />
        </div>
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="/placeholder.svg" alt="James Pearson" className="avatar-image" />
          </div>
          <div className="profile-details">
            <div className="name-section">
              <h1>James Pearson</h1>
              <button className="badge-button">
                Add Verification Badge <Plus size={16} />
              </button>
            </div>
            <div className="contact-info">
              <span>+123-456-7890</span>
              <span>www.soccer.com</span>
            </div>
            <p className="bio">
              Passionate and dedicated football player with exceptional skills in dribbling, passing, and goal-scoring.
              Experienced in competitive matches with strong tactical understanding of the game. A team player with
              excellent stamina, discipline, and a winning mindset. Always striving to improve and take my game to the
              next level. ⚽️
            </p>
          </div>
          <Link to="/edit-profile" className="edit-profile-btn">
            EDIT PROFILE
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="profile-content">
        <aside className="profile-sidebar">
          <div className="sidebar-section">
            <h3>Public Profile Link</h3>
            <a href="#" className="public-link">
              gameon.com/user/james-pearson <ExternalLink size={16} />
            </a>
          </div>

          <div className="sidebar-section">
            <h3>Profile Language</h3>
            <p>English</p>
          </div>

          <div className="sidebar-section">
            <h3>People you may know</h3>
            <div className="connection-list">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="connection-item">
                  <img src="/placeholder.svg" alt="Connection" className="connection-avatar" />
                  <div className="connection-info">
                    <p>Kary Anderson</p>
                    <span>Badminton Player</span>
                  </div>
                  <button className="connect-btn">Connect</button>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="profile-main">
          {/* Experience Section */}
          <section className="profile-section">
            <div className="section-header" onClick={() => toggleSection("experience")}>
              <h2>EXPERIENCE</h2>
              <div className="section-actions">
                <button className="action-btn">
                  <Plus size={16} />
                </button>
                <button className="action-btn">
                  <Edit2 size={16} />
                </button>
                <ChevronDown size={20} className={`chevron ${expandedSections.experience ? "rotated" : ""}`} />
              </div>
            </div>
            {expandedSections.experience && (
              <div className="section-content">
                <div className="experience-item">
                  <img src="/placeholder.svg" alt="NFA Logo" className="org-logo" />
                  <div className="experience-details">
                    <h3>National Football Association</h3>
                    <p>Member 2022-2025</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Qualifications Section */}
          <section className="profile-section">
            <div className="section-header" onClick={() => toggleSection("qualifications")}>
              <h2>QUALIFICATIONS</h2>
              <div className="section-actions">
                <button className="action-btn">
                  <Plus size={16} />
                </button>
                <button className="action-btn">
                  <Edit2 size={16} />
                </button>
                <ChevronDown size={20} className={`chevron ${expandedSections.qualifications ? "rotated" : ""}`} />
              </div>
            </div>
            {expandedSections.qualifications && (
              <div className="section-content">
                <ul className="qualification-list">
                  <li>Professional Football Training Certification</li>
                  <li>Registered college in Competitive Matches</li>
                  <li>12th Pass (High School Graduate)</li>
                </ul>
              </div>
            )}
          </section>

          {/* Skills Section */}
          <section className="profile-section">
            <div className="section-header" onClick={() => toggleSection("skills")}>
              <h2>SKILLS</h2>
              <div className="section-actions">
                <button className="action-btn">
                  <Plus size={16} />
                </button>
                <button className="action-btn">
                  <Edit2 size={16} />
                </button>
                <ChevronDown size={20} className={`chevron ${expandedSections.skills ? "rotated" : ""}`} />
              </div>
            </div>
            {expandedSections.skills && (
              <div className="section-content">
                <div className="skills-list">
                  {[
                    { name: "Dribbling (Ball Control & Agility)", rating: 5 },
                    { name: "Passing (Short & Long-Range Accuracy)", rating: 4 },
                    { name: "Shooting (Power & Precision)", rating: 4 },
                    { name: "Defending (Tackling & Interceptions)", rating: 3 },
                  ].map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < skill.rating ? "filled" : ""} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Activity Section */}
          <section className="activity-section">
            <h2>ACTIVITY</h2>
            <div className="activity-tabs">
              <button
                className={`tab-btn ${activeTab === "applications" ? "active" : ""}`}
                onClick={() => setActiveTab("applications")}
              >
                Applications
              </button>
              <button
                className={`tab-btn ${activeTab === "post" ? "active" : ""}`}
                onClick={() => setActiveTab("post")}
              >
                Post
              </button>
              <button
                className={`tab-btn ${activeTab === "video" ? "active" : ""}`}
                onClick={() => setActiveTab("video")}
              >
                Video
              </button>
              <button
                className={`tab-btn ${activeTab === "documents" ? "active" : ""}`}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
            </div>
            <div className="activity-content">
              {/* Activity cards */}
              <div className="activity-grid">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="activity-card">
                    <p>Got an exciting opportunity to represent Karn under 23rd Level Football Tournament!</p>
                    <img src="/placeholder.svg" alt="Activity" className="activity-image" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default PlayerProfile

