import {Link, Form, redirect, useActionData} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import '../styles/LoginPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function submitLogin({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data)
    // let errors = {msg:''};
    axios.defaults.withCredentials = true;
    try {
        await axios.post('http://localhost:5100/api/auth/login', data);
        toast.success('Login Sucessful')
        // return redirect('/login')
        return redirect('/shop')
        
    } catch (error) {
        toast.error("Username or Password incorrect")
        // errors.msg = 'username or password invalid';
        return errors
    }
}


export default function LoginPage(){
    // const errors = useActionData();
    // console.log(errors)
    return(
        <>
            <Header/>
            <div className="LoginPage">
                <h1>Login Page</h1>
                {/* {errors?.msg && <p>ERRRORRRR</p>} */}
                <Form method="post" id="form">
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type="text" id='username' name='username' required/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name='password' required/>

                    </div>
                    <button type='submit'>Login</button>
                </Form>
                <div id="register-route">
                    <p>Don't have an account?</p>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
            <Footer/>
        </>

    )
}