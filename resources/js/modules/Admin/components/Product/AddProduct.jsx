import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useSelector, useDispatch } from 'react-redux';
import { storage } from '../../../firebase/index'
import ImageUploader from "react-images-upload";
import { setImageAlbum } from '../../Actions/Product';


const AddProduct = ({ ThemSanPham, GetCategory }) => {
    const user = useSelector(state => state.auth.infoUser);
    const { register, handleSubmit, watch, errors } = useForm();
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();
    const album = useSelector(state => state.product.album);
    const [AlbumProduct, setAlbumProduct] = useState(album)
    const [pictures, setPictures] = useState();
    const onDrop = picture => {
        picture.map((image)=>{
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {console.log(error); },
                () => { storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            albumImage.push(url)
                            setUrl(url);
                            dispatch(setImageAlbum(albumImage))
                        });
                }
            );
        })
    };
    const [url2, setUrl2] = useState("");
    const handleChange = e => {
        if (e.target.files[0]) {
            const imageAvatar=e.target.files[0];
            const uploadTask = storage.ref(`images/${imageAvatar.name}`).put(imageAvatar);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {console.log(error); },
                () => { storage
                        .ref("images")
                        .child(imageAvatar.name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl2(url);
                        });
                }
            );
        }

    }
    const albumImage = []
    const handleUpdate=()=>{
            
    }
    const handleDeleteImage=(id)=>{
        albumImage.filter((g,index)=>index!==id)

        dispatch(setImageAlbum(album.filter((g,index)=>index!==id)))
    }
    const handleChangPrice=()=>{
        setErrPrice(false)
    }
    const [ErrPrice, setErrPrice] = useState(false)
    const onSubmits = data => {
     if(data.old_price>0) {
         if(data.old_price>data.price||Number(data.price)<0||Number(data.old_price)<0){
            setErrPrice(true)
         }
         else{
            const gopOJB = Object.assign({ album: JSON.stringify(album) }, data,{ image: url2 });
            ThemSanPham(gopOJB);
         }
        }else {
            const gopOJB = Object.assign({ album: JSON.stringify(album) }, data,{ image: url2 });
            ThemSanPham(gopOJB);
        }
    }
    const [value, setvalue] = useState('');

    
    const onHandleOnchange = (e, editor) => {
        const datas = editor.getData();
        setvalue(datas)
    }


    const categories = useSelector(state => state.category.categories)
    !categories ? GetCategory() : ''
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
                    <form onSubmit={handleSubmit(onSubmits)} className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Transactions History</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="row" >
                                                <div className="col-md-6">
                                                    <div className="">

                                                        <p className="mb-1 mt-4 font-weight-bold">Ten san pham</p>

                                                        <input type="hidden" value={user.id} className="form-control" name="user_id"  ref={register} />
                                                        <input type="text" className="form-control" name="name_product" id="defaultconfig" ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                        <small style={{ color: "red" }}>{errors.name_product && <span>Không bỏ trống tên sản phẩm</span>}</small>
                                                        <div className="row" >

                                                            <div className="col-md-6">
                                                                <p className="mb-1 col-md-6 mt-4 font-weight-bold">Giá</p>
                                                                <input type="number" className="form-control float-left" name="price"  onChange={handleChangPrice}  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                                <small style={{ color: "red" }}>{errors.price && <span>Không bỏ trống giá</span>}</small>
                                                                <small style={{ color: "red" }}>{ErrPrice && <span>Giá sale không được cao hơn giá gốc và không được âm</span>}</small>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <p className="mb-1 mt-4 font-weight-bold">Giá sale</p>
                                                                <input type="number" className="form-control float-left" name="old_price" onChange={handleChangPrice} ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                                <small style={{ color: "red" }}>{errors.old_price && <span>Không bỏ trống giá</span>}</small>
                                                                <small style={{ color: "red" }}>{ErrPrice && <span>Giá sale không được cao hơn giá gốc và không được âm</span>}</small>
                                                                
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-1 mt-4 font-weight-bold">Danh Muc</p>
                                                            <select name="category_id" ref={register} className="form-control" >
                                                                {categories && categories.map((cate, index) =>
                                                                    <option key={index} value={cate.id}>{cate.name_category}</option>
                                                                )
                                                                }
                                                            </select>
                                                            <small style={{ color: "red" }}>{errors.category_id && <span>Không bỏ trống danh mục</span>}</small>
                                                        </div>
                                                        <div>
                                                            <p className="mb-1 mt-4 font-weight-bold">Mô tả</p>
                                                            <input type="text" className="form-control" name="mota" id="placement"  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                            <small style={{ color: "red" }}>{errors.mota && <span>Không bỏ trống mô tả</span>}</small>
                                                        </div>
                                                        <div>
                                                            <p className="mb-1 mt-4 font-weight-bold">Số lượng</p>
                                                            <input type="number" className="form-control" name="soluong" id="placement"  ref={register({ validate: (value) => { return !!value.trim() } })} />
                                                            <small style={{ color: "red" }}>{errors.soluong && <span>Không bỏ trống số lượng</span>}</small>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                        <div >
                                                            <p className="mb-1 mt-4 font-weight-bold">Anh</p>
                                                            <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" style={{height:'38px'}} id="inputGroupFileAddon01" >Upload</span>
                                                            </div>
                                                            <div className="custom-file">
                                                                <input type="file" onChange={handleChange} className="custom-file-input"
                                                                 id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                                <label className="custom-file-label" >Thêm ảnh vào album</label>
                                                            </div>
                                                            <div className="rounded m-2" style={{
                                                                backgroundImage: `url(${url2})`, width: '150px', height: '150px', backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat', backgroundPosition: "50% 50%"
                                                            }}></div>
                                                            </div>
                                                        </div>
                                                        <p className="mb-1 mt-4 font-weight-bold">Album</p>
                                                  
                                                    <ImageUploader
                                                        withIcon={true}
                                                        onChange={onDrop}
                                                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                                        maxFileSize={5242880}
                                                    />
                                                    <div className="row">
                                                    {album&&album.map((image,index)=>
                                                            <div className="rounded m-2" key={index} onClick={()=>handleDeleteImage(index)} style={{backgroundImage:`url(${image})`,width:'150px',height:'150px',backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat',
                                                                backgroundPosition: "50% 50%"}}> 
                                                            </div>
                                                    )}
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md">
                                                    <div className="">
                                                        <p className="mb-1 mt-4 font-weight-bold">Chi Tiết</p>
                                                        <CKEditor
                                                        config={{ckfinder: {
                                                            // Upload the images to the server using the CKFinder QuickUpload command.
                                                            uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
                                                            }}}
                                                        editor={ClassicEditor}
                                                        onChange={onHandleOnchange}
                                                        />
                                                        <input type="hidden" className="form-control" value={value} name="content" id="placement" ref={register} />
                                                        <small style={{ color: "red" }}>{errors.content && <span>Không bỏ trống mô tả</span>}</small>
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
