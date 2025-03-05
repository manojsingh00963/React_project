const mongoose = require("mongoose");
// const {Schema} = mongoose;

const NotesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        default:"Genral"
    },
    time: {
        type:Date,
        default:Date.now
    }
    }
)

const Note = mongoose.model("Notes",NotesSchema)

module.exports = Note
