import React from 'react'
import PropTypes from 'prop-types'
import Data from '../../Api/product.json'
import { Link } from 'react-router-dom'
const ListCategory = props => {
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
                                <h4 className="header-title">Danh sách danh mục</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box">
                                            <div className="table-responsive">
                                                <table id="mainTable" className="table table-striped m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th><th>Name</th><th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Data.map((product, index)=>
                                                            <tr key={index}>
                                                                <td>{product.id}</td><td>{product.name}</td>
                                                                <td>
                                                                    <Link className="btn btn-primary" to={`/Admin/Product/${product.id}`} >Xem</Link>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th><strong>TOTAL</strong></th><th></th><th></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
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

ListCategory.propTypes = {

}

export default ListCategory
