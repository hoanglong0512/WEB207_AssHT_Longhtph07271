import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';
import apiContact from '../../../../api/contactApi';


const Contact = props => {
    const { handleSubmit, register, errors } = useForm();

    const onHandleSubmit = async (contact) => {
        try {
            const { data } = await apiContact.create(contact);
            swal("Thông Báo", "Gửi Liên Hệ Thành Công!", "success");
            window.location.reload('/contact');
        } catch (error) {
            console.log('failed to request API: ', error)
        }

    }

    return (
        <div>
            {/* Start of Breadcrumbs */}
            <div className="breadcrumb-section bgc-offset mb-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="index.html">Home</a>
                                <span className="breadcrumb-item active">Contact Us</span>
                            </nav>
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
            {/* End of Breadcrumbs */}
            {/* Start of Main Content Wrapper */}
            <main id="content" className="main-content-wrapper page-about">
                {/* Start of Contact Section */}
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div id="map_location" className="map-location">
                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7200441002415!2d105.7504502148979!3d21.0438848859902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454eb8abe6d35%3A0x69565462116731f6!2zMSBQaOG7kSBLaeG7gXUgTWFpLCBLaeG7gXUgTWFpLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1596082394033!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>

                                </div> {/* end of #map_location */}
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="contact-form-wrapper">
                                    <div className="section-title left-aligned">
                                        <h2>get In Touch</h2>
                                    </div>
                                    <form id="contact-form" onSubmit={handleSubmit(onHandleSubmit)}  >
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-6">
                                                <input type="text" name="name" className="form-control" id="com-name" placeholder="Your Name *"
                                                    ref={register({ required: true, minLength: 5 })}
                                                />
                                                {errors.name && errors.name.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                                {errors.name && errors.name.type === "minLength" && <span class="text-danger">Không được Nhỏ Hơn 5 ký Tự</span>}
                                            </div>
                                            <div className="form-group col-12 col-sm-12 col-md-6">
                                                <input type="text" name="email" className="form-control" id="com-email" placeholder="Your Email *"
                                                    ref={register({
                                                        required: true,
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Nhập Đúng Định Dạng Email"
                                                        }
                                                    })}
                                                />
                                                {errors.email && errors.email.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                                <span class="text-danger">{errors.email && errors.email.message}</span>

                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-12">
                                                <input type="text" name="subject" className="form-control" id="subject" placeholder="Your Subject"
                                                    ref={register({ required: true, minLength: 10 })}
                                                />
                                                {errors.name && errors.subject.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                                {errors.name && errors.subject.type === "minLength" && <span class="text-danger">Không được Nhỏ Hơn 10 ký Tự</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-12">
                                                <textarea id="comment" placeholder="Type Your Message....." name="message" className="form-control"
                                                    ref={register({ required: true, minLength: 10 })}
                                                />
                                                {errors.name && errors.message.type === "required" && <span class="text-danger">Không được bỏ trống</span>}
                                                {errors.name && errors.message.type === "minLength" && <span class="text-danger">Không được Nhỏ Hơn 10 ký Tự</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-12">
                                                <button name="send_message" type="submit" className="btn btn-secondary">Send Your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> {/* end of contact-form-wrapper */}
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Contact Section */}
                {/* Start of Info Section */}
                <section className="info-section pt-full pb-half bgc-offset">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-md-locate" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Our Location</h4>
                                        <p>123 North Avenue, Santa Rosa</p>
                                        <p>California</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-ios-call" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Contact Us Anytime</h4>
                                        <p>Mobile: <a href="#">(+1) 800 555 888</a></p>
                                        <p>Fax: (+1) 800 666 999</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-md-mail-open" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Write Some Words</h4>
                                        <p><a href="#">support24/7@example.com</a></p>
                                        <p><a href="#">contact@example.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Info Section */}
                {/* Start of Client Section */}
                <div className="client-section mb-full">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12">
                                <div className="clients element-carousel" data-visible-slide={5} data-visible-xl-slide={5} data-visible-lg-slide={5} data-visible-md-slide={4} data-visible-sm-slide={3} data-visible-xs-slide={2} data-loop="true" data-autoplay-delay={3000} data-space-between={0} data-effect="slide">
                                    {/* Slides */}
                                    <div className="swiper-wrapper">
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-1.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-2.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-3.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-4.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-5.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-6.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-7.jpg" alt="Client Logo" />
                                        </div>
                                        <div className="item-brand swiper-slide">
                                            <img src="images/brand/client-logo-8.jpg" alt="Client Logo" />
                                        </div>
                                    </div>
                                </div> {/* end of element-carousel */}
                            </div> {/* end of col */}
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div>
                {/* End of Client Section */}
                {/* Start of Newsletter Section */}
                <section className="newsletter-section vpadding bgc-offset mb0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                <div className="newsletter-title d-lg-flex justify-content-lg-start">
                                    <h6>Subscribe to our Newsletter</h6>
                                    <h3>Subscribe to our newsletter and know first about all the promotions and discounts. Be always trendy.</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                <div className="newsletter-form-wrapper">
                                    <form className="mc-subscribe-form">
                                        <input type="email" autoComplete="off" placeholder="Enter you email address here..." required />
                                        <input type="submit" className="default-btn" defaultValue="Subscribe" />
                                    </form>
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting" />
                                        <div className="mailchimp-success" />
                                        <div className="mailchimp-error" />
                                    </div>{/* end of mailchimp-alerts */}
                                </div>
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Newsletter Section */}
            </main>
        </div>

    )
}

Contact.propTypes = {

}

export default Contact
