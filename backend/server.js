import 'express-async-errors'
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
import {v4 as uuid} from 'uuid';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Fruit from './models/fruitModel.js';
// import fruits from './fruits.js'
import cors from 'cors';
// import * as paypal from "./pyapal-api.js";
import stripe from 'stripe';
// let Stripe = stripe(process.env.STRIPE_SECRET_KEY)
// custom imports
import itemRouter from './routes/itemRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js'





//setup middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(cookieParser())
app.use(express.json())
// app.use(cors())
app.use(cors({credentials: true, origin: process.env.CLIENT_URL}));




app.use('/api/fruits', itemRouter);
// app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use('/api/users', userRouter)



app.get('/', (req,res) => {
    res.json("vercel deplyed")
})

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, ()=>{
        console.log(`listening on ${port}...`)
    })
}
catch(error){
    console.log(error);
    process.exit(1)
}

