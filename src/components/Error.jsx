import React from "react";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className="Error ">
      <div className="bg-info error-container flex-column d-flex justify-content-center align-item-center " style={{minHeight:"80vh"}}>
        <h1 className="text-danger fs-1 text-uppercase my-auto mx-auto">
          404 not found
        </h1>
        <button className="btn btn-danger ">
          <Link to="/" className="text-decoration-none">
            <h4>Go to Home Page</h4>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
