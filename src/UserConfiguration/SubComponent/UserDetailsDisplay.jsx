import React, { useState } from 'react';
import '../../UserConfiguration_css/UserDetailsDisplay.css';
import { cancelSvg } from '../../assets'; // Import CSS file for UserDetailsDisplay component

const UserDetailsDisplay = ({ onSubmit, onCancel, userData }) => {
  const [name, setName] = useState(userData?.name || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [role, setRole] = useState(userData?.role || '');
  const [status, setStatus] = useState(userData?.status || '');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, role, status };
    onSubmit(formData);
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    onCancel(); // Invoke the onCancel function passed from the parent component
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  return (
    <div className="user-form-modal-overlay">
      <div className="user-form-modal">
        <span className="cancel-icon" onClick={handleCancel}>
          <img src={cancelSvg} alt="Cancel" />
        </span>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </label>
          <label>
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsDisplay;
