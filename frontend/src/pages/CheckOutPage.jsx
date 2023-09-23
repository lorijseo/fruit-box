// import Paypal from "../components/Paypal";
// import { PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckOutPage(){

    const imageStyle ={
        // height: "1000px",
        // width: "auto",
        // backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(${backdrop})`

    }
    
    return(
        <>
            <h1>WOOT check out</h1>
            {/* <PayPalButtons></PayPalButtons> */}
            
        </>
    )
}