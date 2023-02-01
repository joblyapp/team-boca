import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxLength: 200
    },

    author:{
        type: mongoose.Types.ObjectId,
        ref: "Usuario",
    },

    post:{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
})


const Comment = mongoose.model('Comment', commentSchema)
export default Comment