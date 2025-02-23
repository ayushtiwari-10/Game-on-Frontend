"use client"

import { useNavigate } from "react-router-dom"
import "./ApplicationStatus.css"

function ApplicationStatus() {
  const navigate = useNavigate()

  return (
    <div className="application-status-page">
      <div className="status-container">
        <div className="status-header">
          <div className="status-tabs">
            <div className="status-tab active">Application not submitted</div>
            <div className="status-tab">Application under view</div>
          </div>
        </div>

        <div className="status-content">
          <h2>Hang Tight, Ayush!</h2>
          <p>
            Your need to write review, you left in between! To get started fill the rest to unlock new opportunities.
          </p>

          <div className="manual-info">
            <h3>Manual Info:</h3>
            <ol>
              <li>
                <a href="#" className="link">
                  https://basketball3.deefelo.co/?referral&user
                </a>
              </li>
              <li>Share this unique referral link with your friends to build your network</li>
              <li>
                Check out the{" "}
                <a href="#" className="link">
                  Code of Conduct
                </a>
              </li>
              <li>Relax, take a deep breath, and keep building epic stuff!</li>
            </ol>
          </div>

          <p className="completion-note">Complete Your Form 100% to Unlock New Opportunities.</p>

          <div className="action-buttons">
            <button className="btn-primary" onClick={() => navigate("/dashboard")}>
              Got it!
            </button>
            <button className="btn-secondary" onClick={() => navigate("/dashboard")}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationStatus

