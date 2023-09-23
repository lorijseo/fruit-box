import Fruit from "../models/fruitModel.js"

export const createItem = async (req,res)=>{
    try{
        // const {name, price, image} = req.body;
        const newItem = await Fruit.create(req.body)
        res.status(201).json({newItem})
    }
    catch(error){
        res.status(500).json({msg: "couldn't create fruit"})
    }

}

export const getItemById = async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Fruit.findById(id);
    res.status(200).json({foundItem})
}

export const getAllItems = async (req,res)=>{
    const fruits = await Fruit.find({})
    res.status(200).json({fruits})

}

export const deleteItem = async (req,res)=>{
    const {id} = req.params;
    const deleteItem = await Fruit.findByIdAndDelete(id)
    res.status(200).json({msg:"deleted!", job: deleteItem})
}