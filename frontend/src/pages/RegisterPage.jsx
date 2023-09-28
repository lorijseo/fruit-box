import {Link, Form, redirect} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import '../styles/RegistrationPage.css';
import sign from "../images/long-wooden-sign-small.png";
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function submitRegistration({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    try {
        await axios.post('http://localhost:5100/api/auth/register', data);
        toast.success('Registration Sucessful')
        return redirect('/login')
    } catch (error) {
        toast.error(error.response.data.errors[0].msg)
        return error
    }
}

export default function RegisterPage(){

    const [formData, setFormData] = useState({username:"", password:"", email:"", location: "" });

    function handleChange(e){
        const fieldName = e.target.name;
        const value = e.target.value;

        setFormData( (currData) => {
            currData[fieldName] = value;
            return {...currData}
        });
    }

    // async function handleSubmit(e){
    //     e.preventDefault();
    //     const data = await axios.post('http://localhost:5100/api/auth/register', {formData});
    //     console.log(data);
    //     console.log(formData);
    // }

    // const imageStyle ={
    //     height: "1000px",
    //     backgroundSize: "contain",
    //     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),url(${sign})`,
    //     // backgroundRepeat: 'no-repeat',
    //     margin:'auto'

    // }
    

    return(
        <>
            <Header/>
            <div className="RegistrationPage">
                <h1>Registration Page</h1>
                <Form method='post' id="form">
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} required/>
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name='password' value={formData.password} onChange={handleChange}required />
                    </div>

                    <div>
                        <label htmlFor='email'>email</label>
                        <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='location'>City</label>
                        <input type="text" id='location' name='location' value={formData.location} onChange={handleChange} required/>
                    </div>
                    <button type='submit'>Register</button>
                </Form>
                <div id="login-route">
                    <p>Already have an acount?</p>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
            <Footer/>
        </>

    )
}