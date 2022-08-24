
import { BugTwoTone, CameraTwoTone, FileImageTwoTone } from '@ant-design/icons'
const ContentHello = () => {
    return (
        <>
            <div className='content-hello-desktop'>
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
            <div className='content-hello-mobile'>
                <div>
                    <div className='content-hello-mobile1'>
                        <p> <BugTwoTone style={{ fontSize: '200%' }} /></p>

                    </div>
                    <div className='content-hello-mobile2'>
                        <h5>Máy Bay Thông minh</h5>

                    </div>

                </div>
                <div>
                    <div className='content-hello-mobile1'>
                        <p> <BugTwoTone style={{ fontSize: '200%' }} /></p>

                    </div>
                    <div className='content-hello-mobile2'>
                        <h5>Cam Siêu Nét</h5>
                    </div>

                </div>
                <div>
                    <div className='content-hello-mobile1'>
                        <p> <BugTwoTone style={{ fontSize: '200%' }} /></p>

                    </div>
                    <div className='content-hello-mobile2'>
                        <h5>Ảnh Siêu Mượt</h5>
                    </div>

                </div>


            </div>


        </>

    )
}
export default ContentHello