import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductPage from "./pages/ProductPage";
import CheckOutPage from './pages/CheckOutPage';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import BoxingPage from './pages/BoxingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { submitRegistration } from './pages/RegisterPage';
import { submitLogin } from './pages/LoginPage';
import { preFetchUser} from './pages/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element:<LandingPage/>,
    // loader: preFetchUser,
    errorElement: <ErrorPage/>
  },
  {
    path: '/shop',
    element: <ProductPage/>,
    loader: preFetchUser,
    errorElement: <Error/>
  },
  {
    path: '/check-out',
    element: <CheckOutPage/>,
    errorElement: <Error/>
  },
  {
    path: '/box',
    element: <BoxingPage/>,
    // loader: preFetchUser,
    errorElement: <Error/>
  },
  {
    path: '/register',
    element: <RegisterPage/>,
    errorElement: <Error/>,
    action: submitRegistration
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <Error/>,
    action: submitLogin
  },
  // {
  //   path: '/box',
  //   element: <BoxingPage/>,
  //   errorElement: <Error/>
  // },

])



function App() {
  // const initialOptions = {
  //   clientId: "AUFWM4V2Xb5sTsrRo7wqQJjMSY_cTbsraGVsytxhOTCkmrfalsiwKb9ursnF9VnGRyn05Q7uNlX1OKWV",
  //   currency: "USD",
  //   intent: "CAPTURE",
  // };

  return(
      <RouterProvider router={router}/>
  )
  
}

export default App