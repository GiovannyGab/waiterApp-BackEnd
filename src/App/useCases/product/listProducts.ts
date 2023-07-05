import { Request,Response } from "express";
import { Product } from "../../Models/Product";
export default async function listProducts(req:Request,res:Response){
  try {
    const products =  await Product.find()

res.sendStatus(200).json({products})
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
