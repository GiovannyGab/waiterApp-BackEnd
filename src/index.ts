import express from "express";

import mongoose from "mongoose";

const app = express();
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    app.listen(3001, () => {
      console.log("servidor iniciou em http//localhost:3001");
    });
    console.log("conectou a o banco de dados");
  })
  .catch(() => console.log("erro ao conectar"));
