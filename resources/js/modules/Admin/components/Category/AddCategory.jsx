import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = props => {
    const [DataForm, setDataForm] = useState({})

    const handleChangeIp = (event)=>{
        const {name, value} = event.target;
        setDataForm({
            ...DataForm,
            [name]: value
        })
        console.log(DataForm);
    }
    const [Msg, setMsg] = useState({MSGname_categoy:'',MSGemail:'',})
    const onhandleSubmit=(data)=>{
        DataForm.name_categoy ? (console.log('ok'), setMsg({...Msg,MSGname_categoy:""}) ) : setMsg( {...Msg,MSGname_categoy:"Không để trống !"});
        return false
    }
    return (
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
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
                    <form onSubmit={(e)=>(onhandleSubmit(DataForm),e.preventDefault())} className="row">
                        <div className="col-xl">
                            <div className="card-box">
                                <h4 className="header-title">Thêm danh mục</h4>
                                <div className="row">
                            <div className="col-sm-12">
                            <div className="card-box">
                                    <div className="row" >
                                        <div className="col-md">
                                            <div className="">
                                                <div>
                                                    <p className="mb-1 mt-4 font-weight-bold">Tên danh mục</p>
                                                    <input onChange={handleChangeIp}  type="text" maxLength="25" name="name_categoy" className="form-control" id="thresholdconfig" />
                                                    <small>{Msg.MSGname_categoy}</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                                <button type="button" className="btn btn-outline-danger btn-rounded waves-light waves-effect w-md ml-4">Huỷ</button>
                                <button type="submit" className="btn btn-success btn-rounded waves-light waves-effect w-md ml-2">Thêm</button>
                            </div>
                        </div>
                            </div>
                        </div>

                    </form>
                
                </div> 
            </div>
        </div>

    )
}

AddCategory.propTypes = {

}

export default AddCategory
