const mongoose  = require('mongoose') // mongoose  is reponsible for modeling your database schema 
// schema 

const employeeSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    tell:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports  = mongoose.model('Employee',employeeSchema)



//  