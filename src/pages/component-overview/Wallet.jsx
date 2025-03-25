import React from 'react'

const Wallet = () => {
    const data = [
        { id: 1, Walletname: "xyz", Walletaddress: "abcdef" },
       
      ];
  return (
    <>
    <div className="container mt-4">
      
        
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Wallet name</th>
              <th scope="col">Wallet address</th>
              
             
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.Walletname}</td>
                <td>{item.Walletaddress}</td>
               
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  </div>
    </>
  )
}

export default Wallet