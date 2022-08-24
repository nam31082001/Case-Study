import { useSelector } from 'react-redux';
import './Connenction.css'
import { memo } from "react"
import Example from '../Modal';

const Connenction = () => {
    const dataFly = useSelector(state => state.dataFlyCam)
    let arrItem = []
    for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 21)
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
export default  memo(Connenction)