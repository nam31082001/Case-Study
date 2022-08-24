import { Link } from "react-router-dom"
import './logn.css'
import { FacebookFilled, InstagramFilled, SyncOutlined } from '@ant-design/icons'
import { checkLogIn } from "../../../redux/sctons"
import { useDispatch } from "react-redux"

const Login = () => {
    const dispatch = useDispatch()

    return (
        <div className="login-box">
            <h2>Đăng Nhập</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Tên Đăng Nhập</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label>Mật Khẩu</label>
                </div> 
                <button onClick={()=> dispatch(checkLogIn())}> <Link to="/">Đăng Nhập</Link></button>
                

                <br />
                <br />


            </form>
            <FacebookFilled style={{ fontSize: '200%' }} /> FaceBook
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <InstagramFilled style={{ fontSize: '200%' }} />Instaram<br/><br/>
            <hr/>
            <Link to="/logout">Tạo Tài Khoản</Link> &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link>Quên Mật Khẩu</Link>
        </div>


    )
}
export default Login