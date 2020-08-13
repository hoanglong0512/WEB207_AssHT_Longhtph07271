import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

const Detail_Product = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id === id);

    return (
        <div className="container-fluid bg-dark">

            <h1>Hello {product.name}</h1>
            <img src={product.image} alt="" />
        </div>
    )
}

Detail_Product.propTypes = {

}

export default Detail_Product
