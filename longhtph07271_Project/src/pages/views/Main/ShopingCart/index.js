import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

const ShopingCart = ({ dataCart, onRemoveCart, onDown, onUp }) => {
    const onHandSubmit = (id) => {
        swal({
            title: "Thông Báo !",
            text: "Bạn có chắc xóa Sản Phẩm Khỏi Giỏ Hàng ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Sản Phẩm đã được xóa Khỏi Giỏ Hàng !", {
                        icon: "success",
                    });
                    onRemoveCart(id);
                } else {
                    swal("Đã hủy xóa Sản Phẩm Khỏi Giỏ Hàng !");
                }
            });

    }
    const getTotal = (array = []) => {
        return array.reduce((prev, item) => {
            return prev + item.price * item.quantity;
        }, 0);
    };

    const onHandDown = (id) => {
        onDown(id)
    }

    const onHandUp = (id) => {
        onUp(id)
    }
    return (

        <div>
            {/* Start of Shopping Cart Wrapper */}
            <div className="shopping-cart-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <main id="primary" className="site-main">
                                <div className="shopping-cart">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="section-title">
                                                <h2>Shopping Cart</h2>
                                            </div>
                                            <form >
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <td>Image</td>
                                                                <td>Product Name</td>
                                                                <td>Quantity</td>
                                                                <td>Unit Price</td>
                                                                <td>Total</td>
                                                                <th>Option</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {dataCart.map((item, index) => (

                                                                <tr key={index}>
                                                                    <td>
                                                                        <a href="single-product.html"><img src={item.image} alt="Cart Product Image" title="Fusion Backpack" className="img-thumbnail" /></a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="single-product.html">{item.name}</a>
                                                                        <span>Select: White</span>
                                                                        <span>Color: Brown</span>
                                                                        <span>Reward Points: 200</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="quantity_selector ">
                                                                            <span onClick={() => onHandDown(item.id)} className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                            <span id="quantity_value">{item.quantity}</span>
                                                                            <span onClick={() => onHandUp(item.id)} className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                        </div>
                                                                    </td>
                                                                    <td>{item.price}</td>
                                                                    <td>{item.price * item.quantity}</td>
                                                                    <td>
                                                                        <span className="input-group-btn">
                                                                            {/* <Link onClick={() => onHandUpdate(item.id)} data className="btn btn-primary mr-1" data-original-title="Update"><i className="fa fa-refresh" /></Link> */}
                                                                            <Link onClick={() => onHandSubmit(item.id)} type="button" data-toggle="tooltip" data-direction="top" className="btn btn-danger " data-original-title="Remove"><i className="fa fa-times-circle" /></Link>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </form>

                                            <div className="cart-amount-wrapper">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-4 offset-md-8">
                                                        <table className="table table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td><strong>Sub-Total:</strong></td>
                                                                    <td>{getTotal(dataCart)}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><strong>Total:</strong></td>
                                                                    <td><span className="color-primary">{getTotal(dataCart)}</span></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-button-wrapper d-flex justify-content-between mt-4">
                                                <a href="/shop/products" className="btn btn-secondary dark">Continue Shopping</a>
                                                <a href="checkout.html" className="btn btn-secondary dark align-self-end">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end of shopping-cart */}
                            </main> {/* end of #primary */}
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>

        </div>
    )
}

ShopingCart.propTypes = {

}

export default ShopingCart
