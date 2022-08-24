import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom";
import { checkLogIn,buyProduct } from "../../redux/sctons";
import './cart.css'

const Cart = () => {
    const [checkedItem, setCheckedItem] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const dataCart = useSelector(state => state.cart)
    const checkLog = useSelector(state => state.checkLog)
    const handleClickBuy = () => {
        if (!checkLog) {
            alert("Vui Lòng Dăng Nhập")
            history.push("/login")
            dispatch(checkLogIn())
        } else if (total === 0) {
            alert("đã chọn mua đâu mà thanh toán")
        }else{
            history.push("/buyProduct")
            dispatch(buyProduct())
        }
    }
    let total = 0
    dataCart.map(item => {
        if (checkedItem) {
            total = parseInt(item.price) * parseInt(item.number) + total
        } else if (item.checked) {
            total = parseInt(item.price) * parseInt(item.number) + total
        }
    })
    useEffect(() => {
        dispatch(
            {
                type: "GET_API_CART"
            }
        )
    }, [])

    const handleIncrease = (job) => {

        dispatch(
            {
                type: "PUT_NUMBER_CART_FLY",
                payload: job
            }
        )

    }
    const handleReduced = (job) => {
        dispatch(
            {
                type: "PUT_NUMBER_CART_FLY_REDUCED",
                payload: job
            }
        )
    }
    const handleDeleteFlt = (id) => {
        dispatch(
            {
                type: 'DELETE_CART_FLY',
                payload: id
            }
        )
    }
    const handleAllBuy = (job) => {
        setCheckedItem(!checkedItem)
    }
    const handleClickInput = (job) => {
        setCheckedItem(false)
        dispatch(
            {
                type: 'PUT_CHECKED_FLY',
                payload: job
            }
        )
    }

    return (
        <div>

            {dataCart.length === 0
                ?
                <>
                    <p>Chưa có Gì Trong Giỏ Nha</p>
                </>
                :
                <>
                    <h2> Sản Phẩm Trong Giỏ</h2>
                    <td><input type="checkbox" checked={checkedItem} onClick={() => handleAllBuy(dataCart)} />  All</td>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên</th>
                                <th>Giá 1 Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Giá sản Phẩm</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataCart.map((item, index) => {
                                return (

                                    <tr>
                                        <td><input type="checkbox" checked={checkedItem ? true : item.checked} onClick={() => handleClickInput(item)} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => handleReduced(item)}>-</button>
                                            {item.number}
                                            <button onClick={() => handleIncrease(item)}>+</button>
                                        </td>
                                        <td>{parseInt(item.number) * parseInt(item.price)}</td>
                                        <td><button onClick={() => handleDeleteFlt(item.id)}>Xóa</button></td>
                                    </tr>



                                )
                            })}
                        </tbody>

                    </Table>
                    <div className="cartTotalMoney">
                        Tổng Tiền :{total}<br />
                        <button onClick={() => handleClickBuy()}>Mua </button>
                    </div>
                </>}


        </div>
    )
}
export default Cart