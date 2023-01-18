import axios from 'axios'
import {useState} from 'react'
import "./OlvidePassword.css"
const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(email === "" || email.length < 6){
            setAlerta({
              msg: "El email es obligatorio",
              error: true
            })
      
            return;
        }

        try {
            const {data} = await axios.post("http://localhost:4000/api/usuarios/olvide-password", {email})
            setAlerta({
                msg: data.msg,
                error: false
              })   
        } 
        catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
      
    }

    const {msg} = alerta
  return (
    <div className="olvidepassword-container">
        <h1 className="title">Recuperar Contraseña</h1>
        {msg && <p className="alerta">{msg}</p>}
        <form className="olvidepassword-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="submit" value="Recuperar Contraseña"/>
        </form>
    </div>
  )
}

export default OlvidePassword