import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CheckOutPage from './pages/CheckOutPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/shop',
    element: <HomePage/>,
    errorElement: <Error/>
  },
  {
    path: '/check-out',
    element: <CheckOutPage/>,
    errorElement: <Error/>
  },

])



function App() {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
  
}

export default App