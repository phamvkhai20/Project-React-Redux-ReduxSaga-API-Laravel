import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { setIsAdd } from '../../Actions/Product';
import { useDispatch } from 'react-redux';
import '../../../../asset/product/js/metisMenu.min'
const Sidebar = props => {
    const dispatch = useDispatch();
    const onHandleClick = () => {
        dispatch(setIsAdd())
    }
    return (
        <div className="left side-menu">
            <div className="slimscroll-menu" id="remove-scroll">
                <div id="sidebar-menu">
                    <ul className="metismenu" id="side-menu">
                        <li>
                            <Link to="/Admin/"><i className="fi-briefcase"></i> <span> Dashboard </span></Link>
                        </li>
                        <li className="menu-title">Navigation</li>
                        <li>
                            <a href="# " onClick={e => { void (0), e.preventDefault() }}><i className="fi-briefcase"></i> <span>Danh Mục</span> <span className="menu-arrow"></span></a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li><Link to="/Admin/ListCategory">Danh sách</Link></li>
                                <li> <Link to="/Admin/AddCategory">Thêm danh mục</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="# " onClick={e => { void (0), e.preventDefault() }}><i className="fi-briefcase"></i> <span>Bài viết</span> <span className="menu-arrow"></span></a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li><Link to="/Admin/ListPost">Danh sách</Link></li>
                                <li> <Link to="/Admin/AddPost">Thêm bài viết</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="# " onClick={e => { void (0), e.preventDefault() }}><i className="fi-briefcase"></i> <span> Sản phẩm </span> <span className="menu-arrow"></span></a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li><Link to="/Admin/ListProduct">Danh sách</Link></li>
                                <li> <Link to="/Admin/AddProduct" onClick={onHandleClick}>Thêm sản phẩm</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="# " onClick={e => { void (0), e.preventDefault() }}><i className="fi-briefcase"></i> <span>Đơn hàng</span> <span className="menu-arrow"></span></a>
                            <ul className="nav-second-level" aria-expanded="false">
                                <li><Link to="/Admin/ListOrders">Danh sách</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Store/"><i className="fi-briefcase"></i> <span> Xem Website </span></Link>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>

        </div>
    )
}
Sidebar.propTypes = {

}
export default Sidebar
