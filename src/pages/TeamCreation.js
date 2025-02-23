"use client"

import { useState } from "react"
import "./TeamCreation.css"

function TeamCreation() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamMembers: "",
    sport: "",
    teamCaptain: "",
    fullName: "",
    state: "",
    city: "",
    phoneNumber: "",
    email: "",
    confirmationCode: "",
    referralCode: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="team-creation">
      <div className="team-creation-container">
        <h1>Team Creation</h1>

        <form onSubmit={handleSubmit} className="team-creation-form">
          {/* Team Details Section */}
          <div className="form-section">
            <h2>Team detail</h2>
            <div className="form-group">
              <label>Team name</label>
              <input
                type="text"
                name="teamName"
                placeholder="Name of the team"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Team member</label>
                <input
                  type="text"
                  name="teamMembers"
                  placeholder="Number of team members in your team"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Sport</label>
                <input
                  type="text"
                  name="sport"
                  placeholder="Sport you are playing for"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Team captain</label>
              <input
                type="text"
                name="teamCaptain"
                placeholder="Captain name"
                value={formData.teamCaptain}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="form-section">
            <h2>Your detail</h2>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email id</label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirmation code</label>
                <input
                  type="text"
                  name="confirmationCode"
                  placeholder="Change your confirmation"
                  value={formData.confirmationCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Referral Section */}
          <div className="form-section">
            <h2>Referral Code</h2>
            <p className="referral-text">
              Invite your teammates to join GAME ON using your referral code.
              <br />
              Earn rewards and build a stronger squad together. Start sharing now!
            </p>
            <div className="referral-input">
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code"
                value={formData.referralCode}
                onChange={handleChange}
              />
              <button type="button" className="invite-btn">
                Invite Now
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="create-team-btn">
              Create your team
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <footer className="team-creation-footer">
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
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TeamCreation

