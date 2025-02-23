"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Edit2, Plus, ExternalLink, ChevronDown } from "react-feather"
import "./AcademyProfile.css"

function StatCard({ title, value, subtitle, children }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3>{title}</h3>
        <span className="stat-more">•••</span>
      </div>
      {children || (
        <div className="stat-content">
          <div className="stat-value">{value}</div>
          <div className="stat-subtitle">{subtitle}</div>
        </div>
      )}
    </div>
  )
}

function AcademyProfile() {
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    certifications: false,
  })
  const [activeTab, setActiveTab] = useState("applications")

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="academy-profile">
      <div className="profile-header">
        <div className="cover-image">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(29)-UnLlUQgBfQsfQqJveUBsfd1LHw00GZ.png"
            alt="Cover"
          />
        </div>
        <div className="profile-info">
          <div className="profile-main">
            <img src="/placeholder.svg" alt="Academy Logo" className="profile-avatar" />
            <div className="profile-details">
              <h1>Vidarbh Football Academy</h1>
              <button className="verify-badge">
                Add Verification Badge <Plus size={16} />
              </button>
              <p className="academy-description">
                At VCA, we are dedicated to nurturing the next generation of football talent. Our academy provides
                top-tier training, focusing on technical skills, tactical intelligence, and physical conditioning. With
                expert coaching, state-of-the-art facilities, and a commitment to player development, we prepare
                athletes for professional and competitive football.
              </p>
              <div className="contact-info">
                <span>Jabalpur, Madhya Pradesh, India</span>
                <button className="contact-btn">Contact Info</button>
              </div>
            </div>
            <Link to="/edit-academy-profile" className="edit-profile-btn">
              EDIT PROFILE
            </Link>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <aside className="profile-sidebar">
          <div className="sidebar-section">
            <h3>Public Profile Link</h3>
            <a href="#" className="public-link">
              gameon.com/academy/vidarbh-football <ExternalLink size={16} />
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
            <button className="show-all-btn">Show all</button>
          </div>
        </aside>

        <main className="profile-main-content">
          <div className="action-buttons">
            <button className="action-btn primary">ADD PROFILE SECTION</button>
            <button className="action-btn outline">Enhance profile</button>
            <button className="action-btn outline">Resources</button>
          </div>

          <section className="summary-section">
            <div className="section-header">
              <h2>Write a summary to highlight your services or training experience</h2>
              <button className="edit-btn">
                <Edit2 size={16} />
              </button>
            </div>
            <div className="summary-content">
              <h3>What We Offer:</h3>
              <ul className="services-list">
                <li>Elite Coaching & Training Programs</li>
                <li>Youth Development & Talent Scouting</li>
                <li>Competitive Match Exposure</li>
                <li>Strength & Conditioning Programs</li>
              </ul>
            </div>
          </section>

          <section className="stats-section">
            <div className="stats-grid">
              <StatCard title="Satisfaction Rate" value="95%" subtitle="From all projects">
                <div className="circular-progress">
                  <div className="progress-circle">
                    <div className="progress-value">95%</div>
                  </div>
                </div>
              </StatCard>

              <StatCard title="Referral Tracking" value="9.3" subtitle="Total Score">
                <div className="referral-stats">
                  <div className="referral-numbers">
                    <div>
                      <span>Invited</span>
                      <strong>145 people</strong>
                    </div>
                    <div>
                      <span>Bonus</span>
                      <strong>1,465</strong>
                    </div>
                  </div>
                  <div className="score-circle">
                    <div className="score-value">9.3</div>
                    <span>Safety</span>
                  </div>
                </div>
              </StatCard>

              <StatCard title="Active Users" subtitle="(+23) than last week">
                <div className="users-stats">
                  <div className="stats-row">
                    <div>
                      <span>Users</span>
                      <strong>32,984</strong>
                    </div>
                    <div>
                      <span>Clicks</span>
                      <strong>2.42m</strong>
                    </div>
                  </div>
                  <div className="stats-row">
                    <div>
                      <span>Sales</span>
                      <strong>2,400$</strong>
                    </div>
                    <div>
                      <span>Items</span>
                      <strong>320</strong>
                    </div>
                  </div>
                </div>
              </StatCard>
            </div>
          </section>

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
            <div className="activity-grid">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="activity-card">
                  <p>Got an exciting opportunity to represent Kathi under Zonal Level Football Tournament!🎉</p>
                  <img src="/placeholder.svg" alt="Activity" className="activity-image" />
                </div>
              ))}
            </div>
          </section>

          <section className="experience-section">
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

          <section className="certifications-section">
            <div className="section-header" onClick={() => toggleSection("certifications")}>
              <h2>Certifications</h2>
              <div className="section-actions">
                <button className="action-btn">
                  <Plus size={16} />
                </button>
                <button className="action-btn">
                  <Edit2 size={16} />
                </button>
                <ChevronDown size={20} className={`chevron ${expandedSections.certifications ? "rotated" : ""}`} />
              </div>
            </div>
            {expandedSections.certifications && (
              <div className="section-content">
                <ul className="certification-list">
                  <li>Professional Football Training Certification</li>
                  <li>Represented college in Competitive Matches</li>
                  <li>12th Pass (High School Graduate)</li>
                </ul>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default AcademyProfile

