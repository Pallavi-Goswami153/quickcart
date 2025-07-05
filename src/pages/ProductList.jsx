import { useEffect, useState } from "react";
import { Api } from "../Networking/api";
import { ProductCard } from "../Components/Productcard";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { addData } from "../redux/ProductSlice";
export const ProductList = () => {
    // const [dataItem, setData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    //for store 
    const products = useSelector((state) => state.product.data)// to select the store state 
    const dispatch = useDispatch(); //to dispatch actions 


    //fetching data from api
    const getData = async () => {
        setLoad(true)
        const dataList = await Api(skip);
        if (dataList.success) {
            dispatch(addData(dataList.result))
            setLoad(false)
        }
    }

    //every time when scroll down skip change because of eventListener 
    useEffect(() => {
        if (skip === 0 && products.length > 0) return; //  Stop re-fetching on remount
        getData();
    }, [skip]);


    //eventlister remains active till the time comoponent is mounted so whenver scroll down this will trigger everytime
    const handleScroll = () => {
        //documnet.documentElement.scrollHeight =height of applicayion
        //document.documentElement.scrolltop= pixel value of vertical element
        //window.innerHeight=window height
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setSkip(prev => prev + 10);  //updating the skip to fetch next 10 
        }
    }

    //on first mount and remount only 
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleclick = (id) => {
        navigate(`/ProductDetails/${id}`)
    }
    return (
        <>
            <Row className="px-2" sm={12} md={6} lg={3}>
                {/* Initila Loader */}
                {load && products.length == 0 && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "220px", marginLeft: "400px" }}>
                        <ClipLoader color="yellow" loading={load} size={50} cssOverride={{ margin: "auto 500", display: "block" }} />
                    </div>
                )}
               
                {products.map((item) => (
                    <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center w-70">
                        <ProductCard card={item} fun={() => { handleclick(item.id) }} />
                    </Col>

                ))}
                 
                 {
                    load && products.length > 0 && (
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <ClipLoader color="yellow" loading={true} size={30} />
                        </div>
                    )
                }

            </Row>
        </>
    )
}