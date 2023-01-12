import React from 'react'
import Post from '../Post/Post'
import Sidebar from '../sidebar/Sidebar'
import './Profile.css'
import ProfileImage from '../utils/images/profile.png'
import PostImage from '../utils/images/post.png'
import FollowingImage from '../utils/images/following.png'
import FollowersImage from '../utils/images/followers.png'

const Profile = () => {
  return (
    <div className="profile">
       
        <Sidebar/>
        <div className='my-profile'>
        <div className='profile-head'>
          <div className='img-name'>
          <img src={ProfileImage} alt="profile-image" className='img-profile'/>
          <div className='text-profile'>
          <div className='profile-name'>Jane Doe</div>
          <div className='profile-subtitle'> Texto de prueba para subtitulo de un perfil de usuario</div>
          </div>
          </div>
          <div className='buttons-profile'>
          <button className='button-options'>...</button>

          <button className='button-follow'>Follow</button>
          </div>
        </div>
        <div className="profile-container">
        
          <div className="profile-feed">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>          
          <div className="profile-search">
            

            <div className="detalles">
              <h1>Detalles</h1>
              <div className="detalles-users">
                <div className="detalles-user">
                  <img className='img-detalles' src={PostImage} alt="" />
                  <div className='info-detalles'>
                    
                    <div className='text-inf'>Posts</div>
                    <div className='text-number'>10</div>
                    
                  </div>
                </div>
                <div className="detalles-user">
                  <img className='img-detalles' src={FollowersImage} alt="" />
                  <div className='info-detalles'>
                    
                    <div className='text-inf'>Seguidores</div>
                    <div className='text-number'>10.000</div>
                    
                  </div>
                </div>
                <div className="detalles-user">
                  <img className='img-detalles' src={FollowingImage} alt="" />
                  <div className='info-detalles'>
                    
                    <div className='text-inf'>Siguiendo</div>
                    <div className='text-number'>44</div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        
    </div>
  )
}

export default Profile