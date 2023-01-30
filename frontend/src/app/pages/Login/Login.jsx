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
      window.location.reload(true);
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="login-container">
      <div className="thumbnail">
      </div>
      <div className="login">
        <h1 className="login-title">Iniciar Sesión</h1>
        {alerta && <p className="alerta">{alerta}</p>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="email" className="login-input" name='email' onChange={e => setEmail(e.target.value)} value={email} required="required"/>
            <span>Email</span>
          </div>
          <div className='input-box'>
            <input type="password" className="login-input" name='password' onChange={e => setPassword(e.target.value)} value={password} required="required"/>
            <span>Password</span>
          </div>
          <input type="submit" className="submit-login" value='Iniciar Sesión'/>
          <span className='redirect-text-pw'><a href="/olvide-password" className='redirect-text-pw'>¿Olvidaste tu contraseña?</a></span>
        </form>

        <div className="redirect">
          <hr className="hr"/>
          <span className='redirect-text'>¿No tienes cuenta?</span>
          <a href="/register" className='redirect-btn'>Registrarse</a>
        </div>
      </div>
    </div>
  )
}

export default Login