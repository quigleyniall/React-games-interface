import React, { Component } from 'react'
import loadout from '../data/loadout'
import {Redirect} from 'react-router'
import '../App.css'
import {updatePrimaryWeapon} from '../actions/weaponInfo'
import { connect} from 'react-redux'

// Displays WeaponInfo depending on state passed down as props by Primary
// if User clicks button update weapon the function weaponPick is run
// this redirects the user to soldier page and updates the primary weapon
// being displayed there by dispatching it to the store

class WeaponInfo extends Component {
  constructor(){
    super();
    this.state = ({
      redirect: false
    })
    this.weaponPick = this.weaponPick.bind(this)
    this.weaponInfo = this.weaponInfo.bind(this)
  }

  weaponPick(event) {
    this.setState({
      redirect: true
    })
    this.props.weaponPick(event.currentTarget.name)
  }


  weaponInfo() {
    if(this.props.show){
    if(this.props.weapon.weaponName !== undefined){
    if(this.props.weapon.weaponName.length > 0 && loadout.length > 0){
      const filtered = loadout.filter((item, index) => {
        return item.weapon == this.props.weapon.weaponName
      })

      return filtered.map((item, index) => {
        return (
      <div key={index} className="weapon-info">
        <div className="weapon-info-details">
          <div className="weapon-name">{item.weapon}</div>
          <div className="weapon-model">{item.model}</div>
          <div className="weapon-desc">{item.desc}</div>
        </div>
        <img src={item.image} className="weapon-image" />
        <div className="weapon-stats-wrapper">
          <div className="weapon-stats">
            <div className="stats margin-bottom-sm">Damage: {item.damage} </div>
            <span className="empty-rect margin-bottom-md"><span className="fill-rect" style={{width: item.damage}}></span></span>
            <div className="stats margin-bottom-sm">Range: {item.range}</div>
            <span className="empty-rect margin-bottom-md"><span className="fill-rect" style={{width: item.range}}></span></span>
            <div className="stats margin-bottom-sm">Accuracy: {item.accuracy}</div>
            <span className="empty-rect margin-bottom-md"><span className="fill-rect" style={{width: item.accuracy}}></span></span>
            <div className="stats margin-bottom-sm">Fire Rate: {item.firerate}</div>
            <span className="empty-rect margin-bottom-md"><span className="fill-rect" style={{width: item.firerate}}></span></span>
            <div className="stats">Capacity: {item.capacity}</div>
          </div>
        </div>
        <button onClick={this.weaponPick} name={item.weapon} className="weapon-button">Update To {item.weapon}</button>
      </div>
        )
      })
    }
  }
}
}

render(){
  const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/Soldier'/>;
     }
  return(
    <div>
      {this.weaponInfo()}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  weaponPick: updatePrimaryWeapon
}


export default connect(mapStateToProps, mapActionsToProps)(WeaponInfo)
