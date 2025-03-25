import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Weeklypayout = () => {
  const data = [
    { id: 1, week: "Week 1", payout: 500, directBonus: 50, teamBonus: 100 },
    { id: 2, week: "Week 2", payout: 600, directBonus: 60, teamBonus: 120 },
    { id: 3, week: "Week 3", payout: 700, directBonus: 70, teamBonus: 140 },
  ];

  return (
    <div className="container mt-4">
      
        
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Week</th>
                <th scope="col">Payout Amount ($)</th>
                <th scope="col">Direct Affiliate ($)</th>
                <th scope="col">Team Affiliate ($)</th>
                <th scope="col">Total Payout ($)</th>
                <th scope="col">Payout status ($)</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.week}</td>
                  <td>${item.payout.toFixed(2)}</td>
                  <td>${item.directBonus.toFixed(2)}</td>
                  <td>${item.teamBonus.toFixed(2)}</td>
                  <td>${(item.payout + item.directBonus + item.teamBonus).toFixed(2)}</td>
                  <td>Paid</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Paid</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Weeklypayout;
