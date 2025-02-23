"use client"

import { useState, useRef } from "react"
import { X, Camera } from "react-feather"
import { useNavigate } from "react-router-dom"
import "./EditProfile.css"

function EditProfile() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "James Pearson",
    phoneNumber: "+123-456-7890",
    gender: "Male",
    city: "New York",
    state: "New York",
    email: "abc@gmail.com",
    address: "123 Main St",
    preferredPosition: "Forward",
    skillLevel: "Intermediate",
    bio: "Passionate and dedicated football player with exceptional skills...",
  })

  const handlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
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
    // Handle form submission
    navigate("/profile")
  }

  return (
    <div className="edit-profile">
      <div className="edit-profile-header">
        <h1>Update Your Profile, Elevate Your Game</h1>
        <button className="close-btn" onClick={() => navigate("/profile")}>
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-grid">
          <div className="photo-upload">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              accept="image/*"
              className="hidden"
              style={{ display: "none" }}
            />
            <div className="upload-circle" onClick={handlePhotoClick}>
              {photoPreview ? (
                <img src={photoPreview || "/placeholder.svg"} alt="Profile preview" className="preview-image" />
              ) : (
                <>
                  <Camera size={24} />
                  <span>Add photo</span>
                </>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Player full name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
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
              <label>Skill Level</label>
              <input type="text" name="skillLevel" value={formData.skillLevel} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4" required />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/profile")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile

