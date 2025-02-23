"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./TournamentDetails.css"

function TournamentDetails() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    null,
    null,
    null,
    "https://media.istockphoto.com/id/1795074249/photo/multiethnic-basketball-player-in-a-white-uniform-catching-pass-and-dribbling-past-defence-to.jpg?s=612x612&w=0&k=20&c=uknzGccjDZd3EuodmHIW1WcRi9YLoLwQGw-7tkQXFUE=",
    null,
    null,
    null,
  ]

  const handleRegisterClick = () => {
    navigate("/tournament-vacancies")
  }

  return (
    <div className="tournament-details">
      <div className="tournament-container">
        <h1>Under 17 Senior State Basketball Championship, Madhya Pradesh</h1>

        <div className="image-gallery">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallery-item ${selectedImage === index ? "selected" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              {src ? (
                <img src={src || "/placeholder.svg"} alt={`Tournament ${index + 1}`} />
              ) : (
                <div className="placeholder" />
              )}
            </div>
          ))}
        </div>

        <div className="tournament-content">
          <div className="content-left">
            <section className="tournament-overview">
              <h2>Tournament Overview</h2>
              <p>
                The Game On State Basketball seeks to bring young basketball enthusiasts where they have chance for
                expressing themselves through the sport they love. Bringing together athletes, organizers, and
                basketball enthusiasts in a thrilling display of skill and strategy.
              </p>
            </section>

            <section className="location-details">
              <h2>Location</h2>
              <ul>
                <li>Venue: Krishi Upaj Mandi</li>
                <li>City: Jabalpur</li>
                <li>State: Madhya Pradesh</li>
              </ul>
            </section>

            <section className="category-info">
              <h2>Category</h2>
              <ul>
                <li>Age group: Under 17</li>
                <li>Category: State Championship</li>
                <li>Sport: Basketball</li>
              </ul>
            </section>

            <section className="prizes">
              <h2>Prizes & Rewards</h2>
              <ul>
                <li>Winner: ₹50,000 + Trophy</li>
                <li>Runner-up: ₹30,000 + Medal</li>
                <li>Best Player Award Program</li>
                <li>Participation Certificate</li>
              </ul>
            </section>
          </div>

          <div className="content-right">
            <section className="registration-status">
              <h2>Registration Status</h2>
              <ul>
                <li>Status: Open</li>
                <li>Last Date: 25/03/2024</li>
              </ul>
            </section>

            <section className="rules">
              <h2>Rules & Guidelines</h2>
              <ul>
                <li>Must be under 17 years of age</li>
                <li>Valid ID proof required</li>
                <li>Team size: 12 players</li>
                <li>Follow tournament dress code</li>
                <li>Report 30 mins before match</li>
              </ul>
            </section>

            <section className="partners">
              <h2>Partners & Sponsors</h2>
              <ul>
                <li>State Sports Department</li>
                <li>District Basketball Board</li>
                <li>Sports Authority of India</li>
              </ul>
            </section>

            <section className="faqs">
              <h2>FAQs</h2>
              <ul>
                <li>How to register my team?</li>
                <li>What documents are required?</li>
                <li>Is there any entry fee?</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="action-buttons">
          <button className="register-btn" onClick={handleRegisterClick}>
            Register Now
          </button>
          <button className="download-btn">Download Details</button>
        </div>
      </div>

      <footer className="tournament-footer">
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

export default TournamentDetails

