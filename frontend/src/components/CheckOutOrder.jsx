import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import {Card, ListGroup, Button} from 'react-bootstrap';

export default function CheckOutOrder({cart, subtotal}){
    return(
        <div>
            <Card.Body>
                <Card.Title>
                    {/* <Link to="/check-out">Check out</Link> */}
                    <Link to="/box">Ready to start packing</Link>
                    <Link to="/box" 
                    state={cart}> go to box
                    </Link>
                </Card.Title>
                <ListGroup>
                    <ListGroup.Item>Subtotal: ${subtotal}</ListGroup.Item>
                    <ListGroup.Item>Tax: $10</ListGroup.Item>
                    <ListGroup.Item>Total: ${(Number(subtotal) + 10).toFixed(2)}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </div>
    )
}