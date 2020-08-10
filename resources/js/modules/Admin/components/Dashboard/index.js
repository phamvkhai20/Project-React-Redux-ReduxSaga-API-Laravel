import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
const Dashboard = ({ getContacts,getOders }) => {
    const [StateContact, setStateContact] = useState();
    useEffect(() => {
        getContacts()
        getOders()
    }, [])
    const posts = useSelector(state => state.post.posts);
    const orders = useSelector(state => state.cart.orders);

    const [StateOrder, setStateOrder] = useState()
    orders&&!StateOrder&&setStateOrder(orders)
    const ProductAll = useSelector(state => state.product.products);
    const contacts = useSelector(state => state.contact.contacts);
    (contacts && !StateContact) && setStateContact(contacts);
    const tongtien=[];
    StateOrder&&StateOrder.map(order=>{
        tongtien.push(Number(order.tong_tien));
       }
    )
    const tinhTongTien= tongtien.reduce(function(a, b){return a + b; }, 0);


    return (
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box">
                                <h4 class="page-title float-left">Dashboard</h4>

                                <ol class="breadcrumb float-right">
                                    <li class="breadcrumb-item"><a href="#">Abstack</a></li>
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box tilebox-one">
                                <i class="fi-box float-right"></i>
                                <h6 class="text-muted text-uppercase mb-3">Đơn Hàng</h6>
                                <h4 class="mb-3" data-plugin="counterup">{StateOrder&&StateOrder.length}</h4>
                                <span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box tilebox-one">
                                <i class="fi-layers float-right"></i>
                                <h6 class="text-muted text-uppercase mb-3">Thu Nhập</h6>
                                <h4 class="mb-3"><span data-plugin="counterup">{tinhTongTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} Vnđ </span></h4>
                                <span class="badge badge-primary"> -29% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box tilebox-one">
                                <i class="fi-tag float-right"></i>
                                <h6 class="text-muted text-uppercase mb-3">Tổng bài viết</h6>
                                <h4 class="mb-3"><span data-plugin="counterup">{posts.length} bài viêt</span></h4>
                                <span class="badge badge-primary"> 0% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box tilebox-one">
                                <i class="fi-briefcase float-right"></i>
                                <h6 class="text-muted text-uppercase mb-3">Tổng sản phẩm</h6>
                                <h4 class="mb-3" ><span data-plugin="counterup">{ProductAll.length} sản phẩm</span></h4>
                                <span class="badge badge-primary"> +89% </span> <span class="text-muted ml-2 vertical-middle">Last year</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-box">
                                <h4 class="header-title mb-4">Liên Hệ</h4>
                                <div class="inbox-widget slimscroll" style={{ maxHeight: "450px" ,minHeight:'400px'}} >
                                    <ul class="message-list">
                                        {StateContact&&StateContact.map((contact,index)=>
                                       <li class="unread">
                                                <div class="col-mail col-mail-1">
                                                    <div class="checkbox-wrapper-mail">
                                                        <input type="checkbox" id={`chk${contact.id}`} name="check" />
                                                        <label for={`chk${contact.id}`} class="toggle"></label>
                                                    </div>
                                                    <p class="title" style={{fontWeight:"bold"}}> {contact.email}</p><span
                                                        class="star-toggle fa fa-star-o"></span>
                                                </div>
                                                <div class="col-mail col-mail-2">
                                                    <div class="subject">
                                                        <span class="teaser">{contact.tin_nhan}</span>
                                                    </div>
                                                    <div class="date" style={{paddingLeft:"50px"}}>{contact.created_at.substr(0,10)}</div>
                                                </div>
                                        </li>
                                    )
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}
export default Dashboard
