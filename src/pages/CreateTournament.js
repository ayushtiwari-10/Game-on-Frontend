"use client"

import { useState } from "react"
import "./CreateTournament.css"

function CreateTournament() {
  const [formData, setFormData] = useState({
    title: "",
    experience: "",
    gender: "",
    maxTeams: "",
    maxPlayers: "",
    sports: "",
    category: "",
    city: "",
    pincode: "",
    state: "",
    eventAddress: "",
    contactNumber: "",
    academyEmail: "",
    description: "",
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
    <div className="create-tournament">
      <div className="tournament-header">
        <h1>Welcome!</h1>
        <p>Start your journey to becoming a champion</p>
        <p className="subtitle">"Step Onto the Field of Greatness — Join Us Today!"</p>
      </div>

      <form onSubmit={handleSubmit} className="tournament-form">
        <div className="form-group">
          <label>Tournament Title*</label>
          <input
            type="text"
            name="title"
            placeholder="Title for your tournament"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Year of experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Gender*</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select your gender*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Maximum Team</label>
            <input
              type="number"
              name="maxTeams"
              placeholder="Max Number of Player"
              value={formData.maxTeams}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Max Players</label>
            <input
              type="number"
              name="maxPlayers"
              placeholder="No of Participation"
              value={formData.maxPlayers}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Sports you offer to play</label>
          <input
            type="text"
            name="sports"
            placeholder="Sports you offer to play"
            value={formData.sports}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category*</label>
          <input
            type="text"
            name="category"
            placeholder="Open trial/ under 50 / Competition"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City*</label>
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Pincode*</label>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode/ZipCode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Event Address*</label>
            <input
              type="text"
              name="eventAddress"
              placeholder="Playground / Area / Ground name / Institution"
              value={formData.eventAddress}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Contact Number*</label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Academy Contact No."
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Academy Email*</label>
            <input
              type="email"
              name="academyEmail"
              placeholder="Academy Email Id"
              value={formData.academyEmail}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Rules and Regulations&#10;Eligibility&#10;Additional Information"
            value={formData.description}
            onChange={handleChange}
            rows={5}
          />
        </div>

        <div className="registration-deadline">
          <i className="fas fa-calendar"></i>
          <span>Registration Deadline*</span>
        </div>

        <button type="submit" className="submit-btn">
          CREATE TOURNAMENT
        </button>
      </form>

      <footer className="tournament-footer">
        <div className="footer-content">
          <img src="/logo.png" alt="Game On" className="footer-logo" />
          <div className="footer-text">
            <p>Subscribe for tournament updates</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter email address" />
              <button type="button">→</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CreateTournament

