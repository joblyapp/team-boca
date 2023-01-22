import axios from 'axios'
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector } from "react-redux"
import { logIn } from '../../../redux/actions/userAction'
import './Login.css'

const url = process.env.REACT_APP_HOST

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = useSelector((state) => state.user.user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if([email, password].includes('')){
      setAlerta("Todos los campos son necesarios")
      return;
    }

    try {
      const {data} = await axios.post(`http://${url}/api/usuarios/login`, {email, password}) //TODO: Crear .env para esconder la url
      setAlerta('')
      dispatch(logIn(data))
      localStorage.setItem('token', data.token)
      navigate("/")
    } catch (error) {
      setAlerta(error.response.data.msg)
    }

  }
  return (
    <div className="register">
      <h1 className="title">Iniciar Sesión</h1>
      {alerta && <p className="alerta">{alerta}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="email" className="register-input" name='email' onChange={e => setEmail(e.target.value)} value={email} placeholder="Email o nombre de usuario"/>
        <input type="password" className="register-input" name='password' onChange={e => setPassword(e.target.value)} value={password} placeholder="Password"/>
        <input type="submit" className="submit-register" value='Iniciar Sesión'/>
      </form>

      <div className="redirect">
        <span className='redirect-text-pw'>¿Olvidaste tu contraseña?</span>
        <span className='redirect-text'>¿No tienes cuenta?</span>
        <a href="#" className='redirect-btn'>Registrarse</a>
      </div>
    </div>
  )
}

export default Login