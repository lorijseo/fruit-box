// import {Link} from 'react-router-dom';
import {Card, Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';

import '../styles/Product.css';


// export default function Product({product}){
//     return(
//         <div className="Product">
//             <Link to={`/product/${product._id}`}>
//                 <img src={product.image} alt="" />
//             </Link>
//             <div>
//                 <Link to={`/product/${product._id}`}>
//                     <div id="product-name">
//                         {product.name}
//                     </div>
//                 </Link>
//                 <div id="product-price">
//                     ${product.price}
//                 </div>
//             </div>
            
//         </div>
//     )
// }

export default function Product({product, addToCart}){
    const [qty, setQty] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDropdown(e){
        setQty(Number(e.target.value))
    }

    function addToCartHandler(){
        if (Number(qty) > 0){
            addToCart({...product, qty})
        }
        setQty("wap");
        return 
    }

    return(
        <>
            <Card className="Product">

                <Card.Img variant="left" src={product.image} alt="" onClick={handleShow}/>

                <Card.Body>

                    <Card.Title id="product-name">
                        {product.name}
                    </Card.Title>

                    <Card.Text id="product-price">
                        ${product.price}
                    </Card.Text>
                    <Form.Control as="select" value={Number(qty)} onChange={(e) => handleDropdown(e)}>
                        <option hidden># of boxes</option>
                        {[1,2,3,4,5].map((x) => <option key={x} value={x}>{x}</option>)}
                    </Form.Control>
                    <Button variant="success" onClick={addToCartHandler}>Add to Cart</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{product.description}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}