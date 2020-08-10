import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setItemCart } from '../../Actions/Cart';
const Header = ({LayTokenDangXuat,getProductCategory,GetCategory}) => {
 
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.infoUser);
  const token = localStorage.getItem('access_token');
  const categories = useSelector(state => state.category.categories)
  const cart = useSelector(state => state.cart.totalProduct)
  const [TotalCart, setTotalCart] = useState()
  const ojb = localStorage.getItem('cart');
  if (ojb) {
    const sss = "[" + ojb + "]"
    const getItemCartLocalStorage = JSON.parse(sss);
    const mang = getItemCartLocalStorage
    !TotalCart&&setTotalCart(mang.length)
  }
  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form action="" className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <input type="text" className="form-control border-0" placeholder="Search" />
              </form>
            </div>

            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <a href="index.html" className="js-logo-clone">Shoppers</a>
              </div>
            </div>

            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul>

                  <li className=" dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="#"><span style={{fontSize:'25px',marginTop:'10px'}} className="icon icon-person "> </span><span> {user.name} </span> </a></li>
                    {user?<div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Thông tin cá nhân</a>
                      <a className="dropdown-item" href="#">Đơn hàng</a>
                      {user.role==2 ?
                        <Link className="dropdown-item" to="/Admin/">Quản trị website</Link>
                      : ''
                      }
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#" onClick={()=>LayTokenDangXuat(token)} >Đăng xuất</a>
                    </div>:<div className="dropdown-menu">
                      <Link className="dropdown-item" to="/Auth/Login">Đăng Nhập</Link>
                    </div>}



                  <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                  <li>
                    <Link to="/Store/Cart"  className="site-cart">
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">{cart?(cart>0?cart:0):(!TotalCart?0:TotalCart)}</span>
                    </Link>
                  </li>
                  <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li >
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="has-children">
              <Link to="/Store/shop">SẢN PHẨM</Link>
              <ul className="dropdown">
                {categories&&categories.map((category,index)=>
                  category.id==0?'':
                  <li key={index}><Link to={`/Store/Category/${category.id}`} onClick={()=>dispatch(getProductCategory(category.id))}>{category.name_category}</Link></li>
                )}
              </ul>
            </li>
            <li>
              <Link to="/Store/Post">Bài viết</Link>
            </li>
            <li> <Link to="/Store/Contact">Liên hệ</Link></li>
          </ul>
        </div>
      </nav>
    </header> 
  )
}

Header.propTypes = {

}

export default Header
