import React from 'react';
import PropTypes from 'prop-types';
import Sale01 from '../components/sale/Sale01';

import img from '../assets/images/layout/contact.jpg'
import PageTitle from '../components/pagetitle';

Contact.propTypes = {

};

function Contact(props) {
    return (
        <div>
            <PageTitle heading='Contact' title='Contact' />

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="contact-main">
                                <div className="block-text center">
                                    <h3 className="heading">Leave a message for us</h3>
                                    <p className="desc fs-20">Get in touch with Oblivion</p>
                                </div>

                                <form>
                                    <div className="form-group">
                                        <label>Your name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter mail"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Message </label>
                                        <textarea
                                            cols="30"
                                            rows="10"
                                            className="form-control"
                                            placeholder="Enter your message"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-action">Send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Sale01 />

        </div>
    );
}

export default Contact;