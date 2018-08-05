import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

// home component
// links to campaign, multiplayer, settings
const Home = () => {
 return (
   <div>
    <div className="menu">
      <div className="menu-title">
      <h1 className="menu-heading">CALL <span className="menu-small-heading">OF</span>Duty</h1>
      <h2 className="menu-sub-heading">WWII</h2>
    </div>
       <div className="menu-list">
         <Link className="menu-item" to={`/campaign`}>Campaign</Link>
         <Link className="menu-item" to={`/soldier`}>Multiplayer</Link>
         <Link className="menu-item" to={`/settings`}>Settings</Link>
       </div>
     </div>
   </div>
 )
}
export default Home
