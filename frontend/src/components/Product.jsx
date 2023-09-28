// import {Link} from 'react-router-dom';
import {Card, Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';
import '../styles/Product.css';
import {FaCartPlus} from 'react-icons/fa';
import sign from "../images/wooden-sign-small.png";


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
        setQty();
        return 
    }

    // const imageStyle ={
    //     height: "500px",
    //     backgroundSize: "contain",
    //     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(${sign})`,
    //     backgroundRepeat: 'no-repeat',
    //     margin:'auto'
    // }

    return(
        <>
            <div className="Product shadow p-3 mb-5 bg-white rounded" >
                <img  src={product.image} alt="" onClick={handleShow}/>
                <div id="product-body">
                    <h3 id="product-name">
                        {product.name}
                    </h3>
                    <p id="product-price">
                        ${product.price}
                    </p>
                    <div id="select-qty">
                        {/* <Form.Control as="select" value={Number(qty)} onChange={(e) => handleDropdown(e)}>
                            <option hidden>qty</option>
                            {[1,2,3,4,5].map((x) => <option key={x} value={x}>{x}</option>)}
                        </Form.Control> */}
                        {/* <select value={Number(qty)} onChange={(e) => handleDropdown(e)}>
                            <option hidden># of boxes</option>
                            {[1,2,3,4,5].map((x) => <option key={x} value={x}>{x}</option>)}
                        </select> */}
                        <input type="number" min="0" max="50" value={Number(qty)} onChange={(e) => handleDropdown(e)} placeholder="0"/>
                        {/* <button onClick={addToCartHandler}><FaCartPlus/></button> */}
                        <button onClick={addToCartHandler}>Add</button>
                    </div>

                </div>
            </div>

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