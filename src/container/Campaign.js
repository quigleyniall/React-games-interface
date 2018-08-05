import React, {Component} from 'react'
import '../App.css'
import campaign from '../data/campaign'
import CampaignInfo from './CampaignInfo'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {goback, show} from '../actions/weaponInfo'

// Custom build carousel which is controlled using the display count in state
// Mission name is passed down as props
class Campaign extends Component {
  constructor(){
    super();
    this.state = ({
      display: 1,
      mission: ''
    })
    this.campaign = this.campaign.bind(this)
    this.setMission = this.setMission.bind(this)
    this.decrease = this.decrease.bind(this)
    this.increase = this.increase.bind(this)
  }

  decrease(){
    if(this.state.display > 1){
    let number = this.state.display - 1
    this.setState({
      display: number
    })
  }
  }

  increase(){
    if(this.state.display < 3){
    let number = this.state.display + 1
    this.setState({
      display: number
    })
  }
  }

  setMission(event){
    this.props.hideNav(false)
    this.props.setMission(true)

    this.setState({
      mission: event.currentTarget.name
    })
  }

  campaign() {
    const allResults = campaign.map((campaign) => {
      return (
        <div className="legend campaign-thumbnail">
          <a name={campaign.name} onClick={this.setMission}>
            <img className="full" src={campaign.picture}/>
          </a>
          <div className="campaign-name">{campaign.name}</div>
          <div className="campaign-date">{campaign.date}</div>
        </div>
      )
  })

  // Navigate Carousel
  const first = allResults.slice(0,5)
  const second = allResults.slice(5,10)
  const third = allResults.slice(10, 11)
  if(this.state.display === 1){
    return first.map((campaign) => {
      return campaign
    })
  }
  if(this.state.display === 2){
    return second.map((campaign) => {
      return campaign
    })
  }
  if(this.state.display === 3){
    return third.map((campaign) => {
      return campaign
    })
  }
}
  render(){
    return (
      <div className="campaign">
        {this.props.SHOW && (
          <div>
            <Link to='/' className="home-link">Home</Link>
            <div className="mission-select">Select Mission</div>
            <div className="carousel">
              <i onClick={this.decrease} className="fas fa-arrow-left prev-button"></i>
                {this.campaign()}
                <i onClick={this.increase} className="fas fa-arrow-right next-button"></i>
            </div>
          </div>
        )}
        {this.props.BACK && (
              <CampaignInfo mission={this.state.mission}/>
        )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  setMission: goback,
  hideNav: show
}
export default connect(mapStateToProps, mapActionsToProps)(Campaign)
