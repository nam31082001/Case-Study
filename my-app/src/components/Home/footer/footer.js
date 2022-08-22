import Card from 'react-bootstrap/Card';
import './footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-email">
                <h3>Bạn Muốn Biết Thêm THông Tin Sản Phẩm </h3>
                <input
                    placeholder="Nhập email hoặc số điện thoại vào >>>" /><br />
                <button>Gửi</button>

            </div>
            <div className="footer-address">
                <div className="d-flex justify-content-around">
                    <div style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Địa Chỉ</Card.Title>
                            <Card.Text>
                             <p>  Cơ sở 1: Phúc Thọ Hà Nội</p>
                             <p>  Cơ sở 2: Phúc Thọ Hà Nội</p>
                             <p>  Cơ sở 3: Phúc Thọ Hà Nội</p>
                             <p>  Cơ sở 4: Phúc Thọ Hà Nội</p>
                             <p>  Cơ sở : Phúc Thọ Hà Nội</p>
                            </Card.Text>
                          
                        </Card.Body>
                    </div>
                    <div style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Liên Hệ</Card.Title>
                            <Card.Text>
                                <p>  <a href="http://webcoban.vn">Liên Hệ Facebook</a></p>
                                <p>  <a href="http://webcoban.vn">Liên Hệ zalo</a></p>
                                <p>  <a href="http://webcoban.vn">liên hệ intargam</a></p>

                            </Card.Text>
                           
                        </Card.Body>
                    </div>
                    <div style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Map</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default Footer