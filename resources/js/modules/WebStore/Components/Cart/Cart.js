import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setItemCart } from '../../Actions/Cart';



const Cart = ({ getProductCart }) => {
  const user = useSelector(state => state.auth.infoUser);
  const history = useHistory();
  const cart = useSelector(state => state.cart.totalProduct)
  const dispatch = useDispatch();
  //////////////////////////////////
  const [Dems, setDems] = useState(0)
  setTimeout(() => {
    const ojb = localStorage.getItem('cart');
  }, 2000);
  const ojb = localStorage.getItem('cart');
  const [MangCart, setMangCart] = useState()
  const mangNew = [];
    const mangHT=[]
    const soluongs = []
    const soluongnew=[];
    const taoMang = "[" + ojb + "]"
    const getItemCartLocalStorage = JSON.parse(taoMang);
    const mang = getItemCartLocalStorage
  if(ojb){
    if(mang){
      mang.map(cart =>
        {
        mangNew.push(Number(cart.idSP))
        mangHT.push(cart)
        }
      )
    }
  }
  ////////////////////////////////
  useEffect(() => {
    getProductCart(mangNew);
    }, [])
  const [ProductsCart, setProductsCart] = useState()
  const [ProductCarts, setProductCart] = useState('')
  const ProductCart = useSelector(state => state.product.productCart);
  if(ProductCart&&!Dems){
    setProductCart(ProductCart)
    setDems(1)
  }
  useEffect(() => {
    setTimeout(function () { setDems(0)}, 1000)
    }, [])
  /////////////////////////////////
  const [mangTam, setmangTam] = useState(mangHT);
  function onHandleClickDeletes(b){
    const xoaCart=mangTam.filter((cart)=>Number(cart.idSP)!==b);
    xoaCart.length<2
    ?dispatch(setItemCart(xoaCart.length-1))
    :dispatch(setItemCart(xoaCart.length))
    const chuyenMangChuoi=JSON.stringify(xoaCart)
    const catchuoi= chuyenMangChuoi.substr(1,chuyenMangChuoi.length-2)
    localStorage.setItem('cart',(catchuoi));
    setProductCart(ProductCarts.filter((p)=>p.id!==b))
    setmangTam(xoaCart)
  }
  /////////////////////////////////////
  const onHandleClickDeleteProduct=(product)=>{
    Swal.fire({
        title: 'Bạn có chắc chắn xóa ?',
        text: "Sẽ xóa sản phẩm khỏi giỏ hàng",
        icon: 'Cảnh báo',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.value) {
          onHandleClickDeletes(product)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

const onHandleClickUpdateCart=(product)=>{
  Swal.fire({
      title: 'Cập nhật giỏ hàng ?',
      icon: 'Cảnh báo',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        const chuyenMangChuoi=JSON.stringify(CartNew3)
        const catchuoi= chuyenMangChuoi.substr(1,chuyenMangChuoi.length-2)
        localStorage.setItem('cart',(catchuoi));
        console.log(localStorage.getItem('cart'))
        setCartNew3(0)
        history.push("/Store/Cart");
        Swal.fire(
          'Cập nhật thành công!',
        )
      }
    })
}
  const [CartNew3, setCartNew3] = useState()
  const onHandleChangeSoluong=(event)=>{
    if(!CartNew3){
      const {name,value}=event.target;
      const tt= mang.filter(cart=>Number(cart.idSP)!==Number(name));
      (value>0)&&tt.push({idSP:name,soluong:Number(value)})
      setCartNew3(tt)
      dispatch(setItemCart(tt.length))
    }else {
      const {name,value}=event.target;
      const tt= CartNew3.filter(cart=>Number(cart.idSP)!==Number(name));
      value>0&&tt.push({idSP:name,soluong:Number(value)})
      setCartNew3(tt)
      dispatch(setItemCart(tt.length))
    }
    
  }
  (mangHT&&ProductCarts)&&mangHT.map((cart,index)=>
  ProductCarts.map((products)=>
    products.id===Number(cart.idSP)&&soluongs.push(cart.soluong*products.price)
    ))
  const tongTien=soluongs.reduce((partial_sum, a) => partial_sum + a,0)


  const onHandleClickCheckout=()=>{
      const infoCheckout= {
          id_user:user.id,
          gio_hang:JSON.stringify(mangHT),
          tong_tien:tongTien,
      }
      console.log(infoCheckout);
  }
  return (
    <div>

      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0"><a >Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
          {(mangHT&&ProductCarts)?
              <div className="site-blocks-table">
              
              <form name="formss">
                <table className="table table-bordered" style={{minWidth:'1130px'}}>
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Ảnh</th>
                      <th className="product-name">Tên sản phẩm</th>
                      <th className="product-price">Giá</th>
                      <th className="product-quantity">Số lượng</th>
                      <th className="product-total">Tổng tiền</th>
                      <th className="product-remove">Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mangHT.map((cart,index)=>
                        ProductCarts.map((products)=>
                          products.id===Number(cart.idSP)&&
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <img src={products.image} alt="Image" className="img-fluid" />
                            </td>
                            <td className="product-name">
                            <Link to={`/Store/Product/${products.id}`}>
                              <h4 className="h5 text-black" style={{width:'430px'}}>{products.name_product}</h4>
                            </Link>
                            </td>
                            {products.old_price>0?
                            <td>{products.old_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>:
                            <td>{products.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>}
                            <td>
                            
                              <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                <input  type="text" disabled className="form-control text-center" 
                                  value={cart.soluong} />
                                
                              </div>
                              <div className="dropdown">
                              <span className="btn btn-secondary"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cập nhật số lượng</span>
                              <div className="input-group mb-3" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <input  type="number" name={products.id} 
                                  onChange={onHandleChangeSoluong} max={products.soluong} className="dropdown-item" />
                              </div>
                              </div>
                            </td>
                            {products.old_price>0?
                              <td>{(products.old_price*cart.soluong).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>:
                            <td>{(products.price*cart.soluong).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</td>}
                            <td><p type="button" onClick={()=>onHandleClickDeleteProduct(products.id)} className="btn btn-primary btn-sm">X</p></td>
                          </tr>
                         )
                      )
                      }
                  </tbody>
          
                </table>
                </form>
              </div>:<p className="mx-auto" style={{width:'400px',margin:'auto'}}>Bạn chưa có sản phẩm nào trong giỏ hàng !!!   <Link to="/Store/shop" >Đến cửa hàng.</Link></p>}
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className={!CartNew3?"btn btn-secondary btn-sm btn-block":"btn btn-primary btn-sm btn-block"}  onClick={()=>{CartNew3&&onHandleClickUpdateCart(),document.forms['formss'].reset()}}>Cập nhật giỏ hàng</button>
                </div>
                <div className="col-md-6">
                  <Link to="/Store/shop" className="btn btn-outline-primary btn-sm btn-block">Tiếp tục mua hàng</Link>
                </div>
              </div>
              
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Giá trị giỏ hàng</h3>
                    </div>
                  </div>
                  
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Tổng tiền</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{tongTien&&tongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Link className="btn btn-primary btn-lg py-3 btn-block" onClick={onHandleClickCheckout} to="/Store/Checkout">Đi đến đặt hàng</Link>
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

export default Cart
