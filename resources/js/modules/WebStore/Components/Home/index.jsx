import React from 'react'
import PropTypes from 'prop-types'
import ProductHome from '../Product/ProductHome'
import Banner1 from '../Banner/Banner1'
import { useSelector } from 'react-redux'
import ProductHomeContainer from '../../Containers/ProductHomeContainer'
import SingleProduct from '../Product/SingleProduct'
import { Switch } from 'antd'
import { Route } from 'react-router-dom'
import ShowPostContainer from '../../Containers/ShowPostContainer'

const HomePage = () => {
    const posts = useSelector(state => state.post.posts);
    const users = useSelector(state => state.auth.infoUser);
    return (
        <div >
            <Banner1 />
            <ShowPostContainer />
            <ProductHomeContainer />
        </div>
    )
}
HomePage.propTypes = {

}

export default HomePage
