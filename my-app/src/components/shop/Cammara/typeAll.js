import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Example from '../flyCam/JSX/Modal';
import Notify from '../../notify/notify';
const TypeAllCam = ({handleFull,currentPostsProduct,handleAddFly,data,search,checkNotify}) => {
    
    

    return (
        <>
        {checkNotify && <Notify/>}
             {handleFull ?
                            <>
                                {currentPostsProduct.filter((item) => {
                                    if (search === '') {
                                        return item
                                    } else if (item.name.toLowerCase().includes(search.toLowerCase()) || item.price.toLowerCase().includes(search.toLowerCase())) {
                                        return item
                                    }
                                }).map(item => {
                                    return (
                                        <div>
                                            <img src={item.img} alt="abc" />
                                            <h4>{item.name}</h4>
                                            <p>{item.price}</p>
                                            <button onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button> &nbsp;
                                            <Example item={item} />
                                            <br />
                                            <button ><Link to={`/cammara/${item.id}`}> Chi Tiết </Link></button><br />
                                            <spam>Thích</spam>
                                            <p>Lượt Mua:</p>
                                        </div>
                                    )
                                })}

                            </>
                            :
                            <>
                                {data.filter((item) => {
                                    if (search === '') {
                                        return item
                                    } else if (item.name.toLowerCase().includes(search.toLowerCase()) || item.price.toLowerCase().includes(search.toLowerCase())) {
                                        return item
                                    }
                                }).map(item => {
                                    return (
                                        <div>
                                            <img src={item.img} alt="abc" />
                                            <h4>{item.name}</h4>
                                            <p>{item.price}</p>
                                            <button onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button> &nbsp;
                                            <Example item={item} />&nbsp;
                                            <button ><Link to={`/cammara/${item.id}`}> Chi Tiết </Link></button><br />
                                            <spam>Thích</spam>
                                            <p>Lượt Mua:</p>
                                        </div>
                                    )
                                })}
                            </>
                        }

        </>
    )
}
export default TypeAllCam