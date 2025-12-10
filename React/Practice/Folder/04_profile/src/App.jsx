// src/Profile.jsx
import React from "react";
import "./App.css";   // yahi CSS use kar rahe hain (same file) 
// ya alag bhi bana sakti ho: "./Profile.css"

function Profile() {
  return (
    <div className="profile-card">
      <img
        src="src\assets\download (1).jpg"
        alt="Profile"
        className="profile-img"
      />

      <h2 className="profile-name">Kajalti</h2>
      <p className="profile-role">Frontend Developer</p>

      <p className="profile-bio">
        I love HTML, CSS, JavaScript and React. Learning daily and building projects.
      </p>

      <button className="profile-btn">Follow</button>
    </div>
  );
}

export default Profile;
