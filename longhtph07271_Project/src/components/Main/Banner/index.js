import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
    return (
        <div>
            {/* Start of Primary Slider Section */}
            <section className="primary-slider-section mb0 pos-r">
                <div id="primary_slider" className="swiper-container slider-type-1">
                    {/* Slides */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide bg-img-wrapper">
                            <div className="slide-inner image-placeholder">
                                <img src="images/slider/home-1/slide-1.jpg" className="visually-hidden" alt="Slider Image" />
                                <div className="slide-progress" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="slide-content layer-animation-1">
                                                <p className="promo-title"><span>limited edition</span> Sale Offer 20% Off This Week</p>
                                                <h1 className="main-title"><span>Pebona Amazing</span> <span>Sport Sneakers 2018</span></h1>
                                                <p className="subtitle">Light knit upper adapts to the shape of your foot for flexible and natural movement.</p>
                                                <div className="slide-button">
                                                    <a className="default-btn" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                </div>
                                            </div> {/* end of slide-content */}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* end of slider-inner */}
                        </div> {/* end of swiper-slide */}
                        <div className="swiper-slide bg-img-wrapper">
                            <div className="slide-inner image-placeholder">
                                <img src="images/slider/home-1/slide-2.jpg" className="visually-hidden" alt="Slider Image" />
                                <div className="slide-progress" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="slide-content layer-animation-2">
                                                <p className="promo-title"><span>limited edition</span> Sale Offer 20% Off This Week</p>
                                                <h1 className="main-title"><span>Pebona Air Zoom</span> <span>Mariah Flyknit Racer</span></h1>
                                                <p className="subtitle">The Nike Air Zoom Pegasus 34 Men's Running Shoe features an updated, lighter Flymesh material that helps reduce heat build-up when you run.</p>
                                                <div className="slide-button">
                                                    <a className="default-btn" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                </div>
                                            </div> {/* end of slide-content */}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* end of slider-inner */}
                        </div> {/* end of swiper-slide */}
                        <div className="swiper-slide bg-img-wrapper">
                            <div className="slide-inner image-placeholder">
                                <img src="images/slider/home-1/slide-3.jpg" className="visually-hidden" alt="Slider Image" />
                                <div className="slide-progress" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="slide-content white-scheme layer-animation-3">
                                                <p className="promo-title"><span>Hot Sale OFF</span> Sale Offer 60% Off This Week</p>
                                                <h1 className="main-title"><span>Top 20% Sale</span> <span>Black History Month</span></h1>
                                                <p className="subtitle">The collection grows each year with original stories and design features, influenced by Abalia's employees.</p>
                                                <div className="slide-button">
                                                    <a className="default-btn secondary" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                </div>
                                            </div> {/* end of slide-content */}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* end of slider-inner */}
                        </div> {/* end of swiper-slide */}
                    </div> {/* end of swiper-slide */}
                    {/* Slider Navigation */}
                    <div className="swiper-arrow next slide"><i className="fa fa-angle-right" /></div>
                    <div className="swiper-arrow prev slide"><i className="fa fa-angle-left" /></div>
                    {/* Slider Pagination */}
                    <div className="swiper-pagination" />
                </div>
            </section>
            {/* End of Primary Slider Section */}
        </div>
    )
}

Banner.propTypes = {

}

export default Banner
