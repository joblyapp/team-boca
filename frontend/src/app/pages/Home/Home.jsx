import CreatePost from '../../components/forms/createPost/CreatePost'
import { useState } from 'react'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import Suggestion from '../../components/Suggestion/Suggestion'

import './Home.css'
import Menu from '../../components/Menu/Menu'
import Tabs from '../../components/Tabs/Tabs'
const Home = () => {
  
  return (
    <div className="home">
        <div className="sidebar-home">
          <Sidebar/>
        </div>
        <div className="home-container">
          <div className="home-feed">
            <Menu nombre={"Home"}/>
            <Tabs tab1={"Feed"} tab2={"Post Recomendados"}/>
            <div className="home-content">
              
              <CreatePost/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>  
            </div>
            
          </div>          
          <div className="suggestion-home">
            <Suggestion/>
          </div>
        </div>
    </div>
  )
}

export default Home