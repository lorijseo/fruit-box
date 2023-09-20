import {ListGroup, Row, Col, Form, Button} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa'

export default function CartItem({product, removeFromCart}){


    const subTotal = Number(product.qty*product.price).toFixed(2)


    return(
        // <ListGroup.Item>{product.name}-{product.qty}-${totalPrice}</ListGroup.Item>  
        <ListGroup.Item>
            <Row>
                <Col>
                    {product.name}
                </Col>
                <Col>
                    <Form.Control as="select" value={product.qty} onChange={() => {}}>
                        <option hidden># of boxes</option>
                        {[1,2,3,4,5].map((x) => <option key={x} value={Number(x)}>{x}</option>)}
                    </Form.Control>
                </Col>
                <Col>
                    ${subTotal}
                </Col>
                <Col>
                    <Button type="button" variant="light" onClick={() => removeFromCart(product._id)}>
                        <FaTrash/>
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>  
    )
}