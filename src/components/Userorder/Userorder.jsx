import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userorder = () => {
  const [data, setData] = useState([]);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/order/all-orders`); // Await here
        console.log(response.data.orders);
        setData(response.data.orders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th className='text-center' scope="col">S/N</th>
              <th className='text-center' scope="col">Order No</th>
              <th className='text-center' scope="col">Order Amount</th>
              <th className='text-center' scope="col">User ID</th>
              <th className='text-center' scope="col">User Name</th>
              <th className='text-center'>Screenshot of order</th>
              <th className='text-center' scope="col">Order Status</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{item.order_details.order_no}</td>
                <td className='text-center'>${item.order_details.order_price}</td>
                <td className='text-center'>{item.user_details.user_mySponsor_id}</td>
                <td className='text-center'>{item.user_details.user_name}</td>
                <td className='text-center'><img src={item.image_url} width={150}/></td>
                <td className='text-center'>{item.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userorder;
