import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { setItemCart } from '../../Actions/Cart';

const Checkout = ({ getProductCart, addCart }) => {
    const user = useSelector(state => state.auth.infoUser);
    const cart = useSelector(state => state.cart.totalProduct)
    const trangthai = useSelector(state => state.cart.isOrder)
    const dispatch = useDispatch();
    const history = useHistory();
    if (trangthai) {
        dispatch(setItemCart(0))
        history.push("/Store/OrderSuccess");
    }
    //////////////////////////////////
    const [Dems, setDems] = useState(0)
    const ojb = localStorage.getItem('cart');
    const mangNew = [];
    const mangHT = []
    const soluongs = []
    const taoMang = "[" + ojb + "]"
    const getItemCartLocalStorage = JSON.parse(taoMang);
    const mang = getItemCartLocalStorage;
    if(mang){
   
    mang.map(cart => {
        mangNew.push(Number(cart.idSP))
        mangHT.push(cart)
    })
    }
    ////////////////////////////////
    useEffect(() => {
        getProductCart(mangNew);
    }, [])
    const [ProductCarts, setProductCart] = useState('')
    const ProductCart = useSelector(state => state.product.productCart);
    if (ProductCart && !Dems) {
        setProductCart(ProductCart)
        setDems(1)
    }
    useEffect(() => {
        setTimeout(function () { setDems(0) }, 1000)
    }, [])
    const [mangTam, setmangTam] = useState(mangHT);
    /////////////////////////////////////////////////
    (mangHT && ProductCarts) && mangHT.map((cart, index) =>
        ProductCarts.map((products) =>
            products.id === Number(cart.idSP) && soluongs.push(cart.soluong * products.price)
    ))
    const tongTien = soluongs.reduce((partial_sum, a) => partial_sum + a, 0)
    ///////////////////////////////////
    ////////////////////////////////////
    const { register, handleSubmit, watch, errors } = useForm();
    const d = new Date();
    const onSubmit = data => {
        const gopMang = Object.assign({ id_user: user?user.id:"0", chi_tiet_don: JSON.stringify(mangHT), tong_tien: tongTien, code: d.getTime() }, data)
        addCart(gopMang)
    };
    return (
        <div className="container">
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <a href="cart.html">Cart</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Checkout</strong></div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_companyname" className="text-black">Họ Tên </label>
                                            <input type="text" className="form-control" id="ho_va_ten" ref={register({ validate: (value) => { return !!value.trim() } })} name="ho_va_ten" />
                                            {errors.ho_va_ten && <mall style={{ color: "red" }}>Không được bỏ trống tên</mall>}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_address" className="text-black">Email <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_address" name="email" ref={register({ validate: (value) => { return !!value.trim() } })} />
                                            {errors.email && <mall style={{ color: "red" }}>Không được bỏ trống email</mall>}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_address" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_address" name="so_dien_thoai" ref={register({ validate: (value) => { return !!value.trim() } })} />
                                            {errors.so_dien_thoai && <mall style={{ color: "red" }}>Không được bỏ trống số điện thoại</mall>}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_address" name="dia_chi" ref={register({ validate: (value) => { return !!value.trim() } })} />
                                            {errors.dia_chi && <mall style={{ color: "red" }}>Không được bỏ trống địa chỉ</mall>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="c_order_notes" className="text-black">Nhắc nhở</label>
                                        <textarea name="chu_thich" id="c_order_notes" cols="30" rows="5" ref={register} className="form-control" placeholder="Write your notes here..."></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <h2 className="h3 mb-3 text-black">Your Order</h2>
                                        <div className="p-3 p-lg-5 border">
                                            <table className="table site-block-order-table mb-5">
                                                <thead>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </thead>
                                                <tbody>
                                                    {(mangHT && ProductCarts) && mangHT.map((cart, index) =>
                                                        ProductCarts.map(p =>
                                                        p.id == Number(cart.idSP) &&
                                                        <tr key={index}>
                                                            <td style={{ width: '300px' }}><strong className="mx-2"> <span>{p.name_product}</span>x</strong>{cart.soluong}</td>
                                                            <td>{(cart.soluong * p.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <td className="text-black font-weight-bold"><strong>Tổng tiền</strong></td>
                                                        <td className="text-black font-weight-bold"><strong>{tongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</strong></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-lg py-3 btn-block">Đặt hàng</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Checkout
