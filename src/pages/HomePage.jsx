import { Col, Container, Row, Image, Button } from "react-bootstrap";
import logoImage from "../assets/images/logo.png";
// @ts-ignore
import ResumePDF from "../assets/docs/Parth Desai CV.pdf";
import {
    House, FileEarmarkText, Bag, PersonLinesFill, Facebook,
    Linkedin, Twitter, Github, Phone, EnvelopeOpen, GeoAlt, FileEarmarkArrowDown
} from 'react-bootstrap-icons';
import $ from 'jquery';

import "../assets/css/home.css";
import { HomeMenu, HomeMenuProvider, menuComponentMapper } from "providers/HomeMenu";
import { useContext } from "react";

function Home() {
    const { selectedMenuItem, setSelectedMenuItem } = useContext(HomeMenu);
    const SelectedComponent = menuComponentMapper[selectedMenuItem];


    function handleMenuItemClick(clickedMenuItem, e) {
        $(".menu-item").removeClass("active");
        e.currentTarget.classList.add("active");
        setSelectedMenuItem(clickedMenuItem);
    }

    return (
        <>
            <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
                <linearGradient id="icon-gradiant" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF9C1B" />
                    <stop offset="100%" stopColor="#EB1D08" />
                </linearGradient>
            </svg>


            <Container fluid className="my-4" >
                <Row>
                    <Col>
                        <div>
                            <Image src={logoImage} style={{ height: "55px", cursor: "pointer" }} onClick={() => setSelectedMenuItem("home")} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-end">
                            <div className="menu-items">
                                <div
                                    className={"menu-item" + (selectedMenuItem === "home" ? " active" : "")}
                                    onClick={(e) => handleMenuItemClick("home", e)}
                                >
                                    <div className="icon-wraper">
                                        <House />
                                    </div>
                                    <div className="text-wraper">
                                        Home
                                    </div>
                                </div>
                                <div
                                    className={"menu-item" + (selectedMenuItem === "resume" ? " active" : "")}
                                    onClick={(e) => handleMenuItemClick("resume", e)}
                                >
                                    <div className="icon-wraper">
                                        <FileEarmarkText />
                                    </div>
                                    <div className="text-wraper">
                                        Resume
                                    </div>
                                </div>
                                <div
                                    className={"menu-item" + (selectedMenuItem === "work" ? " active" : "")}
                                    onClick={(e) => handleMenuItemClick("work", e)}
                                >
                                    <div className="icon-wraper">
                                        <Bag />
                                    </div>
                                    <div className="text-wraper">
                                        Work
                                    </div>
                                </div>

                                <div
                                    className={"menu-item" + (selectedMenuItem === "contact" ? " active" : "")}
                                    onClick={(e) => handleMenuItemClick("contact", e)}
                                >
                                    <div className="icon-wraper">
                                        <PersonLinesFill />
                                    </div>
                                    <div className="text-wraper">
                                        Contact
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md={{ span: 3 }}>
                        <div className="left-content-wraper text-center">
                            <h3 className="name">Parth Desai</h3>
                            <h6 className="position">Software Developer</h6>

                            <div className="social-media-items">
                                <a className="social-media-item" href="https://www.facebook.com/profile.php?id=100009073984667" target="_blank" rel="noreferrer">
                                    <Facebook fill="#1877F2" />
                                </a>

                                <a className="social-media-item" href="https://www.linkedin.com/in/parth971/" target="_blank" rel="noreferrer">
                                    <Linkedin fill="#0077B5" />
                                </a>
                                <a className="social-media-item" href="https://twitter.com/desaiparth971/" target="_blank" rel="noreferrer">
                                    <Twitter fill="#1CA1F2" />
                                </a>
                                <a className="social-media-item" href="https://github.com/Parth971/" target="_blank" rel="noreferrer">
                                    <Github fill="#0B0909" />
                                </a>
                            </div>

                            <div className="contact-details">
                                <div className="detail-wraper d-flex align-items-center">
                                    <div className="icon-wraper">
                                        <Phone fill="url(#icon-gradiant)" />
                                    </div>
                                    <div className="detail">
                                        <div className="detail-title">
                                            Phone
                                        </div>
                                        <div className="detail-value">
                                            +91 8141993590
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-wraper d-flex align-items-center">
                                    <div className="icon-wraper">
                                        <EnvelopeOpen fill="#FF9C1B" />
                                    </div>
                                    <div className="detail">
                                        <div className="detail-title">
                                            Email
                                        </div>
                                        <div className="detail-value">
                                            desaiparth971@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-wraper d-flex align-items-center">
                                    <div className="icon-wraper">
                                        <GeoAlt fill="#E70504" />
                                    </div>
                                    <div className="detail">
                                        <div className="detail-title">
                                            Location
                                        </div>
                                        <div className="detail-value">
                                            Gujarat, India
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={ResumePDF}
                                    download="Parth Desai CV"
                                    target='_blank'
                                    rel="noreferrer"
                                    className="download-resume d-flex align-items-center justify-content-center"
                                >
                                    <Button>
                                        <FileEarmarkArrowDown />
                                        <div className="text">
                                            Download Resume
                                        </div>
                                    </Button>
                                </a>

                            </div>

                        </div>
                    </Col>
                    <Col md={{ span: 9 }}>
                        <div className="right-content-wraper">
                            <SelectedComponent />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default function HomePage() {
    return (
        <HomeMenuProvider>
            <Home />
        </HomeMenuProvider>

    );
}