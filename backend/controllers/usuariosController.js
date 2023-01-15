import Usuario from "../models/Usuario.js"
import token from "../helpers/token.js"

import confirmAccount  from "./notifications/confirmAccount.js"

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



export { registrar, getPublicUser, confirmAcc }