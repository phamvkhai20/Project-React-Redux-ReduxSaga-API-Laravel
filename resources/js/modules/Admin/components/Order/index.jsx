import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {resetIsEdit, resetIsAdd } from '../../Actions/Product';
import Swal from 'sweetalert2'
const ListOrder = ({getOders}) => {
    useEffect(() => {
        getOders()
    }, [])
    const orders = useSelector(state => state.order.orders)
    const onHandleClickDeleteProduct=(id)=>{
    }
    return (
        <div className="content-page">
            <div className="content">
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <h4 className="page-title float-left">Dashboard</h4>
                                <ol className="breadcrumb float-right">
                                    <li className="breadcrumb-item"><a href="#">Abstack</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Danh sách đơn hàng</h4>
                              
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive">
                                                <table id="mainTable" className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th><th>Name</th><th>email</th><th>Địa chỉ</th><th>Tổng tiền</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {orders&&orders.map((order,index)=>
                                                      <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{order.ho_va_ten}</td>
                                                            <td>{order.email}</td>
                                                            <td>{order.dia_chi}</td>
                                                            <td>{order.tong_tien.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} Vnđ</td>
                                                            <td>
                                                                <Link to={`/Admin/SingleOrder/${order.id}`} className="btn btn-primary">Xem</Link>
                                                            </td>
                                                      </tr>
                                                      )}
                                                    </tbody>
                                                    <tfoot>
                                                    
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListOrder
