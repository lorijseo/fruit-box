import Footer from "../components/Footer";
import Header from "../components/Header";
import yellowBox from "../images/yellow-box.png";
import pinkBox from "../images/pink-box.png";
import sprout from "../images/sprout.png";
import farmBox from "../images/farm-box.png";
import car from "../images/md-car-icon.png";
import box from "../images/box-icon.png";
// import {Shadows} from 'react-bootstrap'

import {Link, useLoaderData, useNavigate} from 'react-router-dom';
import "../styles/LandingPage.css";
import axios from 'axios'



export default function LandingPage(){    
    // const data = useLoaderData();
    return(
        <>
            {/* <Header/> */}
            <div className="LandingPage" >
                {/* {user? <p>hi ${user}</p> : <p>no user</p>} */}
                <div className="title">
                    <div className="sprout">
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                    </div>
                    <h1>Fruitbox</h1>
                    {/* <div className="sprout">
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                        <img src={sprout} alt="" width="100px" />
                    </div> */}
                </div>
                <div className="card-display">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3>SHOP</h3>
                        <img src={farmBox} alt="" width="128px" />
                        <p>for produce</p>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3>CUSTOMIZE</h3>
                        <img src={box} alt="" />
                        <p>your box</p>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3>PICK UP</h3>
                        <img src={car} alt="" />
                        <p>your order</p>
                    </div>
                </div >
                <button id="login-btn">
                    <Link to="/login" > get started</Link>
                </button>
                {/* <div id="login-btn">
                    {data === null ? (
                        <Link to="/login" > get started</Link>
                    ):(
                        <>
                            <p>Welcome back {data.user.username}!</p>
                            <Link to="/shop">Let's get shopping</Link>
                        </>
                    )}
                </div> */}

            </div>
            <Footer/>
        </>

    )
}