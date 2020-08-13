import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Categories from '../Categories';

const EditFormCategory = ({ categories, onUpdateCate }) => {
    const { id } = useParams();
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();
    const category = categories.find(category => category.id == id);
    const [currentCategory, setCurrentCategory] = useState(category);
    const onHandleSubmit = (data) => {
        onUpdateCate(id, currentCategory);
        history.push('/admin/categories');
        swal("Thông Báo", "Sửa Sản Phẩm Thành Công!", "success");
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        //console.log(name, value);
        setCurrentCategory({
            ...currentCategory,
            [name]: value
        })
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Sửa Danh Mục</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="Name">Tên Danh Mục</label>
                            <input type="text" name="name" className="form-control"
                                ref={register({ required: true, minLength: 5 })}
                                id="inputName"
                                onChange={onHandleChange}
                                defaultValue={currentCategory.name}
                            />
                            {errors.name && errors.name.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                            {errors.name && errors.name.type === "minLength" && <span class="text-danger">Phải trên 5 ký tự</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDesc">Description</label>
                            <textarea name="description" id="ta-1" style={{ width: '100%' }} rows="30"
                                ref={register({ required: true })}
                                onChange={onHandleChange}
                                defaultValue={currentCategory.description} >
                            </textarea>
                            {errors.description && errors.description.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                        </div>
                        <div className="form-group mb-4">
                            <label>Show Menu</label>
                            <select name="show_menu" onChange={onHandleChange} className="form-control" ref={register({ required: true })}>
                                <option selected disabled value="0">Mời Chọn...</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-outline-primary mr-2">Submit</button>
                        <a href="/admin/categories" class="border-1 btn-transition btn btn-outline-danger ">
                            Hủy
                        </a>
                    </form>
                </div>
            </div>

        </div>
    )
}

EditFormCategory.propTypes = {

}

export default EditFormCategory
