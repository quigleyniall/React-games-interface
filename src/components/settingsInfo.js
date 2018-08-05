import React, {Component} from 'react'
import '../App.css'

// This Comonent displays the view for the settings menu on hover
class SettingInfo extends Component {
  constructor(){
    super();
    this.mouseOver = this.mouseOver.bind(this)
  }

mouseOver() {
  const {mouseOver} = this.props.details
  console.log(mouseOver)
  if(mouseOver === "Controls"){
    return (
      <span className="settings-hover">
        <span className="span-heading">Controls</span>
        <span className="span-desc">Set up your control scheme to match your style of play</span>
      </span>
    )
  }
  if(mouseOver === "Audio"){
    return (
      <span className="settings-hover">
        <span className="span-heading">Audio</span>
        <span className="span-desc">Configure your audio settings</span>
      </span>
    )
  }
  if(mouseOver === "Graphics") {
    return (
      <span className="settings-hover">
        <span className="span-heading">Graphics</span>
        <span className="span-desc">Set up your graphical options</span>
      </span>
    )
  }
   if(mouseOver === "Console Info"){
    return (
      <span className="settings-hover">
        <span className="span-heading">Console Info</span>
        <span className="span-desc">Display Console Information</span>
      </span>
    )
  }
   if(mouseOver === "Call of Duty Account"){
    return (
      <span className="settings-hover">
        <span className="span-heading">Call of Duty Account</span>
        <span className="span-desc">Create or update your Call of Duty Account</span>
      </span>
    )
  }
   if(mouseOver == "Home Menu"){
    return (
      <span className="settings-hover">
        <span className="span-heading">Home Menu</span>
        <span className="span-desc">Return to the Home Menu</span>
      </span>
    )
  }
}
  render(){
    return (
      <div>
        {this.mouseOver()}
      </div>
    )
  }
}

export default SettingInfo
