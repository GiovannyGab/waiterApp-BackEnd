
import { Request,Response } from "express";
import { Product } from "../../Models/Product";
export default async function createProduct(req:Request,res:Response){
  const {name,price,description,ingredients,category} = req.body
  const imagePath = req.file?.filename

const products =  await Product.create(
{
  name,
  price:Number(price),
  description,
  ingredients:ingredients? JSON.parse(ingredients) : [],
  category,
  imagePath
}
)


return res.status(201).json({products})
}
