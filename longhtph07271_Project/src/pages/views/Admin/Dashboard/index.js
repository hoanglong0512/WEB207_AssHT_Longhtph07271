import React from 'react'
import PropTypes from 'prop-types';
import { BsFillArchiveFill } from "react-icons/bs";
import { AiOutlineProfile, AiFillRead } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

const Dashboard = ({ products, categories, blog, contact }) => {

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tổng Sản Phẩm</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                                </div>
                                <div className="col-auto">
                                    <div>
                                        <Link to="admin/products"><BsFillArchiveFill className="fa-2x" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Annual) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tổng Danh Mục</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{categories.length}</div>
                                </div>
                                <div className="col-auto">
                                    <Link to="admin/categories"><AiOutlineProfile className="fa-2x" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tasks Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tổng Liên Hệ</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{contact.length}</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Tổng Bài </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{blog.length}</div>
                                </div>
                                <div className="col-auto">
                                    <Link to="admin/blog"><AiFillRead className="fa-2x" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Dashboard.propTypes = {

}

export default Dashboard
