import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import Notify from "../../notify/notify";

import ConnenctionCam from './connectionCam'

import Example from "../flyCam/JSX/Modal";




const DetailCam = () => {

    const [number, setNumber] = useState('1')
    const [checkNotify, setCheckNotify] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(state => state.detailItemCam)

    useEffect(() => {

        dispatch(
            {
                type: "GET_ITEM_CAM",
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
        setCheckNotify(true)
        setTimeout(() => {
            setCheckNotify(false)
        }, 2000);


    }
    return (
        <>
            <div className="detailItemFly">
                {checkNotify && <Notify />}
                <div className="detailItemFly-img">
                    <img src={data.img} alt="abc" />
                </div>
                <div className="detailItemFly-news">
                    <h1> Tên sản Phẩm:{data.name}</h1><br />
                    <h3> Giá Sản Phẩm:{data.price} VND</h3>
                    <p>Thông tin Sản Phẩm:{data.information}</p>
                    <span>Số Lương  mua <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></span><br /><br /><br />
                    <button onClick={() => handleClickDetail(data)}>Thêm Vào Giỏ Hàng</button>
                    <Example item={data} />
                </div>

            </div>
            <div className="detailItemFly-mobile">
                {checkNotify && <Notify />}
                <h1> Tên sản Phẩm:{data.name}</h1><br />
                <img src={data.img} alt="abc" />


                <h3> Giá Sản Phẩm:{data.price} VND</h3>
                <p>Thông tin Sản Phẩm:{data.information}</p>
                <span>Số Lương  mua <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></span><br /><br /><br />
                <button onClick={() => handleClickDetail(data)}>Thêm Vào Giỏ Hàng</button>
                <Example item={data} />


            </div>
            <h3> Sản Phẩm Liên Quan</h3>
            <ConnenctionCam />

        </>
    )
}
export default DetailCam