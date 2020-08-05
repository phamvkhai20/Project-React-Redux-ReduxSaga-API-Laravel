import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductHome = ({ GetProduct }) => {
  const ProductAll = useSelector(state => state.product.products);
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Sản phẩm mới nhất</h2>
          </div>
        </div>
      <div className="row row-cols-4 ">
        {ProductAll ? ProductAll.map((product, index) =>
          product.category_id==0?'':
          <div className="col-sm-6 col-lg-3 mb-3" key={index} style={{height:"470px"}} data-aos="fade-up">
            <div className="block-4 text-center border">
              <figure className="block-4-image">
                <a href="shop-single.html"><img style={{ minHeight: '253px' }} src={product.image} alt="Image placeholder" className="img-fluid" /></a>
              </figure>
              <div className="block-4-text"  style={{height:"200px"}}>
              <Link  to={`/Store/Product/${product.id}`} ><h3><a href="shop-single.html">{product.name_product.substr(0,40)}. </a></h3></Link>
                <p className="mb-0">{product.mota.substr(0,60)}...</p>
                <p className="text-primary font-weight-bold">{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                <Link style={{buttom:"10px"}} className="btn btn-primary mb-4" to={`/Store/Product/${product.id}`} style={{ width: '60%' ,buttom:'5px'}}>Mua ngay</Link>
              </div>
            </div>
          </div>) : ''
        }</div>
      <div className="row m-5" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductHome.propTypes = {

}

export default ProductHome

