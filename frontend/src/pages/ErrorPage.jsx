import {Link, useRouteError} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ErrorPage(){
    const errorMsg = useRouteError();
    console.log(errorMsg)
    
    return(
        <>
            <Header/>
            <h1>Errawr</h1>
            <Link to='/'>back to Home</Link>
            <Footer/>
        </>
    )
}