import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ContactAdmin = ({ contact, onRemove }) => {
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

            </div>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Contact</h6>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead class="bg-c-yellow text-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Title</th>
                                    <th>Name_user</th>
                                    <th>Email</th>
                                    <th>Messenger</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contact.map((item, index) => (
                                    <tr key={index} className="text-dark">
                                        <td>{index + 1}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.message}</td>
                                        <td style={{ width: "150px" }}>
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

ContactAdmin.propTypes = {

}

export default ContactAdmin
