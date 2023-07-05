import { Category } from "../../Models/Category";
import { Request,Response } from "express";
export default async function createCategory(req:Request,res:Response){
try {
    const data = req.body
  const category =  await Category.create({
    name: data.name,
    icon: data.icon
  })
  return res.status(201).json({category})
} catch (error) {
  console.log(error)
  res.sendStatus(500)
}
}
