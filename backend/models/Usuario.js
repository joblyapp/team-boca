import mongoose from "mongoose";
import bcrypt from "bcrypt"

const usuarioSchema = mongoose.Schema({
    username :{
        type: String,
        required: true,
        trim: true
    },

    password:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    avatar: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    },
    token:{
        type: String
    },
    confirmado:{
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false,
    },
    //TODO: Luego de implementar el modelo post descomentar saved
    // saved: [
    //     {
    //       type: mongoose.Types.ObjectId,
    //       ref: 'Post'
    //     }
    // ],
    followers: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Usuario",
        },
    ],
    following: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Usuario",
        },
    ],
},
    {
    timestamps: true,
    }
)

usuarioSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario