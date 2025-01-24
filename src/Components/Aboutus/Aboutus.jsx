import React from 'react'
import './Aboutus.css'
import min from "../../assets/Aboutus/min.webp"
const Aboutus = () => {
    return (
    <>
            <section>
                <div className='container mt-5 mb-5'>
                    <div className='row'>
                        <h1>About Us</h1>
                        <p className='mt-3'>
                        Antigone Solutions is a Defence start-up focusing indigenously on the Design, Development, Engineering & Manufacturing of Electronics Solutions primarily for the Defense and Aerospace segments. At present we are developing several indigenous technologies with collaborative development approach.
                        </p>
                        <p>
                        Our aim is to develop Product & Subsystem, offer integrated solutions and to partner with the industry’s top brands to form strategic alliances, strengthen technology initiatives and offer best-in-class design services. We undertake the design and system-level ownership of complex components, sub-systems, and modules as per customer provided specification delivering excellence in every step, allowing our customers to obtain a viable advantage.
                        </p>
                        {/* <div className='info-au p-5'>
                            <div className='row'>
                                <div class="title_holder col-12 col-md-8">
                                    <h5>LOTUS MICROWAVE</h5>
                                    <h3>INFRASTRUCTURE</h3>
                                    <p>Lotus Microwave has in place a state-of-the-technology facility at the Adibatla Industrial Area, TSIIC, Aerospace Zone of Hyderabad on across 8,000 sft.
                                    Total Area: 90000 sft |
                                    Built-up Area: 40000 sft
                                     Design and Engineering Facility: 10000 sft to accommodate team size of  120Nos.</p>
                                </div>
                                <div class="badge_holder col-12 col-md-4 border border-info border-5 row align-items-center justify-content-center"  >
                                    <div class="title">
                                        <h5>India's Leading Industry<br/>Corporation</h5>
                                        </div>
                                        <div class="content">
                                            <span class="year">10</span><
                                                span>Years of Experience</span>
                                                </div>
                                                </div>
                                    </div>
                                </div> */}
                            </div>

                        <div className='row mt-5'>
                        <h1>MAKE IN INDIA</h1>
                        <img src={min} className='w-50 mt-3'></img>
                        <p className='mt-3'>
                        Our primary focus is to work with key government defence laboratories to develop products and solutions with special focus on ‘MAKE IN INDIA’.
                        </p>
                        <p>
                        This start-up has the means to develop critical solutions for the security, defence and space.
                        </p>
                        <p>
                        At present we are developing several indigenous technologies with collaborative development approach.
                        </p>
                        <p>Antigone Solutions is a successfully registered as </p>
                        </div>
                        </div>
                    </section>
                </>
                )
}

                export default Aboutus