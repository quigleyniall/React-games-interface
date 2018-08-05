import  React, { Component } from 'react'
import Secondary from '../data/secondary'
import SecondWeaponInfo from '../container/SecondWeaponInfo'
import '../App.css'

// import secondary from data/secondary and map
// the list of guns as a side menu
class SecondaryClass extends Component {
  constructor() {
    super();
    this.state = ({
      Secondary
    })
    this.secondary = this.secondary.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden(event) {
    this.setState({
      weaponName: event.currentTarget.textContent
    })
  }

  secondary() {
    if(Secondary == undefined || Secondary.length == 0) {
    return ''
  }
    return Secondary.map((item, index) => {
      return(
          <div key={index} className={this.state.weaponName == item.weapon ? 'active weapon-details' : 'weapon-details'} onClick={this.toggleHidden} >
            <div className="weapon-title pointer">{item.weapon}</div>
          </div>
        )
    })
  }

  render() {
    return (
      <div className="secondary-background">
        <div className="secondary-weapons-container">
          {this.secondary()}
        </div>
        <div className="weapons-info">
          <SecondWeaponInfo data={this.state} show={true} />
        </div>
      </div>
    )
  }

}

export default SecondaryClass
