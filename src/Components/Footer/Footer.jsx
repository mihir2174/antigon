import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Antigone from "../../assets/Footer/logoantigone.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: "#2084C2", color: "white" }}>

            <footer >
                <div
                    className="parallax100 kit-overlay1 p-t-35 p-b-15"

                >
                    <div className="container pt-5 pb-4">
                        <div className="row justify-content-between">
                            <div className="col-sm-8 col-md-5 col-lg-3 row gap-3">
                                <div className="size-h-1 flex-s-e p-b-6 m-b-2">
                                    <a href="#">
                                        <img className="antigone-logo-footer" src={Antigone} alt="IMG" />
                                    </a>
                                </div>
                                <p className="t1-s-2 cl-13 p-b-9">
                                Shaping the future with state-of-the-art technology solutions that address critical challenges in defence, aerospace, and beyond.
                                </p>
                            </div>
                            <div className="col-sm-8 col-md-5 col-lg-4 ">
                                <h4 className="t1-m-3 text-uppercase cl-0">Contact us</h4>
                                <ul className="list-unstyled row gap-2">
                                    <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                                        <span className="size-w-4" style={{ fontWeight: "500", fontSize: "large" }}>
                                            Antigone Solutions Pvt Ltd</span><br></br>
                                        <span className="size-w-4">
                                            76/1 Amr complex, 3B - 3rd floor
                                            Mission Road, Sudhamanagar
                                            Bangalore - 560027</span>
                                        <br></br>
                                        
                                    </li>
                                    <li><span className="size-w-4">
                                            T19 TOWERS, Unit No 402, 4th Floor,
                                            MG Road Karbala Maidan,
                                            Rani Gunj, Hyderabad – 500003,
                                            Telangana</span></li>
                                    <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                                        <div className='d-flex align-items-center '>
                                            <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} aria-hidden />
                                            <div className='ms-2'>  +91-80-49908599
                                            </div></div>
                                    </li>
                                    <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                                        <div className='d-flex align-items-center '>
                                            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} aria-hidden />
                                            <div className='ms-2'> info@antigone.co.in</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-8 col-md-5 col-lg-3 ">
                                <h4 className="t1-m-3 text-uppercase cl-0">Company</h4>
                                <div className="d-flex flex-wrap">
                                    <ul className="w-50 list-unstyled">
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>Home</Link>
                                        </li>
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>Products</Link>
                                        </li>
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>Services</Link>
                                        </li>
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>Career</Link>
                                        </li>
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>About Us</Link>
                                        </li>
                                        <li className="kit-list1 p-b-9">
                                            <Link to="" className='text-decoration-none' style={{ color: "white" }}>Contact us</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>

        </div>
    );
}

export default Footer;
