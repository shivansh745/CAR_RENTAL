const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect("mongodb+srv://test-anurag:test123@cluster0.g2tqnwo.mongodb.net/in" , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose