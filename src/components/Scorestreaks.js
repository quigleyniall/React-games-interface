import React, {Component} from 'react'
import '../App.css'
import ScorestreakData from '../data/scorestreak'
import ScorestreakDetails from '../container/scorestreakdetails'

// maps all of the scorestreaks from imported const as images
// and passes down state as props to ScorestreakDetails
// which shows the details of the scorestreaks

class Scorestreaks extends Component {
  constructor() {
    super();
    this.state = ({
      clicked: 'UAV'
    })
    this.scorestreak = this.scorestreak.bind(this)
    this.setScore = this.setScore.bind(this)
  }

  setScore(event) {
    this.setState({
      clicked: event.currentTarget.name
    })
  }

scorestreak() {
  return ScorestreakData.map((scorestreak) => {
    return (
      <div className="scorestreak-details scorestreak-active-hover">
        <a name={scorestreak.name} onClick={this.setScore}>
          <img className="scorestreak-image" src={scorestreak.icon} alt={scorestreak.name}/>
        </a>
      </div>
    )
  })
}

  render(){
    return (
      <div className="scorestreak">
        {this.scorestreak()}
      <div>
        <ScorestreakDetails details={this.state.clicked}/>
      </div>
      </div>
    )
  }
}



export default Scorestreaks
