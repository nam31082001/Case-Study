import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notify from '../../../../notify/notify';
import Example from '../Modal';
const TypeTwo = ({handleAddFly,checkNotify}) => {
    const dataFly1 = useSelector(state => state.dataFlyCam)
    let arrType1 = []
    dataFly1.map(data => {
        if (data.id >= 10 && data.id < 20) {
            arrType1.push(data)
        }
    })
   

    return (
        <>
            {checkNotify && <Notify />}
        
            {arrType1.map(data => {
                return (
                    <div>
                        <img src={data.img} alt="abc" />
                        <h4>{data.name}</h4>
                        <p>{data.price}</p>
                        <button onClick={() => handleAddFly(data)}>Thêm Vào Giỏ</button> &nbsp;
                        <Example item={data} />
                        <br />
                        <button ><Link to={`/flycam/${data.id}`}> Chi Tiết </Link></button><br />
                        <spam>Thích</spam>
                        <p>Lượt Mua:</p>

                    </div>
                )
            })}

        </>
    )
}
export default TypeTwo