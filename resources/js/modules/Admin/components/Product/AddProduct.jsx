import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
const AddProduct = props => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
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
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Transactions History</h4>
                                <div className="row">
                            <div className="col-sm-12">
                            <div className="card-box">
                                    <div className="row" >
                                        <div className="col-md-6">
                                            <div className="">

                                                <p className="mb-1 mt-4 font-weight-bold">Tiêu đề</p>
                                               
                                                <input   type="text"  className="form-control"  name="tieude" id="defaultconfig" ref={register({required: true})} />

                                                {errors.tieude && <span>This field is required</span>}


                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Nội Dung</p>
                                                    
                                                    <input   type="text"  name="noidung" className="form-control" id="thresholdconfig" ref={register({required: true})} />
                                                </div>

                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Màu Sắc</p>
                                                    <input   type="text" className="form-control"  name="mausac" id="alloptions" ref={register({required: true})} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">

                                                <p className="mb-1 mt-4 font-weight-bold">Giá</p>
                                               
                                                <input   type="text" className="form-control"  name="gia" id="placement" ref={register({required: true})}/>

                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Giá Cũ</p>
                                                    
                                                    <input   type="text" className="form-control"  name="giacu" id="placement" ref={register({required: true})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <button type="button" className="btn btn-outline-danger btn-rounded waves-light waves-effect w-md">Huỷ</button>
                                <button type="submit" className="btn btn-outline-success btn-rounded waves-light waves-effect w-md">Thêm</button>
                            </div>
                        </div>
                            </div>
                        </div>

                    </form>
                
                </div> 
            </div>
        </div>

    )
}

AddProduct.propTypes = {

}

export default AddProduct
