import {Link, Form, redirect} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

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

    

    return(
        <>
            <h1>Registration Page</h1>
            <Form method='post'>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} required/>

                <label htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' value={formData.password} onChange={handleChange}required />

                <label htmlFor='email'>email</label>
                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>

                <label htmlFor='location'>City</label>
                <input type="text" id='location' name='location' value={formData.location} onChange={handleChange} required/>

                <button type='submit'>Register</button>
            </Form>
            <div>
                <h3>Already have an acount?</h3>
                <Link to='/login'>login</Link>
            </div>
        </>
    )
}