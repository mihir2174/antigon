import React from 'react'
import img1 from '../../assets/Home/image1.jpg'
import img2 from '../../assets/Home/image2.jpg'
import img4 from '../../assets/Home/image3.jpg'
import img5 from '../../assets/Home/image4.jpg'
import img6 from '../../assets/Home/image5.jpg'

import img3 from '../Home/service1.jpg'
import './Home.css'
import part from '../../assets/Home/part.png'

const Home = () => {
    return (
        <>
            <div className=''>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img4} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img5} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img6} class="d-block w-100" alt="..." />
                        </div>
                        

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <section className="bg-0 m-b-100  respon-6 kit-pos2 mt-5" style={{ height: 'auto' }}>
            <div className="kit-pos2-1 mb-5">
                <div className="container pb-5">
                <div className='t1-b1  d-flex justify-content-center'>Product Design & Engineering</div>
                    <div className="row justify-content-center mt-3">
                         
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        RF
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Delivering high-performance RF solutions for seamless communication and advanced applications..
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        Embedding
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Designing intelligent embedded systems for the next-generation innovation and automation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        Power Supply
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Providing customised, reliable and efficient power supply solutions for critical applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        Software
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Developing advanced software solutions that drive innovation and efficiency across industries
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        Nano Science
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Developing advanced software solutions that drive innovation and efficiency across industries
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 mt-4">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " style={{ backgroundColor: '#2084C2', color:'white' }}>
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'white'}}>
                                        Aviation Lighting
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    Precision-crafted lighting systems designed to meet the demanding needs of modern aviation
                                    </p>
                                </div>
                            </div>
                        </div>
                        

                       
                    </div>
                </div>
            </div>
            </section>
            <section className='container bg-body-secondary p-4 gap-4 d-flex flex-column mb-5'>
                   <div className=' flex-column d-flex justify-content-center align-items-center gap-2'>
                   <div className='t1-b1  d-flex justify-content-center'>About us</div>
                   <div className='tbt d-flex justify-content-center'></div></div>
                   <p>Founded in 2022, Antigone Solutions is built on the exceptional expertise of a highly experienced team with over 200 man-years of collective experience in the RF and Microwave domains. Our extensive knowledge and innovative approach empower us to design and develop cutting-edge products that address complex challenges in these fields.</p>
                   <p>We excel in RF, Radars, Electronic Warfare (EW), Space, and other advanced applications, earning the trust of defense agencies and private enterprises alike. Our reliable, customized, and globally competitive solutions cater to the Defence, Aerospace, Telecom, and Meteorology sectors.</p>
                   <p>At Antigone Solutions, we are committed to developing world-class Products, Systems, and Subsystems. We offer integrated solutions, forge strategic alliances with leading industry brands, and strengthen technology initiatives to deliver exceptional design services and innovative solutions that drive progress.</p>
            </section>
            <section>
            
            <div className="cardContainer">
            <div className="card">
                <div className="imageContainer">
                    <img
                        src={part}
                        alt="part"
                        className="mainImage"
                    />
                </div>
                <div className="titleContainer">
                    <h3>Part</h3>
                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when </p>
                    <button className="readMore">Read More</button>
                </div>
            </div>
            <div className="card">
                <div className="imageContainer">
                    <img
                        src={part}
                        alt="part"
                        className="mainImage"
                    />
                </div>
                <div className="titleContainer">
                    <h3>Part</h3>
                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when </p>
                    <button className="readMore">Read More</button>
                </div>
            </div>
            <div className="card">
                <div className="imageContainer">
                    <img
                        src={part}
                        alt="part"
                        className="mainImage"
                    />
                </div>
                <div className="titleContainer">
                    <h3>Part</h3>
                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when </p>
                    <button className="readMore">Read More</button>
                </div>
            </div>
        </div>
   
            </section>
            {/* <section className='container p-4 gap-5 d-flex flex-column mb-5'>
                   <div className=' flex-column d-flex justify-content-center align-items-center gap-2'>
                   <div className='t1-b1  d-flex justify-content-center'>Latest From News</div>
                   <div className='tbt d-flex justify-content-center'></div></div>
                   <div className="bg-0 m-b-100 mb-5 respon-6 kit-pos2" style={{ height: 'auto' }}>
            <div className="kit-pos2-1 mb-5">
                <div className="container pb-5">
                    <div className="row justify-content-center">
                        
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 ">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " >
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'black'}}>
                                        Recruiting Managerial Staff
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    To take a trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it...
                                    </p>
                                    <button type="button" class="btn btn-primary col-4">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 ">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " >
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'black'}}>
                                        Recruiting Managerial Staff
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    To take a trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it...
                                    </p>
                                    <button type="button" class="btn btn-primary col-4">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-4 p-b-40 pb-lg-0 ">
                            <div className="bg-10 h-full kit-bor1 overflow-hidden"><div className='overflow-hidden'>
                                <a href="services-detail-02.html" className="hov-img0 of-hidden bg-0">
                                    <img src={img3} className='hover-zoom' style={{ width: '100%' }} alt="Management Training" />
                                </a></div>
                                <div className="p-rl-20 p-t-26 p-b-20 kit-pos2-1-1 p-3 d-flex flex-column justify-content-center " >
                                    <h4 className="p-b-9">
                                        <a href="services-detail-02.html" className="t1-m-1 cl-0 hov-link2 trans-02" style={{textDecoration:'none', color:'black'}}>
                                        Recruiting Managerial Staff
                                        </a>
                                    </h4>
                                    <p className="t1-s-2 cl-13">
                                    To take a trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it...
                                    </p>
                                    <button type="button" class="btn btn-primary col-4">Read more</button>
                                </div>
                            </div>
                        </div>
                        
                        
                        

                       
                    </div>
                </div>
            </div>
            </div>
            </section> */}
           

        </>
    )
}

export default Home