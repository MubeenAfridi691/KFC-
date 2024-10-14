const mongoose = require('mongoose');
require('dotenv').config();


exports.createdatabase= async()=>{
 await   mongoose.connect(process.env.DB).then(()=>{
        console.log("Database connected successfully")
    })

}