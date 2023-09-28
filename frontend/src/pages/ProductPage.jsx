import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../components/Product'
import Cart from '../components/Cart'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/ProductPage.css';
import register from "../images/cash-register.png";
import {toast} from 'react-toastify';
import sprout from "../images/sprout.png";
import {baseUrl} from '../serverURL.js'

import {Button, Offcanvas, Badge} from 'react-bootstrap';

export async function preFetchUser(){
    try {
        const {data} = await axios.get(`${baseUrl}/api/users/current-user`);
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}


export default function ProductPage(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // FIRST TIME: fetch and display fruit data from database 
    useEffect(() =>{
        async function fetchProducts(){
            const {data} = await axios.get(`${baseUrl}/api/fruits`);
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
            toast.success(`Added ${newProduct.name} x ${newProduct.qty} to cart`)
        }
        
    }

    //remove from cart function that pass down to Cart
    function removeFromCart(productId){
        setCart((currCart) => {
            return currCart.filter((product) => product._id !== productId)
        })
    }



    const data = useLoaderData();
    const [username, setUsername] = useState('Guest');

    if (!data.msg && username !== data.user.username){
        setUsername(data.user.username)
    }

    return(
        <>
            <Header/>
            {/* {data ? (<p>hi {username}</p>): (<p>hi Guest</p>)} */}
            <div className="ProductPage">
                <div id="register-container" onClick={handleShow}>
                    <img src={register} alt="" id="register" />
                    <p>
                    Check out</p>
                </div>
                <div id="main">
                    <h1>Shop for Produce</h1>
                </div>
                <div id="products-display">
                    {/* <h2>Back in stock</h2> */}
                    <div id="products">
                        {products.map((p) => <Product product={p} key={p._id} addToCart={addToCart}/>)}
                    </div>
                </div>


                <Offcanvas show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                        <img src={sprout} alt="" width="20px" />
                        <img src={sprout} alt="" width="20px" />
                        <img src={sprout} alt="" width="20px" />
                        <span>Cart</span>
                        <img src={sprout} alt="" width="20px" />
                        <img src={sprout} alt="" width="20px" />
                        <img src={sprout} alt="" width="20px" />
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