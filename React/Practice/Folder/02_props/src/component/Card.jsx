import React from "react";
import "./App.css";

function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="profile" />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <button>View Profile</button>
    </div>
  );
}

export default ProfileCard;
