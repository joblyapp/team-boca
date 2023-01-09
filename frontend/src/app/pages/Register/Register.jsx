import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="register">
      <h1 className="title">Registrarse</h1>

      <form className="register-form">
        <input type="email" className="register-input" name='email' placeholder="Email"/>
        <input type="text" className="register-input" name='username' placeholder="Username"/>
        <input type="password" className="register-input" name='password' placeholder="Password"/>
        <input type="submit" className="submit-register" value='Crear Cuenta'/>
      </form>

      <div className="redirect">
        <span className='redirect-text'>¿Ya tienes una cuenta?</span>
        <a href="#" className='redirect-btn'>Iniciar Sesión</a>
      </div>
    </div>
  )
}

export default Register