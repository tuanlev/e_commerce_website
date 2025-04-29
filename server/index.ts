import express, { json, Request, Response } from "express";

import {createCollection} from "./controllers/collection";
import { errorHandling } from "./middlewares/errorHandling";
import connectDB from "./utils/mongooseExtension";
import Color from "./models/color";
import cors from 'cors';

import colorRouter from "./routes/color";
import collectionRouter from "./routes/collection";
import path from "path";
import SizeRouter from "./routes/size";
import catagoryRouter from "./routes/catagory";
import authRouter from "./routes/auth";
const app = express();
const bodyParser = require('body-parser');
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/asset', express.static(path.join(__dirname, 'asset')));
app.get('/',(req:Request,res:Response) => {
 console.log('hello')
 res.send('hi')
})
app.use(catagoryRouter)
app.use(SizeRouter)
app.use(collectionRouter);
app.use(colorRouter)
app.use(authRouter)
app.use(errorHandling)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})