"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AcademyDetails.css"

function AcademyDetails() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <div className="academy-details">
      <div className="academy-container">
        <h1>Sports Excellence Academy</h1>

        <div className="image-gallery">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallery-item ${selectedImage === index ? "selected" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={src || "/placeholder.svg"} alt={`Academy ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="academy-content">
          <div className="content-left">
            <section className="academy-overview">
              <h2>Academy Overview</h2>
              <p>
                Sports Excellence Academy is a premier sports training facility dedicated to nurturing young talent and
                developing professional athletes. Our state-of-the-art facilities and experienced coaches provide the
                perfect environment for athletic growth.
              </p>
            </section>

            <section className="programs">
              <h2>Training Programs</h2>
              <ul>
                <li>Youth Development Program (Ages 8-14)</li>
                <li>Elite Performance Training (Ages 15+)</li>
                <li>Specialized Skill Camps</li>
                <li>Strength and Conditioning</li>
              </ul>
            </section>

            <section className="facilities">
              <h2>Facilities</h2>
              <ul>
                <li>Indoor Training Court</li>
                <li>Modern Gym Equipment</li>
                <li>Recovery and Rehabilitation Center</li>
                <li>Video Analysis Room</li>
              </ul>
            </section>
          </div>

          <div className="content-right">
            <section className="coaches">
              <h2>Our Coaches</h2>
              <ul>
                <li>Head Coach: John Smith (15+ years experience)</li>
                <li>Assistant Coach: Sarah Johnson (10+ years experience)</li>
                <li>Fitness Trainer: Mike Wilson</li>
              </ul>
            </section>

            <section className="achievements">
              <h2>Academy Achievements</h2>
              <ul>
                <li>State Championship Winners 2023</li>
                <li>National Youth Development Award</li>
                <li>20+ Professional Athletes Trained</li>
              </ul>
            </section>

            <section className="admission">
              <h2>Admission Process</h2>
              <ul>
                <li>Initial Assessment</li>
                <li>Skill Level Evaluation</li>
                <li>Program Placement</li>
                <li>Registration</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="action-buttons">
          <button className="enroll-btn" onClick={() => navigate("/academy-application")}>
            Enroll Now
          </button>
          <button className="contact-btn">Contact Academy</button>
        </div>
      </div>

      <footer className="academy-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/logo.png" alt="Game On" className="footer-logo" />
            <span>support@GameOn.com</span>
          </div>
          <div className="footer-center">
            <p>Subscribe for academy updates</p>
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

export default AcademyDetails

