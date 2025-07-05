import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../Components/CartItem";
import { Row, Col, Container,Badge,Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export const Cart = () => {
    const [isdata, setisData] = useState(true);
    const productsid = useSelector((state) => state.cart.cartList);
    const CartData=useSelector((state)=>state.cart.CartItems)
    useEffect(() => {
            setisData(productsid.length !== 0);
                // console.log(CartData)
            }, [productsid]);
            
            // let totalPrice = (CartData.reduce((sum, product) => sum + product.price, 0)).toFixed(2);
    return (
        <>
            <h2>Shopping Cart</h2>

            {
                isdata ? (
                    <Container fluid className="mt-3">
                        <Row className="w-100" md={6} lg={2}>
                            <Col>
                            {
                                <CartItem />
                            }
                            </Col>
                            <Col md={4}>
                        {/* <Card className="mb-4 shadow-sm">
                            <Card.Body>
                                <Card.Title className="d-flex ">
                                    <span>Subtotal ({CartData.length} items): </span>
                                 let totalPrice = (CartData.reduce((sum, product) => sum + product.price, 0)).toFixed(2);
                                    <span className='text-success px-2 fs-5 fw-bold'> ${totalPrice}</span>
                                </Card.Title>
                                <Card.Text><Button variant='warning' className='w-100 mt-3 fs-6 fw-bold'>Proceed to Checkout</Button></Card.Text>
                            </Card.Body>
                            {/* <button onClick={() => { totalPrice -= 5 }}>butt</button> */}
                               {/* </Card> */} 
                    </Col>
                        </Row>
                    </Container>
                ) : (
                    <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
                        <div className="text-center">
                            <FaShoppingCart size={70} color="#999" />
                            <p className="mt-3 text-muted fs-4">Your cart is empty</p>
                        </div>
                    </Container>
                )
            }
        </>
    );
};
