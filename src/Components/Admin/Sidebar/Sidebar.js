import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./style.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin, "from admin");
  useEffect(() => {
    fetch("https://ancient-crag-99991.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="sidebar">
      {isAdmin && (
        <div>
          <Link to="/admin" class="active">
            Dashboard
          </Link>
          <Link to="/manageService"> Manage service</Link>
          <Link to="/allOrder">All Order</Link>
          <Link to="/addService">Add services</Link>
          <Link to="/addAdmin">Create admin</Link>
        </div>
      )}

      <Link to="/addReview">Review</Link>
      <Link to="/orderList">Order List</Link>
      <Link to="/order">Order now</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Sidebar;
