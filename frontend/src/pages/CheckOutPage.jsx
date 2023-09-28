// import Paypal from "../components/Paypal";
// import { PayPalButtons } from "@paypal/react-paypal-js";
import backdrop from '../images/farm-box.png'
import {Link} from 'react-router-dom'
import '../styles/CheckOutPage.css'

export default function CheckOutPage(){

    
    return(
        <div className="CheckOutPage">
            <h1>Check Out Page</h1>
            {/* <PayPalButtons></PayPalButtons> */}
            <div>
                <img src={backdrop} alt="" />
            </div>
            <h2>
                Oh no! This page is under contruction :(
            </h2>

            <button>
                <Link to='/'>back to Home</Link>
            </button>
            
            
        </div>
    )
}