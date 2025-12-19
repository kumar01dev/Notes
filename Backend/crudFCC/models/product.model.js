import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name:{
            type:'String',
            required:[true, "please enter product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            default:0
        },
        image:{
            type:String,
            required:false
        },
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model("Product",productSchema);
// in mongodb collection, we see products ie mongodb adds `"s" & makes P->p ` for the model name.  