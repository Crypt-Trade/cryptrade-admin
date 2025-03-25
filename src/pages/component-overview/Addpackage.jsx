import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Addpackage = () => {
    const [packageData, setPackageData] = useState({
        name: "",
        price: "",
        description: "",
      });
    
      const handleChange = (e) => {
        setPackageData({ ...packageData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Package Submitted:", packageData);
        alert("Package Added Successfully!");
        setPackageData({ name: "", price: "", description: "" });
      };
  return (
    <>
        <div className="container mt-2">
        <div className="d-flex justify-content-center">
      <div className="card shadow p-4 w-75">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="packageName" className="form-label">
              Package Name
            </label>
            <input
              type="text"
              className="form-control"
              id="packageName"
              name="name"
              value={packageData.name}
              onChange={handleChange}
              placeholder="Enter package name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packagePrice" className="form-label">
              Package Price ($)
            </label>
            <input
              type="text"
              className="form-control"
              id="packagePrice"
              name="price"
              value={packageData.price}
              onChange={handleChange}
              placeholder="Enter package price"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packageDescription" className="form-label">
              Package Description
            </label>
            <textarea
              className="form-control"
              id="packageDescription"
              name="description"
              value={packageData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter package description"
              required
            ></textarea>
          </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25">
            Add Package
          </button>
            </div>
          
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Addpackage