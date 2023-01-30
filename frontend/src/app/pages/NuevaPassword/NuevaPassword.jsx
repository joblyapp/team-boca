import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import "./NuevaPassword.css"

const url = process.env.REACT_APP_HOST

const NuevaPassword = () => {
    const [alerta, setAlerta] = useState({})
    const [tokenValido, setTokenValido] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordValido, setPasswordValido] = useState(false)
    const params = useParams()
    const {token} = params

    useEffect(() => {
        const comprobarToken = async () =>{
            try {
                const {data} = await axios(`${url}/api/usuarios/olvide-password/${token}`)
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                  })
            }
        }

        comprobarToken()
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(password.length < 6){
            setAlerta({
              msg: "El password debe ser minimo de 6 caracteres",
              error: true
            })
            return;
        }

        try {
            const {data} = await axios.post(`${url}/api/usuarios/olvide-password/${token}`, {password})
            setAlerta({
                msg: data.msg,
                error:false
              })
              setPassword('')
              setPasswordValido(true)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
              })
        }
    }

    const {msg} = alerta
  return (
    <div className="newpassword-container">
        <h1 className="title">Nueva Contraseña</h1>
        {msg && <p className="alerta">{msg}</p>}
        {tokenValido && (
            <form className="newpassword-form" onSubmit={handleSubmit}>
                <input type="password" placeholder="Nueva Contraseña" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="submit" value="Guardar Contraseña"/>
            </form>
        )}

        {passwordValido && (
        <Link to={"/login"} className="newpassword-work">
            Inicia Sesión
          </Link>
      )}
    </div>
  )
}

export default NuevaPassword