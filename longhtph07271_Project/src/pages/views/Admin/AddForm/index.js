import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase';


const AddForm = ({ onAdd, categories }) => {
    let history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const [detail, setDetail] = useState("");
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    detail,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData);
                history.push("/admin/products");
                swal("Thông Báo", "Thêm Sản Phẩm Thành Công!", "success");
            })
        });
    }
    const handleEditorChange = (content) => {
        setDetail(content);
        console.log(content);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Thêm Sản Phẩm</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)} enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Tên Sản Phẩm</label>
                                    <input type="text" name="name" className="form-control"
                                        ref={register({ required: true, minLength: 5 })}
                                        id="inputProductName" />
                                    {errors.name && errors.name.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                    {errors.name && errors.name.type === "minLength" && <span class="text-danger">Phải trên 5 ký tự</span>}
                                </div>
                                <div className="form-group mb-4">
                                    <label>Danh Mục</label>
                                    <select name="cate_id" className="form-control" ref={register({ required: true })}>
                                        {categories.map((cate, index) => (
                                            <option key={index} value={cate.id}>{cate.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Ảnh Sản Phẩm</label>
                                    <input type="file" name="image" className=" form-control "
                                        ref={register({ required: true })}
                                        id="inputProductImage" />
                                    {errors.image && errors.image.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="inputProductName">Giá Sản Phẩm</label>
                                    <input type="number" name="price" className="form-control"
                                        ref={register({ required: true, maxLength: 11 })}
                                        id="inputProductPrice" />
                                    {errors.price && errors.price.type === "required" && <span class="text-danger">Không Được Bỏ Trống !!!</span>}
                                    {errors.price && errors.price.type === "maxLength" && <span class="text-danger">Không Quá 11 Số !!!</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Giá old</label>
                                    <input type="number" name="price_sale" className="form-control" ref={register({ required: false })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Tình Trạng Hàng</label>
                                    <select name="status" className="form-control" ref={register({ required: true })}>
                                        <option value="1">Còn Hàng</option>
                                        <option value="0">Hết Hàng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor>Mô tả ngắn</label>
                                    <textarea name="short_desc" className="form-control" rows={3} defaultValue={""} ref={register({ required: true })} />
                                    {errors.short_desc && errors.short_desc.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor>Mô tả chi tiết</label>
                                    <Editor
                                        init={{
                                            height: 300,
                                            images_upload_url: 'postAcceptor.php',
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                                        }}
                                        onEditorChange={handleEditorChange}
                                    />
                                    {errors.detail && errors.short_desc.type === "required" && <span class="text-danger">Không Được Bỏ Trống !!!</span>}
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

AddForm.propTypes = {
    onAdd: PropTypes.func
}

export default AddForm
