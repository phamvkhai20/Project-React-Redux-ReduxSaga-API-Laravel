import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';
function Register({LayThongDangKi}){
    const err = useSelector(state => state.auth.errorDangKi)
    const isDangKi = useSelector(state => state.auth.isdangki);

    function Redirect() {
        window.location="Login";
    }
    function checkAuth() {
        window.location="/";
    }
    localStorage.getItem("access_token") === null ?'':checkAuth();
    isDangKi? Redirect():''

    const [DataDangKi, setDataDangKi] = useState({role:'1',status:"true"});
    const onHandleChangeForm= (e)=>{
        const {name,value}= e.target;
        setDataDangKi({...DataDangKi,[name]:value});
        console.log(DataDangKi);
    }
    const onHandleSubmit = (value)=>{
        LayThongDangKi(value);

    }
    return (
        <div className="wrappers">
            <link rel="stylesheet" href="{{ asset('dist/style.css') }}" />
                <div className="containers">
                    <h1 style={{color:"#fff"}}>Đăng Kí Tài Khoản</h1>
                    <form className="form" onChange={onHandleChangeForm} onSubmit={(e)=>{onHandleSubmit(DataDangKi),e.preventDefault()}}> 
                        <input className="login"  name="name" type="text" placeholder="Username" />
                        <small style={{color:'red'}}> {err.name}</small>
                        <input className="login"  name="email" type="text" placeholder="email" />
                        <small style={{color:'red'}}> {err.email}</small>
                        <input className="login" name="password" type="password" placeholder="Password" />
                        <small style={{color:'red'}}> {err.password}</small>
                        <input className="login"  name="cf_password" type="password" placeholder="Confirm Password" />
                        <small style={{color:'red'}}> {err.cf_password}</small>
                        <br></br>
                        <button className="button" type="submit" >Đăng Kí</button><br></br>
                        <Link to="/Auth/Login" className="nav-link " style={{color:"#fff",paddingTop:"20px"}} >Đã có tài khoản - <b>Đăng Nhập</b></Link>
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
                    <li></li><li></li>
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
                <script src="{{ asset('dist/script.js') }}"></script>

        </div>
    )
}

Register.propTypes = {

            }

export default Register
