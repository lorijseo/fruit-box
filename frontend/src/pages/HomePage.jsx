import axios from 'axios';
import {useState, useEffect} from 'react';
import products from '../fruits.js'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/HomePage.css'

export default function HomePage(){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    function addToCart(newProduct){
        const productInCart = cart.find((product) => product._id === newProduct._id);
        if (productInCart){
            setCart((currCart) => {
                return currCart.map((product) => {
                    if (product._id === newProduct._id){
                        const newQty = Number(product.qty + newProduct.qty)
                        return {...product, qty:newQty}
                    }
                    return product
                })
            })
        }
        else{
            setCart((currCart) => {return [...currCart, newProduct]});
        }
        

        console.log(cart)
    }

    useEffect(() =>{
        async function fetchProducts(){
            const {data} = await axios.get('http://localhost:5100/api/fruits');
            const displayFruits = data.fruits
            setProducts(displayFruits);
        }
        fetchProducts();
    }, [])
    console.log(products)

    useEffect(() => {
        const productTotal = cart.reduce((acc, product) => acc+ product.qty * product.price, 0);
        setSubtotal(Number(productTotal).toFixed(2))
    }, [cart]);

    function removeFromCart(productId){
        setCart((currCart) => {
            return currCart.filter((product) => product._id !== productId)
        })
    }

    return(
        <>
            <Header/>
            <div className="HomePage">
                <div id="products-display">
                    <h1>Products</h1>
                    <div id="products">
                        {products.map((p) => <Product product={p} key={p._id} addToCart={addToCart}/>)}
                    </div>

                    
                </div>
                <div id="products-cart">
                    <Cart cart={cart} subtotal={subtotal} removeFromCart={removeFromCart}/>
                </div>
            </div>
            <Footer/>
        </>


    )
}