import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setIsUpdate } from '../../Actions/Product';
import Swal from 'sweetalert2'
import { Button } from 'antd';
import { forEach, forEachRight } from 'lodash';

const ListProduct = ({ GetProduct, deleteProduct ,xoaList}) => {
    const tokens = useSelector(state => state.token.tokens);
    const ProductAll = useSelector(state => state.product.products);
    const [itemProducts, setitemProducts] = useState(ProductAll)
    const onHandleDelete = (id) => {
        setitemProducts(itemProducts.filter((item) => item.id !== id));
        deleteProduct(id, tokens)
    }
    const isUpdate = useSelector(state => state.product.isUpdateProduct)
    const isAddProduct = useSelector(state => state.product.isAddProduct)
    const dispatch = useDispatch()
    const onHandleClick = () => {
        dispatch(setIsUpdate())
    }
    useEffect(() => {
        setTimeout(function () { onHandleClick()}, 7000)
    }, [])
    const productUpdate = useSelector(state => state.product.updateProduct)
    const proudctAddNew = useSelector(state => state.product.proudctAddNew)
    const [IdSP, setIdSP] = useState() 
    if(ProductAll.length>0){
       const viTriCuoi= ProductAll.length;
       const ids = ProductAll[viTriCuoi-1]
       if(!IdSP){
        setIdSP(ids.id)
       }
    }



    const [Checked, setChecked] = useState([0])
    const handleClickChecked=(e)=>{
        const {name,value}=e.target;
            Checked.map((checked)=>
            checked!==value?setChecked([...Checked,value]):setChecked(Checked.filter((checkeds)=>checkeds!==value))
        )
    }

    const mangChk=[]
    const deleteList=()=>{
        Checked.map((chk)=>
        {   
            mangChk.push(Number(chk));
        }
        )
        mangChk.map((chk)=>
        setChecked(Checked.filter((product)=>product!==chk))
        )

        const chuyenSangString=JSON.stringify(mangChk);
        const lengths=chuyenSangString.length-2
        const CatMang=chuyenSangString.substr(1,lengths)
        xoaList(CatMang)
        GetProduct()
    }

    const [DemAdd, setDemAdd] = useState(0)
    if(proudctAddNew&&!DemAdd&&IdSP){
       const idSPmoi={id:(IdSP+1)}
       const proudctAdd=Object.assign(proudctAddNew,idSPmoi)
       ProductAll.push(proudctAdd)
       setDemAdd(DemAdd+1)
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
    const onHandleClickDeleteListProduct=()=>{
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
                deleteList()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          
    }
    const [Sotrang, setSotrang] = useState(0)
    const tongSp=itemProducts.length;
    const tinhTrang=Math.ceil(tongSp/5);
    const mang=[];
    for ( var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
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
                                <h4 className="header-title">Danh sách sản phẩm </h4>
                                
                                {
                                    isUpdate ?
                                        <div className="alert alert-success" role="alert">
                                            Sửa sản phẩm thành công !
                                    </div> : ''
                                }
                                {
                                    isAddProduct ?
                                        <div className="alert alert-success" role="alert">
                                            Thêm sản phẩm thành công !
                                    </div> : ''
                                }
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive" >
                                                <table id="mainTable" className="table table-striped m-b-0"  style={{height:'500px'}}>
                                                    <thead>
                                                        <tr>
                                                            <th>{Checked.length>1?
                                                            <button className="btn btn-danger" onClick={onHandleClickDeleteListProduct}>Xóa</button>:
                                                            <button className="btn btn-block " >Xóa</button>}
                                                            </th><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Price sale</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {itemProducts &&itemProducts.map((product, index) =>
                                                            productUpdate.id == product.id ?
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className="checkbox-wrapper-mail">
                                                                            <input type="checkbox" onChange={handleClickChecked} id={`chk${productUpdate.id}`} name="check" />
                                                                            <label htmlFor={`chk${productUpdate.id}`} className="toggle"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>{index+1}</td><td>{productUpdate.name_product}</td><td><img style={{ width: '60px' }} src={productUpdate.image} /></td><td>{productUpdate.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td><td>{productUpdate.old_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td><td>
                                                                        <Link className="btn btn-primary" onClick={onHandleClick} to={`/Admin/Product/${productUpdate.id}`} >Sửa</Link>
                                                                        <button className="btn btn-warning ml-2" onClick={() => onHandleDelete(productUpdate.id)}>Xóa</button>
                                                                    </td>
                                                                </tr>
                                                                :
                                                                index<(((Sotrang+1)*5))&&index>((Sotrang*5)-1)&&
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className="checkbox-wrapper-mail">
                                                                            <input type="checkbox" id={product.id}  onChange={handleClickChecked}  value={product.id}  name={product.id} />
                                                                            <label htmlFor={product.id} className="toggle"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>{index+1}</td><td>{product.name_product}</td><td><img style={{ width: '60px' }} src={product.image} /></td><td>{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td><td>{product.old_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td><td>
                                                                        <Link className="btn btn-primary" onClick={onHandleClick} to={`/Admin/Product/${product.id}`} >Sửa</Link>
                                                                        <button className="btn btn-warning ml-2" onClick={() => onHandleClickDeleteProduct(product.id)}>Xóa</button>
                                                                    </td>
                                                                </tr>
                                                            ) 
                                                        } 
                                                    </tbody>
                                                    <tfoot style={{width:"1000px"}}>
                                                     </tfoot>
                                                </table>
                                                {Sotrang>0&&<button className="btn btn-primary float-left" onClick={()=>setSotrang(Sotrang-1)}> Trước </button>}
                                                    {mang&&mang.map((sotrang)=>
                                                        <button className="btn btn-primary float-left" onClick={()=>setSotrang(sotrang-1)}> {sotrang} </button>
                                                    )}
                                                    {Sotrang<(mang.length-1)&&
                                                    <button className="btn btn-primary float-left" onClick={()=>setSotrang(Sotrang+1)}> Sau </button>}
                                                   
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
