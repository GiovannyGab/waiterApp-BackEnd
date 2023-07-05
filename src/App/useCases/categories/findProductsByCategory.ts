import { Request,Response } from "express";
import { Product } from "../../Models/Product";
export default async function findProductsByCategory(req:Request,res:Response){
try {
  const params = req.params
  const products= await Product.find().where('category').equals(params.categoryId)
  res.status(200).json({products})
} catch (error) {
console.log(error)
}
}
