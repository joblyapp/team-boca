import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    description:{
        type: String,
        required: true,
        maxLength: 200
    },

    image:{
        type: String,
    },
    likes: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Usuario",
        },
      ],
    comments: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comment",
        },
      ],
    creador: {
        type: mongoose.Types.ObjectId,
        ref: "Usuario",
    }
},
    {
        timestamps: true,
    }
)

const Post = mongoose.model('Post', postSchema)

export default Post