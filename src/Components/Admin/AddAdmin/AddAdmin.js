import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      email: data.email,
    };
    const url = `http://localhost:5000/addAdmin`;
    console.log(adminEmail);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(adminEmail),
    }).then((res) => console.log("server side response", res));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>{" "}
      </div>
      <div className="col-md-8">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Add Email</label>
          <input
            className="form-control m-5 "
            placeholder=" Enter Email Here"
            {...register("email")}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
