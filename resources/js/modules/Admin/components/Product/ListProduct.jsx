import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Data from '../../Api/product.json'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setIsUpdate } from '../../Actions/Product';
const ListProduct = ({GetProduct, deleteProduct}) => {
    const tokens = useSelector(state => state.token.tokens);
    const ProductAll = useSelector(state => state.product.products);
    const [itemProducts, setitemProducts] = useState(ProductAll)
    const onHandleDelete= (id)=>{
        setitemProducts(itemProducts.filter((item)=>item.id!==id));
        deleteProduct(id,tokens)
    }
    const isUpdate = useSelector(state => state.product.isUpdateProduct)
    const dispatch= useDispatch()
    const onHandleClick=()=>{
        dispatch(setIsUpdate())
    }
    useEffect(() => {
        setTimeout(function(){onHandleClick()},7000)
    }, [])
    console.log(isUpdate)
    const productUpdate = useSelector(state => state.product.updateProduct)
    // isUpdate ? itemProducts.splice(1,4,product) : ''
    return (
        <div className="content-page">
            <div className="content">
                <div className="container-fluid" >

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
                    <div className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Danh sách sản phẩm</h4>
                                {
                                    isUpdate  ?  
                                    <div className="alert alert-success" role="alert">
                                    Sửa sản phẩm thành công !
                                    </div> :''
                                }
                                    
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive">
                                                <table id="mainTable" className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Price sale</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {itemProducts? itemProducts.map((product, index)=>
                                                            productUpdate.id== product.id? 
                                                        <tr key={index}>
                                                                <td>{productUpdate.id}</td><td>{productUpdate.name_product}</td><td><img style={{width:'60px'}} src={productUpdate.image}/></td><td>{productUpdate.price}</td><td>{productUpdate.old_price}</td><td>
                                                                    <Link className="btn btn-primary" onClick={onHandleClick} to={`/Admin/Product/${productUpdate.id}`} >Sửa</Link>
                                                                    <button className="btn btn-warning ml-2" onClick={()=>onHandleDelete(productUpdate.id)}>Xóa</button>
                                                                </td>
                                                        </tr>
                                                        :
                                                        <tr key={index}>
                                                                <td>{product.id}</td><td>{product.name_product}</td><td><img style={{width:'60px'}} src={product.image}/></td><td>{product.price}</td><td>{product.old_price}</td><td>
                                                                    <Link className="btn btn-primary" onClick={onHandleClick} to={`/Admin/Product/${product.id}`} >Sửa</Link>
                                                                    <button className="btn btn-warning ml-2" onClick={()=>onHandleDelete(product.id)}>Xóa</button>
                                                                </td>
                                                        </tr>
                                                        ):<h4>Loading</h4>
                                                        }
                                                    </tbody>
                                                    
                                                </table>
                                            </div>
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

export default ListProduct
