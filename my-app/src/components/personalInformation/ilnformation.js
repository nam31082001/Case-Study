import { SmileOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import './information.css'
const Information = () => {
    const dataHistoryBuy = useSelector(state => state.historyBuy)
    console.log(dataHistoryBuy)
    let total = 0
    dataHistoryBuy.map(item => {
        total = parseInt(item.price) * parseInt(item.number) + total
    })
    return (
        <div className="Information" >
            <h4>  Thông Tin Khách Hàng</h4>
            <div className="Information-name" >

                <div>
                    <SmileOutlined style={{ fontSize: '1000%', }} />
                </div>
                <div>
                    <p>Tên:username</p>
                    <p>ID:</p>
                    <p>Đơn đã Mua:</p>
                    <p>Bậc Khách Hàng</p>
                </div>
            </div>
            <div className="Information-product">
                <h4>  Đơn Đã Mua</h4>
                <div className='buyProduct'>

                    {dataHistoryBuy.map(data => {
                        return (
                            <div className='item'>
                                <img src={data.img} alt="abc" />
                                <p> Tên:{data.name}</p>
                                <p>x{data.number}</p>
                                <p> Giá:{parseInt(data.price) * parseInt(data.number)} VND</p>
                                <p>trạng Thái : Đang giao</p>
                            </div>
                        )
                    })}
                    Tổng:{total}VND

                </div>
                <div className='buyProduct-desktop'>

                    {dataHistoryBuy.map(data => {
                        return (
                            <>
                                <div className='item'>
                                    <div className='item-img'>
                                        <img src={data.img} alt="abc" />
                                    </div>
                                    <div className='item-news'>
                                        <p> Tên:{data.name}</p>
                                        <p>x{data.number}</p>
                                        <p> Giá:{parseInt(data.price) * parseInt(data.number)} VND</p>
                                        <p>trạng Thái : Đang giao</p>
                                    </div>

                                </div><hr /></>
                        )
                    })}
                    Tổng:{total}VND



                </div>
            </div>
        </div>
    )
}
export default Information