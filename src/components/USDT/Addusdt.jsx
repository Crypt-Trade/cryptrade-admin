import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
const Addusdt = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('userEmail') || ''; // Get email from session storage
  const [formData, setFormData] = useState({
    amount: '',
    password: '',
    email: email
  });

  // const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL; // Ensure your .env has this set

    try {
      const response = await axios.post(`${ROOT_URL}/admin/add-wallet-balance`, formData);
      // setMessage(response.data.message);
      swal("success", response.data.message, "success");
      navigate('/dashboard/historyusdt'); // Navigate to dashboard after successful add
    } catch (error) {
      // setMessage(error.response?.data?.message || 'Something went wrong');
      swal("error", error.response?.data?.message || 'Something went wrong', "error");
    }
  };

  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <div className="card shadow p-4 w-50">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">USDT Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Admin Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter admin password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  readOnly
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-25">Add USDT</button>
              </div>
            </form>

            {/* {message && <p className="mt-3 text-center">{message}</p>} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addusdt;
