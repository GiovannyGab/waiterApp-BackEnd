import { Router } from "express";

export const router = Router();

// list category
router.get('/categories',(req,res)=>{
res.send("Ok")
})
// create category
router.post('/categories',(req,res)=>{
  const response = req.body
  res.send("Ok")
  })

  // list products
router.get('/products',(req,res)=>{
  res.send("Ok")
  })
    // create Products
router.post('/products',(req,res)=>{
  res.send("Ok")
  })

    // get products by category
router.get('/categories/:categoryId/products',(req,res)=>{
  res.send("Ok")
  })

  // list Orders
router.get('/order',(req,res)=>{
  res.send("Ok")
  })
 // create Orders
 router.post('/orders',(req,res)=>{
  res.send("Ok")
  })

   // change order status
 router.patch('/orders/:orderId',(req,res)=>{
  res.send("Ok")
  })

    // delete/cancel order
 router.delete('/orders/:orderId',(req,res)=>{
  res.send("Ok")
  })

