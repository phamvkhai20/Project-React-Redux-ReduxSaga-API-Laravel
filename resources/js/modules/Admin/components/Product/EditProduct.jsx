import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProductUpdate, setIsUpdate, setImageAlbum } from '../../Actions/Product';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { storage } from '../../../firebase/index'
import ImageUploader from "react-images-upload";

const EditProduct = ({ GetProduct, SuaSanPham, GetCategory }) => {
    const productUpdate = useSelector(state => state.product.updateProduct)
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(setProductUpdate(Product));
        if(url2){
            const gopImage=Object.assign({image:url2},Product)
            SuaSanPham(gopImage)
        }else{
            SuaSanPham(Product)
        }
        
    };
    const categories = useSelector(state => state.category.categories)
    !categories ? GetCategory() : ''

    const { id } = useParams()
    useEffect(() => {
        GetProduct()
    }, [])
    const [Product, setProduct] = useState()
    const ProductAll = useSelector(state => state.product.products)
    if (ProductAll && !Product) {
        const product1 = ProductAll.find((p) => p.id == id)
        if (productUpdate && productUpdate.id == product1.id) {
            setProduct(productUpdate)
        } else {
            setProduct(product1)
        }
    }
    const [value, setvalue] = useState('');


    const onHandleOnchange = (e, editor) => {
        const datas = editor.getData();
        setvalue(datas)
    }



    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...Product, [name]: value })
    }
    //////img
    const [url2, setUrl2] = useState("");
    const [url, setUrl] = useState("");
    const handleChange = e => {
        if (e.target.files[0]) {
            const imageAvatar = e.target.files[0];
            const uploadTask = storage.ref(`images/${imageAvatar.name}`).put(imageAvatar);
            console.log(uploadTask)
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => { console.log(error); },
                () => {
                    storage
                        .ref("images")
                    .child(imageAvatar.name)
                    .getDownloadURL()
                    .then(url => {
                        setProduct({...Product,image:url})
                        setUrl2(url);
                    });
                }
            );
        }

    }
    ///album
    const albumImage = []
    const handleUpdate=()=>{
            
    }
    const handleDeleteImage=(id)=>{
        albumImage.filter((g,index)=>index!==id)
        dispatch(setImageAlbum(album.filter((g,index)=>index!==id)))
    }
    const album = useSelector(state => state.product.album);
    const [AlbumProduct, setAlbumProduct] = useState(album)
    const [pictures, setPictures] = useState();
    const onDrop = picture => {
        picture.map((image) => {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => { console.log(error); },
                () => {
                    storage
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

                    {Product ?

                        <form onSubmit={handleSubmit(onSubmit)} onChange={onHandleChange} className="row">
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

                                                            <input type="text" className="form-control" value={Product.name_product} name="name_product" id="defaultconfig" ref={register({ required: true })} />
                                                            <small style={{ color: "red" }}>{errors.name_product && <span>Không bỏ trống tên sản phẩm</span>}</small>
                                                            <div className="row" >

                                                                <div className="col-md-6">
                                                                    <p className="mb-1 col-md-6 mt-4 font-weight-bold">Giá</p>
                                                                    <input type="number" className="form-control float-left" value={Product.price} name="price" ref={register({ required: true })} />
                                                                    <small style={{ color: "red" }}>{errors.price && <span>Không bỏ trống giá</span>}</small>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <p className="mb-1 mt-4 font-weight-bold">Giá sale</p>
                                                                    <input type="number" className="form-control float-left" value={Product.old_price} name="old_price" ref={register({ required: true })} />
                                                                    <small style={{ color: "red" }}>{errors.old_price && <span>Không bỏ trống giá</span>}</small>

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="mb-1 mt-4 font-weight-bold">Danh mục</p>
                                                                <select type="text" className="form-control" name="category_id" ref={register({ required: true })} >

                                                                    {categories && categories.map((cate, index) =>
                                                                        cate.id !== Number(Product.category_id) ?
                                                                            <option key={index} value={cate.id} >{cate.name_category}</option>
                                                                            : <option selected="selected" value={cate.id} >{cate.name_category}</option>
                                                                    )}
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <p className="mb-1 mt-4 font-weight-bold">Mô tả</p>
                                                                <input type="text" className="form-control" name="mota" id="placement" value={Product.mota} ref={register({ required: true })} />
                                                                <small style={{ color: "red" }}>{errors.mota && <span>Không bỏ trống mô tả</span>}</small>
                                                            </div>
                                                            <div>
                                                                <p className="mb-1 mt-4 font-weight-bold">Số lượng</p>
                                                                <input type="text" className="form-control" name="soluong" value={Product.soluong} id="placement" ref={register({ required: true })} />
                                                                <small style={{ color: "red" }}>{errors.soluong && <span>Không bỏ trống số lượng</span>}</small>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div >
                                                            <input type="text" className="form-control" name="image" value={url2?url2:Product.image} id="placement" ref={register} />
                                                            <p className="mb-1 mt-4 font-weight-bold">Anh</p>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text" style={{ height: '38px' }} id="inputGroupFileAddon01" >Upload</span>
                                                                </div>
                                                                <div className="custom-file">
                                                                    <input type="file" onChange={handleChange} className="custom-file-input"
                                                                        id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                                    <label className="custom-file-label" >Thêm ảnh vào album</label>
                                                                </div>
                                                                <div className="rounded m-2" style={{
                                                                    backgroundImage: `url(${url2?url2:Product.image})`, width: '150px', height: '150px', backgroundSize: 'cover',
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
                                                        <input type="text" className="form-control" name="album" value={album?JSON.stringify(album):Product.album} id="placement" ref={register} />

                                                            {album?
                                                                album && album.map((image, index) =>
                                                                <div className="rounded m-2" key={index} onClick={() => handleDeleteImage(index)} style={{
                                                                    backgroundImage: `url(${image})`, width: '150px', height: '150px', backgroundSize: 'cover',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundPosition: "50% 50%"
                                                                }}>
                                                                </div>
                                                            ):
                                                                Product.album && JSON.parse(Product.album).map((image, index) =>
                                                                <div className="rounded m-2" key={index} onClick={() => handleDeleteImage(index)} style={{
                                                                    backgroundImage: `url(${image})`, width: '150px', height: '150px', backgroundSize: 'cover',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundPosition: "50% 50%"
                                                                }}>
                                                                </div>
                                                            )}
                                                        </div>

                                                    </div>

                                                    <div className="col-md">
                                                        <div className="">
                                                            <p className="mb-1 mt-4 font-weight-bold">Chi Tiết</p>
                                                            <CKEditor
                                                                config={{
                                                                    ckfinder: {
                                                                        // Upload the images to the server using the CKFinder QuickUpload command.
                                                                        uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
                                                                    }
                                                                }}
                                                                editor={ClassicEditor}
                                                                data={Product.content}
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




                        : ''}

                </div>
            </div>

        </div>

    )
}

export default EditProduct
