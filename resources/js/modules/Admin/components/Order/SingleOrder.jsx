import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {resetIsEdit, resetIsAdd } from '../../Actions/Product';
import Swal from 'sweetalert2'
const SingleOrder = ({tim1DonHang,getProductCart}) => {
    const { id } = useParams()
    useEffect(() => {
        tim1DonHang(id)
    }, [])

    const order = useSelector(state => state.order.getOrder)
    const onHandleClickDeleteProduct=(id)=>{
    }
    const mangNew=[]
    const [ChiTietDon, setChiTietDon] = useState()
    order&&!ChiTietDon&&setChiTietDon(JSON.parse(order.chi_tiet_don))
    if(order){
    const donHangJson=JSON.parse(order.chi_tiet_don);
        donHangJson.map(cart =>
          {
          mangNew.push(Number(cart.idSP))
          }
        )
    };
    const ProductCart = useSelector(state => state.product.productCart);
    (mangNew&&!ProductCart)&& getProductCart(mangNew)
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
                                                            <th>ID</th><th>Anh</th><th>Ten San pham</th><th>So luong</th><th>gia</th><th>thanh tien</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {ChiTietDon&&ProductCart&&ChiTietDon.map((cart,index)=>
                                                        ProductCart.map((products)=>
                                                        products.id===Number(cart.idSP)&&
                                                        <tr key={index}>
                                                            <td >
                                                            <img src={products.image} alt="Image" style={{width:'120px'}} className="img-fluid" />
                                                            </td>
                                                            <td >
                                                            <Link to={`/Store/Product/${products.id}`}>
                                                            <h4 className="h5 text-black" style={{width:'430px'}}>{products.name_product}</h4>
                                                            </Link>
                                                            </td>
                                                            <td>{products.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>
                                                            <td>
                                                            {cart.soluong}
                                                            </td>
                                                            <td>{(products.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>
                                                            <td>{(products.price*cart.soluong).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>
                                                        </tr>
                                                        )
                                                    )
                                                    }
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

export default SingleOrder
