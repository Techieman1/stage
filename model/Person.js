const{Schema, model} = require("mongoose")
const personSchema = new Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    }
   
},
{timestamps: true}
)

const personModel = model("Person", personSchema)

module.exports = personModel