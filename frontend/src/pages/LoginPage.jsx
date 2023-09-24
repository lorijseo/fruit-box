import {Link, Form, redirect} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

export async function submitLogin({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    try {
        await axios.post('http://localhost:5100/api/auth/login', data);
        toast.success('Registration Sucessful')
        return redirect('/')
    } catch (error) {
        toast.error(error.response.data.errors[0].msg)
        return error
    }
}


export default function LoginPage(){
    return(
        <>
            <h1>Login Page</h1>
            <Form method="post">
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' required/>

                <label htmlFor='password'>Password</label>
                <input type="text" id='password' name='password' required/>

                <button type='submit'>Login</button>
            </Form>
            <div>
                <h3>Don't have an account?</h3>
                <Link to='/register'>Register</Link>
            </div>
        </>
    )
}