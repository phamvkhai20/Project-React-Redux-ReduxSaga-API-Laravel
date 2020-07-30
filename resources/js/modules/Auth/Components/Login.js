import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Login({LayThongTinDangNhap}) {

    const Err = useSelector(state => state.auth.error);
    
    const [DataLogin, setDataLogin] = useState({});
    const onHandleChange= (e) =>{
        const {name,value} = e.target;
        setDataLogin({...DataLogin,[name]:value});
    }
    const onHandleSubmit=(DataLogin)=>{
        LayThongTinDangNhap(DataLogin);
    }
    return (
        <div className="wrappers">
                <div className="containers">
                    <h1 style={{color:"#fff"}}>Đăng nhập</h1>
                    <small style={{fontSize:'20px',color:"red"}}>{Err?Err:''}</small>
                    <form className="form" onSubmit={(e)=>{onHandleSubmit(DataLogin),e.preventDefault()}}>
                        <input className="login" name="email" type="text" onChange={onHandleChange} placeholder="Email" />
                        <input className="login" name="password" onChange={onHandleChange} type="password" placeholder="Password" />
                        <button className="button" type="submit">Login</button>
                        <Link to="/Auth/Register" className="nav-link" style={{color:"#fff",paddingTop:"20px"}} >Chưa có tài khoản - <b>Đăng Kí</b></Link>
                    </form>
                </div>

                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

        </div>
    )
}

Login.propTypes = {

}

export default Login
