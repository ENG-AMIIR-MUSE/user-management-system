const mongoose  = require('mongoose') // mongoose  is reponsible for modeling your database schema 
// schema 

const onlineSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports  = mongoose.model('online',onlineSchema)



//  