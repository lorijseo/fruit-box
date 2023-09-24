import {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import CheckOutOrder from './CheckOutOrder';
import {Link} from 'react-router-dom';
// import { PayPalButtons} from '@paypal/react-paypal-js';
// import Order from './Order';
import axios from 'axios'



export default function Cart({cart, subtotal, removeFromCart}){

    // async function createOrder(){
    //     fetch("http://localhost:5100/create-checkout-session", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     items: [
    //         { id: 1, quantity: 3 },
    //         { id: 2, quantity: 1 },
    //     ],
    //     }),
    //     })
    //     .then(res => {
    //     if (res.ok) return res.json()
    //     return res.json().then(json => Promise.reject(json))
    //     })
    //     .then(({ url }) => {
    //         console.log(url)
    //     // window.location = url
    //     })
    //     .catch(e => {
    //     console.error(`this is ${e.error}`)
    //     })
    // }
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
      };

    async function createOrder(){
        axios.post("http://localhost:5100/create-checkout-session",{
            items: [
                        { id: 1, quantity: 3 },
                        { id: 2, quantity: 1 },
                    ]
        }, axiosConfig)
        .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            console.log(url)
        // window.location = url
        })
        .catch(e => {
        console.error(`this is ${e.error}`)})
        
    }


    return(
        <Card>
            <Card.Body>
                <Card.Title>Cart</Card.Title>
                <ListGroup>
                    {cart.length === 0 ? <div>Empty</div>: ''}
                    {cart.map((product) => <CartItem key={product._id} product={product}  removeFromCart={removeFromCart}/>)}
                </ListGroup>
            </Card.Body>
            <Card.Body>
                <Card.Title>
                    SubTotal: ${subtotal} 
                </Card.Title>
                {/* <Button variant="light" onClick={createOrder}>
                    <Link to='/check-out'>
                        CheckOut
                    </Link>
                </Button> */}
            </Card.Body>
            
            <CheckOutOrder cart={cart} subtotal={subtotal}/>
        </Card>


    )
}