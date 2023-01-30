import jwt from 'jsonwebtoken'

const generarJWT = (id)=>{
    try {
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: "30d",
        })
    } catch (error) {
        console.log(error+"Ocurrio este error")
    }
    
}

export default generarJWT