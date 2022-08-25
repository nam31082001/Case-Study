import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Example from '../../../shop/flyCam/JSX/Modal';
const Featured_Product = () => {
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state.data)
    console.log("check", dataNew)
    useEffect(() => {
        dispatch(
            {
                type: "GET"
            }
        )
    }, [])
    const handleAddFly = (job) => {
        let data = {
            id: job.id,
            name: job.name,
            price: job.price,
            number: 1
        }
        dispatch(
            {
                type: "POST_API_CART",
                payload: data
            }
        )
    }



    return (
        <>
            <div className="side-product-desktop">
                <Carousel variant="dark">
                    {dataNew.map((item, index) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-flex w-99"
                                    src={item.img}
                                    alt="First slide"
                                />

                                <Carousel.Caption>
                                    <h5 >{item.name}</h5>
                                    <h3>{item.price}</h3>
                                    <Example item={item} />
                                    <button onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}
export default Featured_Product