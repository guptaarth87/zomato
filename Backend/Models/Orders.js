const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const OrderSchema=new Schema(
      {
       items:{
        type: Array,
        required: true
       },
       amount:{
        type: Number,
        required: true
       },
       email:{
        type: String,
        required: true
       },
       mobileNo :{
        type: Number,
        required: true
       },
       address:{
        type: String,
        required: true
       }
      }
)

// create a model from schema, connect to mongoDB collection and export the model
module.exports = mongoose.model('Order', OrderSchema, 'Order');
