import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard Page</h1>
      <button className="btn btn-info">
        <Link to="/dashboard/user">
          Go to user Page
        </Link>
      </button>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
