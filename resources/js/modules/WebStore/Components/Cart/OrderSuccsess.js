import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setItemCart } from '../../Actions/Cart'

const OrderSuccsess = props => {
    const trangthai = useSelector(state => state.cart.isOrder)
    const dispatch = useDispatch()
    if(trangthai){
      localStorage.removeItem('cart')
    }
    dispatch(setItemCart(0))
    return (
        <div className="container">
            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Contact</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <span class="icon-check_circle display-3 text-success"></span>
                            <h2 class="display-3 text-black">Thank you!</h2>
                            <p class="lead mb-5"></p>
                            <p><Link to="/" class="btn btn-sm btn-primary">Trở lại cửa hàng</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

OrderSuccsess.propTypes = {

}

export default OrderSuccsess
