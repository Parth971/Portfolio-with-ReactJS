import { FloatingLabel, Form } from "react-bootstrap";
import "../assets/css/contact.css";
import { TelephoneOutbound, EnvelopeAt } from 'react-bootstrap-icons';

export default function Contact() {
    return (
        <>
            <section>
                <div className="header d-flex flex-row align-items-center">
                    <div className="header-title">Contact</div>
                    <div className="header-line"></div>
                </div>

                <div className="contact-details d-flex justify-content-between my-3">
                    <div className="contact-detail d-flex justify-content-start" style={{ backgroundColor: "#FFEED9" }}>
                        <div className="contact-icon">
                            <TelephoneOutbound fill="url(#icon-gradiant)" />
                        </div>
                        <div>
                            <div className="detail-title">
                                Phone:
                            </div>
                            <div className="detail-value">
                                +91 8141993590
                            </div>
                        </div>
                    </div>
                    <div className="contact-detail d-flex justify-content-start" style={{ backgroundColor: "#F2F7FC" }}>
                        <div className="contact-icon">
                            <EnvelopeAt fill="url(#icon-gradiant)" />
                        </div>
                        <div>
                            <div className="detail-title">
                                Email:
                            </div>
                            <div className="detail-value">
                                desaiparth971@gmail.com
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wraper">
                    <div className="instructions">
                        I am always open to discussing <b>new projects, opportunities in tech world, partnerships</b> and more so <b>mentorship.</b>
                    </div>
                    <div className="form">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <div className="submit-btn">
                            <div className="inner"></div>
                            Submit
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}