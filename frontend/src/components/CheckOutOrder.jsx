import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import {Card, ListGroup, Button} from 'react-bootstrap';

export default function CheckOutOrder({cart, subtotal}){
    return(
        <div>
            <Card.Body>
                <Card.Title>
                    Summary
                </Card.Title>
                <ListGroup>
                    <ListGroup.Item>Subtotal: ${subtotal}</ListGroup.Item>
                    <ListGroup.Item>Tax: $10</ListGroup.Item>
                    <ListGroup.Item>Total: ${(Number(subtotal) + 10).toFixed(2)}</ListGroup.Item>
                </ListGroup>
                <button>
                    <Link to="/box" state={cart}> Check out</Link>
                </button>
            </Card.Body>
        </div>
    )
}