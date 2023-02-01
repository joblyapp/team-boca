import Post from "../models/Post"

const agregarPost = async(req, res) => {
    const post = new Post(req.body)
    post.creador = req.usuario._id

    try {
        const guardarPost = await post.save()
        res.json(guardarPost)    
    } catch (error) {
        console.log(error)
    }
}


export {
    agregarPost
}