import React, { useState, useEffect } from "react";
import axios from "axios";

const Weeklypayout = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    axios
      .get(`${ROOT_URL}/admin/all-user-payouts`)
      .then((response) => {
        // Flatten the data for easier display
        const allPayouts = response.data.data.flatMap((user) =>
          user.weeklyEarnings.map((earning) => ({
            sponsorId: user.mySponsorId,
            ...earning,
          }))
        );
        setWeeklyData(allPayouts);
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
        ) : weeklyData.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>S/N</th>
                <th>Sponsor ID</th>
                <th>Week</th>
                <th>Direct Sales Bonus ($)</th>
                <th>Team Sales Bonus ($)</th>
                <th>TDS ($)</th>
                <th>Payout Amount ($)</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.sponsorId}</td>
                  <td>{new Date(item.week).toLocaleDateString()}</td>
                  <td>{item.directSalesBonus.toFixed(2)}</td>
                  <td>{item.teamSalesBonus.toFixed(2)}</td>
                  <td>{item.tds}</td>
                  <td>{item.payoutAmount.toFixed(2)}</td>
                  {/* <td>{item.payoutAmount > 0 ? "Paid" : "Pending"}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-muted">No weekly earnings available.</p>
        )}
      </div>
    </div>
  );
};

export default Weeklypayout;
