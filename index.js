import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import weatherRouter from './routes/routes.js';

dotenv.config();

const DB_CONNECT = process.env.DB_URL;
const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', weatherRouter);

async function mongoStart() {
	try {
		await mongoose.connect(DB_CONNECT, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		app.listen(PORT, () => {
			console.log(`Server has been started on port ${PORT}... `);
		});
	} catch (error) {
		console.error(error);
	}
}

mongoStart();
