import {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import CheckOutOrder from './CheckOutOrder';
import {Link} from 'react-router-dom';
// import { PayPalButtons} from '@paypal/react-paypal-js';
// import Order from './Order';
import axios from 'axios'



export default function Cart({cart, subtotal, removeFromCart}){


    return(
        <Card>
            <Card.Body>
                {/* <Card.Title>Cart</Card.Title> */}
                <ListGroup>
                    {cart.length === 0 ? <div>Cart is Empty</div>: ''}
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