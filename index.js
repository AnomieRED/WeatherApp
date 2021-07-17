import express from 'express';
import path from 'path';
import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';
import pug from 'pug';

const DB_URL = `mongodb+srv://admin:admin@cluster0.w1n80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT ?? 8080;
const __dirname = path.resolve();
const app = express();


app.set('view engine', 'pug');

app.use(express.static('static'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
   res.render('index')
});

app.post('/', (req, res) => {
   console.log(req.body)
   res.status(200).json('Сервер работает')
})

async function startApp() {
   try {

   } catch (error) {
      console.error(error)
   }
}

app.listen(PORT, () => {
   console.log(`Server has been started on port ${PORT}... `);
});
