import Carousel from 'react-bootstrap/Carousel';

const ContentImgSide=()=>{
    return(
        <>
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
        </>
    )
}
export default ContentImgSide