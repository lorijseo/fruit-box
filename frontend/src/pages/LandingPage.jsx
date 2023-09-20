import Footer from "../components/Footer";
import Header from "../components/Header";
import backdrop from "../images/botw01.jpg";
// import "./LandingPage.css"

export default function LandingPage(){
    const imageStyle ={
        height: "1000px",
        width: "auto",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url(${backdrop})`,
        linearGradient: "rbg(255,255,255)"

    }
    return(
        <div className="LandingPage">
            <Header/>
            {/* <img src={backdrop} alt="" /> */}
            <div class="image" style={imageStyle}>
                <h1>Landing</h1>
            </div>
            <Footer/>
        </div>
    )
}