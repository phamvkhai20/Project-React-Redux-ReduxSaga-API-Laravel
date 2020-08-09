import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAddCate, setIsEditCate } from '../../Actions/Product'

const ListCategory = ({GetCategory,deleteCategory}) => {
    const dispatch = useDispatch()

    const onHandleClickDelete=(id)=>{
        setCategories(categories.filter((cate)=>cate.id!==id))
        deleteCategory(id)}
    const isEditCategory = useSelector(state => state.category.isEditCategory)
    const isAddCate = useSelector(state => state.category.isAddCate);
    const trangthai= useSelector(state=>state.cart.categoryAddNew);
    const [categories, setCategories] = useState()
    const [Dems, setDems] = useState(0)
    if(!Dems&&isAddCate){
        GetCategory();
        setCategories(cate)
        setDems(1)
    }
    console.log(isEditCategory,isAddCate)
    if(!Dems&&isEditCategory){
        GetCategory();
        setCategories(cate)
        setDems(1)
    }
    setTimeout(() => {
        setDems(0)
        dispatch(setIsAddCate())
        dispatch(setIsEditCate())
    }, 2000);
    const cate = useSelector(state => state.category.categories)
    cate&&!categories ?setCategories(cate):''
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
                                <h4 className="header-title">Danh sách danh mục</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive">
                                                <table id="mainTable" className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th><th>Ảnh</th><th>Tên danh mục</th><th>Mô tả</th><th>Số sản phẩm</th><th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                      {categories&&categories.map((cate,index)=>
                                                      <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td><img src={cate.image} style={{width:'100px'}} /></td>
                                                            <td>{cate.name_category}</td>
                                                            <td>{cate.mota}</td>
                                                            <td>{cate.product.length}</td>  
                                                            {cate.id!==0?
                                                            <td>
                                                                <button onClick={()=>onHandleClickDelete(cate.id)} className="btn btn-danger mr-3">Xóa</button>
                                                                <Link to={`/Admin/Category/${cate.id}`} className="btn btn-primary">Sửa</Link>
                                                            </td>:<td></td>
                                                            }
                                                      </tr>
                                                      )}
                                                    </tbody>
                                                    <tfoot>
                                                    </tfoot>
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

export default ListCategory
