import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setItemCart } from '../../Actions/Cart';
import ReactHtmlParser from 'react-html-parser';

const SingleProduct = ({ GetProduct, getSingleProduct }) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  //soluong dat hang
  useEffect(() => {
    getSingleProduct(id);
  }, [])
  const [soluong, setsoluong] = useState({ sl: 1 })
  //=>lay san pham 
  const productSingle = useSelector(state => state.product.product)
  const [Product, setProduct] = useState()
  const onHandleChangeSoluong = (e) => {
    const { name, value } = e.target
    setsoluong({ ...soluong, [name]: value });
  }
  //
  const onHandleClickAddCart = () => {
    const cart = { idSP: id, soluong: soluong.sl }
    if (localStorage.getItem('cart')) {
      const ojb = localStorage.getItem('cart');
      const sss = "[" + ojb + "]"
      const getItemCartLocalStorage = JSON.parse(sss);
      const mang = getItemCartLocalStorage
      mang.push(cart)
      const soluongCungSP = []
      const cartNew = []
      mang.map((cart, index) => {
        if (cart.idSP == id) {
          soluongCungSP.push(Number(cart.soluong))
        } else {
          cartNew.push(cart)
        }
      })
      const tongSL = soluongCungSP.reduce((partial_sum, a) => partial_sum + a, 0)
      const cartSPHienTai = { idSP: id, soluong: tongSL }
      cartNew.push(cartSPHienTai);
      const chuyenMangSangChuoi = JSON.stringify(cartNew);
      const catChuoi = chuyenMangSangChuoi.substr(1, chuyenMangSangChuoi.length - 2)
      localStorage.setItem('cart', catChuoi)
      dispatch(setItemCart(cartNew.length))
      console.log(localStorage.getItem('cart'))
    } else {
      const mang = [];
      mang.push(cart)
      const chuyenMangSangChuoi = JSON.stringify(mang);
      const catChuoi = chuyenMangSangChuoi.substr(1, chuyenMangSangChuoi.length - 2)
      console.log(mang)
      localStorage.setItem('cart', catChuoi)
      console.log(localStorage.getItem('cart'))
      dispatch(setItemCart(1))

    }
    alert('Thêm vào giỏ hàng thành công')
  }
  const giamSL = () => {
    const sl = (Number(soluong.sl) - 1)
    setsoluong({ ...soluong, sl });
  }
  const tangSL = () => {
    const sl = (Number(soluong.sl) + 1)
    setsoluong({ ...soluong, sl });
  }

  const layAnh=(id)=>{
    const anhTo=document.querySelector('#anhto');
    const ids="inputs"+id
    const anhNho=document.getElementById(ids).src;
    console.log(anhTo)
    anhTo.src=anhNho;
  }
  return (
    productSingle ?
      <div>
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Tank Top T-Shirt</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img id="anhto"  src={productSingle.image} style={{ minWidth: '510px' }} alt="Image" className="img-fluid" />
                {JSON.parse(productSingle.album).map((image,index) =>
                  index<4 &&<div className="rounded m-2 float-left" data-imgbigurl={image} style={{
                  backgroundImage: `url(${image})`, width: '119px', height: '117px', backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat', backgroundPosition: "50% 50%"
                }}  onClick={()=>layAnh(index)}  ><img src={image} hidden  id={`inputs${index}`}/></div>
                )}
                <imput type="text" id="jjjjj" value='312312312' />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{productSingle.name_product}</h2>

                <p>{productSingle.mota}</p>
                <h6 className="font-weight-light " style={{ color: 'blue' }}>Số lượng: <span>{productSingle.soluong}</span></h6>
                <p><strong className="text-primary h4">{productSingle.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} Vnđ</strong></p>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary js-btn-minus" onClick={giamSL} type="button">-</button>
                    </div>
                    <input type="text" className="form-control text-center" style={{ width: '80px' }} placeholder="" min="1" max="5" onChange={onHandleChangeSoluong} name="sl" value={soluong.sl} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={tangSL}>+</button>
                    </div>
                  </div>
                </div>
                <p>

                  {productSingle.soluong > 0 ?
                    <button className="buy-now btn btn-sm btn-primary" onClick={onHandleClickAddCart}>Thêm vào giỏ hàng</button>
                    :
                    <button className="buy-now btn btn-sm btn-Danger">Hết hàng</button>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {ReactHtmlParser(productSingle.content)}
        </div>
        <script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/mixitup.min.js"></script>
	<script src="js/sly.min.js"></script>
	<script src="js/jquery.nicescroll.min.js"></script>
	<script src="js/main.js"></script>
      </div> : ''
  )
}

SingleProduct.propTypes = {

}

export default SingleProduct
