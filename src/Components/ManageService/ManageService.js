import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar/Sidebar";

const ManageService = () => {
  const [services, setServices] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch("https://ancient-crag-99991.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://ancient-crag-99991.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res) {
        alert("deleted successfully");
      }
    });
  };
  return (
    <div>
      <h5>Manage Service</h5>
      <h6>Total Service:{services.length} </h6>
      <div className="row">
        <div className="col-md-3">
          {" "}
          <Sidebar></Sidebar>{" "}
        </div>
        <div className="col-md-8">
          {" "}
          {services.map((service) => (
            <div>
              {" "}
              <p>
                {service.name} Price{service.price}{" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(`${service._id}`)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Delete
                </button>{" "}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
