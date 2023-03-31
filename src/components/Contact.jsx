import React from 'react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <>
            <div id='contact' className="light-background">






                <div class="contact-area" >
                    <ul class="contact-circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >

                <div class="contact-context px-5">

                    <div className="flexy">
                        <section className="contact small-section section" id="contact">
                        <div className='mb-8 mt-4'>
                            <h2 className="section-heading">Contact Me</h2>
                            <span className="section-subheading">Get in touch</span>
                        </div>
                            <div className="flexy">

                                <div className="contact__container container grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>

                                        <div className="contact__information">
                                            <i className="uil uil-phone contact__icon dark-color"></i>
                                            <div>
                                                <h3 className="contact__title">Call Me</h3>
                                                <span className="contact__subtitle">0000000000</span>
                                            </div>
                                        </div>

                                        <div className="contact__information">
                                            <i className="uil uil-envelope contact__icon dark-color"></i>
                                            <div>
                                                <h3 className="contact__title">Email</h3>
                                                <span className="contact__subtitle">mykitchen624@gmail.com</span>
                                            </div>
                                        </div>

                                        <div className="contact__information">
                                            <i className="uil uil-map-marker contact__icon dark-color"></i>
                                            <div>
                                                <h3 className="contact__title">Location</h3>
                                                <span className="contact__subtitle">7A/10 Mahatma Avenue, Durgapur-723222</span>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="" className="contact__form grid">
                                        <div className="contact__inputs grid">
                                            <div className="contact__content mb-4">
                                                <label for="" className="contact__label">Name</label>
                                                <input type="text" className="contact__input" />
                                            </div>
                                            <div class="contact__content mb-4">
                                                <label for="" className="contact__label">Email</label>
                                                <input type="email" className="contact__input" />
                                            </div>
                                        </div>
                                        <div class="contact__content mb-4">
                                            <label for="" className="contact__label">Project</label>
                                            <input type="text" className="contact__input" />
                                        </div>
                                        <div className="contact__content mb-4">
                                            <label for="" className="contact__label">Message</label>
                                            <textarea name="" id="" rows="7" cols="0" type="text" className="contact__input"></textarea>
                                        </div>

                                        <div className='mt-4'>
                                            <span className="dark-background rounded-lg p-4 button button--flex">
                                                Send Message
                                                <i className="ml-4 uil uil-message button__icon"></i>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>






            </div>
        </>
    )
}

export default Contact