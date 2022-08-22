import './content.css'
import { BugTwoTone, CameraTwoTone, FileImageTwoTone } from '@ant-design/icons'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Featured_Product from './featured-products/featured_products';
import Idea from './idea/Idea';
import {Link} from 'react-router-dom'


const Content = () => {
    const [checkNew, setCheckNew] = useState('fly')
    console.log(checkNew)
    return (
        <div className="content-full">
            <h2>Xin Chào Đã Đến GHN</h2>
            <div className="content-hello">
                <div>
                    <p> <BugTwoTone style={{ fontSize: '400%' }} /></p>
                    <h5>Máy Bay Thông minh</h5>
                    <p>Flycam là một loại thiết bị bay không người lái có lắp camera để quay phim hoặc chụp ảnh từ trên cao. Nó được điều khiển từ xa bằng trình điều khiển riêng biệt hoặc có thể kết nối vào điện thoại, máy tính </p>

                </div>
                <div >
                    <p><CameraTwoTone style={{ fontSize: '400%' }} /></p>
                    <h5>Cam Siêu Nét</h5>
                    <p>Camera vốn là tên gọi chung của các thiết bị ghi hình tĩnh hoặc động. Ghi hình tĩnh có thể nhắc đến các loại máy ảnh, và động ta có thể hình dung tới các loại máy quay phim. Thời đại công nghệ số thì 2 loại camera ghi hình tĩnh  </p>

                </div>
                <div>
                    <p><FileImageTwoTone style={{ fontSize: '400%' }} /></p>
                    <h5>Ảnh Siêu Mượt</h5>
                    <p>Cả 2 thiết bị trên đề cho chúng ta thấy dc vẻ đẹp của tư nhiên</p>

                </div>
            </div>
            <div className="content-img">
                <div className='content-img-side' >
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.vjshop.vn/tin-tuc/meo-chup-anh-bang-flycam/meo-chup-anh-bang-flycam-14.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://v5m6g2b4.rocketcdn.me/wp-content/uploads/2020/12/1638906e61.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://digi4u.net/media/news/2407_cach-chup-anh-dep-bang-flycam.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h4>Mua Ngay Để Trải Nghiệm nhé <button><Link to="/flycam">Xem Tất Cả Sản Phẩm</Link></button></h4>
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
                        <Row>
                            <Col xs={6} md={4}>
                                {checkNew === 'fly' && <BugTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'cam' && <CameraTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'img' && <FileImageTwoTone style={{ fontSize: '400%' }} />}


                            </Col>
                            <Col xs={12} md={8} >
                                {checkNew === 'fly' &&
                                    <>
                                        <h5>Điều Kiển Thiết bị</h5>
                                        <p>NGươi điều kiểm là bất kì ai ,chỉ cần họ biết chơi ô tô điều kiển từ xa và biết quan sát màn hình</p>
                                    </>
                                }
                                {checkNew === 'cam' &&
                                    <>
                                        <h5>Điều Kiển Thiết bị</h5>
                                        <p>Tránh chụp ảnh nơi có ánh sáng yếu, ánh sáng ngược.Điều chỉnh cân bằng sáng sau khi chụp ảnh.Hạn chế dùng đèn Flash</p>
                                    </>
                                }
                                {checkNew === 'img' &&
                                    <>
                                        <h5>Tấm Ảnh Đẹp</h5>
                                        <p>Một tấm ảnh đẹp có thể đưa bạn đến một thời điểm nào đó một cảm xúc nào đó</p>
                                    </>
                                }

                            </Col>

                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={6} md={4} >
                                {checkNew === 'fly' && <BugTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'cam' && <CameraTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'img' && <FileImageTwoTone style={{ fontSize: '400%' }} />}
                            </Col>
                            <Col xs={12} md={8} >
                                {checkNew === 'fly' &&
                                    <>
                                        <h5>Bảo Dưỡmg Máy Bay</h5>
                                        <p>Bảo quản flycam ở nơi khô ráo, thoáng mát và không có từ tính để tránh mọi hư hỏng. Khi flycam và pin sẽ được lưu trữ trong hơn 3 tháng, hãy bảo quản trong khoảng 25 ° C và tránh ánh nắng trực tiếp. Xả pin còn 40% đến 65% trước khi cất giữ.</p>
                                    </>
                                }
                                {checkNew === 'cam' &&
                                    <>
                                        <h5>Bảo Dưỡmg Máy Quay</h5>
                                        <p>Để an toàn, hãy tháo pin khỏi máy ảnh. Nếu pin không thể tháo được, hãy đảm bảo là máy đã tắt.Lau màn hình nhẹ nhàng với miếng vải khô. Đừng ấn mạnh vào màn hình. Với những chất bẩn “cứng đầu”, bạn có thể ấn nhẹ nhàng.</p>
                                    </>
                                }
                                {checkNew === 'img' &&
                                    <>
                                        <h5>Bảo vệ Tấm ảnh Được Lâu</h5>
                                        <p>Bảo quản bằng khung ép lụa .....</p>
                                    </>
                                }
                            </Col>

                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={6} md={4} >
                                {checkNew === 'fly' && <BugTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'cam' && <CameraTwoTone style={{ fontSize: '400%' }} />}
                                {checkNew === 'img' && <FileImageTwoTone style={{ fontSize: '400%' }} />}
                            </Col>
                            <Col xs={12} md={8} >
                                {checkNew === 'fly' &&
                                    <>
                                        <h5>Phụ kiện</h5>
                                        <p>Bảo quản flycam ở nơi khô ráo, thoáng mát và không có từ tính để tránh mọi hư hỏng. Khi flycam và pin sẽ được lưu trữ trong hơn 3 tháng, hãy bảo quản trong khoảng 25 ° C và tránh ánh nắng trực tiếp. Xả pin còn 40% đến 65% trước khi cất giữ.</p>
                                    </>
                                }
                                {checkNew === 'cam' &&
                                    <>
                                        <h5>Phụ kiện</h5>
                                        <p>Để an toàn, hãy tháo pin khỏi máy ảnh. Nếu pin không thể tháo được, hãy đảm bảo là máy đã tắt.Lau màn hình nhẹ nhàng với miếng vải khô. Đừng ấn mạnh vào màn hình. Với những chất bẩn “cứng đầu”, bạn có thể ấn nhẹ nhàng.</p>
                                    </>
                                }
                                {checkNew === 'img' &&
                                    <>
                                        <h5>Phụ Kiện</h5>
                                        <p>Bảo quản bằng khung ép lụa .....</p>
                                    </>
                                }
                            </Col>

                        </Row>
                    </div>
                    <div className='feature-img'>
                        {checkNew === 'fly' &&
                            <>
                                <img src="https://cdn.vjshop.vn/tin-tuc/meo-chup-anh-bang-flycam/meo-chup-anh-bang-flycam-14.jpg"
                                    alt="First slide" style={{ width: '400px', height: '600px' }} />
                            </>
                        }
                        {checkNew === 'cam' &&
                            <>
                                <img src="https://danhgiatot.vn/wp-content/uploads/2020/12/may-anh-co.jpg"
                                    alt="First slide" style={{ width: '400px', height: '600px' }} />
                            </>
                        }
                        {checkNew === 'img' &&
                            <>
                                <img src="http://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg"
                                    alt="First slide" style={{ width: '400px', height: '600px' }} />
                            </>
                        }

                    </div>
                </div>

            </div>
            <div className='content-featured-products'>
                <h2> Sản Phẩm Nổi Bật</h2>
                <Featured_Product />
            </div>
            <div className='content-Idea'>
            <h2> Ý Kiến Của Khách Hàng</h2>
                <Idea/>
            </div>
        </div>
    )
}
export default Content