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

    

    const handleClick = (e)=>{
        e.preventDefault()
        localStorage.removeItem('token')
        window.location.reload(true);
    }

  return (
    <div className="sidebar">
        <a href="/">
        <img href="#" src={Logotipo} alt='Logo-icon' className="logo"/>
        </a>
        <div className="mid">
            <div>
            <a href="/profile">
                <img src={Profile}  alt='profile-icon' className="icon"/>
                </a>
            </div>
            <div>
            <a href="/">
                <img src={Home} alt='profile-icon' className="icon"/>
                </a>
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
            <img src={Logout} onClick={handleClick} alt='saved-icon' className="icon"/>
        </div>

    </div>
  )
}

export default Sidebar