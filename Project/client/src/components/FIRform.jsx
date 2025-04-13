// FIRForm.jsx
import React, { useState } from 'react';
import './FIRForm.css';

const FIRForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    contact: '',
    address: '',
    incidentDate: '',
    location: '',
    description: '',
    documents: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic here
    alert('FIR submitted successfully!');
  };

  return (
    <div className="fir-form-page">
      <div className="fir-header">
        <h2>File a FIR</h2>
      </div>

      <form className="fir-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="text" name="aadhar" placeholder="Aadhar Number" required maxLength={12} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Number" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <input type="date" name="incidentDate" placeholder="Date of Incident" required onChange={handleChange} />
        <input type="text" name="location" placeholder="Location of Incident" required onChange={handleChange} />
        <textarea name="description" placeholder="Describe the Incident" required onChange={handleChange}></textarea>

        <label className="upload-label">
          Upload Supporting Documents/Images:
          <input type="file" multiple onChange={handleFileChange} accept=".jpg,.png,.pdf,.docx" />
        </label>

        <button type="submit">Submit FIR</button>
      </form>
    </div>
  );
};

export default FIRForm;
