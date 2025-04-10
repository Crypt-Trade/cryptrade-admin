import React ,{useState,useEffect} from "react";
import axios from "axios";


const Weeklypayout = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    axios.get(`${ROOT_URL}/admin/admin-wallet-history`)
      .then((response) => {
        const user = response.data.data[0];
        if (user && user.weeklyEarnings) {
          setWeeklyData(user.weeklyEarnings);
        } else {
          setWeeklyData([]);
        }
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
                <th>Week</th>
                <th>Payout Amount ($)</th>
                <th>Direct Affiliate ($)</th>
                <th>Team Affiliate ($)</th>
                <th>Total Payout ($)</th>
                <th>Payout Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.week}</td>
                  <td>${item.payout?.toFixed(2) || "0.00"}</td>
                  <td>${item.directBonus?.toFixed(2) || "0.00"}</td>
                  <td>${item.teamBonus?.toFixed(2) || "0.00"}</td>
                  <td>
                   
                  </td>
                  {/* <td>
                    <span className="badge bg-success">Paid</span>
                  </td> */}
                  
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
