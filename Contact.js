"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus("submitting")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or support</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <Phone size={24} />
              </div>
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
              <p>+1 (987) 654-3210</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>info@gameon.com</p>
              <p>support@gameon.com</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <MapPin size={24} />
              </div>
              <h3>Location</h3>
              <p>123 Sports Avenue</p>
              <p>New York, NY 10001</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Clock size={24} />
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9AM - 5PM</p>
              <p>Saturday: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="form-container">
            <div className="form-content">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>

              {formStatus === "success" ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll respond to your inquiry shortly.</p>
                  <button className="reset-btn" onClick={() => setFormStatus(null)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn" disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="form-image">
              <div className="image-container">
                <img src="/placeholder.svg" alt="Contact us" />
              </div>
              <div className="quick-contact">
                <h3>Need Immediate Assistance?</h3>
                <p>Our support team is available for quick inquiries</p>
                <div className="quick-actions">
                  <a href="tel:+11234567890" className="quick-action-btn">
                    <Phone size={16} />
                    Call Us
                  </a>
                  <a href="mailto:support@gameon.com" className="quick-action-btn">
                    <MessageSquare size={16} />
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-overlay">
              <MapPin size={48} />
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I register for a tournament?</h3>
              <p>
                You can register for tournaments through your player dashboard after logging in. Navigate to the
                Tournaments section and click on "Register" for the tournament you're interested in.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I join multiple academies?</h3>
              <p>
                Yes, players can join multiple academies based on their interests and schedule. Each academy application
                is processed separately.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I update my player profile?</h3>
              <p>
                Log in to your account, navigate to your profile page, and click on the "Edit Profile" button to update
                your information.
              </p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards, PayPal, and bank transfers for tournament registrations and academy
                memberships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

