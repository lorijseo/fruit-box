import Footer from "../components/Footer";
import Header from "../components/Header";
import backdrop from "../images/botw01.jpg";
import yellowBox from "../images/yellow-box.png"
import {Link} from 'react-router-dom';
import "../styles/LandingPage.css"

export default function LandingPage(){
    const imageStyle ={
        height: "1000px",
        width: "auto",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url(${backdrop})`,
    }
    
    return(
        <>
        <div className="LandingPage">
            <div style={imageStyle}>
                <h1>Fruitbox</h1>
                <Link to="/shop">
                    <div id="dashboard">
                        <img src={yellowBox} width="200px"/>
                        <h3>Fruits</h3>
                    </div>
                </Link>
                
            </div>
            
        </div>
        <Footer/>
        </>

    )
}