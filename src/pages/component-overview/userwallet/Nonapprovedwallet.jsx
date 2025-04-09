import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Nonapprovedwallet() {
      const [userkycdata, setUserKycData] = useState([]);
          const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
        
          useEffect(() => {
            axios.get(`${ROOT_URL}/admin/rejectwalletVerification`)
              .then((response) => {
                setUserKycData(response.data);
                console.log(response.data);
              })
              .catch((err) => console.log(err));
          }, []);
  return (
   <>
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
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-muted">No pending wallet details.</p>
      )}
    </div>
  </div>

   </>
  )
}

export default Nonapprovedwallet