import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert';

const Withdrawalusers = () => {
  const [orders, setOrders] = useState([]);
  const sponsorId = sessionStorage.getItem("mySponsorId"); // or hardcode for testing

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/admin/get-all-withdrawals`);
        console.log("Fetched Orders:", response.data);
        setOrders(response.data.withdrawalOrders);
      } catch (err) {
        console.error("Error fetching withdrawal orders:", err);
      }
    };

    fetchOrders();
  }, []);

  const handleApprove = async (order) => {
    try {
      const response = await axios.post(`${ROOT_URL}/admin/update-userwallet-status`, {
        user_mySponsor_id: order.user_details.user_mySponsor_id,
        order_no: order.order_details.order_no,
        amount: order.order_details.withdrawal_amount,
        status: "approved"
      });
        console.log("Approval Response:", response.data);
        swal ("Order Approved", "Withdrawal has been approved successfully!", "success");
    //   alert("Order approved!");
  
      // Update UI
      setOrders((prev) =>
        prev.map((item) =>
          item._id === order._id ? { ...item, status: "approved" } : item
        )
      );
    } catch (err) {
      console.error("Approval failed:", err);
      alert("Failed to approve order.");
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Withdrawal Orders</h4>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th className='text-center'>S/N</th>
            <th className='text-center'>User Name</th>
            <th className='text-center'>Sponsor ID</th>
            <th className='text-center'>Order No</th>
            <th className='text-center'>Amount ($)</th>
            <th className='text-center'>Order Date</th>
            <th className='text-center'>Status</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order._id}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{order.user_details.user_name}</td>
                <td className='text-center'>{order.user_details.user_mySponsor_id}</td>
                <td className='text-center'>{order.order_details.order_no}</td>
                <td className='text-center'>{order.order_details.withdrawal_amount}</td>
                <td className='text-center'>{new Date(order.order_details.withdrawal_order_date).toLocaleString()}</td>
                <td className='text-center'>{order.status}</td>
                <td className='text-center'>
                  {order.status === "pending" ? (
                    <button
                      className="btn btn-success btn-sm p-2"
                      onClick={() => handleApprove(order)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-success">Approved</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No withdrawal orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Withdrawalusers;
