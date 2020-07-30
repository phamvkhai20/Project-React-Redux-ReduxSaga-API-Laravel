import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
const Header = ({ LayTokenDangXuat }) => {
    const token = localStorage.getItem('access_token');
    const user = useSelector(state => state.auth.infoUser);
    return (
        <div className="topbar">
            <div className="topbar-left">
                <a href="index.html" className="logo" >
                    <span>
                        <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="" height="47" />
                    </span>
                    
                </a>
            </div>
            <nav className="navbar-custom">
                <ul className="list-unstyled topbar-right-menu float-right mb-0">
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                            <img src="https://www.ruaanhgiare.com/wp-content/uploads/2018/03/anh-the-3x4.jpg" alt="user" className="rounded-circle" /> <span className="ml-1">{user.name} <i className="mdi mdi-chevron-down"></i> </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <div className="dropdown-item noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a onClick={e => { void (0), e.preventDefault() }} className="dropdown-item notify-item">
                                <i className="fi-head"></i> <span>My Account</span>
                            </a>

                            <a onClick={e => { void (0), e.preventDefault() }} className="dropdown-item notify-item">
                                <i className="fi-cog"></i> <span>Settings</span>
                            </a>

                            <a onClick={e => { void (0), e.preventDefault() }} className="dropdown-item notify-item">
                                <i className="fi-help"></i> <span>Support</span>
                            </a>

                            <a onClick={e => { void (0), e.preventDefault() }} className="dropdown-item notify-item">
                                <i className="fi-lock"></i> <span>Lock Screen</span>
                            </a>
                            <button onClick={()=>LayTokenDangXuat(token)} className="dropdown-item notify-item">
                                <i className="fi-power"></i> <span>Logout</span>
                            </button>

                        </div>
                    </li>

                </ul>
                <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                        <button className="button-menu-mobile open-left waves-light waves-effect">
                            <i className="dripicons-menu"></i>
                        </button>
                    </li>

                </ul>

            </nav>

        </div>
    )
}

Header.propTypes = {

}

export default Header
