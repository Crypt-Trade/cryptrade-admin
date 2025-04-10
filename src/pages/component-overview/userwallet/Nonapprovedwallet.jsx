import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Approvedwallet = () => {
  const [userkycdata, setUserKycData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios.get(`${ROOT_URL}/wallet/rejected-users`)
      .then((response) => {
        setUserKycData(response.data.approvedUsers);
      })
      .catch((err) => {
        console.error(err);
       
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        {loading ? (
          <p className="text-center text-muted">Loading...</p>
        )  : userkycdata.length > 0 ? (
          <table className="table table-bordered table-hover">
           <thead className="table-primary">
              <tr>
                <th>S/N</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Telegram ID</th>
                <th>Wallet Address</th>
                <th>Wallet Approval</th>
              </tr>
            </thead>
            <tbody>
              {userkycdata.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                  <td>{item.telegramId}</td>
                  <td>{item.Walletaddress}</td>
                  <td>
                    <span  className={`badge ${item.walletApproved ? 'bg-success' : 'bg-warning'}`}>
                      {item.walletApproved ? 'Approved' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-muted">No rejected wallet details.</p>
        )}
      </div>
    </div>
  );
};

export default Approvedwallet;
