import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ShowPost = ({ GetPost }) => {
  
    const [DsPost, setDsPost] = useState()
    const posts = useSelector(state => state.post.posts);
    (posts && !DsPost) ? setDsPost(posts) : '';
    console.log(posts)
    return (
        <div className="container ">
           
            <div class="site-section">
                <div class="container">
                    <div className="row row-cols-4 ">
                        {DsPost ? DsPost.map((post, index) =>
                            post.category_id == 0 ? '' :
                                <div className="col-sm-6 col-lg-4" key={index} style={{ height: "470px" }} data-aos="fade-up">
                                    <div className="block-4 text-center border">
                                        <figure className="block-4-image">
                                            <a href="shop-single.html"><img style={{ minHeight: '253px' }} src={post.anh} alt="Image placeholder" className="img-fluid" /></a>
                                        </figure>
                                        <div className="block-4-text" style={{ height: "200px" }}>
                                            <Link to={`/Store/SinglePost/${post.id}`} ><h3>{post.tieude.substr(0, 40)}</h3></Link>
                                            <p className="mb-0">{post.mo_ta}</p>
                                        </div>
                                    </div>
                                </div>) : ''
                        }</div>
                </div></div>
        </div>
    )
}

export default ShowPost
