import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Userorder = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  // ✅ Fetch all staking data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ROOT_URL}/api/admin/stakings`);
        setData(res.data.stakings || []);
      } catch (error) {
        console.error("Error fetching stakings:", error);
      }
    };
    fetchData();
  }, [ROOT_URL]);

  // ✅ Prepare data with all staking entries
  const filteredData = data
    .flatMap((user) =>
      user.stakingAdded.map((entry) => ({
        ...entry,
        userId: user.userId,
        name: user.name,
      }))
    )
    .filter((item) =>
      filter === "all" ? true : item.status.toLowerCase() === filter
    );

  // ✅ Approve staking
  const handleApprove = async (userId, hash) => {
    try {
      const confirm = await swal({
        title: "Approve this staking?",
        text: `Confirm approving staking for ${userId}`,
        icon: "warning",
        buttons: true,
      });

      if (!confirm) return;

      const res = await axios.post(
        `${ROOT_URL}/api/staking/approve`,
        { userId, hash }
      );

      swal("Approved!", res.data.message, "success");

      // ✅ Update UI instantly
      setData((prev) =>
        prev.map((user) => ({
          ...user,
          stakingAdded: user.stakingAdded.map((s) =>
            s.hash === hash ? { ...s, status: "approved" } : s
          ),
        }))
      );
    } catch (error) {
      console.error("Approve error:", error);
      swal("Error", error.response?.data?.message || "Approval failed", "error");
    }
  };

  return (
    <div className="container mt-2">
      {/* Filter */}
      <div className="d-flex justify-content-end mb-5">
        <select
          className="form-select w-25 me-3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>S/N</th>
              <th>Username</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Hash</th>
              <th>Date</th>
              <th>Screenshot</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.userId}</td>
                  <td>{item.coins}</td>
                  <td>{item.hash}</td>
                  <td>{item.dateTime}</td>
                  <td>
                    <a
                      href={item.screenshot}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.screenshot}
                        alt="proof"
                        width="50"
                        height="50"
                        className="rounded"
                      />
                    </a>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "approved"
                          ? "bg-success"
                          : item.status === "pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === "pending" ? (
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleApprove(item.userId, item.hash)}
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-secondary"
                        disabled
                      >
                        {item.status === "approved" ? "Approved" : "N/A"}
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center text-muted">
                  No staking records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userorder;
