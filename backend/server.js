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
let Stripe = stripe(process.env.STRIPE_SECRET_KEY)
// custom imports
import itemRouter from './routes/itemRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js'

import {body, validationResult} from 'express-validator'
import {validateTest} from './middleware/validateMiddleware.js'


// let fruits =[
//     {id: uuid(), item: "carrot", price: 5},
//     {id: uuid(), item: "mushy", price: 15},
//     {id: uuid(), item: "toot", price: 7},
// ]

//setup middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(cookieParser())
app.use(express.json())
app.use(cors())






// with express
// app.get('/api/fruits', async (req,res)=>{
//     res.json({fruits})
// })

// CREATE FRUITS
// app.post('/api/fruits', (req,res)=>{
//     const {item, price} = req.body;
//     if (!item || !price){
//         return res.status(400).json({msg:"missing info..."})
//     }
//     const id = uuid();
//     const newItem = {id, item, price};
//     fruits.push(newItem);
//     //only send new item to check
//     res.status(201).json({newItem})
// })

// // GET ALL FRUITS
// app.get('/api/fruits', )

// // Create fruit
// app.post('/api/fruits', )


// // GET A FRUIT BY ID
// app.get('/api/fruits/:id', async (req,res)=>{
//     const {id} = req.params;
//     const foundItem = await Fruit.findById(id);
//     res.status(200).json({foundItem})
// })

// // DELETE A FRUIT BY ID

// app.delete('/api/fruits/:id', )

app.use('/api/fruits', itemRouter);
// app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use('/api/users', userRouter)


// // create order
// app.post("/api/orders", async (req, res) => {
//     try {
//       const order = await paypal.createOrder(req.body);
//       res.json(order);
//       console.log(order)
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
  
// // capture payment
// app.post("/api/orders/:orderID/capture", async (req, res) => {
// const { orderID } = req.params;
// try {
//     const captureData = await paypal.capturePayment(orderID);
//     res.json(captureData);
// } catch (err) {
//     res.status(500).send(err.message);
// }
// });

// const storeItems = new Map([
//     [1, { priceInCents: 10000, name: "Learn React Today" }],
//     [2, { priceInCents: 20000, name: "Learn CSS Today" }],
//   ])

// app.post('/create-checkout-session', async (req,res) => {
//     try{
//         const session = await Stripe.Checkout.session.create({
//             payment_method_types:['card'],
//             mode: 'payment',
//             line_items : req.body.items.map((item)=> {
//                 const storeItem = storeItems.get(item.id);
//                 return {
//                     price_data: {
//                         currency: 'USD',
//                         product_data: {
//                             name: storeItem.name
//                         },
//                         unit_amount: storeItem.priceInCents
//                     },
//                     quantity: item.quantity
//                 }
//             }),
//             success_url:`${process.env.CLIENT_URL}`,
//             cancel_url: `${process.env.CLIENT_URL}/check-out`
        
//         })
//         res.json({url:session.url})
//     }
//     catch(error){
//         res.status(500).json({error: error.message})
//     }
// })



const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, ()=>{
        console.log(`listening on ${port}...`)
    })
}
catch(error){
    console.log(error);
    process.exit(1)
}



// app.listen(port, () =>{
//     console.log(`listening on ${port}...`)
// })