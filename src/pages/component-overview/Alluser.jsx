import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL; // Replace with your actual base URL

const Alluser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAdminDashboardData = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/dashboard/admin-dashboard`);
        console.log("Dashboard data:", response.data);
        setUsers(response.data.allUsers); // Access the nested users
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchAdminDashboardData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Users</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
              <th scope="col">Sponsor ID</th>
              <th scope="col">Subscription</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.mySponsorId}</td>
                <td>{user.name}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.email}</td>
                <td>{user.sponsorId}</td>
                <td>{user.subcription}</td>
                <td>{user.isActive ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
