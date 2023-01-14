import Usuario from "../models/Usuario.js"
import token from "../helpers/token.js"
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

        res.json({ msg: "Usuario creado correctamente revisa tú correo para confirmar tú cuenta" })
    } catch (error) {
        console.log(error)
    }
}


const getPublicUser = async(req, res, next) => {
    const { email, username } = req.body;

    const [user] = await Usuario.find({ $or: [{ email }, { username }] });

    try {
        ((user.email != email) || (user.username != username)) ?
        res.status(404).json({ msg: 'Not Found' }): res.json({
            user: {
                name: 'Pending',
                lastname: 'Pending',
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                posts: 'Pending'
            }
        })
    } catch (error) {
        console.error(error)
    }

    next()
}

export { registrar, getPublicUser }