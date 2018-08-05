import React, { Component } from 'react'
import perksTier1 from '../data/perksTier1'
import perksTier2 from '../data/perksTier2'
import perksTier3 from '../data/perksTier3'
import '../App.css'
import { connect } from 'react-redux'
import {updatePerk1, updatePerk2, updatePerk3} from '../actions/weaponInfo'
import { Redirect } from 'react-router'

// display perk list 1,2 or 3 defpending on props passed down from the link

class Perks extends Component {
  constructor() {
    super();
    this.state = ({
      redirect: false
    })
    this.perks1 = this.perks1.bind(this)
    this.perks2 = this.perks2.bind(this)
    this.perks3 = this.perks3.bind(this)
    this.setPerk1 = this.setPerk1.bind(this)
    this.setPerk2 = this.setPerk2.bind(this)
    this.setPerk3 = this.setPerk3.bind(this)
  }

  setPerk1(event) {
    this.props.setPerk1(event.currentTarget.name)
    this.setState({
      redirect: true
    })
  }

  setPerk2(event) {
    this.props.setPerk2(event.currentTarget.name)
    this.setState({
      redirect: true
    })
  }

  setPerk3(event) {
    this.props.setPerk3(event.currentTarget.name)
    this.setState({
      redirect: true
    })
    }

  perks1(){
  const {tier1} = this.props.location.state
  if(perksTier1.length && tier1) {
    return perksTier1.map((perk) => {
      return (
        <a className="perk" onClick={this.setPerk1} name={perk.name}>
          <h3 className="perk-name">{perk.name}</h3>
          <div className="perk-desc">{perk.effect}</div>
          <img src={perk.icon} alt={perk.name} className="perk-image"/>
        </a>
      )
    })
  }
  }
  perks2() {
    const {tier2} = this.props.location.state
  if(perksTier2.length && tier2) {
    return perksTier2.map((perk) => {
      return (
        <a className="perk"  onClick={this.setPerk2} name={perk.name}>
          <h3 className="perk-name">{perk.name}</h3>
          <div className="perk-desc">{perk.effect}</div>
          <img src={perk.icon} alt={perk.name} className="perk-image" />
        </a>
      )
    })
  }
  }
  perks3() {
    const {tier3} = this.props.location.state
  if(perksTier3.length && tier3) {
    return perksTier3.map((perk) => {
      return (
        <a className="perk"  onClick={this.setPerk3} name={perk.name}>
          <h3 className="perk-name">{perk.name}</h3>
          <div className="perk-desc">{perk.effect}</div>
          <img src={perk.icon} alt={perk.name} className="perk-image" />
        </a>
      )
    })
  }
  }

render() {
  const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/Soldier'/>;
     }
  return (
    <div className="perk-container">
      {this.perks1()}
      {this.perks2()}
      {this.perks3()}
    </div>
  )
}

}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  setPerk1: updatePerk1,
  setPerk2: updatePerk2,
  setPerk3: updatePerk3
}

export default connect(mapStateToProps, mapActionsToProps)(Perks)
