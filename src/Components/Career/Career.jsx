import React, { useState, useEffect } from 'react';
import './Career.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.min.css'

const Career = () => {
      
    const iconStyle = { color: 'black' };

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/jobs")
        .then(response => {
            console.log(response.data); // Log the data to verify structure
            setJobs(response.data);
        })
        .catch(error => console.error(error));
    }, []);
    



    

  return (
    <>
        <section className='career'>
            <div className='container mb-5 mt-5'>
                <div className='career-decription col-lg-12 col-md-12 col-12'>
                <h4 className="p-b-9 mb-3">
                Join Antigone Solutions
                </h4>
                <p className='mb-2 p-0  text-justify'>At Antigone Solutions, being part of our team means embarking on an exciting journey of growth, hands-on experience, and state-of-the-art technology development. For freshers, it’s the perfect place to build a strong foundation, while experienced professionals will find an environment that values expertise and provides ample opportunities to lead, innovate, and excel.advantage by creating a culture of consistent excellence.</p>
                <h6 className="p-b-9 mt-3">
                Why Work With Us?</h6>
               
                    <li>
                    <span style={{fontWeight:"500"}}>Collaborate with Excellence:</span> Work with exceptionally talented individuals from diverse disciplines, fostering collaboration, creativity, and a spirit of inspiration.
                    </li>
                    <li>
                    <span style={{fontWeight:"500"}}>Value-Driven Environment:</span>  Our culture is built on commitment,  learning opportunities, and ethics. We push the boundaries of innovation with dedication and integrity in every project.
                    </li>
                    <li>
                    <span style={{fontWeight:"500"}}>Think Differently & Constantly:</span> We embrace a mindset of continuous innovation and encourage thinking differently to solve complex challenges and drive progress in Defence and Space.
                    </li>

                    <h6 className="p-b-9 mt-3">
                    Fairness and Growth for All</h6>
                    <p className='mb-2 p-0  text-justify'>Our 360-degree appraisal system provides constructive feedback at every level, supporting your personal and professional development. We are committed to a merit-based system that recognizes your achievements and efforts, offering a rewarding career path that’s fair and fulfilling.</p>
                    <p className='mb-2 p-0  text-justify'>Together, we’re shaping the future of Defence and Space, bringing our passion and professionalism to every project—whether for our nation or the world.</p>

                
                
                </div>

                <div className="row mt-5 gap-4 justify-content-center">
    {jobs.length > 0 ? (
        jobs.map((job, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 d-flex flex-wrap border border-info rounded-4">
                <div className="listing my-4 w-100 d-flex flex-column justify-content-between">
                    <div className="jobDetails">
                        <h4 className="title fs-20 text-capitalize">{job.job_profile}</h4>
                        <ul className="job-list fa-ul">
                            <li><i className="fa fa-map-marker fs-20 fa-li"></i>: {job.location || 'Not specified'}</li>
                            <li><i className="fa fa-graduation-cap fs-20 fa-li"></i>: {job.education || 'Not specified'}</li>
                            <li><i className="fa fa-user-secret fs-20 fa-li"></i>: {job.experience || 'Not specified'}</li>
                        </ul>
                    </div>
                    <a href={`/job/${job.id}`} className="btn btn-primary btn-sm mx-auto" style={{ width: 'fit-content' }}>
                        Apply Now <i className="fa fa-hand-o-up"></i>
                    </a>
                </div>
            </div>
        ))
    ) : (
        <p>Loading job listings...</p>
    )}
</div>



            </div>

        </section>
    </>
  )
}

export default Career