import React, {Component} from 'react'
import '../App.css'
import Soldier from './Soldier'
import ScorestreakSelection from './ScorestreaksSelection'
import User from '../components/user'
import {Link} from 'react-router-dom'

//  This Component Controls Multiplayer Main menu
// Divsions
// Scorestreaks
// Stats
class SoldierMenu extends Component {

  constructor(){
    super();
    this.state = ({
      Divisions: true,
      Scorestreaks: false
    })
    this.onPick = this.onPick.bind(this)
  }
  onPick(event) {
    this.setState({
      Divisions: false,
      Scorestreaks: false,
      Stats: false
    })
   this.setState({
      [event.currentTarget.textContent]: true
    })
  }
  render(){
    return (
      <div className="soldierMenu">
        <ul className="soldierList">
          <li onClick={this.onPick} className="soldier-item">Divisions</li>
          <li onClick={this.onPick} className="soldier-item">Scorestreaks</li>
          <li onClick={this.onPick} className="soldier-item">Stats</li>
          <li className="soldier-item"><Link to="/" className="soldier-link">Home</Link></li>

        </ul>
        {this.state.Divisions && (
          <Soldier/>
        )}
        {this.state.Scorestreaks && (
          <ScorestreakSelection/>
        )}
        {this.state.Stats && (
          <User/>
        )}
      </div>
    )
  }
}

export default SoldierMenu
