import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = ({ UserHeaderdata }) => {
  return (
    <nav class="navbar navbar-expand-lg user-nav">
      <div class="container">
        <a class="nav-logo" href="#">
          Valdona
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
            {/* render */}
            {UserHeaderdata.map((item, ind) => {
              return (
                <li class Name="navbar-nav" key={ind}>
                  <Link to={`${item.path}`} class="user-navlink">
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

export default UserNavbar;
