import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Applicatinform = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:3000/jobs/${id}`)
            .then(response => setJob(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!job) return <div>Loading...</div>;
    

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          console.log(`Uploaded file: ${file.name}`);
        }
      };

    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12 right-col'>
                            <h1 className='mb-2 heading'>{job.job_profile}</h1>
                            <h2 className='fs-15'>Location:</h2>
                            <ul><li>{job.location}</li></ul>
                            <h2 className='fs-15'>Education:</h2>
                            <ul><li>{job.education}</li></ul>
                            <h2 className='fs-15'>Experience:</h2>
                            <ul><li>{job.experience}</li></ul>
                            <p><strong>Job Description:</strong> <li>{job.description}</li></p>
                        </div>
                        <div class="col-lg-4 col-md-5 col-12 mb-4 mb-md-0 left-col">
                            <div class="product-details">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h2 class="heading mb-2">Apply Now</h2>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <form method="post" action="https://www.coreel.com/saveApplication" id="careerForm" class="whitebgForm">
                                            <div class="form-group mb-4">
                                                <input type="text" name="fullname" class="form-control required" placeholder="Enter Fullname" form-req="true" form-field="Name" form-min="3" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="email_id" class="form-control required email" placeholder="Enter Email Id" form-req="true" form-field="Email id" form-type="email" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="mob_no" class="form-control required number" placeholder="Enter Mobile No" form-req="true" form-field="Mobile no." form-type="mobile" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="total_exp" class="form-control required number" placeholder="Enter Total Experience in years" form-req="true" form-field="Total Experience" form-pattern="!\d+(?:\.\d+)?!" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="current_ctc" class="form-control required number" placeholder="Enter Current CTC" form-req="true" form-field="Current CTC" form-format="numeric" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="expected_ctc" class="form-control required number" placeholder="Enter Expected CTC" form-req="true" form-field="Expected CTC" form-format="numeric" />
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" name="notice_period" class="form-control required" placeholder="Enter Notice Period" form-req="true" form-field="Notice Period" />
                                            </div>
                                            <div>
                                                <label htmlFor="resume-upload">Upload Resume (PDF only):</label>
                                                <input
                                                    id="resume-upload"
                                                    type="file"
                                                    accept=".pdf"
                                                    onChange={handleFileChange}
                                                />
                                            </div>



                                            <div class="form-group text-center">
                                                <button type="submit" class="btn btn-primary btn-md px-3" data-loading-text="Please wait ...">Apply Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Applicatinform;
