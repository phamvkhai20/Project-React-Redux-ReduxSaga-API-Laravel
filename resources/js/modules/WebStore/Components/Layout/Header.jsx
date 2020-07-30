import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = props => {
  const user = useSelector(state => state.auth.infoUser);
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
                  <li className=" dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="#"><span className="icon icon-person "></span></a></li>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Thông tin cá nhân</a>
                      <a className="dropdown-item" href="#">Đơn hàng</a>
                      {user.role==2 ?
                        <Link className="dropdown-item" to="/Admin/ListProduct">Quản trị website</Link>
                      : ''
                      }
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Đăng xuất</a>
                    </div>
                  <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                  <li>
                    <a href="cart.html" className="site-cart">
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">2</span>
                    </a>
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
            <li className=" active">
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="has-children">
              <a href="about.html">SẢN PHẨM</a>
              <ul className="dropdown">
                <li><a href="#">Menu One</a></li>
                <li><a href="#">Menu Two</a></li>
                <li><a href="#">Menu Three</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Giới thiệu</a></li>
            <li><a href="contact.html">Liên hệ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {

}

export default Header
