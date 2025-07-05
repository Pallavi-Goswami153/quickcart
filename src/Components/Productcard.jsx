import { Card, Button } from "react-bootstrap"
import { BsStarFill } from "react-icons/bs";
import { ProductDetails } from "../pages/ProductDetails"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addtoCartItem, addtoCartList, removeFromCartItem, removeFromCartList } from "../redux/CartSlice";
export const ProductCard = (props) => {
    // it will conatin the id of products which are in cart
    const [cartList, setcartList] = useState([]);
    const productId = useSelector((state) => state.cart.cartList)

    //for dispatching actions
    const dispatch = useDispatch();

    const originalPrice = ((props.card.price * 100) / (100 - props.card.discountPercentage)).toFixed(0);
   
    useEffect(() => {
        if (productId.length !== 0) {
            setcartList(productId)
        }
    },[cartList])
    return (
        <>

            <Card 
            key={props.card.id}
                style={{ width: '22rem', height: '25rem' }}
                className="p-2 my-3 shadow-lg"
                onClick={props.fun}>
                <Card.Img 
                variant="top"
                 src={props.card.thumbnail} 
                 style={{ width: "20rem", height: "10rem" }}
                  />
                <Card.Text className="line-ellipsis text-truncate">
                    <b>{props.card.title}|{props.card.description}</b>
                    </Card.Text>
                <Card.Text style={{ color: "gold" }}><BsStarFill size={20} color="gold" />
                    {props.card.rating}</Card.Text>
                <Card.Text className="mb-2">
                    <span><b> ₹{props.card.price}</b></span>
                    <span className="text-muted text-decoration-line-through m-2">
                        ₹{originalPrice}
                    </span>
                    <span className="fw-bold text-success">
                        ({props.card.discountPercentage}% off)
                    </span>
                </Card.Text>
                <Card.Text className="text-muted">
                    FREE Ships: {props.card.shippingInformation}
                </Card.Text>

                <Button variant="warning" onClick={(e) => {
                    e.stopPropagation();
                    if (cartList?.includes(props.card.id)) {
                        dispatch(removeFromCartItem(props.card));
                        dispatch(removeFromCartList(props.card.id))
                        setcartList(productId)
                    }
                    else {
                        dispatch(addtoCartItem(props.card))
                        dispatch(addtoCartList(props.card.id))
                        setcartList(productId)
                    }
                }}
                    style={
                        cartList?.includes(props.card.id) && productId.length!==0
                            ? { backgroundColor: "#f9d7da", color: "#6d161d", border: "1px solid #6d161d" }
                            : {}
                    }
                >
                    {cartList?.includes(props.card.id) && productId.length!==0 ? "Remove from Cart" : "Add to Cart"}
                </Button>

            </Card>

        </>
    )
}