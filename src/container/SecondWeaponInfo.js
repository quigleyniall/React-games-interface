import React, { Component } from 'react'
import Secondary from '../data/secondary'
import '../App.css'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {updateSecondaryWeapon} from '../actions/weaponInfo'


// Displays SecondWeaponInfo depending on state passed down as props by Secondary
// if User clicks button update weapon the function secondWeaponPick is run
// this redirects the user to soldier page and updates the secondary weapon
// being displayed there by dispatching it to the store

class WeaponInfo extends Component {
  constructor(){
    super();
    this.state = ({
      redirect: false
    })
    this.secondWeaponInfo = this.secondWeaponInfo.bind(this)
    this.secondWeaponPick = this.secondWeaponPick.bind(this)
  }

  secondWeaponPick(event) {
    this.setState({
      redirect: true
    })
    this.props.secondWeaponPick(event.currentTarget.name)
  }

  secondWeaponInfo() {
    if(this.props.show){
    if(this.props.data.weaponName != undefined){
    if(this.props.data.weaponName.length > 0 && Secondary.length > 0){
      const filtered = Secondary.filter((item, index) => {
        return item.weapon == this.props.data.weaponName
      })


      return filtered.map((item, index) => {
        return (
      <div key={index} className="secondary-weapon-info">
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
        <button onClick={this.secondWeaponPick} name={item.weapon} className="weapon-button">Update To {item.weapon}</button>
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
      {this.secondWeaponInfo()}
    </div>

  )
}
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  secondWeaponPick: updateSecondaryWeapon
}

export default connect(mapStateToProps, mapActionsToProps)(WeaponInfo)
