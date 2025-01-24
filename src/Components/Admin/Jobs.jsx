import React, { useState, useEffect } from "react";
import axios from "axios";
import "./job.css"
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    job_profile: '',
    education: '',
    experience: '',
    job_description: '',
    location: '',
  });
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs');
      setJobs(response.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { job_profile, education, experience, job_description, location } = formData;

    try {
      if (editingJob) {
        await axios.put(`http://localhost:3000/jobs/${editingJob.id}`, { job_profile, education, experience, job_description, location });
        alert("Job updated successfully!");
      } else {
        await axios.post('http://localhost:3000/jobs', { job_profile, education, experience, job_description, location });
        alert("Job added successfully!");
      }
      fetchJobs();
      setFormData({ job_profile: '', education: '', experience: '', job_description: '', location: '' });
      setEditingJob(null);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/jobs/${id}`);
      alert("Job deleted successfully!");
      fetchJobs();
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      job_profile: job.job_profile,
      education: job.education,
      experience: job.experience,
      job_description: job.job_description,
      location: job.location,
    });
  };

  return (
    <div className="jobs-container">
      <h2 className="page-title">Admin Job Management</h2>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          
          <input
            type="text"
            name="job_profile"
            value={formData.job_profile}
            onChange={handleChange}
            required
            placeholder="Enter Job Profile"
          />
        </div>

        <div className="form-group">
          
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            placeholder="Enter Education"
          />
        </div>

        <div className="form-group">
          
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            placeholder="Enter Experience"
          />
        </div>

        <div className="form-group">
          
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter Location"
          />
        </div>

        <div className="form-group">
        
          <textarea
            name="job_description"
            value={formData.job_description}
            onChange={handleChange}
            required
            placeholder="Enter Job Description"
          />
        </div>

        <button type="submit" className="submit-button">
          {editingJob ? 'Update Job' : 'Add Job'}
        </button>
      </form>

      {/* Job List */}
      <h3 className="job-list-title">Available Jobs</h3>
      <table className="job-table">
        <thead>
          <tr>
            <th>Job Profile</th>
            <th>Education</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.job_profile}</td>
                <td>{job.education}</td>
                <td>{job.experience}</td>
                <td>{job.location}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(job)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-jobs">No jobs available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
