import {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
// import { PayPalButtons} from '@paypal/react-paypal-js';
// import Order from './Order';


export default function Cart({cart, subtotal, removeFromCart}){



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
                <Button variant="light" >
                    <Link to='/check-out'>
                        CheckOut
                    </Link>
                </Button>
            </Card.Body>
            <Card.Body>
                <Card.Title>
                    Checkout
                </Card.Title>
                <ListGroup>
                    <ListGroup.Item>Subtotal: ${subtotal}</ListGroup.Item>
                    <ListGroup.Item>Tax: $10</ListGroup.Item>
                    <ListGroup.Item>Total: ${(Number(subtotal) + 10).toFixed(2)}</ListGroup.Item>
                </ListGroup>
            </Card.Body>

        </Card>


    )
}