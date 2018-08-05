import React, { Component } from 'react'
import '../App.css'
import SettingInfo from './settingsInfo'
import {Link} from 'react-router-dom'

// Passing state down as props to settingsInfo to set view

class Settings extends Component {
  constructor() {
    super();
    this.state = ({
      mouseOver: "",
      click: ""
    })
  this.showDetails = this.showDetails.bind(this)
  this.loadDetails = this.loadDetails.bind(this)
  }
  showDetails(event) {
    this.setState({
      mouseOver: event.currentTarget.textContent
    })
  }

  loadDetails(event) {
    this.setState({
      click: event.currentTarget.textContent
    })
  }

  render() {
    return (
      <div className="settings">
        <ul className="settings-menu">
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>Controls</li>
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>Graphics</li>
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>Audio</li>
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>Console Info</li>
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>Call of Duty Account</li>
          <li className="settings-item" onMouseOver={this.showDetails} onClick={this.loadDetails}>
            <Link to='/' className="settings-link">Home Menu</Link></li>
        </ul>
        <SettingInfo details={this.state}/>
      </div>
    )
  }
}

export default Settings
