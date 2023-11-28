import {model, Schema}from "mongoose";

const productSchema= new Schema({
    image:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
});

const Product = model('Product', productSchema);

export default Product;