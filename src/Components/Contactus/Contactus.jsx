import React, { useState } from 'react';
import axios from 'axios';
import './Contactus.css'
const Contactus = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email_id: '',
    mob_no: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      // Ensure this matches the backend port and route
      const response = await axios.post('http://localhost:3000/send-email', formData);
      if (response.data.success) {
        setSuccess('Message sent successfully!');
      }
    } catch (err) {
      setError('Failed to send the message. Please try again later.');
      console.error(err);  // Log error for debugging
    }
    setLoading(false);
  };
  
  
  return (
    <>
      <section>
        <div class="container mt-5  ">
          <div class="row gap-5">
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <h2 className="mb-2 title">Send Message</h2>
          <span className="br-b mx-0"></span>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-lg-12 col-md-12 col-12">
          <form onSubmit={handleSubmit} className="whitebgForm">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control required"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email_id"
                    className="form-control required"
                    value={formData.email_id}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    name="mob_no"
                    className="form-control required"
                    value={formData.mob_no}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control required"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-5 col-8 my-3">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
                      {loading ? 'Please wait ...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
          </form>
        </div>
      </div>
    </div>
              <div class="col-lg-5 col-md-5 col-12 pl-md-5">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-12">
                    <h2 class="mb-2 title">Get in Touch</h2>
                    <span class="br-b mx-0"></span>
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <div class="col-lg-12 col-md-12 col-12">
                    <ul class=" d-flex flex-column gap-3 fa-ul cnt-list">
                      <li><i class="fa-li fa fa-map-marker"></i> 76/1 Amr complex, 3B - 3rd floor

Mission Road, Sudhamanagar

Bangalore - 560027.</li>
                      <li><i class="fa-li fa fa-phone"></i> </li>
                      <li><i class="fa-li fa fa-phone"></i>
                        <a href="tel:7618740222" className='text-decoration-none' style={{color:"black"}} >For Sales Enquiries :+91-80-49908599 </a>

                        </li>


                      <li><i class="fa-li fa fa-envelope"></i> <a href="mailto:marketing@coreel.com"  className='text-decoration-none' style={{color:"black"}}>info@antigone.co.in</a></li>
                      <li><i class="fa-li fa fa-envelope"></i> <a href="mailto:sales@coreel.com" className='text-decoration-none' style={{color:"black"}} >sales@antigone.co.in</a></li>
                    </ul>
                  </div>
               
                </div>
              </div>
             
            </div>
    <div className="row gap-5 justify-content-center mt-5">
      <div className="col-12 col-md-5 ">
      <h4 className='border-bottom border-info border-2 pb-2'>Bangalore Office</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1495260545857!2d77.5914671!3d12.962282199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1511147fedab%3A0x3985e373e6007626!2sAntigone%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1731299170785!5m2!1sen!2sin"
          width="100%"
          height="450"
          className='mt-2'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-12 col-md-5 mb-5 ">
      <h4 className='border-bottom border-info border-2 pb-2'>Hyderabad Office</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.297238688892!2d78.4879253!3d17.431238299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b40b42ff6f3%3A0x48238bc07fb110b9!2sAntigone%20Solutions%20Private%20Limited%20-%20HYD!5e0!3m2!1sen!2sin!4v1731299218625!5m2!1sen!2sin"
          width="100%"
          height="450"
          className='mt-2'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
          </div>
      </section>
    </>
  )
}

export default Contactus