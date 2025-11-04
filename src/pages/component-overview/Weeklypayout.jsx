import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const Weeklypayout = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  // ✅ Fetch all payout data
  const fetchPayouts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${ROOT_URL}/api/admin/payouts`);
      setWeeklyData(res.data.payouts || []);
    } catch (error) {
      console.error("Error fetching payouts:", error);
      swal("Error", "Failed to fetch payout data", "error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Generate payouts
  const handleGeneratePayout = async () => {
    try {
      const confirm = await swal({
        title: "Generate Weekly Payout?",
        text: "This will calculate and finalize payouts for all users.",
        icon: "warning",
        buttons: ["Cancel", "Yes, Generate"],
      });
      if (!confirm) return;

      const res = await axios.post(`${ROOT_URL}/api/payout/finalize`);
      swal("Success!", res.data.message, "success");
      fetchPayouts();
    } catch (error) {
      console.error("Error generating payout:", error);
      swal("Error", error.response?.data?.message || "Failed to generate payout", "error");
    }
  };

  // ✅ Approve payout
  const handleApprove = async (userId, payoutId, amount) => {
    try {
      const confirm = await swal({
        title: "Approve this payout?",
        text: `User ID: ${userId}\nAmount: $${amount}`,
        icon: "warning",
        buttons: ["Cancel", "Yes, Approve"],
      });
      if (!confirm) return;

      const res = await axios.post(`${ROOT_URL}/api/admin/approve-payout`, {
        userId,
        payoutId,
        amount,
      });

      swal("Success!", res.data.message, "success");
      fetchPayouts(); // refresh table
    } catch (error) {
      console.error("Error approving payout:", error);
      swal("Error", error.response?.data?.message || "Failed to approve payout", "error");
    }
  };

  useEffect(() => {
    fetchPayouts();
  }, []);

  // ✅ Flatten payouts for easy display
  const filteredData = weeklyData
    .flatMap((user) =>
      user.payouts.map((p) => ({
        ...p,
        userId: user.userId,
        name: user.name,
        totalPayout: user.totalPayout,
      }))
    )
    .filter((item) =>
      filter === "all" ? true : item.status.toLowerCase() === filter
    );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-light">Weekly Payouts</h5>
        <div className="d-flex gap-2">
          {/* Filter */}
          <select
            className="form-select form-select-sm w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          {/* Generate Button */}
          <button
            className="btn btn-sm text-white fw-semibold p-3"
            style={{ backgroundColor: "#d56459ff" }}
            onClick={handleGeneratePayout}
          >
            Generate Payout
          </button>
        </div>
      </div>

      <div className="table-responsive">
        {loading ? (
          <p className="text-center text-muted">Loading...</p>
        ) : filteredData.length > 0 ? (
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>S/N</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                  <td>${item.amount?.toFixed(2)}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "completed"
                          ? "bg-success"
                          : item.status === "pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === "pending" ? (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          handleApprove(item.userId, item._id, item.amount)
                        }
                      >
                        Approve
                      </button>
                    ) : (
                      <button className="btn btn-secondary btn-sm" disabled>
                        Done
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-muted">No payout records found.</p>
        )}
      </div>
    </div>
  );
};

export default Weeklypayout;
