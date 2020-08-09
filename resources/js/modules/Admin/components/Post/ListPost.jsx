import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {resetIsEdit, resetIsAdd } from '../../Actions/Product';
import Swal from 'sweetalert2'
const ListPost = ({ GetPost, deletePost }) => {
    useEffect(() => {
        GetPost()
    }, [])
    const dispatch = useDispatch()
    const [DsPost, setDsPost] = useState()
    const posts = useSelector(state => state.post.posts);
    (posts&&!DsPost)?setDsPost(posts):'';
    const onHandleClickDelete=(id)=>{
        setDsPost(DsPost.filter((product)=>product.id!==id))
        deletePost(id)
    }
    const isAddPost = useSelector(state => state.post.isAddPost)
    const isEditpost = useSelector(state => state.post.isEditpost)
    const [Dems, setDems] = useState(0);
    if(isEditpost&&!Dems){
        GetPost();
        setTimeout(() => {
            setDsPost(posts)
        }, 3000);
    }
    if(isAddPost&&!Dems){
        GetPost();
        setTimeout(() => {
            setDsPost(posts)
        }, 3000);
    }
    
    if(isEditpost){
        setTimeout(() => {
            dispatch(resetIsEdit(),resetIsAdd())
            setDems(1)
        }, 3000);
    }


    const onHandleClickDeleteProduct=(product)=>{
        Swal.fire({
            title: 'Bạn có chắc chắn xóa ?',
            text: "Sẽ xóa sản phẩm vĩnh viễn",
            icon: 'Cảnh báo',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
            onHandleDelete(product)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
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
                             
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive">
                                                <table id="mainTable" className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th onClick={onHandleClickDeleteProduct}>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Price sale</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {DsPost&&DsPost.map((post,index)=>
                                                      <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td><img src={post.anh} style={{width:'100px'}} /></td>
                                                            <td>{post.tieude}</td>
                                                            <td>{post.mo_ta}</td>
                                                            <td>
                                                                <button onClick={()=>onHandleClickDelete(post.id)} className="btn btn-danger mr-3">Xóa</button>
                                                                <Link to={`/Admin/Post/${post.id}`} className="btn btn-primary">Sửa</Link>
                                                            </td>:<td></td>
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

export default ListPost
