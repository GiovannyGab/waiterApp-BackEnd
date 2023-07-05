import express from "express";
import { router } from "./router";
import mongoose from "mongoose";
import path = require("path")

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    app.use('/uploads', express.static(path.resolve(__dirname,"..","uploads")))
    app.use(express.json())
    app.use(router)
    app.listen(3001, () => {
      console.log("servidor iniciou em http://localhost:3001");
    });
    console.log("conectou a o banco de dados");
  })
  .catch(() => console.log("erro ao conectar"));
