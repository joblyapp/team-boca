import React from 'react'
import CreatePost from '../../components/forms/createPost/CreatePost'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import Suggestion from '../../components/Suggestion/Suggestion'
import './Home.css'
const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="home-container">
          <div className="home-feed">
            <h1 className="title">Home</h1>
            <CreatePost/>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>          
          <div>
            <Suggestion/>
          </div>
        </div>
    </div>
  )
}

export default Home