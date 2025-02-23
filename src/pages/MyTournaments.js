"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import VenueCard from "../components/VenueCard"
import "./MyTournaments.css"

const dummyTournaments = [
  {
    id: 1,
    title: "Under 17 Senior State Basketball Championship",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(51)-VElkuAvQEOU6TuZ85PbJcUO2OfCu5y.png",
    description:
      "The Game On State Basketball seeks to bring young basketball enthusiasts where they have chance for expressing themselves through the sport they love.",
    location: "Krishi Upaj Mandi, Jabalpur",
    rating: 4,
    vacancies: 10,
  },
  {
    id: 2,
    title: "Summer Tennis Championship 2024",
    image: "/placeholder.svg",
    description: "Annual tennis championship bringing together the best young talent.",
    location: "City Sports Complex, Jabalpur",
    rating: 5,
    vacancies: 8,
  },
]

function MyTournaments() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEditVacancy = (id) => {
    navigate(`/edit-tournament/${id}`)
  }

  const handleViewDetails = (id) => {
    navigate(`/tournament/${id}`)
  }

  return (
    <div className="my-tournaments">
      <div className="my-tournaments-header">
        <h1>My Tournaments</h1>
        <button className="create-tournament-btn" onClick={() => navigate("/create-tournament")}>
          Create New Tournament
        </button>
      </div>

      <div className="filters">
        <div className="search-filter">
          <input
            type="text"
            name="search"
            placeholder="Search tournaments..."
            value={filters.search}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>
        <div className="status-filter">
          <select name="status" value={filters.status} onChange={handleFilterChange} className="filter-select">
            <option value="all">All Tournaments</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="tournaments-grid">
        {dummyTournaments.map((tournament) => (
          <div key={tournament.id} className="tournament-card-wrapper">
            <VenueCard
              {...tournament}
              type="tournament"
              onJoin={() => handleViewDetails(tournament.id)}
              isEditable={true}
            />
            <div className="card-actions">
              <button className="edit-vacancy-btn" onClick={() => handleEditVacancy(tournament.id)}>
                Edit Vacancy
              </button>
              <div className="vacancy-count">
                Current Vacancies: <span>{tournament.vacancies}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="my-tournaments-footer">
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

export default MyTournaments

