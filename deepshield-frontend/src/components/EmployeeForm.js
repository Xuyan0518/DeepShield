import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    role: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/onboard-employee', employeeData);
      console.log("DID and VC generated:", response.data);
    } catch (error) {
      console.error("Error onboarding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={employeeData.name} onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={employeeData.role} onChange={handleChange} />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={employeeData.department} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
