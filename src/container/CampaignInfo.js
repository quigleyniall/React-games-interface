import React, {Component} from 'react'
import '../App.css'
import campaign from '../data/campaign'
import {connect} from 'react-redux'
import {goback, show} from '../actions/weaponInfo'


// Display mission details depending on weaponName passed down
// Missions details hidden when back button pressed
//  And carousel shown
// need to connect to the store to pass props back up to campaign
class CampaignInfo extends Component {
  constructor() {
    super();
    this.back = this.back.bind(this)
  }

  back() {
    this.props.goback(false)
    this.props.show(true)
    console.log("SHOW" + this.props.SHOW)
    console.log("BACK" + this.props.BACK)
  }

  render() {
  return campaign.filter((mission) => {
      return mission.name === this.props.mission
    }).map((mission) => {
      return (
        <div style={{backgroundImage: `linear-gradient(to left, transparent 0%, black 100%), url(${mission.picture})`}} className="mission-background">
          <div className="mission-position">
            <audio controls autoPlay className="audio">
                <source src={mission.recordings} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
            <div className="mission-name">{mission.name}</div>
            <div className="mission-subheading">{mission.subHeading}</div>
            <div className="mission-date">{mission.date}</div>
            <div className="mission-rule"></div>
            <div className="mission-brief">
              <div className="mission-brief-heading">Mission Briefing</div>
              <div className="mission-brief-desc">{mission.missionBrief}</div>
            </div>
            <div className="mission-memento">
              <div className="mission-memento-heading">Mementos</div>
              <div className="mission-memento-desc">{mission.mementos}</div>
            </div>
            <div className="mission-heroic">
              <div className="mission-heroic-heading">Heroic Actions</div>
              <div className="mission-heroic-desc">{mission.Heroic}</div>
            </div>
            <div className="mission-difficulty">
              <div className="mission-difficulty-heading">Difficulty</div>
              <div className="mission-difficulty-desc">{mission.Difficulty}</div>
            </div>
            <div className="mission-return" onClick={this.back}>Back</div>
          </div>
        </div>
      )
    })
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  goback: goback,
  show: show
}

export default connect(mapStateToProps, mapActionsToProps)(CampaignInfo)
