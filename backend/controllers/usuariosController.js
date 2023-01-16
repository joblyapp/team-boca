import Usuario from "../models/Usuario.js"
import token from "../helpers/token.js"
import generarJWT from "../helpers/generarJWT.js"
import confirmAccount  from "./notifications/confirmAccount.js"
import { emailOlvidePassword } from "./notifications/olvidePassword.js"
const registrar = async(req, res) => {
    const { email } = req.body
    const existeUsuario = await Usuario.findOne({ email })

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado")
        return res.status(400).json({ msg: error.message })
    }

    try {
        const usuario = new Usuario(req.body)
        usuario.token = token()
        await usuario.save()

        // TODO: Agregar funcionalidad de comprobación por correo
        .then((usuario)=> confirmAccount(usuario))

        res.json({ msg: "Usuario creado correctamente revisa tú correo para confirmar tú cuenta" })

    } catch (error) {
        console.log(error)
    }
}


const login = async (req, res) => {
    const {email, password} = req.body
    const usuario = await Usuario.findOne({email})

    if(!usuario) {
        const error = new Error("El usuario no existe")
        return res.status(400).json({ msg: error.message })
    }

    if(!usuario.confirmado){
        const error = new Error("Debes confirmar tu cuenta para iniciar sesion")
        return res.status(400).json({ msg: error.message })
    }

    if(await usuario.comprobarPassword(password)){
        return res.json({
            _id : usuario._id,
            email: usuario.email,
            nombre: usuario.username,
            token: generarJWT(usuario._id)
        })
    }else{
        const error = new Error("La contraseña es incorrecta")
        return res.status(403).json({msg : error.message})
    }
}


const olvidePassword = async(req, res) => {
    const {email} = req.body
    const usuario = await Usuario.findOne({email})

    if(!usuario){
        const error = new Error("Correo Invalido")
        return res.status(404).json({msg: error.message})
    }

    try {
        usuario.token = token()
        await usuario.save()

        //*Enviando Email
        emailOlvidePassword({
            email: usuario.email,
            nombre: usuario.username,
            token: usuario.token
        })
        res.json({msg:"Hemos enviado un email de recuperación a tu correo electronico"})
    } catch (error) {
        console.log(error)
    }
}


const getPublicUser = async(req, res) =>{
    const {id} = req.params;

    const usuario = await Usuario.findById(id).select("-password -createdAt -updatedAt -__v")

    if(!usuario){
        const error = new Error("Usuario no existe")
        return res.status(404).json({ msg: error.message })
    }


    res.json(usuario)

}


const confirmAcc = async(req,res)=> {
    const {token} = req.params;
    const existeUsuario = await Usuario.findOne({ token })

    try {
        
        if(existeUsuario.confirmado){
            res.json({msg:" Usuario confirmado exitosamente, aguarde y sera redireccionado..."})
            
        }
        else if(existeUsuario){
            Usuario.findOne({
                token: token
              })
              .then((usuario) => {
                usuario.confirmado = true;
                usuario.token = '';
                usuario
                  .save()
                  .then(() => {
                    res.jsonp({ msg:"Usuario confirmado exitosamente, aguarde y sera redireccionado" }); // enviamos la boleta de vuelta
                    setTimeout(() => {
                    
                    }, 5000);
                });
              });
        }
        else{
            res.json({msg:"Ups, algo salio mal!"})
        }

    } catch (error) {
        res.json({msg:"Ups, ocurrio un error"})
        console.log(error)
    }
}

const comprobarToken = async (req, res) => {
    const {token} = req.params
    const tokenValido = await Usuario.findOne({token})

    if(tokenValido){
        res.json({msg: "Token Valido"})
    }else{
        const error = new Error("Token Invalido")
        return res.status(404).json({msg: error.message})
    }
}

const nuevoPassword = async (req, res) => {
    const {token} = req.params
    const {password} = req.body
    const usuario = await Usuario.findOne({token})

    if(usuario){
        usuario.password = password
        usuario.token = ""
        
        try {
            usuario.save()
            res.json({msg: "Contraseña modificada correctamente"})    
        } catch (error) {
            console.log(error)
        }
    }
    else{
        const error = new Error("Token Invalido")
        return res.status(404).json({msg: error.message})
    }
}

export { registrar, login, getPublicUser, confirmAcc, olvidePassword, comprobarToken, nuevoPassword}