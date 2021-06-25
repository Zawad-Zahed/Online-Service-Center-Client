import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Admin/Sidebar/Sidebar";

const OrderList = () => {
  const [show, setShow] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      "https://ancient-crag-99991.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log("order here", orders);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          {" "}
          <h5> you have {orders.length} orders </h5>
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
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* {
                orders.map(order => <pre> {order.product?.name}   <strong> price </strong>  ${order.product?.price} <strong> Date:{(new Date(order.date)).toDateString('dd/MM/yyyy')} </strong> </pre> )
            } */}
    </div>
  );
};

export default OrderList;
