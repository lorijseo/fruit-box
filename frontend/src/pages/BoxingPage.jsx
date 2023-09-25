import '../styles/BoxingPage.css';
import {Link, useLocation} from 'react-router-dom';
import {Card, Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';
import smCarIcon from '../images/sm-car-icon.png';
import mdCarIcon from '../images/md-car-icon.png';
import lgCarIcon from '../images/lg-car-icon.png';
import xlgCarIcon from '../images/xlg-car-icon.png';
import BoxIcon from '../images/box-icon.png';
import BoxAlgorithm from '../components/BoxAlgorithm';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function BoxingPage(){
    let location = useLocation();
    const cart = location.state;
    console.log(cart)

    const [formData, setFormData] = useState({carType:"", boxType:""});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isBoxSelected, setIsBoxSelected] = useState(false);

    function handleChange(e){
        const fieldName = e.target.name;
        const value = e.target.value;

        setFormData( (currData) => {
            currData[fieldName] = value;
            return {...currData}
        });
    }

    function handleFormSubmit(e){
        e.preventDefault()
        setIsFormSubmitted(true)
    }

    function handleBoxSelect(e){
        e.preventDefault()
        setIsBoxSelected(true)
    }


    return(
        <>
        <Header/>
                <div className="BoxingPage">
            
            <Link to='/shop'>back to products</Link>
            <h1>Box Page</h1>

            <div id="display-cars">
                <img src={smCarIcon} alt=''/>
                <img src={mdCarIcon} alt=''/>
                <img src={lgCarIcon} alt=''/>
                <img src={xlgCarIcon} alt=''/>
            </div>

            <form action="#" id="form">
                <div>
                    <label htmlFor='carType'>
                        Select your car type
                    </label>
                    <select id="carType" name="carType" onChange={handleChange}>
                        <option hidden>Select</option>
                        <option value="sm">Small Car</option>
                        <option value="md">Average Car</option>
                        <option value="lg">Large Car</option>
                        <option value="xlg">Extra Large Car</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='boxType'>
                        Select your box preference
                    </label>
                    <select id='boxType' name='boxType' onChange={handleChange}>
                        <option hidden>Select</option>
                        {/* <option value="none">No Preference</option> */}
                        <option value="sm">Small Box</option>
                        <option value="md">Medium Box</option>
                        <option value="lg">Large Box</option>
                    </select>
                </div>
                <button onClick={handleFormSubmit}>Start Packing</button>
            </form>
            <div id="display-box">
                <img src={BoxIcon} alt='' width='100px'/>
                <img src={BoxIcon} alt='' />
                <img src={BoxIcon} alt='' width='150px'/>
            </div>

            {isFormSubmitted && <BoxAlgorithm cart={cart} carType={formData['carType']} boxType={formData['boxType']} handleBoxSelect={handleBoxSelect}/>}
            {isBoxSelected && <Link to='/check-out'>Check Out</Link>}
            
        </div>
        <Footer/>
        </>
    )
}