import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAdminDashboardData = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/admin/users`);
        const allUsers = response.data.users;
        setUsers(allUsers);
        setFilteredUsers(allUsers); // Initially show all
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchAdminDashboardData();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query) ||
        user.mobileNumber?.toLowerCase().includes(query) ||
        user.mySponsorId?.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Users</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Name, Email, Mobile Number, or Sponsor ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>S/N</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Staking</th>
             
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.myStaking}</td>
                
                  <td>
                    <Link
                   
                      state={{
                        name: user.name,
                        mobileNumber: user.phone,
                        email: user.email
                      }}
                      className="mt-1"
                    >
                      <i className="fa fa-edit ms-2 mt-1"></i>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
