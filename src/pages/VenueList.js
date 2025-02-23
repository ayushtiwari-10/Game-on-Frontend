"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import VenueCard from "../components/VenueCard"
import "./VenueList.css"

const dummyTournaments = [
  {
    id: 1,
    title: "Basketball tournament",
    image:
      "https://img.freepik.com/free-photo/black-man-doing-sports-playing-basketball-sunrise-silhouette_285396-1451.jpg",
    description:
      "The GameOn Basketball Championship brings together the most talented teams and rising stars for an electrifying tournament filled with skill, speed, and passion.",
    location: "Krishi upag mandi deen dyal chowk",
    rating: 4,
  },
  // Add more tournaments...
]

const dummyAcademies = [
  {
    id: 1,
    title: "Sports Excellence Academy",
    image: "/placeholder.svg",
    description:
      "Premier sports academy offering comprehensive training programs in multiple sports disciplines with state-of-the-art facilities.",
    location: "Central Sports Complex, Jabalpur",
    rating: 5,
  },
  {
    id: 2,
    title: "Champions Training Center",
    image: "/placeholder.svg",
    description:
      "Specialized training center focused on developing young athletes through personalized coaching and modern training methods.",
    location: "Stadium Road, Jabalpur",
    rating: 4,
  },
  // Add more academies...
]

function VenueList({ type = "tournament" }) {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    city: "",
    search: "",
    category: "",
    state: "",
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleVenueClick = (id) => {
    if (type === "tournament") {
      navigate(`/tournament/${id}`)
    } else {
      navigate(`/academy/${id}`)
    }
  }

  const venues = type === "tournament" ? dummyTournaments : dummyAcademies

  return (
    <div className="venue-list">
      <div className="venue-list-header">
        <h1>{type === "tournament" ? "Battle Arena" : "Training Academies"}</h1>
        <p>{type === "tournament" ? "Where Legends Compete!" : "Excellence in Training"}</p>
      </div>

      <div className="filters">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={filters.search}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={filters.state}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      <div className="venues-grid">
        {venues.map((venue) => (
          <VenueCard key={venue.id} {...venue} onJoin={() => handleVenueClick(venue.id)} type={type} />
        ))}
      </div>

      <footer className="venue-list-footer">
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

export default VenueList

