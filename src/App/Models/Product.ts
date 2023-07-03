import { model,Schema} from "mongoose";

export const Product = model('Product',new Schema({
  name:{
    type:String,
    required:[true,'Name is Required']
  },
  description:{
    type:String,
    required:[true,'Description is Required']
  },
  imagePath:{
    type:String,
    required:[true,'imagePath is Required']
  },
  price:{
    type:Number,
    required:[true,'Price is Required']
  },
  ingredients:[
   {
    icon:{
      type:String,
      required:[true,'icon is Required']
    },
    name:{
      type:String,
      required:[true,'name is Required']
    },
  }
  ],
  category:{
    type: Schema.Types.ObjectId,
    required:true,
    ref: 'Category'
  }
}))
