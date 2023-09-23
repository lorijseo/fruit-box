import axios from 'axios';
import {useState, useEffect} from 'react';
import Product from '../components/Product'
import Cart from '../components/Cart'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/HomePage.css';
import slate from "../images/wooden-slate.jpg";
import register from "../images/cash-register.png";
import backdrop from "../images/botw07.jpg"

import {Button, Offcanvas, Badge} from 'react-bootstrap';

export default function HomePage(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // FIRST TIME: fetch and display fruit data from database 
    useEffect(() =>{
        async function fetchProducts(){
            const {data} = await axios.get('http://localhost:5100/api/fruits');
            const displayFruits = data.fruits
            setProducts(displayFruits);
        }
        fetchProducts();
    }, [])

    //EVERY CART UPDATE: update cart and calculate price
    useEffect(() => {
        const productTotal = cart.reduce((acc, product) => acc+ product.qty * product.price, 0);
        setSubtotal(Number(productTotal).toFixed(2))
    }, [cart]);

    // add to cart function that pass down to Product
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
        
    }

    //remove from cart function that pass down to Cart
    function removeFromCart(productId){
        setCart((currCart) => {
            return currCart.filter((product) => product._id !== productId)
        })
    }

    const imageStyle ={
        // height: "1000px",
        // width: "auto",
        // backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(${backdrop})`

    }

    return(
        <>
            <Header/>
            <div className="HomePage" style={imageStyle}>
                <div id="products-display">
                    <h1>Products</h1>
                    <div id="register-container">
                        <img src={register} alt="" id="register" onClick={handleShow}/>
                    </div>
                    

                    <div id="products">
                        {products.map((p) => <Product product={p} key={p._id} addToCart={addToCart}/>)}
                    </div>
                </div>


                <Offcanvas show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div id="products-cart">
                        <Cart cart={cart} subtotal={subtotal} removeFromCart={removeFromCart}/>
                    </div>
                </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Footer/>
        </>
    )
}