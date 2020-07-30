import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProductUpdate, setIsUpdate } from '../../Actions/Product';

const EditProduct = ({GetProduct,SuaSanPham}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data =>{ dispatch(setProductUpdate(Product));SuaSanPham(Product)};
    const { id } = useParams()
    useEffect(() => {
        GetProduct()
    }, [])
    const [Product, setProduct] = useState()
    const ProductAll = useSelector(state => state.product.products)
    if(ProductAll&&!Product){
       const product1= ProductAll.find((p)=> p.id==id )
       setProduct(product1)
    }
    const onHandleChange=(event)=>{
        const {name,value}=event.target;
        setProduct({...Product,[name]:value})
        console.log(Product)
    }
     $(document).ready(function () {
                if($("#elm1").length > 0){
                    tinymce.init({
                        selector: "textarea#elm1",
                        theme: "modern",
                        height:300,
                        plugins: [
                            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                            "save table contextmenu directionality emoticons template paste textcolor"
                        ],
                        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
                        style_formats: [
                            {title: 'Bold text', inline: 'b'},
                            {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                            {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                            {title: 'Example 1', inline: 'span', classes: 'example1'},
                            {title: 'Example 2', inline: 'span', classes: 'example2'},
                            {title: 'Table styles'},
                            {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
                        ]
                    });
                }
            });
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
                                <h4 className="header-title">Transactions History</h4>
                                <div className="row">
                            <div className="col-sm-12">
                            <div className="card-box">
                                    <div className="row" >
                                        <div className="col-md-6">
                                            <div className="">

                                                <p className="mb-1 mt-4 font-weight-bold">Tiêu đề</p>
                                               
                                                <input   type="text"  className="form-control" value={Product.name_product}  name="name_product" ref={register({required: true})} />

                                                {errors.tieude && <span>This field is required</span>}


                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Ảnh</p>
                                                    
                                                    <input   type="text"  name="image" value={Product.image} className="form-control" ref={register({required: true})} />
                                                </div>

                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Danh mục</p>
                                                    <select   type="text" className="form-control"  name="category_id"  ref={register({required: true})} >
                                                        <option value={Product.category_id} >{Product.category_id}</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">

                                                <p className="mb-1 mt-4 font-weight-bold">Giá</p>
                                               
                                                <input   type="number" className="form-control" value={Product.price}  name="price" ref={register({required: true})}/>

                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Giá Cũ</p>
                                                    
                                                    <input   type="number" className="form-control" value={Product.old_price}  name="old_price"  ref={register({required: true})} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="">
                                                <p className="mb-1 mt-4 font-weight-bold">Nội dung</p>
                                                <textarea onChange={onHandleChange}  id="elm1" name="content">{Product.content}</textarea>
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
