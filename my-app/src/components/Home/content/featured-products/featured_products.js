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
        <div style={{ width: '800px', margin: 'auto' }}>
            <Carousel variant="dark">
                {dataNew.map((item, index) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            //    style={{height:'400px'}}
                            />
                            <Carousel.Caption>
                                <h5>{item.name}</h5>
                                <p>{item.information}</p>
                                <h3>{item.price}</h3>
                                <Example item={item} />
                                <button  onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default Featured_Product