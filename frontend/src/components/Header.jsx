import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Header.css'

export default function Header(){
    return(
        <header className="Header">
            <Navbar expand='md' collapseOnSelect>
                <Container>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img src={logo} alt="fruity" width="30px"/>
                                fruitbox
                            </Link>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav>

                            <Link to='/box'>
                                    Box
                            </Link>
                            <Link to='/shop'>
                                    Shop
                            </Link>
                            <Link to='/login'>
                                    Login
                            </Link>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

// export default function Header(){
//     return(
//         <header>
//             <Navbar className="bg-body-tertiary" bg='dark' expand='md' collapseOnSelect>
//                 <Container>

//                         <Navbar.Brand>
//                             <img src={logo} alt="fruity" width="30px"/>
//                             FruitBox
//                         </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse>
//                         <Nav>
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#link">Link</Nav.Link>

//                         </Nav>
//                     </Navbar.Collapse>

//                 </Container>
//             </Navbar>
//         </header>
//     )
// }