import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setItemCart } from '../../Actions/Cart';
import ReactHtmlParser from 'react-html-parser';
import { stubObject } from 'lodash';

const SinglePost = ({tim1BaiViet }) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    tim1BaiViet(id)
  }, [])
  const getPost = useSelector(state => state.post.getPost);
  const [StatePost, setStatePost] = useState();   
  (!StatePost&&getPost)&&setStatePost(getPost);
  console.log(getPost)

  return (
    
      <div className="container">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Tank Top T-Shirt</strong></div>
            </div>
          </div>
        </div>
        {StatePost&&
        <div className="container">
            <h1 className="text-center m-5">{StatePost.tieude}</h1>

           { ReactHtmlParser(StatePost.noi_dung)}
        </div>}
        <script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/mixitup.min.js"></script>
	<script src="js/sly.min.js"></script>
	<script src="js/jquery.nicescroll.min.js"></script>
	<script src="js/main.js"></script>
      </div> 
  )
}

export default SinglePost
