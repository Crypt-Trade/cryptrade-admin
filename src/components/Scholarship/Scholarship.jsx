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
  const markAsPaid = async (userId, date) => {
    try {
      const response = await axios.put(`${ROOT_URL}/admin/update-reward-status`, {
        user_mySponsor_id: userId,
        date: date
      });

      console.log(response.data);
      // Re-fetch rewards to reflect updated status
      fetchRewards();
    } catch (error) {
      console.error('Error updating reward status:', error.response || error.message);
    }
  };

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : rewards.length === 0 ? (
              <tr>
                <td colSpan={5}>No Scholarship Available</td>
              </tr>
            ) : (
              rewards.flatMap((user, userIndex) =>
                (user.rewards || []).map((reward, rewardIndex) => (
                  <tr key={`${user._id}-${rewardIndex}`}>
                    <td>
                      {userIndex + 1}.{rewardIndex + 1}
                    </td>
                    <td>{user.user_mySponsor_id || 'N/A'}</td>
                    <td>{user.user_name || 'N/A'}</td>
                    <td>{reward.amount} $</td>
                    <td>{reward.date}</td>
                    <td>
                      {reward.status === 'paid' ? (
                        <span className="badge bg-success fw-bold">Paid</span>
                      ) : (
                        <button className="btn btn-warning btn-sm fw-bold" onClick={() => markAsPaid(user.user_mySponsor_id, reward.date)}>
                          Mark as Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scholarship;
