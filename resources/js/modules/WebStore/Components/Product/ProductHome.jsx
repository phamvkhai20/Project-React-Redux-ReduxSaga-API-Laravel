import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ProductHome = ({ GetProduct }) => {
  useEffect(() => {
    GetProduct()
  }, [])
  const ProductAll = useSelector(state => state.product.products);
  return (
    <div class="container mt-5">
      <div class="row row-cols-4 ">
        {ProductAll ? ProductAll.map((product, index) =>
          <div class="col-sm-6 col-lg-3 mb-3" key={index} data-aos="fade-up">
            <div class="block-4 text-center border">
              <figure class="block-4-image">
                <a href="shop-single.html"><img style={{ minHeight: '253px' }} src={product.image} alt="Image placeholder" class="img-fluid" /></a>
              </figure>
              <div class="block-4-text">
                <h3><a href="shop-single.html">{product.name_product}</a></h3>
                <p class="mb-0">{product.content}</p>
                <p class="text-primary font-weight-bold">{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                <button className="btn btn-primary mb-4" style={{ width: '60%' }}>Mua ngay</button>
              </div>
            </div>
          </div>) : ''
        }</div>
      <div class="row m-5" data-aos="fade-up">
        <div class="col-md-12 text-center">
          <div class="site-block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li class="active"><span>1</span></li>
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

