import React, { useState } from 'react';
import './Registration.css';

 
function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
    sport: '',
    fees_paid: '',
    joined_date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        setFormData({ // reset form
          fullName: '',
          age: '',
          gender: '',
          phone: '',
          address: '',
          sport: '',
          fees_paid: '',
          joined_date: '',
        });
      } else {
        alert(`Error: ${result.message}`);
        console.error(result);
        
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <h1 className="form-title">Membership Registration</h1>
        <form className="form-fields" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Sport */}
          <div className="form-group">
            <label>Sport</label>
            <select name="sport" value={formData.sport} onChange={handleChange} required>
              <option value="">Choose a sport</option>
              <option value="swimming">Swimming</option>
              <option value="badminton">Badminton</option>
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="tennis">Tennis</option>
              <option value="gym">Gym</option>
              <option value="yoga">Yoga</option>
            </select>
          </div>

          {/* Fees Paid */}
          <div className="form-group">
            <label>Fees Paid</label>
            <select name="fees_paid" value={formData.fees_paid} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Joining Date */}
          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              name="joined_date"
              value={formData.joined_date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
