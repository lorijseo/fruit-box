import 'express-async-errors'
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
import {v4 as uuid} from 'uuid';
import mongoose from 'mongoose';
import Fruit from './models/fruitModel.js';
// import fruits from './fruits.js'
import cors from 'cors'

// let fruits =[
//     {id: uuid(), item: "carrot", price: 5},
//     {id: uuid(), item: "mushy", price: 15},
//     {id: uuid(), item: "toot", price: 7},
// ]

//setup middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors())
app.get('/', (req,res) =>{
    res.send('Toasting toast')
})


app.post('/', (req,res)=>{
    res.json({message:"got the json  message", data:req.body})
})


// GET ALL FRUITS
app.get('/api/fruits', async (req,res)=>{
    const fruits = await Fruit.find({})
    res.status(200).json({fruits})

})

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

app.post('/api/fruits', async (req,res)=>{
    try{
        // const {item, price} = req.body;
        const newItem = await Fruit.create(req.body)
        res.status(201).json({newItem})
    }
    catch(error){
        res.status(500).json({msg: "couldn't create fruit"})
    }

})


// GET A FRUIT BY ID
app.get('/api/fruits/:id', async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Fruit.findById(id);
    res.status(200).json({foundItem})
    // const fruit = fruits.find((fruit) => fruit.id === id);
    // if (fruit){
    //     res.status(200).json({fruit})
    // }
    // else{
    //     res.status(404).json({msg:"cannot find fruit"})
    //     return
    // }
})

// DELETE A FRUIT BY ID

app.delete('/api/fruits/:id', async (req,res)=>{
    const {id} = req.params;
    const deleteItem = await Fruit.findByIdAndDelete(id)
    res.status(200).json({msg:"deleted!", job: deleteItem})
})


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