import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Approvedwallet = () => {
  const [userkycdata, setUserKycData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios.get(`${ROOT_URL}/wallet/verified-users`)
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
        ) : userkycdata.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th className='text-center'>S/N</th>
                <th className='text-center'>User ID</th>
                <th className='text-center'>User Name</th>
                <th className='text-center'>Telegram ID</th>
                <th className='text-center'>Wallet Address</th>
                <th className='text-center'>Wallet Approval</th>
              </tr>
            </thead>
            <tbody>
              {userkycdata.map((item, index) => (
                <tr key={item._id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{item.userId}</td>
                  <td className='text-center'>{item.name}</td>
                  <td className='text-center'>{item.telegramId}</td>
                  <td className='text-center'>{item.Walletaddress}</td>
                  
                  <td className='text-center'>
                    <span style={{fontSize:"15px"}} className={`badge ${item.walletApproved ? 'bg-success' : 'bg-warning'}`}>
                      {item.walletApproved ? 'Approved' : 'Pending'}
                    </span>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-muted">No verified wallet details.</p>
        )}
      </div>
    </div>
  );
};

export default Approvedwallet;
