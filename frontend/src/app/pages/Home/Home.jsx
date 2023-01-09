import React from 'react'
import CreatePost from '../../components/forms/createPost/CreatePost'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
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
          <div className="home-search">
            <form>
              <input type="text" className="search-bar" name="search" placeholder="Buscar..."/>
            </form>

            <div className="recomended">
              <h1>Recomendados</h1>
              <div className="users">
                <div className="user"></div>
                <div className="user"></div>
                <div className="user"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home