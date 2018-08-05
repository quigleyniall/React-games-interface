import React, {Component} from 'react'
import '../App.css'
import ScorestreakData from '../data/scorestreak'
import Scorestreaks from '../components/Scorestreaks'
import {connect} from 'react-redux'

// set and update picked scorestreaks from the store

class ScorestreakSelection extends Component {
  constructor(){
    super();
    this.state = ({
      score1: 'UAV',
      score2: 'Guardian',
      score3: 'K9 Unit'
    })
    this.ScorestreakPick1 = this.ScorestreakPick1.bind(this)
    this.ScorestreakPick2 = this.ScorestreakPick2.bind(this)
    this.ScorestreakPick3 = this.ScorestreakPick3.bind(this)
  }


  ScorestreakPick1() {
  const Pick =  ScorestreakData.filter((scorestreak) => {
      return scorestreak.name === this.props.SCORE_1
    })
  return Pick.map((scorestreak) => {
      return (
        <div className="scorestreak-select">
          <img className="scorestreak-image" src={scorestreak.icon} alt={scorestreak.name}/>
          <div className="scorestreak-name">{scorestreak.name}</div>
        </div>
      )
    })
  }
  ScorestreakPick2() {
  const Pick =  ScorestreakData.filter((scorestreak) => {
      return scorestreak.name === this.props.SCORE_2
    })
  return Pick.map((scorestreak) => {
      return (
        <div className="scorestreak-select">
          <img className="scorestreak-image" src={scorestreak.icon} alt={scorestreak.name}/>
          <div className="scorestreak-name">{scorestreak.name}</div>
        </div>
      )
    })
  }
  ScorestreakPick3() {
  const Pick =  ScorestreakData.filter((scorestreak) => {
      return scorestreak.name === this.props.SCORE_3
    })
  return Pick.map((scorestreak) => {
      return (
        <div className="scorestreak-select">
          <img className="scorestreak-image" src={scorestreak.icon} alt={scorestreak.name}/>
          <div className="scorestreak-name">{scorestreak.name}</div>
        </div>
      )
    })
  }

  render(){
    return (
        <div className="scorestreak-width">
          <div>
            {this.ScorestreakPick1()}
            {this.ScorestreakPick2()}
            {this.ScorestreakPick3()}
          </div>
          <div>
            <Scorestreaks/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps,null)(ScorestreakSelection)
