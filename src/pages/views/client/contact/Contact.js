import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/contact/add-contact/", data)
            .then(function (response) {
                window.alert('Sent contact successfully !');
                window.location.pathname = "/";
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    return (
        <div className="contact-area d-flex align-items-center" style={{ paddingTop: '20px' }}>
            <div className="google-map">
                <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0730916872153!2d105.73953371476192!3d20.949579686041265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452f342b338f5%3A0x2919ad2ee3527bbb!2zNzksIDQ0IMSQxrDhu51uZyBOZ2jEqWEgTOG7mSwgWcOqbiBOZ2jEqWEsIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1596676244732!5m2!1svi!2s" width={950} height={650} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
            </div>
            <div className="contact-info">
                <section className="mb-4">
                    {/*Section heading*/}
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    {/*Section description*/}
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
                    <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-12 mb-md-0 mb-5">
                            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className>Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                                            {errors.name && <span style={{ color: "red" }} >This name is required</span>}
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="email" className>Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" ref={register({ required: true, pattern: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm })} />
                                            {errors.email && <span style={{ color: "red" }} >This email is required</span>}
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className>Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                                            {errors.subject && <span style={{ color: "red" }} >This subject is required</span>}
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label htmlFor="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                                            {/* <input type="text" name="message" className="form-control" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} /> */}
                                            {errors.message && <span style={{ color: "red" }} >This message is required</span>}
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                                <div className="text-center text-md-left" style={{ paddingTop: '5px' }}>
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                        {/*Grid column*/}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact