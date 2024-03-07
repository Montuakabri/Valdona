import React from "react";
import { Link } from "react-router-dom";
import "../admin-assets/adminstyle.css";

const AdminNavbar = ({ AminHeaderdata }) => {
  return (
    <nav class="navbar navbar-expand-lg admin-nav">
      <div class="container">
        <a class="adminnav-logo" href="#">
          Hi, Admin!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {AminHeaderdata.map((item, ind) => {
              return (
                <li className="navbar-nav" key={ind}>
                  <Link to={`${item.path}`} class="adminnav-link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
