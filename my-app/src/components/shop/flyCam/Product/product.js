
import { useEffect, useState,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paging from '../../../Paging/Paging';
import Example from '../JSX/Modal';
import './Product.css'



const Product = () => {
    const [handleFull, setHandleFull] = useState(true)
    const [search, setSearch] = useState('')
   

    // lấy dữ liệu từ redux
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataFlyCam)
    const dataCart = useSelector(state => state.cart)
    console.log(dataCart)






    // phân trang cơ học
    const [currentPageProduct, setCurrentPageProduct] = useState(1)
    const [postPerPageProduct] = useState(8)
    const indexOfLastPostProduct = currentPageProduct * postPerPageProduct
    const indexOfLastFirstPostProduct = indexOfLastPostProduct - postPerPageProduct
    const currentPostsProduct = data.slice(indexOfLastFirstPostProduct, indexOfLastPostProduct)
    const pagingProduct = pagProduct => setCurrentPageProduct(pagProduct)
    const pagProduct = []
    for (let i = 1; i <= Math.ceil(data.length / postPerPageProduct); i++) {
        pagProduct.push(i)
    }

    const handleClickFull = () => {
        window.scrollTo(0, 0);
        setHandleFull(!handleFull)
    }

    const handleAddFly = (job) => {
        let data = {
            id: job.id,
            name: job.name,
            price: job.price,
            number: 1
        }
        dispatch(
            {
                type: "POST_API_CART",
                payload: data
            }
        )
    }


    // get Api qua middwe
    useEffect(() => {
        dispatch(
            {
                type: "GET_PRODUCT_FLYCAM",
            }
        )
    }, [])
 

    return (
        <>
            <div className='product'>
                <p>Lọc sản Phẩm:
                    <input
                        type="text"
                        placeholder='Lọc Sản Phẩm ...'
                        onChange={(event) => setSearch(event.target.value)}

                    />
                </p>
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
                                    <button  onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button> &nbsp;
                                    <Example item={item} />
                                    <br />
                                    <button ><Link to={`/flycam/${item.id}`}> Chi Tiết </Link></button><br />
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
                                    <button  onClick={() => handleAddFly(item)}>Thêm Vào Giỏ</button> &nbsp;
                                    <Example item={item} />
                                    <button ><Link to={`/flycam/${item.id}`}> Chi Tiết </Link></button><br />
                                    <spam>Thích</spam>
                                    <p>Lượt Mua:</p>
                                </div>
                            )
                        })}
                    </>
                }
            </div><br />
            <Paging
                paging={pagingProduct}
                arrNumber={pagProduct}

            />
            <button onClick={() => handleClickFull()}>
                {handleFull ? 'Xem Tất Cả' : 'Ẩn Bớt'}
            </button>

        </>

    )
}
export default Product