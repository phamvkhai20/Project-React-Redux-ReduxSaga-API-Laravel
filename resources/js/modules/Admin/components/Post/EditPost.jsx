import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { setIsAddCate } from '../../Actions/Product';
import { storage } from '../../../firebase/index'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditPost = ({suaPost,tim1BaiViet}) => {
     /////GetPost
    const { id } = useParams()
    useEffect(() => {
        tim1BaiViet(id)
    }, [])
    const dispatch = useDispatch();
    const getPost = useSelector(state => state.post.getPost);
    const [StatePost, setStatePost] = useState();   
    (!StatePost&&getPost)&&setStatePost(getPost);
    //////image
    const [url, setUrl] = useState("");
    //////////////////////////////////////////////////
    const history = useHistory();
    const errAddPost = useSelector(state => state.category.errAddCarts);
    const [errs, seterrs] = useState(errAddPost)
    const err = useSelector(state => state.category.err);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        // const gopData= Object.assign(data,{image:url})
        suaPost(data,id)
        errAddPost && seterrs(errAddPost)
    };
    const [value, setvalue] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStatePost({...StatePost,[name]: value})
        seterrs(null)
    }


    const handleChangeEdit=(e)=>{
        const { name, value } = e.target;
        setStatePost({...StatePost,[name]: value})
    }
    //////post image
    const handleChangeImage = e => {
        if (e.target.files[0]) {
            const pictures=e.target.files[0]
            const uploadTask = storage.ref(`images/${pictures.name}`).put(pictures);
            console.log(uploadTask)
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => { console.log(error); },
                () => {
                    storage
                        .ref("images")
                    .child(pictures.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
                }
            );
        }
    }
    ////editor
    const [valueEditor, setvalueEditor] = useState('');
    const onHandleOnchange = (e, editor) => {
        const datas = editor.getData();
        setvalueEditor(datas)
    }
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
                                                {StatePost&&<div className="col-md">
                                                    <div className="">
                                                    <input type="hidden" name="user_id" value={StatePost.user_id}  className="form-control" id="thresholdconfig" ref={register} />

                                                        <div>
                                                            <p className="mb-1 mt-4 font-weight-bold">Tiêu đề</p>
                                                            <input onChange={handleChange}  type="text" value={StatePost.tieude} name="tieude" className="form-control" id="thresholdconfig"  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                            <small style={{ color: "red" }}>{errors.tieude && <span>Tiêu đề không để trống</span>}</small>
                                                        </div>
                                                        <div>
                                                            <p className="mb-1 mt-4 font-weight-bold">Mô tả</p>
                                                            <input onChange={handleChange} type="text"  value={StatePost.mo_ta}  name="mo_ta" className="form-control" id="thresholdconfig"  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                            <small style={{ color: "red" }}>{errors.mo_ta && <span>Mô tả không để trống</span>}</small>
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <p className="mb-1 mt-4 font-weight-bold">Anh</p>
                                                        <small style={{ color: "red" }}>{errors.anh && <span>Ảnh không để trống</span>}</small>

                                                        <div className="input-group mb-3">
                                                        <input  value={url?url:StatePost.anh} type="hidden" name="anh" className="form-control" id="thresholdconfig"  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                            <div className="input-group-prepend">
                                                                <button type="button" className="input-group-text" style={{ height: '38px' }} id="inputGroupFileAddon01"  >Upload</button>
                                                            </div>
                                                            <div className="custom-file">
                                                                <input type="file" onChange={handleChangeImage} className="custom-file-input"
                                                                    id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                                <label className="custom-file-label" >Thêm ảnh vào album</label>
                                                            </div>
                                                            <div className="rounded m-2" style={{
                                                                backgroundImage: `url(${url?url:StatePost.anh})`, width: '150px', height: '150px', backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat', backgroundPosition: "50% 50%"
                                                            }}></div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Nội Dung</p>
                                                    <small style={{ color: "red" }}>{errors.noi_dung && <span>Ảnh không để trống</span>}</small>
                                                    <CKEditor
                                                        data={StatePost.noi_dung}
                                                        config={{ckfinder: {
                                                            // Upload the images to the server using the CKFinder QuickUpload command.
                                                            uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
                                                            }}}
                                                        editor={ClassicEditor}
                                                        onChange={onHandleOnchange}
                                                        />
                                                        <input type="hidden" onChange={handleChangeImage}  className="form-control" value={valueEditor?valueEditor:StatePost.mo_ta} name="noi_dung" id="placement" ref={register} />
                                                    
                                                </div>}
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

export default EditPost
