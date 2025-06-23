import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
function Allrank() {
  const [rankings, setRankings] = useState([]);
   const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
 const fetchRankings = async () => {
      //  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL; 
      try {
        const response = await axios.get(`${ROOT_URL}/user/all-rankings`); // Use your actual endpoint
        setRankings(response.data.rankings);
        console.log(response.data.rankings);  // Assuming the server returns { rankings: [...] }
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    };

  useEffect(() => {
    fetchRankings();
  }, []);
const handlebuttonClick = async (mysponsorid, rank_name) => {
   try {
      const response = await axios.put(`${ROOT_URL}/user/update-rank-status`, {
        mysponsorid,
        rank_name,
        status: 'Claimed'
      });
      swal("Success", response.data.message, "success");
      console.log(response.data.message);


      // Refresh list after update
       fetchRankings();
    }catch (error) {
    console.error('Error handling button click;', error);

}
}
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-primary">
            <tr>
              <th>S/N</th>
              <th>User ID</th>
              <th>Rank</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {rankings.map((item, index) => {
   
    return (
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.userid?.mySponsorId || 'N/A'}</td>
        <td>{lastRank?.rank_name || 'N/A'}</td>
        <td>{lastRank?.status || 'N/A'}</td>
        <td>
          <button className="btn btn-primary" onClick={()=>handlebuttonClick(item.userid?.mySponsorId , lastRank?.rank_name)}>
            Claimed
          </button>
        </td>
        
      </tr>
    );
  })}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default Allrank;
