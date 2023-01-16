import React from 'react'
import {useDispatch} from 'react-redux'
import './Register.css'
import { postRegister } from '../../../redux/actions/userAction'
import {Formik} from "formik"

const Register = () => {

  const dispacth = useDispatch()
  

  return (
    <div className="register">
      <h1 className="title">Registrarse</h1>

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

        <input type="email" className="register-input" name='email' placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
        {touched.email && errors.email && <div className="errors">{errors.email}</div>}

        <input type="text" className="register-input" name='username' placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
        {touched.username && errors.username && <div className="errors">{errors.username}</div>}
        
        <input type="password" className="register-input" name='password' placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
        {touched.password && errors.password && <div className="errors">{errors.password}</div>}

        <button type="submit" className="submit-register" value='Crear Cuenta'>Crear Cuenta</button>
      </form>

      )}

      </Formik>
      <div className="redirect">
        <span className='redirect-text'>¿Ya tienes una cuenta?</span>
        <a href="/login" className='redirect-btn'>Iniciar Sesión</a>
      </div>
      
    </div>
  )
}

export default Register