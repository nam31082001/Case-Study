import { useDispatch, useSelector } from 'react-redux';
import { memo } from "react"
import Example from '../flyCam/JSX/Modal';

const ConnenctionCam = () => {
    const dataFly = useSelector(state => state.dataCam)
    let arrItem = []
    for (let i = 0; i < 4; i++) {
        let number =   Math.floor(Math.random() * 11);
        arrItem.push(dataFly[number])
    }
    return (
        <div className='Connenction'>
           
            {arrItem.map(data=>{
                return(
                    <div>
                          <img src={data.img} alt="abc" />
                          <p>{data.name}</p>
                          <p>{data.price} VND</p>
                          <Example item={data} />
                    </div>
                )
            }) }

        </div>
    )
}
export default  memo(ConnenctionCam)