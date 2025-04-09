import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Topuphistory = () => {
  const [walletHistory, setWalletHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;


  useEffect(() => {
    const fetchWalletHistory = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/topup/wallet-history`); // Adjust your API route as needed
        setWalletHistory(response.data.walletHistory || []);
      } catch (error) {
        console.error("Error fetching wallet history:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletHistory();
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="table table-bordered text-center">
          <thead className='table-success'>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {walletHistory.length > 0 ? (
              walletHistory.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.date}</td>
                  <td>{entry.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No wallet history found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Topuphistory

