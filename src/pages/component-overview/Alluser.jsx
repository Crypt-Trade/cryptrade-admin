import React from 'react'

const Alluser = () => {
    const data = [
        { id: 1, userid: "12345", Username: "xyz", Mobilenumber: "123456789", UserAddress: "Bally,Howrah" },
       
      ];
  return (
   <>
    <div className="container mt-4">
      
        
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">User ID</th>
              <th scope="col">User name</th>
              <th scope="col">Mobile number</th>
              <th scope="col">User Address</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.userid}</td>
                <td>{item.Username}</td>
                <td>{item.Mobilenumber}</td>
                <td>{item.UserAddress}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  </div>
   </>
  )
}

export default Alluser