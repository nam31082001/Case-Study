const FeatureÌmg=({checkNew})=>{
    return(
        <>
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
        </>
    )
}
export default FeatureÌmg