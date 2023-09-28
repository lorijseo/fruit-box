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

                            <Link to='/shop'>
                                    Shop
                            </Link>
                            {/* <Link to='/'>
                                    Logout
                            </Link> */}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}
