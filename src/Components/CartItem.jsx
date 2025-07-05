import { Card,Badge } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LuTrash } from "react-icons/lu";
import { removeFromCartItem,removeFromCartList } from "../redux/CartSlice"
import { useNavigate } from "react-router-dom";
export const CartItem = () => {
    // const id=props.pid
    const cartdata = useSelector(state => state.cart.cartItems)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    return (
        <>
            {console.log(cartdata)}
            {
                cartdata.map((item) => (
                    <Card className="ms-0" style={{ height: 150, width: 800 }} onClick={()=>{  navigate(`/ProductDetails/${item.id}`)}}>
                        <Card.Body className="d-flex">
                            <div>
                                <img src={item.images[0]} alt="img" width={100} />
                            </div>
                               <Card.Title className="d-flex align-items-center justify-content-between w-100 ms-4">
                                        <div>
                                            <p className="fw-bold fs-5 mb-1">{item.title}</p>
                                            <p className="text-muted text-truncate fs-6 mb-1">{item.brand}</p>
                                            <div className="d-flex align-items-center gap-3 mb-1">
                                                <span className="text-danger fs-5">{item.price}</span>
                                                <Badge bg="warning" className="text-dark fs-6 rounded">
                                                     ₹{item.discountPercentage}% OFF
                                                </Badge>
                                            </div>
                                            <p className="text-muted fs-6 mb-0">{item.availabilityStatus}</p>
                                        </div>

                                        <LuTrash
                                            size={30}
                                            style={{
                                                cursor: "pointer",
                                                color: "red",
                                                border: "1px solid red",
                                                borderRadius: "5px",
                                                padding: "5px 0px",
                                            }}
                                            onClick={e => {
                                                e.stopPropagation();
                                                dispatch(removeFromCartList(item.id));
                                                dispatch(removeFromCartItem(item));
                                            }}
                                            title="Remove from cart"
                                        />
                                    </Card.Title>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    )
}