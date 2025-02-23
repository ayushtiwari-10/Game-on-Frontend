"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "react-feather"
import "./Home.css"

const faqs = [
  {
    id: 1,
    question: "How do I register as a player?",
    answer:
      "You can register by clicking the 'Join Now' button on the homepage, filling in your details, selecting your sport, and verifying your email. Once registered, you can explore academies, join teams, and participate in tournaments.",
  },
  {
    id: 2,
    question: "Can an academy register multiple teams for tournaments?",
    answer: "Yes, academies can register multiple teams for tournaments based on age groups and skill levels.",
  },
  {
    id: 3,
    question: "Is there a fee for joining a tournament?",
    answer:
      "Tournament fees vary depending on the event type and category. Details are provided on each tournament's registration page.",
  },
  {
    id: 4,
    question: "How do I find and join an academy?",
    answer:
      "You can browse academies in your area using our search feature, filter by sport and location, and send join requests directly through the platform.",
  },
  {
    id: 5,
    question: "How do I reset my password if I forget it?",
    answer:
      "Click on the 'Forgot Password' link on the login page, enter your registered email, and follow the instructions sent to reset your password.",
  },
]

function Home() {
  const [selectedFaq, setSelectedFaq] = useState(1)  // Initialize with first FAQ selected

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <h1>GameOn: Where Every Click is a Victory!</h1>
          <p>
            Step into the ultimate gaming universe with GameOn, where passion meets competition, and every player has a
            chance to shine. Whether you're a casual gamer
          </p>
          <div className="hero-buttons">
            <Link to="/player-registration" className="hero-btn btn-primary">
              Join as Player
            </Link>
            <Link to="/academy-registration" className="hero-btn btn-secondary">
              Register Academy
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Play. Train. Excel.</h2>
          <h3>All in One Place!</h3>
          <div className="feature-buttons">
            <button className="feature-btn">
              <i className="fas fa-clock"></i>
              Latest Update
            </button>
            <button className="feature-btn">
              <i className="fas fa-users"></i>
              Top Players
            </button>
            <button className="feature-btn">
              <i className="fas fa-trophy"></i>
              Tournaments
            </button>
            <button className="feature-btn">
              <i className="fas fa-graduation-cap"></i>
              Academy
            </button>
          </div>
        </div>
      </section>

      <section className="achievers">
        <div className="container">
          <h2>Top Achievers - Rising Stars of GameOn</h2>
          <div className="achievers-content">
            <div className="achiever-card">
              <img
                src="https://media.istockphoto.com/id/500240235/photo/soccer-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=zJsKk2L3hYt1D_T44G2Xp5SuZmlX2ttZ8oEgp42sulA="
                alt="Players"
              />
              <div className="achiever-info">
                <h3>Players</h3>
                <p>
                  Showcase your achievements, connect with elite academies, and get recognized for your dedication and
                  talent!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            {/* Questions Column */}
            <div className="faq-list">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${selectedFaq === faq.id ? "active" : ""}`}
                  onClick={() => setSelectedFaq(faq.id)}
                >
                  <div className="faq-question">
                    <div className="faq-dot"></div>
                    {faq.question}
                    <ChevronRight className="faq-arrow" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Answer Column */}
            <div className="faq-answer-box">
              <h3>{faqs.find(faq => faq.id === selectedFaq)?.question}</h3>
              <p>{faqs.find(faq => faq.id === selectedFaq)?.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home