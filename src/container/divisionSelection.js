import React, { Component } from 'react'
import '../App.css'
import divisions from '../data/divisions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {division} from '../actions/weaponInfo'

// filters the divisions to equal the division selected by the user pass down from divisions
// when sign up button clicked name of the division to send to the redux store
// to update the soldier division when rerendered

class DivisionSelection extends Component {
  constructor() {
    super();
    this.state = ({
      redirect: false
    })

    this.divisionSelection = this.divisionSelection.bind(this)
    this.divisionPick = this.divisionPick.bind(this)
  }

  divisionPick(event) {
    this.props.divisionPick(event.currentTarget.name)
    this.setState({
      redirect: true
    })
  }


  divisionSelection() {
    const selected = divisions.filter((division) => {
      return division.Division == this.props.division
    })
      return selected.map((division,index) => {
        return (
          <div key={index}className="divisionSelection">
            <div className="division-title">>> {division.Division}</div>
            <div className="division-level"><img className="division-image" src={division.Icon} /></div>
            <div className="division-title">>> {division.Division} Progression</div>
            <div className="rank">
              <div className="division-rank">1. {division.Rank1}</div>
              <div className="division-rank">2. {division.Rank2}</div>
              <div className="division-rank">3. {division.Rank3}</div>
              <div className="division-rank">4. {division.Rank4}</div>
            </div>
            <button onClick={this.divisionPick} name={division.Division} className="division-button">Sign Up</button>
          </div>
        )
      })
  }
  render() {
    const { redirect } = this.state;

       if (redirect) {
         return <Redirect to='/Soldier'/>;
       }
    return (
      <div>
        {this.divisionSelection()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = ({
  divisionPick: division
})

export default connect(mapStateToProps, mapActionsToProps)(DivisionSelection)
