import React from 'react'
import PropTypes from 'prop-types'

const Checkout = props => {
    return (
        <div className="container">
            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <a href="cart.html">Cart</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Checkout</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-5 mb-md-0">
                            <h2 class="h3 mb-3 text-black">Billing Details</h2>
                            <div class="p-3 p-lg-5 border">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_companyname" class="text-black">Họ Tên </label>
                                        <input type="text" class="form-control" id="c_companyname" name="c_companyname" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_address" class="text-black">Email <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="c_address" name="c_address" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_address" class="text-black">Số điện thoại <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="c_address" name="c_address" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_address" class="text-black">Địa chỉ <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="c_address" name="c_address" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="c_order_notes" class="text-black">Order Notes</label>
                                    <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" class="form-control" placeholder="Write your notes here..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <h2 class="h3 mb-3 text-black">Your Order</h2>
                                    <div class="p-3 p-lg-5 border">
                                        <table class="table site-block-order-table mb-5">
                                            <thead>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Top Up T-Shirt <strong class="mx-2">x</strong> 1</td>
                                                    <td>$250.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Polo Shirt <strong class="mx-2">x</strong>   1</td>
                                                    <td>$100.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                    <td class="text-black">$350.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                    <td class="text-black font-weight-bold"><strong>$350.00</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="form-group">
                                            <button class="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='thankyou.html'">Đặt hàng</button>
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
export default Checkout
