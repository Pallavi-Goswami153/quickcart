import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import { Container,Badge } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const NavBar = () => {
    const cartItems = useSelector(state => state.cart.cartList)
    let counter = cartItems.length
    const [isvisible, setvisible] = useState(false)
    useEffect(() => {
        if (cartItems.length !== 0) {
            setvisible(true)
            counter = cartItems.length
        }
        else {
            setvisible(false)
        }
    }, [cartItems])
    return (
        <>
            <Navbar className="bg-dark text-light w-100" expand="lg" style={{ height: "4rem" }}>
                <Navbar.Brand className="text-light m-3">QuickCart</Navbar.Brand>
                <Nav className="m-2 ">
                    <Nav.Link as={Link} className="text-light" to="/">Home</Nav.Link>
                    <Nav.Link as={Link} className="text-light" to="/cart" >Cart</Nav.Link>
                    {/* <Nav.Link as={Link} className="text-light" to="#">Checkout</Nav.Link> */}
                </Nav>
                <Nav className="ms-auto">
                    {
                        isvisible &&
                        <Nav.Link as={Link} className="text-light" to="/cart">
                            <FaShoppingCart size={30} color="#999" />
                            <Badge bg="primary" pill style={{ transform: "translateY(-5px)", borderRadius: "50%" }}>
                                {counter}
                            </Badge>                    
                        </Nav.Link>
                    }
                </Nav>

            </Navbar>
        </>
    )
}