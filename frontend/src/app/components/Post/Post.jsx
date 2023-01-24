import React from 'react'
import './Post.css'
import Profile from '../utils/images/profile.png'
import Car from "../utils/images/1.png"
import Like from "../utils/images/heart.png"
import Comment from "../utils/images/chat-balloon.png"
import Saved from "../utils/images/saved.png"
const Post = () => {
  return (
    <div className="post-container">
        <div className="user-post">
            <img src={Profile} alt='Profile-icon' className="profile-post"/>
            <div className="relevant-post">
                <span className="author-post">Jane Doe</span>
                <span className="date-post">Hace 1 Dia</span>
            </div>
        </div>

        <div className="post-content">
            <img src={Car} alt='post-image' className='post-image'/>
            <p className="post-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
            </p>

        </div>


        <div className="post-interactions">
            <img src={Like} alt='like-icon' className='post-icon'/>
            <img src={Comment} alt='comment-icon' className='post-icon'/>
            <img src={Saved} alt='saved-icon' className='post-icon'/>
        </div>
    </div>
  )
}

export default Post