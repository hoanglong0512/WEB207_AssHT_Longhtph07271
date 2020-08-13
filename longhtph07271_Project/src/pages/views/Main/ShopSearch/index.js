import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { BsSearch, BsBagFill, BsGear } from "react-icons/bs";
import { IconContext } from "react-icons";

const ShopSearch = ({ products, AddToCart }) => {
    const AddCart = (id) => {
        AddToCart(id);
    }
    const { keyword } = useParams();

    return (
        <div>
            <div className="breadcrumb-section bgc-offset mb-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="/">Home</a>
                                <span className="breadcrumb-item active">Compete Track Tote</span>
                            </nav>
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
            <div className="products-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-1 order-md-1 order-lg-2">
                            <main id="primary" className="site-main">
                                <div className="shop-wrapper">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <h1>Shop</h1>
                                            <div className="shop-toolbar">
                                                <div className="toolbar-inner">
                                                    <div className="product-view-mode">
                                                        <ul role="tablist" className="nav shop-item-filter-list">
                                                            <li role="presentation"><a href="#grid" aria-controls="grid" role="tab" data-toggle="tab"><i className="ion-md-grid" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="toolbar-amount">
                                                        <span>Tổng Sản Phẩm </span>
                                                    </div>
                                                </div>
                                                <div className="product-select-box">
                                                    <div className="product-sort">
                                                        <p>Sort By:</p>
                                                        <select className="nice-select" name="sortby">
                                                            <option value="trending">Relevance</option>
                                                            <option value="sales">Name (A - Z)</option>
                                                            <option value="sales">Name (Z - A)</option>
                                                            <option value="rating">Price (Low &gt; High)</option>
                                                            <option value="date">Rating (Lowest)</option>
                                                            <option value="price-asc">Model (A - Z)</option>
                                                            <option value="price-asc">Model (Z - A)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end of row */}
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <div className="shop-products-wrapper">
                                                <div className="tab-content">
                                                    <div id="grid" className="tab-pane anime-tab active show" role="tabpanel">
                                                        <div className="row">
                                                            {/* start */}
                                                            {products.map((product, index) => {
                                                                let search = new RegExp(keyword, "i");
                                                                console.log(keyword)
                                                                if (search.test(product.name)) {
                                                                    return (
                                                                        <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4" >
                                                                            <div className="product-thumb" key={index}>
                                                                                <div className="product-inner">
                                                                                    <div className="product-image">
                                                                                        <div className="label-product label-sale">-20%</div>
                                                                                        <div className="label-product label-new">New</div>
                                                                                        <a href="">
                                                                                            <img src={product.image} alt="Compete Track Tote" title="Compete Track Tote" />
                                                                                        </a>
                                                                                        <div className="action-links">
                                                                                            <a className="action-btn btn-cart" onClick={() => AddCart(product.id)} title="Add to Cart">
                                                                                                <IconContext.Provider value={{ color: "red" }}>
                                                                                                    <div>
                                                                                                        <BsBagFill />
                                                                                                    </div>
                                                                                                </IconContext.Provider>
                                                                                            </a>
                                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                        </div>
                                                                                    </div> {/* end of product-image */}
                                                                                    <div className="product-caption">
                                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                            <div className="product-manufacturer">
                                                                                                <a href="#">{/* category */}</a>
                                                                                            </div>
                                                                                            <div className="product-ratings">
                                                                                                <div className="rating-box">
                                                                                                    <ul className="rating d-flex">
                                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <h4 className="product-name"><Link to={`/product/detail/${product.id}`}>{product.name}</Link></h4>
                                                                                        <p className="product-price">
                                                                                            <span className="price-old"></span>
                                                                                            <span className="price-new">{product.price} VNĐ</span>
                                                                                        </p>
                                                                                    </div>{/* end of product-caption */}
                                                                                </div>{/* end of product-inner */}
                                                                            </div>{/* end of product-thumb */}
                                                                        </article>
                                                                    )
                                                                }
                                                            })}
                                                            {/* end */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* end of shop-products-wrapper */}
                                            <div className="pagination-area">
                                                <div className="row align-items-center">
                                                    <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
                                                        <div className="page-amount d-flex justify-content-center justify-content-md-start">
                                                            <p>{/* phân trang */}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* end of pagination-area */}
                                        </div>
                                    </div> {/* end of row */}
                                </div> {/* end of shop-wrapper */}
                            </main> {/* end of #primary */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-2 order-md-2 order-lg-1">
                            <aside id="secondary" className="widget-area">
                                <div className="sidebar-widget list-categories-widget">
                                    <h2 className="widgettitle">Shop</h2>
                                    <div className="cat-accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Art Gallery</button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                                <div className="card-body">
                                                    <ul className="cat-sub-menu">
                                                        <li><a href="#">blandit vehicula</a></li>
                                                        <li><a href="#">Praesent molestie</a></li>
                                                        <li><a href="#">sagittis ipsum</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Rugs</button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                                                <div className="card-body">
                                                    <ul className="cat-sub-menu">
                                                        <li><a href="#">Fire Pits</a></li>
                                                        <li><a href="#">Garden Accents</a></li>
                                                        <li><a href="#">Outdoor Fountains</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories</button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                                                <div className="card-body">
                                                    <ul className="cat-sub-menu">
                                                        <li><a href="#">Quard Trousers</a></li>
                                                        <li><a href="#">Maroon Detail</a></li>
                                                        <li><a href="#">Check Trousers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h5 className="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Clothing</button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                                <div className="card-body">
                                                    <ul className="cat-sub-menu">
                                                        <li><a href="#">Moleskin Blazers</a></li>
                                                        <li><a href="#">Wool Check Blazers</a></li>
                                                        <li><a href="#">Combined Jackets</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h5 className="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Handbag</button>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                                                <div className="card-body">
                                                    <ul className="cat-sub-menu">
                                                        <li><a href="#">Moleskin Blazers</a></li>
                                                        <li><a href="#">Wool Check Blazers</a></li>
                                                        <li><a href="#">Biker Jackets</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget list-widget">
                                    <h2 className="widgettitle">Categories</h2>
                                    <div className="list-widget-wrapper">
                                        <div className="list-group">
                                            <a href="#">Shoes (198)</a>
                                            <a href="#">backpacks (70)</a>
                                            <a href="#">Accessories (14)</a>
                                            <a href="#">Dresses (10)</a>
                                        </div>
                                    </div>
                                </div> {/* end of sidebar-widget */}
                                <div className="sidebar-widget list-widget">
                                    <h2 className="widgettitle">Brands</h2>
                                    <div className="list-widget-wrapper">
                                        <div className="list-group">
                                            <a href="#">Graphic Corner (14)</a>
                                            <a href="#">Studio Design (14)</a>
                                            <a href="#">Tommy Hilfiger (14)</a>
                                            <a href="#">Versace (14)</a>
                                        </div>
                                    </div>
                                </div> {/* end of sidebar-widget */}
                                <div className="sidebar-widget list-widget">
                                    <h2 className="widgettitle">Price</h2>
                                    <div className="list-widget-wrapper">
                                        <div className="list-group">
                                            <a href="#">$43.00 - $45.00 (10)</a>
                                            <a href="#">$54.00 - $58.00 (4)</a>
                                            <a href="#">$62.00 - $70.00 (5)</a>
                                            <a href="#">$78.00 - $83.00 (10)</a>
                                            <a href="#">$85.00 - $89.00 (13)</a>
                                        </div>
                                    </div>
                                </div> {/* end of sidebar-widget */}
                                <div className="sidebar-widget color-widget">
                                    <h2 className="widgettitle">Color</h2>
                                    <div className="color-widget-wrapper">
                                        <ul className="color-options">
                                            <li>
                                                <span className="white" />
                                                <a href="#">white (4)</a>
                                            </li>
                                            <li>
                                                <span className="orange" />
                                                <a href="#">Orange (2)</a>
                                            </li>
                                            <li>
                                                <span className="blue" />
                                                <a href="#">Blue (6)</a>
                                            </li>
                                            <li>
                                                <span className="yellow" />
                                                <a href="#">Yellow (8)</a>
                                            </li>
                                            <li>
                                                <span className="black" />
                                                <a href="#">black (6)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> {/* end of sidebar-widget */}
                                <div className="sidebar-widget tag-cloud">
                                    <h2 className="widgettitle">Popular Tags</h2>
                                    <div className="tags-widget">
                                        <ul>
                                            <li><a href="#">Ecommerce</a></li>
                                            <li><a href="#">Shoes</a></li>
                                            <li><a href="#">bags</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                            <li><a href="#">Trending</a></li>
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Smart</a></li>
                                        </ul>
                                    </div>
                                </div> {/* end of sidebar-widget */}
                            </aside> {/* end of #secondary */}
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
        </div>
    )
}

ShopSearch.propTypes = {

}

export default ShopSearch
