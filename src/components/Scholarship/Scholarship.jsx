import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scholarship = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const fetchRewards = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/admin/get-all-monthly-rewards`); // Update with your actual backend path
      console.log('API Response:', response.data);
      setRewards(response.data.rewards || []);
    } catch (error) {
      console.error('Error fetching monthly rewards:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);
  // // Function to mark a reward as paid
  // const markAsPaid = async (userId, date) => {
  //   try {
  //     const response = await axios.put(`${ROOT_URL}/admin/update-reward-status`, {
  //       user_mySponsor_id: userId,
  //       date: date
  //     });

  //     console.log(response.data);
  //     // Re-fetch rewards to reflect updated status
  //     fetchRewards();
  //   } catch (error) {
  //     console.error('Error updating reward status:', error.response || error.message);
  //   }
  // };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-primary">
            <tr>
              <th>S/N</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Scholarship Amount</th>
              <th>Date</th>
             
              
            </tr>
          </thead>
          <tbody>
  {loading ? (
    <tr>
      <td colSpan={6}>Loading...</td>
    </tr>
  ) : rewards.length === 0 ? (
    <tr>
      <td colSpan={6}>No Scholarship Available</td>
    </tr>
  ) : (
    rewards.map((reward, index) => (
      <tr key={reward._id}>
        <td>{index + 1}</td>
        <td>{reward.user_mySponsor_id || 'N/A'}</td>
        <td>{reward.user_name || 'N/A'}</td>
        <td>{reward.reward_points} </td>
        <td>{new Date(reward.order_date).toLocaleDateString()}</td>
        
          {/* {(reward.rewards && reward.rewards.length > 0 && reward.rewards[0].status === 'paid') ? (
            <span className="badge bg-success fw-bold">Paid</span>
          ) : (
            <button
              className="btn btn-warning btn-sm fw-bold"
              onClick={() => markAsPaid(reward.user_mySponsor_id, reward.order_date)}
            >
              Mark as Paid
            </button>
          )} */}
        
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Scholarship;
