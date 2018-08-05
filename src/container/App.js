import React, { Component } from 'react';
import '../App.css';
import Settings from '../components/settings'
import Soldier from './Soldier'
import Primary from '../components/primary'
import SecondaryClass from '../components/secondary'
import Perks from './Perks'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {updatePrimaryWeapon} from '../actions/weaponInfo'
import Division from '../components/divisions'
import Home from '../components/home'
import SoldierMenu from './soldierMenu'
import Campaign from './Campaign'
import CampaignInfo from './CampaignInfo'

import { connect } from 'react-redux'
// Set up Routes
class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/campaign' component={Campaign} />
          <Route path='/soldier' component={SoldierMenu} />
          <Route path={`/settings`} component={Settings} />
          <Route path={`/perks`} component={Perks} />
          <Route path='/primary' component={Primary} select={{primary: true}} />
          <Route path='/secondary' component={SecondaryClass} select={{secondary: true}} />
          <Route path='/divisions' component={Division} />
          <Route path='/campaingInfo' component={CampaignInfo} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  onUpdateWeapon: updatePrimaryWeapon
}


export default connect(mapStateToProps, mapActionsToProps)(App);
