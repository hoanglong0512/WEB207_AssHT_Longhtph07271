import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useParams, useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';



const EditFormProduct = ({ products, onUpdate, categories }) => {
    const { register, handleSubmit, errors } = useForm();
    const { id } = useParams();
    const history = useHistory();
    const product = products.find(product => product.id == id);

    const [currentProduct, setCurrentProduct] = useState(product);
    const onHandleSubmit = (data) => {
        onUpdate(id, currentProduct);
        history.push('/admin/products');
        swal("Thông Báo", "Sửa Sản Phẩm Thành Công!", "success");
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Sửa Sản Phẩm</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)} enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Tên Sản Phẩm</label>
                                    <input type="text" name="name" className="form-control"
                                        ref={register({ required: true, minLength: 5 })}
                                        id="inputProductName"
                                        defaultValue={currentProduct.name}
                                        onChange={onHandleChange} />
                                    {errors.name && errors.name.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                    {errors.name && errors.name.type === "minLength" && <span class="text-danger">Phải trên 5 ký tự</span>}
                                </div>
                                <div className="form-group mb-4">
                                    <label>Danh Mục</label>
                                    <select name="cate_id" className="form-control" onChange={onHandleChange} ref={register({ required: true })}>
                                        <option selected disabled value="2">Mời Chọn...</option>
                                        {categories.map((cate, index) => (
                                            <option key={index} value={cate.id}>{cate.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Ảnh Sản Phẩm</label>
                                    <input type="text" name="image" className=" form-control "
                                        ref={register({ required: true })}
                                        id="inputProductImage"
                                        defaultValue={currentProduct.image}
                                        onChange={onHandleChange} />
                                    {errors.image && errors.image.type === "required" && <span class="text-danger">Không được bỏ trống</span>}

                                </div>
                                <div className="form-group">
                                    <label htmlFor>Mô tả ngắn</label>
                                    <textarea name="short_desc" className="form-control" rows={3} defaultValue={""} ref={register({ required: true })}
                                        defaultValue={currentProduct.short_desc} />
                                    <span id="short_desc" className="alert-danger"
                                        onChange={onHandleChange} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Giá Sản Phẩm</label>
                                    <input type="number" name="price" className="form-control"
                                        ref={register({ required: true, maxLength: 99 })}
                                        id="inputProductPrice"
                                        defaultValue={currentProduct.price}
                                        onChange={onHandleChange} />
                                    {errors.price && <span class="text-danger">Không Được Bỏ Trống !!!</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Giá old</label>
                                    <input type="number" name="price_sale" className="form-control" ref={register({ required: false })}
                                        defaultValue={currentProduct.price_sale}
                                        onChange={onHandleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Tình Trạng Hàng</label>
                                    <select name="status" className="form-control" onChange={onHandleChange} ref={register({ required: true })}>
                                        <option selected disabled value="2">Mời Chọn...</option>
                                        <option value="1">Còn Hàng</option>
                                        <option value="0">Hết Hàng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor>Mô tả chi tiết</label>
                                    <textarea name="detail" className="form-control" onChange={onHandleChange} rows={6} ref={register({ required: true })}
                                        defaultValue={currentProduct.detail} />
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" class="btn btn-outline-primary mr-2">Submit</button>
                                <Link to="/admin/Products" class="border-1 btn-transition btn btn-outline-danger ">
                                    Hủy
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

EditFormProduct.propTypes = {
    products: PropTypes.array
}

export default EditFormProduct
