import { useState } from "react";
import "./App.css";

function StudentProfile() {
  return (
    <div className="profile-card">
      <h2>Mohite Pranali</h2>
      <p><strong>Roll No:</strong> 62</p>
      <p><strong>Department:</strong> AIML</p>
      <p><strong>Year:</strong> Second Year</p>
    </div>
  );
}

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app-container">
      <header className="header">
        <h1>College Management System</h1>
        <p>Welcome to Student Dashboard</p>
      </header>

      <main className="main-content">
        <h2>Student Details</h2>

        <button
          className="toggle-button"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && <StudentProfile />}
      </main>

      <footer className="footer">
        <p>© 2026 College Management System</p>
      </footer>
    </div>
  );
}

export default App;
