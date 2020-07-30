import React from 'react'
import PropTypes from 'prop-types'
import Data from '../../Api/product.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  const SingleCategory = props => {
    const {id} = useParams();
    const product =  Data.find(el => el.id === id);
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
                            <h4 className="header-title">Transactions History</h4>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card-box">
                                        <div className="table-responsive">
                                            {product.name}-----
                                            {product.image}-----
                                            {product.price}


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

SingleCategory.propTypes = {

}

export default SingleCategory
