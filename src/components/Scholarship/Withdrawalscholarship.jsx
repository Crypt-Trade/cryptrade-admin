import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Withdrawalscholarship = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const fetchRewards = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/admin/get-scholarship-orders`);
      console.log('API Response:', response.data);
      setRewards(response.data.orders || []); // ✅ Correct key: 'orders'
    } catch (error) {
      console.error('Error fetching scholarship orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);

const handleApprove = async (reward) => {
    try {
      const response = await axios.post(`${ROOT_URL}/admin/update-scholarship-order-status`, {
        user_mySponsor_id: reward.user_details?.user_mySponsor_id,
        order_no: reward.order_details.order_no,
        amount: reward.order_details.scholarship_amount,
        status: "approved"
      });
        // console.log("Approval Response:", response.data);
        swal ("Order Approved", "Scholarship Withdrawal has been approved successfully!", "success");
        fetchRewards();
        
    //   alert("Order approved!");
  
      // Update UI
      setOrders((prev) =>
        prev.map((item) =>
          item._id === order._id ? { ...item, status: "approved" } : item
        )
      );
    } catch (err) {
      console.error("Approval failed:", err);
      swal("Error", err.response.data.message, "error");
    }
  };

  return (
    <div className="container p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
       <div className="table-responsive">
       <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">User ID</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Scholarship order date</th>
              <th className="text-center">Scholarship Amount</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>

            </tr>
          </thead>
          <tbody>
            {rewards.map((reward,index) => (
              <tr key={reward._id}>
                <td className="text-center">{index+1}</td>
                <td className="text-center">{reward.user_details?.user_mySponsor_id || 'N/A'}</td>
                <td className="text-center">{reward.user_details?.user_name || 'N/A'}</td>
              <td className="text-center">{new Date(reward.order_details?.scholarship_order_date).toLocaleDateString()}</td>
                <td className="text-center">{reward.order_details?.scholarship_amount || 0}</td>
                <td className="text-center">
                  {reward.status === 'approved' ? (
                    <span className="text-green-600 font-semibold">Approved</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold capitalize">{reward.status}</span>
                  )}
                </td>
                <td>
                  {reward.status === "pending" ? (
                    <button
                      className="btn  text-white bg-success p-2" onClick= { () => handleApprove(reward)}
                      
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-success">Approved</span>
                  )}
                </td>
                 
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default Withdrawalscholarship;
