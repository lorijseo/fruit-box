import mongoose from 'mongoose';

const fruitSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
},
{timestamps:true}
);

export default mongoose.model('Fruit', fruitSchema);