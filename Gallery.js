"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import "./Gallery.css"

// Sample gallery data - in a real app, this would come from an API or database
const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Basketball Tournament Finals",
    category: "basketball",
    featured: true,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Tennis Championship",
    category: "tennis",
    featured: false,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Football Training Session",
    category: "football",
    featured: true,
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Swimming Competition",
    category: "swimming",
    featured: false,
  },
  {
    id: 5,
    image: "/placeholder.svg",
    title: "Cricket Match Highlights",
    category: "cricket",
    featured: true,
  },
  {
    id: 6,
    image: "/placeholder.svg",
    title: "Badminton Tournament",
    category: "badminton",
    featured: false,
  },
  {
    id: 7,
    image: "/placeholder.svg",
    title: "Hockey Championship",
    category: "hockey",
    featured: true,
  },
  {
    id: 8,
    image: "/placeholder.svg",
    title: "Table Tennis Finals",
    category: "table-tennis",
    featured: false,
  },
  {
    id: 9,
    image: "/placeholder.svg",
    title: "Volleyball Tournament",
    category: "volleyball",
    featured: true,
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "basketball", name: "Basketball" },
  { id: "tennis", name: "Tennis" },
  { id: "football", name: "Football" },
  { id: "swimming", name: "Swimming" },
  { id: "cricket", name: "Cricket" },
  { id: "badminton", name: "Badminton" },
  { id: "hockey", name: "Hockey" },
  { id: "table-tennis", name: "Table Tennis" },
  { id: "volleyball", name: "Volleyball" },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-content">
          <h1>Gallery</h1>
          <p>Explore our collection of memorable sporting moments</p>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="gallery-controls">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search gallery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="featured-section">
          <h2>Featured Highlights</h2>
          <div className="featured-grid">
            {galleryItems
              .filter((item) => item.featured)
              .slice(0, 3)
              .map((item) => (
                <div key={item.id} className="featured-item" onClick={() => openLightbox(item)}>
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="featured-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="gallery-grid">
        <h2>
          {activeCategory === "all" ? "All Photos" : `${categories.find((c) => c.id === activeCategory).name} Photos`}
        </h2>

        {filteredItems.length === 0 ? (
          <div className="no-results">
            <p>No images found matching your criteria.</p>
          </div>
        ) : (
          <div className="image-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => openLightbox(item)}>
                <img src={item.image || "/placeholder.svg"} alt={item.title} />
                <div className="item-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-btn" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image || "/placeholder.svg"} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

