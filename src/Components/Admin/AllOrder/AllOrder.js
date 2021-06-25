import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AllOrder = () => {
  const [update, setUpdate] = useState([]);
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const data = { ...update };
    data[e.target.name] = e.target.value;
    setUpdate(data);
    setShow(true);
  };
  const handleClick = (id) => {
    const url = `http://localhost:5000/update/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    }).then((res) => {
      if (res) {
        console.log(res);
        alert("Your status has been update successfully");
      }
    });
  };
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/allOrder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Service Type
                </th>

                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.service?.name}</td>

                  <td>{order.email}</td>
                  <td>
                    <h3>
                      <select
                        value={order.status}
                        onChange={handleChange}
                        className="form-control text center"
                        name="status"
                      >
                        <option>Pending</option>
                        <option>Shipped</option>
                        <option>Done</option>
                      </select>
                    </h3>
                    {show && (
                      <button
                        className="btn btn-success"
                        onClick={() => handleClick(order._id)}
                      >
                        Update
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
