import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { BugTwoTone, CameraTwoTone, FileImageTwoTone } from '@ant-design/icons'

const Feature = ({checkNew}) => {
    return (
        <>
            <Row className='row'>
                <Col xs={6} md={4}>
                    {checkNew === 'fly' && <p><BugTwoTone style={{ fontSize: '400%' }} /></p>}
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
        </>
    )
}
export default Feature