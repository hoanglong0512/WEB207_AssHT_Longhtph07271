import React, { useState } from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import { BsSearch } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Products = ({ products, onRemove, categories }) => {
    let history = useHistory();
    const onHandleRemove = (id) => {
        swal({
            title: "Thông Báo !",
            text: "Bạn có chắc xóa 1 bản ghi ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Bản ghi đã được xóa !", {
                        icon: "success",
                    });
                    onRemove(id);
                } else {
                    swal("Đã hủy xóa bảng ghi !");
                }
            });

    }

    return (

        <div>
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <Link to="/admin/product/addForm" class="text-light btn-wide btn-shadow btn btn-success ">
                    <span class="btn-icon-wrapper pr-1 opacity-7">
                        <i class="fa fa-plus"></i>
                    </span>Add New</Link>
            </div>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Products</h6>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead class="bg-c-yellow text-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Categories</th>
                                    <th>Trạng Thái Hàng</th>
                                    <th>Mô Tả Ngắn</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="text-dark">
                                        <td >{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td style={{ width: "150px" }}><img src={product.image} width='100' className="rounded " /></td>
                                        <td>{product.price}</td>
                                        <td>{categories.map((elment) => {
                                            if (product.cate_id == elment.id) {
                                                return elment.name;
                                            }
                                        })}
                                        </td>
                                        <td style={{ width: 10 }}>{product.status == 0 ? 'Hết Hàng' : 'Còn Hàng'}</td>
                                        <td style={{ width: "150px" }}>{product.short_desc}</td>
                                        <td style={{ width: "150px" }}>
                                            <Link to={`/admin/update/product/${product.id}`} class="border-1 btn-transition btn btn-outline-primary mr-1">
                                                <span class="btn-icon-wrapper pr-1 opacity-7">
                                                    <i class="fa fa-edit"></i>
                                                </span>
                                    Sửa</Link>
                                            <button onClick={() => onHandleRemove(product.id)} class="border-1 btn-transition btn btn-outline-danger ">
                                                <fa name="trash" _nghost-serverapp-c2="" ng-reflect-name="trash" >
                                                    <i _ngcontent-serverapp-c2="" aria-hidden="true" class="fa fa-trash mr-" ng-reflect-klass="fa fa-trash" ng-reflect-ng-class="">
                                                        Xóa
                                                    </i></fa></button>
                                            {/* <Link to={`/admin/product/detail/${product.id}`} class="border-1 btn-transition btn btn-outline-success ml-1">
                                                <span class="btn-icon-wrapper pr-1 opacity-7">
                                                    <i class="fa fa-edit"></i>
                                                </span>
                                    Chi Tiết</Link> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

Products.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default Products
