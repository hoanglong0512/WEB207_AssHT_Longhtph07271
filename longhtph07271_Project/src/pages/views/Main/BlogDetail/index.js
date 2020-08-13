import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const BlogDetail = ({ blog }) => {
    let { id } = useParams();
    return (
        <div>
            {/* Start of Breadcrumbs */}
            <div className="breadcrumb-section bgc-offset mb-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="index.html">Home</a>
                                <a className="breadcrumb-item" href="blog.html">Blog</a>
                                <span className="breadcrumb-item active">Blog Details</span>
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
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                                <main id="primary" className="site-main">
                                    <div className="single-post-wrapper">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">

                                                {blog.map((item, index) => {
                                                    if (item.id == id) {
                                                        return (
                                                            <article className="blog-post post-entry">
                                                                <div className="single-post">
                                                                    <div className="content-wrapper">
                                                                        <div className="post-media image-popup">
                                                                            <figure>
                                                                                <a href="assets/images/blog/blog-single-large.jpg" data-size="1920x930">
                                                                                    <img src={item.image} alt="Blog Details" />
                                                                                    <div className="image-overlay"><i className="ion ion-ios-add" /></div>
                                                                                </a>
                                                                                <figcaption className="visually-hidden">
                                                                                    <span>Blog Details</span>
                                                                                </figcaption>
                                                                            </figure>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <h3 className="post-title">{item.title}</h3>
                                                                            <div className="post-meta">
                                                                                <p>
                                                                                    <span>By
                                      <span className="single-meta">
                                                                                            <a href="#">{item.by}</a>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="post-categories">In
                                      <span className="single-meta">
                                                                                            <a href="#">Tips, </a>
                                                                                            <a href="#">Shopping</a>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span>Posted on
                                      <span className="single-meta">
                                                                                            <a href="#">Aug 14, 2018</a>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="post-description">
                                                                                <div className="post-details">
                                                                                    <p>{item.short_desc} </p>
                                                                                    {ReactHtmlParser(item.content)}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post-footer">
                                                                            <div className="d-md-flex justify-content-sm-between">
                                                                                <div className="tags align-self-center">
                                                                                    <p>Tags:</p>
                                                                                    <ul className="list-inline">
                                                                                        <li className="list-inline-item"><a href="#">design,</a></li>
                                                                                        <li className="list-inline-item"><a href="#">development,</a></li>
                                                                                        <li className="list-inline-item"><a href="#">sketch</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="post-share">
                                                                                    <p>Share:</p>
                                                                                    <ul className="list-inline">
                                                                                        <li className="list-inline-item"><a href="#" className="bg-facebook"><i className="fa fa-facebook" /></a></li>
                                                                                        <li className="list-inline-item"><a href="#" className="bg-twitter"><i className="fa fa-twitter" /></a></li>
                                                                                        <li className="list-inline-item"><a href="#" className="bg-gplus"><i className="fa fa-google-plus" /></a></li>
                                                                                        <li className="list-inline-item"><a href="#" className="bg-pinterest"><i className="fa fa-pinterest" /></a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        )
                                                    }
                                                })}


                                            </div>
                                        </div> {/* end of row */}
                                    </div> {/* end of single-post-wrapper */}
                                </main> {/* end of #primary */}
                            </div>
          -
        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div>
                {/* End of Blog Posts Section */}
            </div>
        </div>


    )
}

BlogDetail.propTypes = {

}

export default BlogDetail
