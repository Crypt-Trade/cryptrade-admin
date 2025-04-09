import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
const TopupAddUsdt = () => {
  const [amount, setAmount] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [topupEmail, setTopupEmail] = useState('');
  const [topupPassword, setTopupPassword] = useState('');
 
  const [loading, setLoading] = useState(false);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);

    try {
      const res = await axios.post(`${ROOT_URL}/topup/transfer`, {
        topupEmail,
        topupPassword,
        amount: parseFloat(amount),
        
      });
      // console.log(res.data);

     swal ("Done!", "Top-up successfully recharged!", "success");
     navigate('/dashboard/topuphistory'); // Navigate to history page after successful top-up
    } catch (err) {
      swal ("Error!", err.response.data.message, "error");
      console.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <div className="display-6 fw-bold text-center mb-3">Recharge top-up wallet</div>
      <div className="d-flex justify-content-center">
        <div className="card shadow p-4 w-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Admin Email</label>
              <input
                type="email"
                className="form-control"
                value={topupEmail}
                onChange={(e) => setTopupEmail(e.target.value)}
                placeholder="Enter top-up user email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Admin Password</label>
              <input
                type="password"
                className="form-control"
                value={topupPassword}
                onChange={(e) => setTopupPassword(e.target.value)}
                placeholder="Enter top-up user password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">USDT Amount</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
            </div>

           
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-50" disabled={loading}>
                {loading ? 'Processing...' : 'Add USDT'}
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default TopupAddUsdt;
