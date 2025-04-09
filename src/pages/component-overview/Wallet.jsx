import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const Wallet = () => {
  const [userkycdata, setUserKycData] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios.get(`${ROOT_URL}/admin/allnonverifiedwallet`)
      .then((response) => {
        setUserKycData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApproval = async (sponsorId, status) => {
    try {
      const endpoint = status === 'approve' ? 'approvewalletVerification' : 'rejectwalletVerification';
      await axios.post(`${ROOT_URL}/admin/${endpoint}`, { mySponsorId: sponsorId });
      swal('Success', `KYC successfully ${status}d!`, 'success').then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-4">
    <div className="table-responsive">
      {userkycdata.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Telegram ID</th>
              <th scope="col">Wallet Address</th>
              <th scope="col">Wallet Approval</th>
              <th scope="col">Action</th>
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
                <td>{item.walletApproved}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleApproval(item.userId, 'approve')}>Approve</button>
                  <button className="btn btn-danger ms-2" onClick={() => handleApproval(item.userId, 'reject')}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-muted">No pending wallet details.</p>
      )}
    </div>
  </div>
  );
};

export default Wallet;