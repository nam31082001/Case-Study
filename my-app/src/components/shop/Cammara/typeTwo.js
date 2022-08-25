import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Example from '../flyCam/JSX/Modal';
import Notify from '../../notify/notify';
const TypeTwoCam = ({handleAddFly,checkNotify}) => {
    const dataCam = useSelector(state => state.dataCam)
    let arrType2 = []
    dataCam.map(data => {
        if (data.id > 5 && data.id < 10) {
            arrType2.push(data)
        }
    })
   

    return (
        <>
        {checkNotify && <Notify/>}

            {arrType2.map(data => {
                return (
                    <div>
                        <img src={data.img} alt="abc" />
                        <h4>{data.name}</h4>
                        <p>{data.price}</p>
                        <button onClick={() => handleAddFly(data)}>Thêm Vào Giỏ</button> &nbsp;
                        <Example item={data} />
                        <br />
                        <button ><Link to={`/cammara/${data.id}`}> Chi Tiết </Link></button><br />
                        <spam>Thích</spam>
                        <p>Lượt Mua:</p>

                    </div>
                )
            })}

        </>
    )
}
export default TypeTwoCam