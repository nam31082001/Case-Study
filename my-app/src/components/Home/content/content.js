import './content.css'
import ContentHello from './content-full/content-hello';
import ContentImgSide from './content-full/content-img-side';
import Feature from './content-full/feature';
import { useState } from 'react';
import Featured_Product from './featured-products/featured_products';
import Idea from './idea/Idea';
import { Link } from 'react-router-dom'
import FeatureÌmg from './content-full/feature-img';




const Content = () => {
    const [checkNew, setCheckNew] = useState('fly')
    return (
        <div className="content-full">
            <h2>Xin Chào Đã Đến GHN</h2>
            <div className="content-hello">
                <ContentHello />
            </div>
            <div className="content-img">
                <div className='content-img-side' >
                    <ContentImgSide />
                </div>
                <h4>Mua Ngay Để Trải Nghiệm nhé <button><Link to="/flycam">Xem Tất Cả Sản Phẩm</Link></button></h4>
                <h6>Mua Ngay Để Trải Nghiệm <button><Link to="/flycam">Xem Tất Cả </Link></button></h6>
            </div>
            <div className="content-news">
                <h2>Các Tính Năng Cơ Bản</h2>
                <div className='content-news-feature'>
                    <div className='feature'>
                        <p>
                            <button onClick={() => setCheckNew('fly')}>FlyCam</button>
                            <button onClick={() => setCheckNew('cam')}>Camara</button>
                            <button onClick={() => setCheckNew('img')}>Hình Ảnh</button>
                        </p>
                        <Feature checkNew={checkNew} />
                    </div>
                    <div className='feature-img'>
                        <FeatureÌmg checkNew={checkNew} />
                    </div>
                </div>

            </div>
            <div className='content-featured-products'>
                <h2> Sản Phẩm Nổi Bật</h2>
                <Featured_Product />
            </div>
            <div className='content-Idea'>
                <h2> Ý Kiến Của Khách Hàng</h2>
                <Idea />
            </div>
        </div>
    )
}
export default Content