import express from 'express';
import mongoose from 'mongoose';
import weatherRouter from './routes/routes.js';
import { MongoClient } from 'mongodb';
import pug from 'pug';


const DB_URL = `mongodb+srv://admin:admin@cluster0.w1n80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT ?? 8080;
const app = express();

//Use View Engine
app.set('view engine', 'pug');

//Middleware routes
app.use(express.static('static'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', weatherRouter);


async function startApp() {
   try {
      await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
      app.listen(PORT, () => {
         console.log(`Server has been started on port ${PORT}... `);
      });
   } catch (error) {
      console.error(error);
   }
}

startApp();
