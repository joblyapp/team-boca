import mongoose from "mongoose";


const conectarDb = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${connection.connection.host} : ${connection.connection.port}`
        console.log(url)
    } catch (error) {
        console.log(error.message)
        process.exit(1) //En caso de error el process.exit se cerrara
    }
}

export default conectarDb