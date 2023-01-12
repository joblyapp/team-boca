import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="register">
      <h1 className="title">Iniciar Sesión</h1>

      <form className="register-form">
        <input type="email" className="register-input" name='email' placeholder="Email o nombre de usuario"/>
        <input type="password" className="register-input" name='password' placeholder="Password"/>
        <input type="submit" className="submit-register" value='Iniciar Sesión'/>
      </form>

      <div className="redirect">
        <span className='redirect-text-pw'>¿Olvidaste tu contraseña?</span>
        <span className='redirect-text'>No tienes cuenta una?</span>
        <a href="#" className='redirect-btn'>Registrarse</a>
      </div>
    </div>
  )
}

export default Login