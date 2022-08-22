import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import './Detail.css'
import Connenction from "../connection/connection";
import Example from "../Modal";




const Detail = () => {
    
    const [number, setNumber] = useState('1')
    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(state => state.detailItem)

    useEffect(() => {

        dispatch(
            {
                type: "GET_ITEM_FLY",
                payload: id

            }
        )
    }, [])

    const handleClickDetail = (job) => {
        let data = {
            id: job.id,
            name: job.name,
            price: job.price,
            number: number
        }
        dispatch(
            {
                type: "POST_API_CART_DETAIL",
                payload: data
            }
        )
       
      
    }
    return (
        <>
            <div className="detailItemFly">

                <div className="detailItemFly-img">
                    <img src={data.img} alt="abc" />
                </div>
                <div className="detailItemFly-news">
                    <h1> Tên sản Phẩm:{data.name}</h1><br />
                    <h3> Giá Sản Phẩm:{data.price} VND</h3>
                    <p>Thông tin Sản Phẩm:{data.information}</p>
                    <span>Số Lương  mua <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></span><br /><br /><br />
                    <button onClick={() => handleClickDetail(data)}>Thêm Vào Giỏ Hàng</button>
                    <Example item={data}/>
                </div>

            </div>
            <h3> Sản Phẩm Liên Quan</h3>
            <Connenction />
        </>
    )
}
export default Detail