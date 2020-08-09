import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'

const Contact = ({guiContact}) => {
    let history = useHistory()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>
    {
        guiContact(data)
        history.push('/Store/OrderSuccess')
    };
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
                        <div class="col-md">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="p-3 p-lg-5 border">
                                <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_subject" class="text-black">Họ và tên </label>
                                            <input type="text" class="form-control" id="c_subject"   ref={register({ validate: (value) => { return !!value.trim() } })}  name="ho_ten" />
                                            {errors.ho_ten && <span style={{color:"red"}}>Không được bỏ trống</span>}
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" id="c_email"   ref={register({ validate: (value) => { return !!value.trim() } })}  name="email" placeholder="" />
                                            {errors.email && <span style={{color:"red"}}>Không được bỏ trống</span>}
                                        
                                        </div>
                                    </div>
                                  
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_email" class="text-black">Số điện thoai <span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="c_email"  ref={register({ validate: (value) => { return !!value.trim() } })}  name="so_dien_thoai" placeholder="" />
                                            {errors.so_dien_thoai && <span style={{color:"red"}}>Không được bỏ trống</span>}
                                        </div>
                                    </div>
                                  

                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <label for="c_message" class="text-black">Nội dung </label>
                                            <textarea name="tin_nhan" id="c_message" cols="30"   ref={register({ validate: (value) => { return !!value.trim() } })}  rows="7" class="form-control"></textarea>
                                            {errors.tin_nhan && <span style={{color:"red"}}>Không được bỏ trống</span>}
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-12">
                                            <input type="submit" class="btn btn-primary btn-lg btn-block" value="Gửi liên hệ" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact
