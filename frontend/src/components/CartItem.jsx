import {ListGroup, Row, Col, Form, Button} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import '../styles/CartItem.css'

export default function CartItem({product, removeFromCart}){


    const subTotal = Number(product.qty*product.price).toFixed(2)


    return(
        // <ListGroup.Item>{product.name}-{product.qty}-${totalPrice}</ListGroup.Item>  
        <ListGroup.Item className="CartItem">
            <Row>
                <Col xs={4}>
                    {product.name}
                </Col>
                <Col xs={3}>
                    <input type="number" min="1" max="50" value={product.qty} readOnly/>
                    {/* {product.qty} */}
                </Col>
                <Col xs={3}>
                    ${subTotal}
                </Col>
                <Col xs={2}>
                    <button onClick={() => removeFromCart(product._id)}>
                        <FaTrash/>
                    </button>
                </Col>
            </Row>
        </ListGroup.Item>  
    )
}