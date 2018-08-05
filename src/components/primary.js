import React, { Component } from 'react'
import loadout from '../data/loadout'
import WeaponInfo from '../container/WeaponInfo'
import '../App.css'

// import loadout and sort gun models into seperate arrays
// Gun model arrays will be displayed depending on state
// which can be changed by clicking on the weapon-menu
// Each gun in each array has an onClick function that sets the weaponName to state
// This is then passed down to WeaponInfo

class Primary extends Component {
  constructor(){
    super()
    this.state = ({
      loadout,
      assault: true,
      submachine: false,
      sniper: false,
      shotgun: false
    })
    this.selection = this.selection.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden(event) {
    this.setState({
      weaponName: event.currentTarget.textContent,
    })
    console.log(this.state.weaponName)
  }

  selection() {
    if(loadout == undefined || loadout.length == 0) {
    return "Sorry your filter did not match any listing"
  }

  if(this.state.assault){
    const assault = loadout.filter((item, index) => {
      return item.model == "Assault Rifle"
    })

    return assault.map((item, index) => {
      return(
          <div key={index} className={this.state.weaponName == item.weapon ? 'active weapon-details' : 'weapon-details'} onClick={this.toggleHidden} >
            <div className="weapon-title pointer">{item.weapon}</div>
          </div>
        )
    })
  }

  if(this.state.shotgun){
    const shotgun = loadout.filter((item, index) => {
      return item.model == "Shotgun"
    })

    return shotgun.map((item, index) => {
      return(
          <div key={index} className={this.state.weaponName == item.weapon ? 'active weapon-details' : 'weapon-details'} onClick={this.toggleHidden} >
            <div className="weapon-title pointer">{item.weapon}</div>
          </div>
        )
    })
  }

    if(this.state.submachine){
    const submachine = loadout.filter((item, index) => {
      return item.model == "Submachine Gun"
    })

    return submachine.map((item, index) => {
      return(
          <div key={index} className={this.state.weaponName == item.weapon ? 'active weapon-details' : 'weapon-details'} onClick={this.toggleHidden} >
            <div className="weapon-title pointer">{item.weapon}</div>
          </div>
        )
    })
  }

  if(this.state.sniper){
    const sniper = loadout.filter((item, index) => {
      return item.model == "Sniper"
    })

    return sniper.map((item, index) => {
      return(
          <div key={index} className={this.state.weaponName == item.weapon ? 'active weapon-details' : 'weapon-details'} onClick={this.toggleHidden} >
            <div className="weapon-title pointer">{item.weapon}</div>
          </div>
        )
    })
  }
  }

  render() {
    return (
      <div className="weapon-background">
        <div className="weapon-menu">
        <div className={this.state.assault ? 'active weapon-class' : 'weapon-class'} onClick={() => {this.setState({
          assault: true,
          submachine: false,
          sniper: false,
          shotgun: false
        })}}>Assault Rifle</div>
        <div className={this.state.submachine ? 'active weapon-class' : 'weapon-class'} onClick={() => {this.setState({
          assault: false,
          submachine: true,
          sniper: false,
          shotgun: false
        })}}>Submachine Guns</div>
        <div className={this.state.shotgun ? 'active weapon-class' : 'weapon-class'} onClick={() => {this.setState({
          assault: false,
          submachine: false,
          sniper: false,
          shotgun: true
        })}}>Shotguns</div>
        <div className={this.state.sniper ? 'active weapon-class' : 'weapon-class'} onClick={() => {this.setState({
          assault: false,
          submachine: false,
          sniper: true,
          shotgun: false
        })}}>Sniper</div>
        </div>
        <div className="weapons">
          {this.selection()}
        </div>
        <div className="weapons-info">
          <WeaponInfo weapon={this.state} show={true} />
        </div>
      </div>
    )
  }
}

export default Primary
