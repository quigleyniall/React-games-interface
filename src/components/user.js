import React, { Component } from 'react'
import '../App.css'

// User Stats
const User = () => {
  return (
    <div className="soldier">
      <h3 className="username">Quigley</h3>
      <h5 className="user-rating">WIN RATING<span className="rating">1506</span></h5>
      <div className="user-stats">
        <div className="user-stat-details">
          <div className="stat-heading">Matchs Played<span className="user-stat">40</span></div>
          <div className="stat-heading">Top 10<span className="user-stat">12%</span></div>
          <div className="stat-heading">WINS<span className="user-stat">27</span></div>
          <div className="stat-heading">Total Play time<span className="user-stat">3 hrs 40 mins</span></div>
          <div className="stat-heading">Avg Survival time<span className="user-stat">10 mins</span></div>
          <div className="stat-heading">Suicides<span className="user-stat">2</span></div>
        </div>
        <div className="user-stat-details">
          <div className="stat-heading">Kills<span className="user-stat">202</span></div>
          <div className="stat-heading">Kill/Death Ratio<span className="user-stat">1.2</span></div>
          <div className="stat-heading">AVG Damage Dealt<span className="user-stat">413</span></div>
          <div className="stat-heading">Assists<span className="user-stat">17</span></div>
          <div className="stat-heading">Longest Kill<span className="user-stat">240m</span></div>
          <div className="stat-heading">Headshots<span className="user-stat">26</span></div>
        </div>
        <div className="user-stat-details">
          <div className="stat-heading">Most Kills in a single game<span className="user-stat">32</span></div>
          <div className="stat-heading">Highest Killstreak<span className="user-stat">12</span></div>
          <div className="stat-heading">Road Kills<span className="user-stat">3</span></div>
          <div className="stat-heading">Team Kills<span className="user-stat">2</span></div>
        </div>
      </div>
    </div>
  )
}


export default User
