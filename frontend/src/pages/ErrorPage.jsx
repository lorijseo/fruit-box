import {Link, useRouteError} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ErrorPage(){
    const errorMsg = useRouteError();
    console.log(errorMsg)
    
    const styles={
        textAlign: "center",
        margin: "5% 0 20% 0"
    }

    return(
        <>
            <Header/>
            <div style={styles}>
                <h1>Error Page</h1>
                {errorMsg ? (
                    <p>{errorMsg.error.message}</p>
                ):(
                    <p>Something went wrong...</p>
                )}
                <button>
                    <Link to='/'>back to Home</Link>
                </button>
                
            </div>
            <Footer/>
        </>

    )
}