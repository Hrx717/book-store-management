//dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
//moduels
import connectToDB from './connect.js';
import {Book} from './models/bookStore.js';
import booksRoute from './routes/booksRoute.js'

const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
dotenv.config();
app.use(express.json()) //parsing req body
app.use(cors());

//book route
app.use('/books', booksRoute);

//db connection
connectToDB(process.env.DATABASE_URL)
.then(() => {
    console.log("DB Connection Successful");
    app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
})
.catch((err) => console.log("DB Connection Failed", err));
