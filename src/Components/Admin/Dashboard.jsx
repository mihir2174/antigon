import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Navabar/logo.jpg"

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav
        className=" text-white p-3 position-sticky"
        style={{ width: "250px", height: "100vh", backgroundColor:"#2084C2"}}
      >
        <img src={logo} style={{width:"170px"}}></img>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard/product" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/dashboard/jobs" className="nav-link text-white">
              Jobs
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <h2 className="text-primary">Welcome to Antigon Solutions Admin Panel</h2>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
