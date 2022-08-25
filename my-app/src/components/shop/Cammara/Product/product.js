import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TypeOneCam from '../typeOne';
import TypeTwoCam from '../typeTwo';
import TypeAllCam from '../typeAll';
import Paging from '../../../Paging/Paging';




const ProductCam = () => {
    const [handleFull, setHandleFull] = useState(true)
    const [search, setSearch] = useState('')
    const [type, setType] = useState('All')
    const [checkNotify,setCheckNotify]=useState(false)



    // lấy dữ liệu từ redux
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataCam)








    // phân trang cơ học
    const [currentPageProduct, setCurrentPageProduct] = useState(1)
    const [postPerPageProduct] = useState(4)
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
            img:job.img,
            checked: false,
            number: 1
        }
        dispatch(
            {
                type: "POST_API_CART",
                payload: data
            }
        )
        setCheckNotify(true)
        setTimeout(() => {
            setCheckNotify(false)
        }, 2000);
    }


    // get Api qua middwe
    useEffect(() => {
        dispatch(
            {
                type: "GET_PRODUCT_CAM",
            }
        )
    }, [])
    const handleTypeOne = () => {
        setType('typeOne')
       
    }
    const handleTypeTwo = () => {
        setType('typeTwo')
    }
    const handleTypeAll = () => {
        setType('All')
        setHandleFull(false)
    }


    return (
        <>
            <div className='product'>
                <p>Lọc sản Phẩm:
                    <input
                        type="text"
                        placeholder='Lọc Sản Phẩm ...'
                        onChange={(event) => setSearch(event.target.value)}

                    /><br /><br />
                    <input type="radio" name="product" onClick={() => handleTypeOne()} /> Loại A &nbsp; &nbsp;
                    <input type="radio" name="product" onClick={() => handleTypeTwo()} /> Loại B &nbsp; &nbsp;
                    <input type="radio" name="product" onClick={() => handleTypeAll()} /> ALL
                </p>

                {type === 'typeOne' && <TypeOneCam handleAddFly={handleAddFly} checkNotify={checkNotify}/>}
                {type === 'typeTwo' && <TypeTwoCam handleAddFly={handleAddFly} checkNotify={checkNotify}/>}
                {type === 'All' && <TypeAllCam
                    handleFull={handleFull}
                    currentPostsProduct={currentPostsProduct}
                    handleAddFly={handleAddFly}
                    data={data}
                    search={search}
                    checkNotify={checkNotify}
                />}

            </div><br />
            {type === 'All' &&
                <>
                    <Paging
                        paging={pagingProduct}
                        arrNumber={pagProduct}

                    />
                    <button onClick={() => handleClickFull()}>
                        {handleFull ? 'Xem Tất Cả' : 'Ẩn Bớt'}
                    </button>
                </>
            }
        </>
    )

}
export default ProductCam