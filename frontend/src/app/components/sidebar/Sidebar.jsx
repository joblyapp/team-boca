import React from 'react'
import "./Sidebar.css"
import Logotipo from "../utils/images/logo.png"
import Profile from "../utils/images/profile.png"
import Home from "../utils/images/home.png"
import Bell from "../utils/images/bell.png"
import Saved from "../utils/images/saved.png"
import Logout from "../utils/images/logout.png"
const Sidebar = () => {
    const notify = true
  return (
    <div className="sidebar">
        <img src={Logotipo} alt='Logo-icon' className="logo"/>

        <div className="mid">
            <div>
                <img src={Profile} alt='profile-icon' className="icon"/>
            </div>
            <div>
                <img src={Home} alt='profile-icon' className="icon"/>
            </div>
            <div className='bell'>
                <img src={Bell} alt='profile-icon' className="icon"/>
                <div className={`${notify ? 'notify' : ''}`}></div>
            </div>
            <div>
                <img src={Saved} alt='profile-icon' className="icon"/>
            </div>
        </div>
        <div className="bottom">
            <img src={Logout} alt='saved-icon' className="icon"/>
        </div>

    </div>
  )
}

export default Sidebar