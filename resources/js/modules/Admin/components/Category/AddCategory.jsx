import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const AddCategory = ({ThemDanhMuc}) => {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {ThemDanhMuc(data),errAddCategory&&history.push("/Admin/ListCategory")};
    const errAddCategory = useSelector(state => state.category.err);
    console.log(errAddCategory)
    
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
                                <h4 className="header-title">Thêm danh mục</h4>
                                <div className="row">
                            <div className="col-sm-12">
                            <div className="card-box">
                                    <div className="row" >
                                        <div className="col-md">
                                            <div className="">
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Tên danh mục</p>
                                                    <input  type="text"  name="name_category" className="form-control" id="thresholdconfig" ref={register({required: true})}  />
                                                    <small style={{color:"red"}}>{errors.name_category && <span>Tên danh mục không để trống</span>}</small>
                                                    <small style={{color:"red"}}>{errAddCategory && <span>Tên danh mục đã tồn tại</span>}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-outline-danger btn-rounded waves-light waves-effect w-md ml-4">Huỷ</button>
                                <button type="submit" className="btn btn-success btn-rounded waves-light waves-effect w-md ml-2">Thêm</button>
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

AddCategory.propTypes = {

}

export default AddCategory
