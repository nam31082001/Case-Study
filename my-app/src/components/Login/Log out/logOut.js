import { Link } from "react-router-dom"
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { useFormik } from "formik";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom'
import './logout.css'

const LogOut = () => {
    const history=useHistory()
   
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                number: "",
                password: "",
                confirmedPassword: ""

            },
            validationSchema: Yup.object(
                {
                    name: Yup.string().required("(*)").min(8, "(*)"),
                    email: Yup.string().required("(*)").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"(*)"),
                    number: Yup.string().required("(*)").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g,"(*)"),
                    password: Yup.string().required("(*)").matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,"(*)"),
                    confirmedPassword: Yup.string().required("(*)").oneOf([Yup.ref("password"), null], "(*)"),
                }
            ),
            onSubmit: (values) => {
                history.push("/login")
            }
        }
    )

    return (
        <div className="logout-box">
            <h2>Tạo Tài Khoản</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="user-box">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <label>Tên Đăng Nhập
                        {formik.errors.name &&
                            <span style={{ color: 'red' }}>{formik.errors.name} </span>
                        }
                    </label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                    />
                    <label>Số Điện Thoại
                    {formik.errors.number &&
                            <span style={{ color: 'red' }}>{formik.errors.number} </span>
                        }
                    </label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <label>Email
                    {formik.errors.email &&
                            <span style={{ color: 'red' }}>{formik.errors.email} </span>
                        }
                    </label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <label>Mật Khẩu
                    {formik.errors.password &&
                            <span style={{ color: 'red' }}>{formik.errors.password} </span>
                        }
                    </label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                    />
                    <label>Nhập Lại Mật Khẩu
                    {formik.errors.confirmedPassword &&
                            <span style={{ color: 'red' }}>{formik.errors.confirmedPassword} </span>
                        }
                    </label>
                </div>


                <button type="submit" >
                Tạo
                </button>

                <br />
                <br />


            </form>
            <FacebookFilled style={{ fontSize: '200%' }} /> FaceBook
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <InstagramFilled style={{ fontSize: '200%' }} />Instaram<br /><br />
            <hr />
            <Link to="/login" >Đăng Nhập</Link> &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link>Quên Mật Khẩu</Link>
        </div>


    )
}
export default LogOut