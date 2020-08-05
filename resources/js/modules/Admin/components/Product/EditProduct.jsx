import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProductUpdate, setIsUpdate } from '../../Actions/Product';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditProduct = ({GetProduct,SuaSanPham,GetCategory}) => {
    const productUpdate = useSelector(state => state.product.updateProduct)
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data =>{
        dispatch(setProductUpdate(Product));
        SuaSanPham(Product)
    };
    const categories = useSelector(state => state.category.categories)
    !categories ? GetCategory() :''

    const onHandleOnchange= (e,editor)=>{
        const datas= editor.getData();
        setProduct({...Product,content:datas})
    }


    const { id } = useParams()
    useEffect(() => {
        GetProduct()
    }, [])
    const [Product, setProduct] = useState()
    const ProductAll = useSelector(state => state.product.products)
    if(ProductAll&&!Product){
       const product1= ProductAll.find((p)=> p.id==id )
       if(productUpdate&&productUpdate.id==product1.id){
        setProduct(productUpdate)
       }else {
        setProduct(product1)
       }
    }
    const onHandleChange=(event)=>{
        const {name,value}=event.target;
        setProduct({...Product,[name]:value})
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
                    
                    {Product?
                    <form onSubmit={handleSubmit(onSubmit)} onChange={onHandleChange} className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Sửa sản phẩm</h4>
                                <div className="row">
                            <div className="col-sm-12">
                            <div className="card-box">
                                    <div className="row" >
                                        <div className="col-md-6">
                                            <div className="">

                                                <p className="mb-1 mt-4 font-weight-bold">Tên sản phẩm</p>
                                                <input   type="text"  className="form-control" value={Product.name_product}  name="name_product" 
                                                ref={register({ required: "Không bỏ trống tên sản phẩm",
                                                })} />
                                                <small style={{color:"red"}}>{errors.name_product && errors.name_product.message}</small>
                                                
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Ảnh</p>
                                                    <input   type="text"  name="image" value={Product.image} className="form-control" ref={register({required: true})} />
                                                </div>
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Danh mục</p>
                                                    <select   type="text" className="form-control"  name="category_id"  ref={register({required: true})} >
                                                        
                                                        {categories&&categories.map((cate,index)=> 
                                                            cate.id!==Number(Product.category_id)?<option key={index} value={cate.id} >{cate.name_category}</option>:<option  selected="selected" value={cate.id} >{cate.name_category}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                                <div className="row" >
                                                    <div  className="col-md-6">
                                                    <p className="mb-1 col-md-6 mt-4 font-weight-bold">Giá</p>
                                                    <input   type="number" className="form-control float-left" value={Product.price}  name="price" ref={register({required: true})}/>
                                                    </div>
                                                    <div  className="col-md-6">
                                                    <p className="mb-1 mt-4 font-weight-bold">Giá sale</p>
                                                    <input   type="number" className="form-control float-left" value={Product.old_price}  name="old_price"  ref={register({required: true})} />
                                                    </div>
                                                </div>
                                               
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Mô tả</p>
                                                    <input   type="text" className="form-control"  name="mota" id="placement" value={Product.mota}  ref={register} />
                                                    <small style={{color:"red"}}>{errors.mota && <span>Không bỏ trống mô tả</span>}</small>
                                                </div>
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Số lượng</p>
                                                    <input   type="text" className="form-control"  name="soluong" id="placement" value={Product.soluong}  ref={register} />
                                                    <small style={{color:"red"}}>{errors.mota && <span>Không bỏ trống mô tả</span>}</small>
                                                </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="">
                                                <p className="mb-1 mt-4 font-weight-bold">Mô tả</p>
                                                <CKEditor
                                                    config={{ckfinder: {
                                                            // Upload the images to the server using the CKFinder QuickUpload command.
                                                            uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
                                                            }}}
                                                    data={Product.content}
                                                    editor={ ClassicEditor }
                                                    onChange={onHandleOnchange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <button type="button" className="btn btn-outline-danger btn-rounded waves-light waves-effect w-md">Huỷ</button>
                                <button type="submit" className="btn btn-outline-success btn-rounded waves-light waves-effect w-md">Sửa</button>
                            </div>
                        </div>
                            </div>
                        </div>

                    </form> :''}
                
                </div> 
            </div>
            
        </div>

    )
}

export default EditProduct
