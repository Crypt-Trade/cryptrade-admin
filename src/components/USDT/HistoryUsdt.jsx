import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoryUsdt = () => {
  const [walletHistory, setWalletHistory] = useState([]);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchWalletHistory = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/admin/admin-wallet-history`);
        console.log("Wallet history:", response.data);
        setWalletHistory(response.data.walletHistory || []);
      } catch (error) {
        console.error("Error fetching wallet history:", error);
      }
    };

    fetchWalletHistory();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Time</th>
                <th>USDT Amount</th>
              </tr>
            </thead>
            <tbody>
              {walletHistory.length > 0 ? (
                walletHistory.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.time}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HistoryUsdt;
