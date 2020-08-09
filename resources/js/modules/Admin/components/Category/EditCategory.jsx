import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory, useParams, Link } from "react-router-dom";
import { storage } from '../../../firebase/index'

const EditCategory = ({ tim1DanhMuc, suaCategory }) => {
    let history = useHistory();
    let { id } = useParams()

    const [url, setUrl] = useState("");
    const album = useSelector(state => state.product.album);
    const [AlbumProduct, setAlbumProduct] = useState(album)
    const [pictures, setPictures] = useState();

    const { register, handleSubmit, watch, errors } = useForm();
    const errEditCategory = useSelector(state => state.category.err);
    const onSubmit = data => suaCategory(data);
    const [ValueCategory, setValueCategory] = useState(category)
    const category = useSelector(state => state.category.motCategory)
    category && !ValueCategory && setValueCategory(category)
    useEffect(() => {
        tim1DanhMuc(id)
        setValueCategory(category)
    }, [])
    setTimeout(() => {
        !ValueCategory && tim1DanhMuc(id)
    }, 3000);
    if (ValueCategory && category) {
        (ValueCategory.id !== category.id) && setValueCategory(category)
    }
    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        setValueCategory({ ...ValueCategory, [name]: value })
    }


    const handleChangeImage = e => {
        if (e.target.files[0]) {
        const   pictures=(e.target.files[0])
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
                                <h4 className="header-title">Sửa danh mục</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="row" >
                                            {ValueCategory &&
                                                <div className="col-md">
                                                    
                                                        <div className="">
                                                            <div>
                                                                <p className="mb-1 mt-4 font-weight-bold">Tên danh mục</p>
                                                                <input type="hidden" value={ValueCategory.id} name="id" ref={register} />
                                                                <input onChange={handleChangeEdit} type="text" value={ValueCategory.name_category} name="name_category" className="form-control" id="thresholdconfig" ref={register({ required: true })} />
                                                                <small style={{ color: "red" }}>{errors.name_category && <span>Tên danh mục không để trống</span>}</small>
                                                                <small style={{ color: "red" }}>{errEditCategory && <span>Tên danh mục đã tồn tại</span>}</small>

                                                            </div>
                                                            <div>
                                                                <p className="mb-1 mt-4 font-weight-bold">Tên mô tả</p>
                                                                <input onChange={handleChangeEdit} value={ValueCategory.mota} type="text" name="mota" className="form-control" id="thresholdconfig" ref={register({ required: true })} />
                                                                <small style={{ color: "red" }}>{errors.mota && <span>Mô tả không để trống</span>}</small>
                                                            </div>
                                                        </div>
                                                        <div >
                                                            <p className="mb-1 mt-4 font-weight-bold">Anh</p>
                                                            <small style={{ color: "red" }}>{errors.mota && <span>Ảnh không để trống</span>}</small>
                                                            <input value={url?url:ValueCategory.image} type="hidden" name="image" className="form-control" id="thresholdconfig" ref={register({ required: true })} />
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <button type="button" className="input-group-text" style={{ height: '38px' }} id="inputGroupFileAddon01" onClick={handleUpdateAvatarProduct} >Upload</button>
                                                                </div>
                                                                <div className="custom-file">
                                                                    <input type="file" onChange={handleChangeImage} className="custom-file-input"
                                                                        id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                                    <label className="custom-file-label" >Thêm ảnh vào album</label>
                                                                </div>
                                                                <div className="rounded m-2" style={{
                                                                    backgroundImage: `url(${url?url:ValueCategory.image})`,width: '150px', height: '150px', backgroundSize: 'cover',
                                                                    backgroundRepeat: 'no-repeat', backgroundPosition: "50% 50%"
                                                                }}></div>
                                                            </div>
                                                        </div>
                                                        
                                                   
                                                </div> }
                                            </div>
                                        </div>
                                        <Link to="/Admin/ListCategory" type="button" className="btn btn-outline-danger btn-rounded waves-light waves-effect w-md ml-4">Huỷ</Link>
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

EditCategory.propTypes = {

}

export default EditCategory
