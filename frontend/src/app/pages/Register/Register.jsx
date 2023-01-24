import React from 'react'
import {useDispatch} from 'react-redux'
import './Register.css'
import { postRegister } from '../../../redux/actions/userAction'
import {Formik} from "formik"

const Register = () => {

  const dispacth = useDispatch()
  

  return (
    <div className="register-container">
      <div className="register-thumbnail"></div>
      <div className="register">
        <h1 className="title-register">Registrarse</h1>

        <Formik
            initialValues={{
                email: "",
                username:"",
                password:"",
            }}

            validate={(valores)=>{
                let errores = {}

                // Validacion correo
					if(!valores.email){
						errores.email = 'Ingrese su email por favor'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'Debes ingresar un email valido'
					}
                // validacion username
                if(!valores.username){
                    errores.username = "Ingrese un nombre de usuario"
                }else if(!/^[a-zA-ZÀ-ÿ\/^S+]{1,40}$/.test(valores.username)){
                    errores.username = 'El nombre de usuario solo acepta letras sin espacios'
                }
                //validacion passoword
                if(!valores.password){
                    errores.password = "Por favor, ingresa una contraseña"
                }
                
            return errores   
            }}


            onSubmit={(valores,{resetForm})=>{
                dispacth(postRegister(valores))
            }}
        >
        {( {values,errors,touched,handleSubmit,handleChange,handleBlur} )=>(

        <form className="register-form" onSubmit={handleSubmit}>

          <div className="register-box">
            <input type="email" className="register-input" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required="required"/>
            <span>Email</span>
            {touched.email && errors.email && <div className="errors">{errors.email}</div>}
          </div>

          <div className="register-box">
            <input type="text" className="register-input" name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} required="required"/>
            <span>Username</span>
            {touched.username && errors.username && <div className="errors">{errors.username}</div>}
          </div>

          <div className="register-box">
            <input type="password" className="register-input" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} required="required"/>
            <span>Password</span>
            {touched.password && errors.password && <div className="errors">{errors.password}</div>}
          </div>
          <button type="submit" className="submit-register" value='Crear Cuenta'>Crear Cuenta</button>
        </form>

       )}

        </Formik>
        
        <div className="redirect">
          <hr/>
          <span className='redirect-text'>¿Ya tienes una cuenta?</span>
          <a href="/login" className='redirect-btn'>Iniciar Sesión</a>
        </div>
      </div>
    </div>
  )
}

export default Register