const mongoose = require('mongoose');
const { Schema } = mongoose;

const productschema = new Schema({
  title:{
    type:String,
    required:[true,"Please enter the title"],
    minlength:[4,"Minimum length should be 4"],
  },
  description:{
    type:String,
    required:[true,"Please enter the description"],
    minlength:[4,"Minimum length should be 4"],
  },
  price:{
    type:Number,
    required:[true,"Please enter the price"]
    
  },stock:{
    type:Number,
    required:[true,"Please enter the stock"]
  },image:{
    type:String
  }

},

{
    timestapms:true

}
);
const Productschema= mongoose.model('Product',productschema)
module.exports = Productschema;