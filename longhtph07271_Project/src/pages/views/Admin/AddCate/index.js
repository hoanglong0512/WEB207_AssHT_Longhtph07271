import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';

const AddCate = ({ onAddCate }) => {
    let history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const onHandleSubmit = (data) => {
        //console.log(data);
        onAddCate(data);
        history.push("/admin/categories");
        swal("Thông Báo", "Thêm Sản Phẩm Thành Công!", "success");
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Thêm Danh Mục</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="Name">Tên Danh Mục</label>
                            <input type="text" name="name" className="form-control"
                                ref={register({ required: true, minLength: 5 })}
                                id="inputName" />
                            {errors.name && errors.name.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                            {errors.name && errors.name.type === "minLength" && <span class="text-danger">Phải trên 5 ký tự</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDesc">Description</label>
                            <textarea name="description" id="ta-1" style={{ width: '100%' }} rows="30"
                                ref={register({ required: true })} >
                            </textarea>
                            {errors.description && errors.description.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                        </div>
                        <div className="form-group mb-4">
                            <label>Show Menu</label>
                            <select name="show_menu" className="form-control" ref={register({ required: true })}>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-outline-primary mr-2">Submit</button>
                        <Link to="/admin/categories" class="border-1 btn-transition btn btn-outline-danger ">
                            Hủy
                            </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
