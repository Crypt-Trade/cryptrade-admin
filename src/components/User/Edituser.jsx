import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
const Edituser = () => {
    const { sponsorid } = useParams() // Get product ID from the route parameter
  const navigate = useNavigate()
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL
      const [user, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
   
  })
   const handleChange = (e) => {
    const { name, value } = e.target
    setUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const formData = new FormData()

    
      formData.append('name', user.name)
      formData.append('mobileNumber', user.mobileNumber)
      formData.append('email', user.email)
      formData.append('password', user.password)
      console.log('FormData:', Object.fromEntries(formData.entries()))
      console.log( sponsorid);
      const response = await axios.put(`${ROOT_URL}/api/auth/editUserDetails`, formData, {
        headers: {
          sponsorid: sponsorid,
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        swal('Yeah!', 'User details updated successfully!', 'success')
        navigate('/dashboard/alluser') // Redirect to the desired page after successful update
      }
    } catch (error) {
      console.error('Error updating user:', error)
      const errorMessage = error.response?.data?.message || 'An error occurred.'
      alert(`Failed to update user: ${errorMessage}`)
    }
  }
  
  return (
    <>
    <h2 className='text-center'>Edit User Details</h2>
         <div className="container mt-2">
        <div className="d-flex justify-content-center">
      <div className="card shadow p-4 w-75">
        <form
         onSubmit={handleSubmit}
         >
          <div className="mb-3">
            <label htmlFor="packageName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="packageName"
              name="name"
               value={user.name}
              onChange={handleChange}
              placeholder="Enter  name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packagePrice" className="form-label">
              Mobile number
            </label>
            <input
              type="text"
              className="form-control"
              id="packagePrice"
              name="mobileNumber"
            value={user.mobileNumber}
             onChange={handleChange}
              placeholder="Enter Mobile number"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packageDescription" className="form-label">
              Email
            </label>
              <input
              type="text"
              className="form-control"
              id="email"
              name="email"
                value={user.email}
             onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="packageDescription" className="form-label">
              Password
            </label>
              <input
              type="text"
              className="form-control"
              id="password"
              name="password"
                value={user.password}
          
             onChange={handleChange}
              placeholder="Enter password"
              
            />
          </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25">
            Update
          </button>
            </div>
          
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Edituser