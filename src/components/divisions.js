import React, { Component } from 'react'
import '../App.css'
import divisions from '../data/divisions'
import DivisionSelection from '../container/divisionSelection'

// import divisions from data
// map through divisions to produce list of divisions
// add onClick function (divisionPick) that setStates of the name of the division thats clicked
// passes down the clicked divions to  DivisionSelection

class Division extends Component {
  constructor(){
    super();
    this.state = ({
      division: 'Airborne'
    })
    this.division = this.division.bind(this)
    this.divisionPick = this.divisionPick.bind(this)
  }

  divisionPick(event){
    const back = divisions.filter((division) => {
      return division.Division == event.currentTarget.textContent
    })
    this.setState({
      division: event.currentTarget.textContent,
        background: back[0].back
    })
  }

  division() {
    return divisions.map((division) => {
      return <div className="division-class" onClick={this.divisionPick}>{division.Division}</div>
    })
  }
  render() {
    return (
      <div className='division'>
        <h4 className="division-select">Select Division</h4>
        <div className="division-name">
          {this.division()}
        </div>
        <div className="division-details">
          <DivisionSelection division={this.state.division}/>
        </div>
      </div>
    )
  }
}

export default Division
