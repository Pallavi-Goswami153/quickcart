import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import {Card, CardImg} from "react-bootstrap";
import { Carousel, Badge, ListGroup } from "react-bootstrap";

import { Row,Col,Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
export const ProductDetails=()=>{
    const {id}=useParams();
    const [data,setData]=useState([]);
        const [load, setload] = useState(true)

    useEffect(()=>{
        const getDetails=async()=>{
            const response=await fetch(`https://dummyjson.com/products/${id}`)
            const details=await response.json();
            if(details){
                setData([details])
                setload(false)
            }
            else
            {
                console.log("Error occured");
            }
      
        }
        getDetails();
    },[])
       
    return(
        <>
       {console.log("hiiiii")}
            {console.log(id)}
            {console.log(data)}
            {/* {console.log(data.reviews)} */}
            {/* {console.log(data.price)} */}
            {/* {console.log(data.images)} */}
            <Row >
                {load?(
                    <ClipLoader
                        className="d-flex justify-content-md-center"
                        color="yellow"
                        loading={load}
                       
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                }}
                size={50}
            />

                ):(
                    data.map((i) => (
                        <Container >
                            <Row sm={12} md={6} lg={2}>
                                 <Col md={6} className="d-flex">
                        <div className="w-100 bg-white rounded p-3 d-flex align-items-center justify-content-center">
                            {i.images.length > 1 ? (
                                <Carousel variant="dark" className="w-100">
                                    {i.images.map((imgUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <img
                                                    className="d-block"
                                                    src={imgUrl}
                                                    alt={`Slide ${index + 1}`}
                                                    style={{
                                                        maxHeight: "70vh",
                                                        objectFit: "contain",
                                                        width: "100%",
                                                    }}
                                                />
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : (
                                <img
                                    src={i.images[0]}
                                    alt="product"
                                    style={{
                                        maxHeight: "70vh",
                                        objectFit: "contain",
                                        width: "100%",
                                    }}
                                />
                            )}
                        </div>
                    </Col>

                               <Col md={6} className="d-flex">
                        <div className="w-100 d-flex flex-column justify-content-between">
                            <div>
                                <h2 className="fw-bold">{i.title}</h2>
                                <h5 className="text-muted" style={{ fontSize: "1rem" }}>
                                    {i.brand}
                                </h5>
                                <div className="mb-2">
                                    <Badge bg="success" className="me-2">
                                        {i.availabilityStatus}
                                    </Badge>
                                    <Badge bg="info">{i.category}</Badge>
                                </div>

                                <p>{i.description}</p>

                                <div className="price-block mb-3">
                                    <span className="text-primary fs-5 fw-bold">${i.price}</span>
                                    <span className="text-muted text-decoration-line-through ms-2 fw-bold fs-5">
                                        ${(i.price / (1 - i.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <Badge bg="danger" className="ms-2 fs-6 fw-bold">
                                        {(i.discountPercentage || 0).toFixed(2)}% OFF
                                    </Badge>
                                </div>

                                <ListGroup className="w-100" style={{ fontSize: "0.8rem" }}>
                                    <ListGroup.Item><strong>Rating:</strong> ⭐ {i.rating}</ListGroup.Item>
                                    <ListGroup.Item><strong>Stock:</strong> {i.stock} items</ListGroup.Item>
                                    <ListGroup.Item><strong>Dimensions:</strong> {i.dimensions.width}W × {i.dimensions.height}H × {i.dimensions.depth}D</ListGroup.Item>
                                    <ListGroup.Item><strong>Weight:</strong> {i.weight} kg</ListGroup.Item>
                                    <ListGroup.Item><strong>Shipping:</strong> {i.shippingInformation}</ListGroup.Item>
                                    <ListGroup.Item><strong>Warranty:</strong> {i.warrantyInformation}</ListGroup.Item>
                                    <ListGroup.Item><strong>Return Policy:</strong> {i.returnPolicy}</ListGroup.Item>
                                    <ListGroup.Item><strong>SKU:</strong> {i.sku}</ListGroup.Item>
                                    <ListGroup.Item><strong>Tags:</strong> {i.tags.map((tag, index) => (
                                        <Badge bg="secondary" className="mx-1" key={index}>
                                            {tag}
                                        </Badge>
                                    ))}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                            </Row>
                            <Row className="m-3"  style={{backgroundColor:"pale"}}>
                                <h2 className="mb-4">🗣️ Customer Reviews</h2>
                    {i.reviews.map((it, idx) => (
                        <Col md={12} lg={12} key={idx}>
                            <Card className="mb-4 shadow-sm">
                                <Card.Body  style={{backgroundColor:"#f5f5f5"}}>
                                    <Card.Title className="d-flex justify-content-between">
                                        <span>⭐ {it.rating} | {it.reviewerName}</span>
                                    </Card.Title>
                                    <Card.Text>{it.comment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                            </Row>
                        </Container>
                    ))
                )
                }


            </Row>
        </>
    )
}