import { Star } from "lucide-react"
import "./VenueCard.css"

function VenueCard({ title, image, description, location, rating = 4, onJoin, type }) {
  return (
    <div className="venue-card">
      <div className="venue-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <h2 className="venue-title">{title}</h2>
      <div className="venue-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <p className="venue-description">{description}</p>
      <div className="venue-location">{location}</div>
      {type === "tournament" ? (
        <div className="venue-vacancy">Vacancy Available</div>
      ) : (
        <div className="venue-programs">Training Programs Available</div>
      )}
      <div className="venue-contact">Contact No</div>
      <div className="venue-footer">
        <button className="join-btn" onClick={onJoin}>
          {type === "tournament" ? "Register Now" : "Join Academy"}
        </button>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`star ${i < rating ? "filled" : ""}`}
              size={16}
              fill={i < rating ? "#FFD700" : "none"}
              stroke={i < rating ? "#FFD700" : "#666"}
            />
          ))}
        </div>
        <div className="social-links">
          <i className="fas fa-phone"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default VenueCard

