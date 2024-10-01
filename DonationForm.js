import React, { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Name as mentioned in aadhar card"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile*</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          className="form-control"
          placeholder="Mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Pledge to Donate
      </button>
    </form>
  );
};

export default DonationForm;
