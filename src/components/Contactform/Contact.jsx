import React ,{useState , useEffect}from 'react'
import axios from 'axios';
const Contact = () => {
    const [data, setData] = useState([]);
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${ROOT_URL}/contact/contact-getall`); // Await here
          console.log(response.data.inquiries);
          setData(response.data.inquiries);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>
      <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th className='text-center' scope="col">S/N</th>
              <th className='text-center' scope="col">Name</th>
              <th className='text-center' scope="col">Phone no</th>
              <th className='text-center' scope="col">Email</th>
              <th className='text-center' scope="col">message</th>
              <th className='text-center'>Submitted By</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.phoneNo}</td>
                <td className='text-center'>{item.email}</td>
                <td className='text-center'>{item.message}</td>
               
                <td className='text-center'>{new Date(item.submittedAt).toLocaleString()}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Contact