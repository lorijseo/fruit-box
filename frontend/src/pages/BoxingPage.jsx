import '../styles/BoxingPage.css';
import {Link} from 'react-router-dom';
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

    const [formData, setFormData] = useState({carType:"", boxType:""});

    function handleChange(e){
        const fieldName = e.target.name;
        const value = e.target.value;

        setFormData( (currData) => {
            currData[fieldName] = value;
            return {...currData}
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(displayPreferences[formData['carType']], displayPreferences[formData['boxType']]);
    }

    // <img src={smCarIcon} alt="" />

    const displayPreferences = {
        "smCar" : "<img src={smCarIcon} alt=''/>",
        "mdCar" : "m car",
        "lgCar" : "lg car",
        "smBox" : "small box",
        "mdBox" : "m box",
        "lgBox" : "l box",
        "noPrefBox" : "no pref box"
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
            <div id="display-box">
                <img src={BoxIcon} alt='' width='100px'/>
                <img src={BoxIcon} alt='' />
                <img src={BoxIcon} alt='' width='150px'/>
            </div>

            <form action="#" id="form">
                <div>
                    <label htmlFor='carType'>
                        Select your car type
                    </label>
                    <select id="carType" name="carType" onChange={handleChange}>
                        <option hidden>Select</option>
                        <option value="smCar">Small Car</option>
                        <option value="mdCar">Average Car</option>
                        <option value="lgCar">Large Car</option>
                        <option value="xlgCar">Extra Large Car</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='boxType'>
                        Select your box preference
                    </label>
                    <select id='boxType' name='boxType' onChange={handleChange}>
                        <option hidden>Select</option>
                        <option value="noPrefBox">No Preference</option>
                        <option value="smBox">Small Box</option>
                        <option value="mdBox">Medium Box</option>
                        <option value="lgBox">Large Box</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Start Packing</button>
            </form>

            <div id="box-algorithm">
                <h3>Calculating your packages...</h3>
            </div>
            
        </div>
        <Footer/>
        </>



    )
}