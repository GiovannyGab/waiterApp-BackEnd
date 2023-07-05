import { Category } from "../../Models/Category";
import { Request,Response } from "express";
export default async function listCategories(req:Request,res:Response){
try {
  const categories =  await Category.find()

res.json(categories)
} catch (error) {

}

}
