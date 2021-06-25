import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Sidebar from "../Admin/Sidebar/Sidebar";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Orders = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [shippingData, setShippingData] = useState();
  // console.log(shippingData);
  const onSubmit = (data) => {
    setShippingData(data);
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://ancient-crag-99991.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // console.log(_id);
  const serviceInfo = service.find((pd) => pd?._id === _id);
  //  console.log(serviceInfo);
  /* newly added after check out */
  const handlePay = (paymentId) => {
    const newOrder = {
      ...loggedInUser,
      shipment: shippingData,
      service: serviceInfo,
      paymentId,
    };
    console.log(newOrder);
    fetch("https://ancient-crag-99991.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <div style={{ display: shippingData ? "none" : "block" }}>
          <form className="m-5 w-50 " onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              {" "}
              <label htmlFor="">name</label>
              <input
                className="form-control"
                defaultValue={loggedInUser.name}
                {...register("name")}
              />
            </div>
            <div className="form-group">
              {" "}
              <label htmlFor="">Total charge</label>
              <input
                className="form-control"
                defaultValue={serviceInfo?.price}
                {...register("price")}
              />
            </div>

            <label htmlFor="">Email</label>
            <input
              className="form-control"
              defaultValue={loggedInUser.email}
              {...register("email")}
            />
            <div className="form-group">
              {" "}
              <label htmlFor="">Location</label>
              <input className="form-control" {...register("location")} />
            </div>
            {/* <br/> <p>You will be charged {serviceInfo?.price} </p> */}
            <input className="btn-primary text-white" type="submit" />
          </form>
        </div>

        <div style={{ display: shippingData ? "block" : "none" }}>
          <ProcessPayment handlePay={handlePay}></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default Orders;
