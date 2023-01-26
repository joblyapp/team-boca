import {useState} from 'react'
import {Link} from "react-router-dom/"
import "./Menu.css"
import Logo from "../../components/utils/images/logo-menu.png"
import Bar from "../../components/utils/images/leading-icon.png"
import Bell from "../../components/utils/images/bell.png"
import Close from "../../components/utils/images/close.png"
import Profile from "../../components/utils/images/profile.png"
import Home from "../../components/utils/images/home.png"
import Saved from "../../components/utils/images/saved.png"
import Logout from "../../components/utils/images/logout.png"
const Menu = ({nombre}) => {
  const [active, setActive] = useState(false)
  
  return (
    <>
      <div className="menu-title">
        <img src={Bar} alt="menu-icon" onClick={()=> setActive(true)}/>
        <h1>{nombre}</h1>
        <img src={Bell} alt="bell-icon" className="menu-icon"/>
      </div>

      <div className={`menu-container ${ active ? "active-menu" : ""}`}>
        <div className="menu">
          <div className="menu-top"> 
            <img src={Logo}/>
            <img src={Close} alt='close-icon' className="menu-icon" onClick={()=> setActive(false)}/>
          </div>

          <div className="menu-mid">
            <img src={Profile} alt='profile-icon' className="menu-profile"/>
            <div>
              <p>Jane Doe</p>
              <p>mail@mail.com</p>
            </div>
          </div>
          <hr/>

          <div className="menu-bottom">
            <div className="menu-link">
              <img src={Home}/>
              <span>Home</span>
            </div>
            <div className="menu-link">
              <img src={Profile}/>
              <span>Mi perfil</span>
            </div>
            <div className="menu-link">
              <img src={Saved}/>
              <span>Post guardados</span>
            </div>
            <div className="menu-link">
              <img src={Logout}/>
              <span>Cerrar sesión</span>
            </div>

          </div>
        </div>
        {/* <div className="rest-menu"></div> */}
      </div>
    </>
  )
}

export default Menu