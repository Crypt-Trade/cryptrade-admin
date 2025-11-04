import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Withdrawalusers = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/admin/wallets`);
        console.log("Fetched Wallets:", response.data);

        if (response.data.success && response.data.wallets.length > 0) {
          // Flatten withdrawals from all wallets
          const allWithdrawals = response.data.wallets.flatMap((wallet) =>
            wallet.withdrawals.map((withdrawal) => ({
              ...withdrawal,
              userId: wallet.userId,
              name: wallet.name,
            }))
          );
          setWithdrawals(allWithdrawals);
        }
      } catch (err) {
        console.error("Error fetching withdrawals:", err);
      }
    };

    fetchWithdrawals();
  }, []);

  const handleApprove = async (withdrawal) => {
    try {
      const body = {
        userId: withdrawal.userId,
        withdrawalId: withdrawal._id,
        action: "approve",
      };

      const response = await axios.post(`${ROOT_URL}/api/admin/approve-withdrawal`, body);

      if (response.data.success) {
        swal("Approved!", "Withdrawal has been approved successfully!", "success");
        setWithdrawals((prev) =>
          prev.map((item) =>
            item._id === withdrawal._id ? { ...item, status: "approved" } : item
          )
        );
      } else {
        swal("Error", response.data.message || "Approval failed.", "error");
      }
    } catch (err) {
      console.error("Approval failed:", err);
      swal("Error", "Failed to approve withdrawal.", "error");
    }
  };

  const handleReject = async (withdrawal) => {
    try {
      const body = {
        userId: withdrawal.userId,
        withdrawalId: withdrawal._id,
        action: "reject",
      };

      const response = await axios.post(`${ROOT_URL}/api/admin/approve-withdrawal`, body);

      if (response.data.success) {
        swal("Rejected!", "Withdrawal has been rejected successfully!", "warning");
        setWithdrawals((prev) =>
          prev.map((item) =>
            item._id === withdrawal._id ? { ...item, status: "rejected" } : item
          )
        );
      } else {
        swal("Error", response.data.message || "Rejection failed.", "error");
      }
    } catch (err) {
      console.error("Rejection failed:", err);
      swal("Error", "Failed to reject withdrawal.", "error");
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-center">All Withdrawal Requests</h4>
      <table className="table table-bordered table-hover">
        <thead className="table-light text-center">
          <tr>
            <th>S/N</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Amount ($)</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {withdrawals.length > 0 ? (
            withdrawals.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.userId}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td
                  className={
                    item.status === "approved"
                      ? "text-success fw-bold"
                      : item.status === "rejected"
                      ? "text-danger fw-bold"
                      : "text-warning fw-bold"
                  }
                >
                  {item.status}
                </td>
                <td>
                  {item.status === "pending" ? (
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleApprove(item)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleReject(item)}
                      >
                        Reject
                      </button>
                    </div>
                  ) : item.status === "approved" ? (
                    <span className="text-success">Approved</span>
                  ) : (
                    <span className="text-danger">Rejected</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No withdrawals found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Withdrawalusers;
