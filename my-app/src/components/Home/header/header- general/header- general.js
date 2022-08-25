import { UserOutlined, ShoppingCartOutlined, SmileOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './header-generaj.css'
import { useEffect, useState } from 'react'
import { checkLogOut } from '../../../../redux/sctons'





const Header_General = () => {
    const [checkTF, setCheckTF] = useState(false)
    const [link, setLink] = useState(false)
    const cart = useSelector(state => state.cart)
    const checkLog = useSelector(state => state.checkLog)
    const dispatch = useDispatch()
    const history=useHistory()


    useEffect(() => {
        dispatch(
            {
                type: "GET_API_CART"
            }
        )
    }, [])



    return (
        <div className='header'>
            <div className='header-logo'>
                <h1 onClick={()=>history.push("/")}><img src="https://aphoto.vn/wp-content/uploads/2019/03/fly1.jpg" alt="Girl in a jacket" width="50" height="60" style={{ borderRadius: 50 }} />  GHN</h1>
            </div >
            <div className='header-menu'>
                <NavLink to="/" activeClassName="selected" > Trang Chủ </NavLink>
                <NavLink to="/flycam" activeClassName="selected"> FlyCam</NavLink>
                <NavLink to="/cammara" activeClassName="selected"> Camara </NavLink>
                <NavLink to="/ news" activeClassName="selected"> Tin Tức </NavLink>
                <NavLink to="/phone" activeClassName="selected" > Liên hệ</NavLink>
            </div>
            <div className='header-cart-login'>
                &nbsp;
                &nbsp;
                {checkLog === false ?
                    <>
                        <UserOutlined style={{ fontSize: '200%', }} onClick={() => setCheckTF(!checkTF)} />
                    </>
                    :
                    <>
                        <SmileOutlined style={{ fontSize: '200%', }} onClick={() => setCheckTF(!checkTF)} />
                    </>}
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavLink to="/cart" activeClassName="selected">
                    <ShoppingCartOutlined style={{ fontSize: '200%' }} />({cart.length})
                </NavLink>
            </div>
            {checkTF && <> <div className='log'>
                <h6>
                    {checkLog === false ?
                        <>
                            <h6><Link to="/login"  onClick={() => setCheckTF(!checkTF)}>Đăng Nhập</Link></h6>
                            <hr />
                            <Link to="/logout"  onClick={() => setCheckTF(!checkTF)}>Tạo Tài Khoản</Link>
                        </>
                        :
                        <>
                            <Link to="/Information"  onClick={() => setCheckTF(!checkTF)}>Thông Tin Cá Nhân</Link>
                            <hr />
                            <Link to="/" onClick={() => dispatch(checkLogOut())}>Đăng xuất</Link>
                        </>
                    }
                </h6>
            </div>
            </>
            }
            <div className='responsiveHeader'>
                <div>
                    <NavLink to="/cart" activeClassName="selected">
                        <ShoppingCartOutlined style={{ fontSize: '300%' }} />
                    </NavLink>
                </div>  &nbsp;  &nbsp;
                <div onClick={() => setLink(!link)}><i class="fas fa-bars fa-2x"></i></div>
                {link && <>
                    <div className='link' >

                        &nbsp;    <NavLink to="/" activeClassName="selected" onClick={()=>setLink(false)}> Trang Chủ </NavLink><br />
                        &nbsp;   <NavLink to="/flycam" activeClassName="selected" onClick={()=>setLink(false)}> FlyCam</NavLink><br />
                        &nbsp;   <NavLink to="/cammara" activeClassName="selected"onClick={()=>setLink(false)}> Camara </NavLink><br />
                        &nbsp;   <NavLink to="/ news" activeClassName="selected"onClick={()=>setLink(false)}> Tin Tức </NavLink><br />
                        &nbsp;    <NavLink to="/phone" activeClassName="selected" onClick={()=>setLink(false)}> Liên hệ</NavLink><br />
                        {checkLog === false ?
                            <>
                                <Link to="/login"  onClick={() => setCheckTF(!checkTF)}>Đăng Nhập</Link>   &nbsp;  &nbsp;
                                &nbsp;  <Link to="/logout"  onClick={() => setCheckTF(!checkTF)}>Tạo Tài Khoản</Link>
                            </>
                            :
                            <>
                                &nbsp;  <Link to="/Information"  onClick={() => setCheckTF(!checkTF)}>Thông Tin </Link> &nbsp; &nbsp;
                                <Link to="/" onClick={() => dispatch(checkLogOut())}  onClick={() => setCheckTF(!checkTF)}>Đăng xuất</Link>
                            </>
                        }

                    </div>
                </>}
            </div>
        </div>
    )
}
export default Header_General