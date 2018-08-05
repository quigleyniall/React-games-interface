import React, {Component} from 'react'
import '../App.css'
import ScorestreakData from '../data/scorestreak'
import {connect} from 'react-redux'
import {score1,score2,score3} from '../actions/weaponInfo'

// filter socrestreaks to one that has been selected
// user can only set scorestreak to one of the 3 available slots
// only if it hasnt been set already

class ScorestreakDetails extends Component {

  constructor(){
    super();
    this.streak1 = this.streak1.bind(this)
    this.streak2 = this.streak2.bind(this)
    this.streak3 = this.streak3.bind(this)
  }

  streak1(event) {
    this.props.streak1(event.currentTarget.name)
  }

  streak2(event) {
    this.props.streak2(event.currentTarget.name)
  }

  streak3(event) {
    this.props.streak3(event.currentTarget.name)
  }

  render() {
    const details =  ScorestreakData.filter((scorestreak) => {
      return scorestreak.name == this.props.details
})
const {SCORE_1, SCORE_2, SCORE_3}  = this.props
    return details.map((scorestreak) => {
        return (
          <div className="scorestreak-hover">
            <div className="scorestreak-title">{scorestreak.name}</div>
            <img className="scorestreak-b-image" src={scorestreak.icon} alt={scorestreak.name} />
            <div className="scorestreak-desc">{scorestreak.desc}</div>
            <div className="scorestreak-score">Score: {scorestreak.score}</div>
            { scorestreak.name !== SCORE_1 && scorestreak.name !== SCORE_2 && scorestreak.name !== SCORE_3 ? (
              <div>
              <button className="scorestreak-button" onClick={this.streak1} name={scorestreak.name}>Set Scorestreak 1</button>
              <button className="scorestreak-button" onClick={this.streak2} name={scorestreak.name}>Set Scorestreak 2</button>
              <button className="scorestreak-button" onClick={this.streak3} name={scorestreak.name}>Set Scorestreak 3</button>
            </div>
          ) : (
            <div className="scorestreak-reject">This Score Streak has already been selected!</div>
          )}

          </div>
        )
      })
}


}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = ({
  streak1: score1,
  streak2: score2,
  streak3: score3
})

export default connect(mapStateToProps,mapActionsToProps)(ScorestreakDetails)
