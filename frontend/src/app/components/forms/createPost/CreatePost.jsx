import React from 'react'
import './CreatePost.css'
import Add from "../../utils/images/add-image.png"
const CreatePost = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <div className='create-post'>
        <form className='compose' onSubmit={handleSubmit}>
            <textarea placeholder='Escribe tu post...' name='post' className='post'/>
            <div className='extra'>
                <div className='add-image'>
                    <img src={Add} alt='add-icon' className='add' />
                    <span>Añadir Imagen</span>
                </div>
                <input type='submit' value='Publicar' className='publish'/>
            </div>
        </form>
    </div>
  )
}

export default CreatePost