import React from 'react'
import PropTypes from 'prop-types'
import ProductHome from '../Product/ProductHome'
import Banner1 from '../Banner/Banner1'
import { useSelector } from 'react-redux'
import ProductHomeContainer from '../../Containers/ProductHomeContainer'

const HomePage = () => {
    const users = useSelector(state => state.auth.infoUser);
    console.log(users);
    return (
        <div >
            <Banner1 />
            <ProductHomeContainer />
        </div>
    )
}
HomePage.propTypes = {

}

export default HomePage
