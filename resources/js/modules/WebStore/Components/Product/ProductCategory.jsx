import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductCategory = ({getProductCategory,GetCategory}) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    getProductCategory(id)
    GetCategory()
  },[])
  const categories = useSelector(state => state.category.categories)
  const Products = useSelector(state => state.product.productCategory);
    return (
        <div className="container">
        <div className="row mb-5">
        <div className="col-md-9 order-2">

          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="d-flex">
                <div className="dropdown mr-1 ml-md-auto">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Latest
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a className="dropdown-item" href="#">Men</a>
                    <a className="dropdown-item" href="#">Women</a>
                    <a className="dropdown-item" href="#">Children</a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <a className="dropdown-item" href="#">Relevance</a>
                    <a className="dropdown-item" href="#">Name, A to Z</a>
                    <a className="dropdown-item" href="#">Name, Z to A</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Price, low to high</a>
                    <a className="dropdown-item" href="#">Price, high to low</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">

            {Products? Products.map((Product,index)=>
              <div key={index} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" style={{height:"400px",width:'270px'}}>
                <div className="block-4 text-center border">
                  <figure className="block-4-image" style={{height:'237px'}}>
                    <a ><img src={Product.image} alt="Image placeholder" className="img-fluid" /></a>
                  </figure>
                  <div className="block-4-text" style={{height:'150px'}}>
                    <h3 className="pb-2 pt-2"><Link to={`/Store/Product/${Product.id}`} className="p-2">{Product.name_product.substr(0,35)}</Link></h3>
                    <p className="mb-0">{Product.mota.substr(0,50)}</p>
                    <p className="text-primary font-weight-bold">{Product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                  </div>
                </div>
              </div>
            ):''
}

            </div>
          </div>
        </div>

        <div className="col-md-3 order-1 mb-5 mb-md-0">
          <div className="border p-4 rounded mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
            <ul className="list-unstyled mb-0">
            {categories&&categories.map((cate,index)=>

              cate.id!==0&&<li onClick={()=>dispatch(getProductCategory(cate.id))} className="mb-1" key={index}><Link className="d-flex" to={`/Store/Category/${cate.id}`}><span>{cate.name_category}</span> <span className="text-black ml-auto">({cate.product.length})</span></Link></li>
                  )}
            </ul>
          </div>

          
        </div>
      </div>
      </div>
    )
}

export default ProductCategory
