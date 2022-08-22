import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './header-generaj.css'
import { useEffect } from 'react'


const Header_General = () => {
    const cart = useSelector(state => state.cart)



    return (
        <div className='header'>
            <div className='header-logo'>
                <h1><img src="https://aphoto.vn/wp-content/uploads/2019/03/fly1.jpg" alt="Girl in a jacket" width="50" height="60" style={{ borderRadius: 50 }} />  GHN</h1>
            </div >
            <div className='header-menu'>
                <NavLink to="/" activeClassName="selected"> Trang Chủ </NavLink>
                <NavLink to="/flycam" activeClassName="selected"> FlyCam</NavLink>
                <NavLink to="/cammara" activeClassName="selected"> Camara </NavLink>
                <NavLink to="/ news" activeClassName="selected"> Tin Tức </NavLink>
                <NavLink to="/phone" activeClassName="selected"> Liên hệ</NavLink>
            </div>
            <div className='header-cart-login'>
                &nbsp;
                &nbsp;
                <UserOutlined style={{ fontSize: '200%', }} />
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavLink to="/cart" activeClassName="selected">
                    <ShoppingCartOutlined style={{ fontSize: '200%' }} />({cart.length})
                </NavLink>

            </div>
        </div>

    )
}
export default Header_General