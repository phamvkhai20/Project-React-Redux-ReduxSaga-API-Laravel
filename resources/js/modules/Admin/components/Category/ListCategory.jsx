import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ListCategory = ({GetCategory,deleteCategory}) => {
    useEffect(() => {
        GetCategory();
    }, [])
    const onHandleClickDelete=(id)=>{
        setCategories(categories.filter((cate)=>cate.id!==id))
        deleteCategory(id)
    }
    const cate = useSelector(state => state.category.categories)
    const [categories, setCategories] = useState()
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
                                                            <th>#</th><th>Name</th><th>Total product</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                      {categories&&categories.map((cate,index)=>
                                                      <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{cate.name_category}</td>
                                                            <td>{cate.product.length}</td>
                                                            {cate.id!==0?
                                                            <td>
                                                                <button onClick={()=>onHandleClickDelete(cate.id)} className="btn btn-danger mr-3">Xóa</button>
                                                                <button className="btn btn-primary">Sửa</button>
                                                            </td>:<td></td>
                                                            }
                                                      </tr>
                                                      
                                                      
                                                      
                                                      )}
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

export default ListCategory
