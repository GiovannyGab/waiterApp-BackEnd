import path = require("path")
import { Router } from "express";
import listCategories from "./App/useCases/categories/listCategories";
import createCategory from "./App/useCases/categories/createCategory";
import listProducts from "./App/useCases/product/listProducts";
import multer from 'multer'
import createProduct from "./App/useCases/product/createProducts";
import findProductsByCategory from "./App/useCases/categories/findProductsByCategory";
import listOrders from "./App/useCases/order/listOder";
import createOrder from "./App/useCases/order/createOrder";

export const router = Router();

const upload = multer({
 storage :  multer.diskStorage({
  destination(req,file,cb){
    cb(null,path.resolve(__dirname,"..","uploads"))
  },
  filename(req,file,cb){
    cb(null,`${Date.now()}- ${file.originalname}`)
   }
 })

})
// list category
router.get('/categories',listCategories)
// create category
router.post('/categories',createCategory)

  // list products
router.get('/products',listProducts)
    // create Products
router.post('/products',upload.single('image'),createProduct)

    // get products by category
router.get('/categories/:categoryId/products',findProductsByCategory)

  // list Orders
router.get('/orders',listOrders)
 // create Orders
 router.post('/orders',createOrder)

   // change order status
 router.patch('/orders/:orderId',(req,res)=>{
  res.send("Ok")
  })

    // delete/cancel order
 router.delete('/orders/:orderId',(req,res)=>{
  res.send("Ok")
  })

