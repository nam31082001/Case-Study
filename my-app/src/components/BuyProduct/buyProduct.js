
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Address from '../address/Address'
import './buyProduct.css'
import {useHistory} from 'react-router-dom'
import { deleteAddress, deleteProductBuy,historyBuy, putAddress } from '../../redux/sctons'

const BuyProduct = () => {
    const [address, setAddress] = useState(false)
    const data = useSelector(state => state.cartBuy)
    const addressData = useSelector(state => state.address)
    const history=useHistory()
    const dispatch=useDispatch()

    let total = 0
    data.map(item => {
        total = parseInt(item.price) * parseInt(item.number) + total
    })
    let count = 0
    addressData.map(item => {
        if (item.check === true) {
            count = count + 1
        }
    })

    const handleCheckBox = (job) => {
        dispatch(putAddress(job))
    }
    const handelDelete = (job) => {
        dispatch(deleteAddress(job))
    }
    console.log(count)
    const handleBuyProduct = () => {
        if (count === 1) {
            
            alert("thàng công")
            history.push("/Information")
            dispatch(historyBuy(data))
            dispatch(deleteProductBuy())
            
           

        } else if (count > 1) {
            alert("mỗi lần đặt chỉ dược 1 địa chỉ")
        } else {
            alert('bạn chư chọn địa chỉ')
           

        }

    }
    return (
        <>
            <div className='buyProduct'>
                <h2>Đặt Hàng</h2>
                {data.map(item => {
                    return (
                        <div className='item'>
                            <img src={item.img} alt="abc" />
                            <p> Tên:{item.name}</p>
                            <p>x{item.number}</p>
                            <p> Giá:{parseInt(item.price) * parseInt(item.number)} VND</p>
                        </div>
                    )
                })}
                Tổng:{total} VND <br /><button onClick={() => setAddress(!address)}>Địa Chỉ</button>
                {address && <Address handelDelete={handelDelete} handleCheckBox={handleCheckBox}/>}<br /><hr />

                <button onClick={() => handleBuyProduct()}>Mua Hàng</button>

            </div>
            <div className='buyProduct-desktop'>
                <h2>Đặt Hàng</h2>
                {data.map(item => {
                    return (
                        <>
                        <div className='item'>
                            <div className='item-img'>
                                <img src={item.img} alt="abc" />
                            </div>
                            <div className='item-news'>
                                <p> Tên:{item.name}</p>
                                <p>x{item.number}</p>
                                <p> Giá:{parseInt(item.price) * parseInt(item.number)} VND</p>
                            </div>

                        </div><hr/></>
                    )
                })}
                Tổng:{total} VND <br /><button onClick={() => setAddress(!address)}>Địa Chỉ</button>
                {address && <Address handelDelete={handelDelete} handleCheckBox={handleCheckBox}/>}<br /><hr />

                <button onClick={() => handleBuyProduct()}>Mua Hàng</button>

            </div>
        </>

    )
}
export default BuyProduct