"use client"

import { useState, useRef } from "react"
import { X, Camera, Plus } from "react-feather"
import { useNavigate } from "react-router-dom"
import "./AcademyEditProfile.css"

function AcademyEditProfile() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [photos, setPhotos] = useState(Array(8).fill(null))
  const [formData, setFormData] = useState({
    academyName: "Archi's Academy",
    contact: "+123-456-7890",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    email: "abc@gmail.com",
    password: "",
    location: "",
    preferredPosition: "Basketball",
    description:
      "Passionate basketball player skilled in [position, e.g., Point Guard] with strengths in [key skills, e.g., shooting, defense, playmaking]. Team player, quick decision-maker, and dedicated to continuous improvement on and off the court.",
  })

  const handlePhotoClick = (index) => {
    fileInputRef.current = index
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => handlePhotoChange(e, index)
    input.click()
  }

  const handlePhotoChange = (event, index) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotos((prev) => {
          const newPhotos = [...prev]
          newPhotos[index] = reader.result
          return newPhotos
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/academy-profile")
  }

  return (
    <div className="academy-edit-profile">
      <div className="edit-header">
        <button className="close-btn" onClick={() => navigate("/academy-profile")}>
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="photos-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-upload-box" onClick={() => handlePhotoClick(index)}>
              {photo ? (
                <img src={photo || "/placeholder.svg"} alt={`Academy ${index + 1}`} className="preview-image" />
              ) : index === photos.length - 1 ? (
                <div className="add-more-photos">
                  <Plus size={24} />
                  <span>Add more photos</span>
                </div>
              ) : (
                <div className="empty-photo">
                  <Camera size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Academy name</label>
            <input type="text" name="academyName" value={formData.academyName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email id*</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Change your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your address"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Position</label>
              <input
                type="text"
                name="preferredPosition"
                value={formData.preferredPosition}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Update and Save
          </button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/academy-profile")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AcademyEditProfile

