import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import swal from 'sweetalert';

const BlogAdmin = ({ blog, onRemove }) => {
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
                <Link to="/admin/add/contact" class="text-light btn-wide btn-shadow btn btn-success ">
                    <span class="btn-icon-wrapper pr-1 opacity-7">
                        <i class="fa fa-plus"></i>
                    </span>Add New</Link>
            </div>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Blog</h6>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead class="bg-c-yellow text-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>By</th>
                                    <th>Short_desc</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blog.map((item, index) => (
                                    <tr key={index} className="text-dark">
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td><img src={item.image} width="100" /></td>
                                        <td>{item.by}</td>
                                        <td>{item.short_desc}</td>
                                        <td style={{ width: "150px" }}>
                                            <Link class="border-1 btn-transition btn btn-outline-primary mr-1">
                                                <span class="btn-icon-wrapper pr-1 opacity-7">
                                                    <i class="fa fa-edit"></i>
                                                </span>
                                Sửa</Link>
                                            <button onClick={() => onHandleRemove(item.id)} class="border-1 btn-transition btn btn-outline-danger ">
                                                <fa name="trash" _nghost-serverapp-c2="" ng-reflect-name="trash" >
                                                    <i _ngcontent-serverapp-c2="" aria-hidden="true" class="fa fa-trash mr-" ng-reflect-klass="fa fa-trash" ng-reflect-ng-class="">
                                                        Xóa
                                                </i></fa></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogAdmin.propTypes = {

}

export default BlogAdmin
