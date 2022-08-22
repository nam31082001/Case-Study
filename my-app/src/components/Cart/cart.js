import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

const Cart = () => {
    const dispatch = useDispatch()
    const dataCart = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(
            {
                type: "GET_API_CART"
            }
        )
    }, [])

    const handleIncrease=(job)=>{
    
        dispatch(
            {
                type:"PUT_NUMBER_CART_FLY",
                payload:job
            }
        )

    }
    const handleReduced=(job)=>{
        dispatch(
            {
                type:"PUT_NUMBER_CART_FLY_REDUCED",
                payload:job
            }
        )
    }
    const handleDeleteFlt=(id)=>{
        dispatch(
            {
                type:'DELETE_CART_FLY',
                payload:id
            }
        )
    }
    return (
        <div>
            <h2> Sản Phẩm Trong Giỏ</h2>
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
                                <td><input type="checkbox"/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=>handleReduced(item)}>-</button>
                                    {item.number}
                                    <button onClick={()=>handleIncrease(item)}>+</button>
                                </td>
                                <td>{parseInt(item.number)*parseInt(item.price)}</td>
                                <td><button onClick={()=>handleDeleteFlt(item.id)}>Xóa</button></td>
                            </tr>



                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default Cart