const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts.js");

/*import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";*/

const app = express();

app.use("/posts", postRoutes); // toutes les routes vont commencer par /posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = // créer une sécurité pour cacher le pseudo et mdp
  "mongodb+srv://WaynePlanchenault:WayneADMIN@freecluster.nz1xu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// https://www.mongodb.com/cloud/atlas   (heberge la DB sur leur cloud)
