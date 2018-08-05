import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from '../components/user'
import SecondaryClass from '../components/secondary'
import loadout from '../data/loadout'
import secondary from '../data/secondary'
import perksTier1 from '../data/perksTier1'
import perksTier2 from '../data/perksTier2'
import perksTier3 from '../data/perksTier3'
import divisions from '../data/divisions'
import '../App.css'
import { connect } from 'react-redux'

// This component controls the view in the multiplayer menu
// Weapons, perks, and division gets updated here
class Soldier extends Component {
  constructor() {
    super();
    this.primaryImage = this.primaryImage.bind(this)
    this.secondaryImage = this.secondaryImage.bind(this)
    this.divisionPick = this.divisionPick.bind(this)
    this.perk1 = this.perk1.bind(this)
    this.perk2 = this.perk2.bind(this)
    this.perk3 = this.perk3.bind(this)
  }
  primaryImage() {
    if(loadout.length){
      let primary = loadout.filter((gun) => {
        return gun.weapon == this.props.PRIMARY
      })
        return (
          <div>
          <h6 className="soldier-sub-heading">{primary[0].weapon}</h6>
          <Link to="/primary"><img src={primary[0].image} className="square" /></Link>
          </div>
        )
    }
  }
  secondaryImage(){
    if(secondary.length){
      let secondaryArr = secondary.filter((gun) => {
        return gun.weapon == this.props.SECONDARY
      })
        return (
          <div>
          <h6 className="soldier-sub-heading">{secondaryArr[0].weapon}</h6>
          <Link to="/secondary"><img src={secondaryArr[0].image} className="square" /></Link>
          </div>
        )

    }
  }
  perk1() {
    if(perksTier1.length){
      let perkImage1 = perksTier1.filter((perk) => {
        return perk.name == this.props.PERK_1
      })
      return  (
        <div>
        <Link to={{ pathname: '/perks', state: {tier1: true}}} className="perk-display" >
          <h4 className="perk-title">{perkImage1[0].name}</h4>
          <img src={perkImage1[0].icon} className="small-square perk-image" />
        </Link>
        </div>
      )
    }
  }
  perk2() {
    if(perksTier2.length){
      let perkImage2 = perksTier2.filter((perk) => {
        return perk.name == this.props.PERK_2
      })
      return  (
        <div>
        <Link to={{ pathname: '/perks', state: {tier2: true}}} className="perk-display" >
          <h4 className="perk-title">{perkImage2[0].name}</h4>
          <img src={perkImage2[0].icon} className="small-square perk-image" />
        </Link>
        </div>
      )
    }
  }
  perk3() {
    if(perksTier3.length){
      let perkImage3 = perksTier3.filter((perk) => {
        return perk.name == this.props.PERK_3
      })
      return  (
        <div>
        <Link to={{ pathname: '/perks', state: {tier3: true}}} className="perk-display" >
          <h4 className="perk-title">{perkImage3[0].name}</h4>
          <img src={perkImage3[0].icon} className="small-square perk-image" />
        </Link>
        </div>
      )
    }
  }
  divisionPick() {
    if(divisions.length){
    let divisionPick = divisions.filter((division) => {
      return division.Division == this.props.DIVISION
    })
    return (
      <div>
        <h6 className="soldier-sub-heading">{divisionPick[0].Division}</h6>
        <Link to="/divisions"><img src={divisionPick[0].Icon} className="square" /></Link>
      </div>)
    }
  }
  render() {
    return (
      <div>
        <div className="layout">
          <div className="main-square">
            <h5 className="soldier-heading">Division</h5>
            {this.divisionPick()}
          </div>
          <div className="main-square">
            <h5 className="soldier-heading">Primary</h5>
            {this.primaryImage()}
          </div>
          <div className="main-square">
            <h5 className="soldier-heading">Perks</h5>
            {this.perk1()}
            {this.perk2()}
            {this.perk3()}
          </div>
          <div className="main-square">
            <h5 className="soldier-heading">Secondary</h5>
            {this.secondaryImage()}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {

  return state
}
const mapActionsToProps = {

}


export default connect(mapStateToProps)(Soldier)
