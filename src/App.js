import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PlayerRegistration from "./pages/PlayerRegistration"
import AcademyRegistration from "./pages/AcademyRegistration"
import PlayerLogin from "./pages/PlayerLogin"
import AcademyLogin from "./pages/AcademyLogin"
import PlayerDashboard from "./pages/PlayerDashboard"
import PlayerProfile from "./pages/PlayerProfile"
import EditProfile from "./pages/EditProfile"
import AcademyProfile from "./pages/AcademyProfile"
import AcademyEditProfile from "./pages/AcademyEditProfile"
import Footer from "./components/Footer"
import AcademyDashboard from "./pages/AcademyDashboard"
import CreateTournament from "./pages/CreateTournament"
import PlayerApplications from "./pages/PlayerApplications"
import Notifications from "./pages/Notifications"
import PlayerNotifications from "./pages/PlayerNotifications"
import PlayerMyApplications from "./pages/PlayerMyApplications"
import ApplicationStatus from "./pages/ApplicationStatus"
import TeamCreation from "./pages/TeamCreation"
import VenueList from "./pages/VenueList"
import TournamentDetails from "./pages/TournamentDetails"
import TournamentVacancies from "./pages/TournamentVacancies"
import AcademyDetails from "./pages/AcademyDetails"
import MyTournaments from "./pages/MyTournaments"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/dashboard" element={<PlayerDashboard />} />
          <Route path="/academy-dashboard" element={<AcademyDashboard />} />
          <Route path="/profile" element={<PlayerProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/academy-profile" element={<AcademyProfile />} />
          <Route path="/edit-academy-profile" element={<AcademyEditProfile />} />
          <Route path="/create-tournament" element={<CreateTournament />} />
          <Route path="/applications" element={<PlayerApplications />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/player-notifications" element={<PlayerNotifications />} />
          <Route path="/my-applications" element={<PlayerMyApplications />} />
          <Route path="/application-status/:id" element={<ApplicationStatus />} />
          <Route path="/team-creation" element={<TeamCreation />} />
          <Route path="/tournaments" element={<VenueList type="tournament" />} />
          <Route path="/academies" element={<VenueList type="academy" />} />
          <Route path="/tournament/:id" element={<TournamentDetails />} />
          <Route path="/tournament-vacancies" element={<TournamentVacancies />} />
          <Route path="/academy/:id" element={<AcademyDetails />} />
          <Route path="/my-tournaments" element={<MyTournaments />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/player-registration" element={<PlayerRegistration />} />
                  <Route path="/academy-registration" element={<AcademyRegistration />} />
                  <Route path="/player-login" element={<PlayerLogin />} />
                  <Route path="/academy-login" element={<AcademyLogin />} />
                  <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

