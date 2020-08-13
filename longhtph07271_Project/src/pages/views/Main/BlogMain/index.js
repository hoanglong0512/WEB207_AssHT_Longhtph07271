import React from 'react'
import PropTypes from 'prop-types'
import blogApi from '../../../../api/blogApi'
import { useHistory, Link } from 'react-router-dom';

const BlogMain = ({ blog }) => {
    return (
        <div>
            {/* Start of Breadcrumbs */}
            <div className="breadcrumb-section bgc-offset mb-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="index.html">Home</a>
                                <span className="breadcrumb-item active">Blog</span>
                            </nav>
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
            {/* End of Breadcrumbs */}
            {/* Start of Main Content Wrapper */}
            <div id="content" className="main-content-wrapper">
                {/* Start of Blog Posts Section */}
                <div className="blog-posts-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <main id="primary" className="site-main">
                                    <div className="blog-grid-area">
                                        <div className="row">

                                            {blog.map((item, index) => (
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                    <article className="blog-post post-entry">
                                                        <div className="blog-grid">
                                                            <div className="content-wrapper">
                                                                <div className="post-media">
                                                                    <a href="blog-details.html">
                                                                        <div className="element-carousel" data-visible-slide={1} data-visible-xl-slide={1} data-visible-lg-slide={1} data-visible-md-slide={1} data-visible-sm-slide={1} data-loop="true" data-autoplay-delay={5000} data-effect="fade">
                                                                            <div className="swiper-wrapper">
                                                                                <div className="swiper-slide">
                                                                                    <img src={item.image} alt="Blog Image" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="post-content">
                                                                    <ul className="post-category">
                                                                        <li><a href="#">World</a></li>
                                                                        <li><a href="#">Travel</a></li>
                                                                    </ul>
                                                                    <h3 className="post-title"><Link to={`/detail/blog/${item.id}`}>{item.title}.</Link></h3>
                                                                    <p>{item.short_desc}...</p>
                                                                </div>
                                                                <div className="post-footer">
                                                                    <div className="post-meta">
                                                                        <ul>
                                                                            <li>May 10, 2018</li>
                                                                            <li>10 Comments</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="post-more">
                                                                        <a href="blog-details.html">Read more <i className="fa fa-angle-double-right" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> {/* end of blog-grid */}
                                                    </article> {/* end of blog-post */}
                                                </div>
                                            ))}



                                        </div> {/* end of row */}
                                    </div> {/* end of blog-grid-area */}
                                    <div className="pagination-area">
                                        <div className="row align-items-center">
                                            <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
                                                <div className="page-amount d-flex justify-content-center justify-content-md-start">
                                                    <p>Showing 7 to 12 of 30 (5 Pages)</p>
                                                </div>
                                            </div>
                                            <div className="col-12 order-1 col-sm-12 col-md-6 order-md-2 col-lg-6">
                                                <ul className="pagination">
                                                    <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-left" /> <span>Previous</span></a></li>
                                                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                                                    <li className="page-item active"><span className="page-link">2</span></li>
                                                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                                                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                                                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                                                    <li className="page-item"><a href="#" className="page-link"><span>Next</span> <i className="fa fa-angle-right" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* end of pagination-area */}
                                </main> {/* end of #primary */}
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div>
                {/* End of Blog Posts Section */}
            </div>
        </div>

    )
}

BlogMain.propTypes = {

}

export default BlogMain
