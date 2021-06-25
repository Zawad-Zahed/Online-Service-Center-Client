import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Admin/Sidebar/Sidebar";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = `https://ancient-crag-99991.herokuapp.com/addReview`;
    // console.log(serviceData)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => console.log("server side response", res));
    console.log(data);
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>{" "}
      </div>
      <div className="col-md-8">
        <form className="m-5 w-50 " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            {" "}
            <label htmlFor="">name</label>
            <input className="form-control" {...register("name")} />
          </div>

          <label htmlFor="">Designation</label>
          <input className="form-control" {...register("designation")} />
          <div className="form-group">
            {" "}
            <label htmlFor="">Description</label>
            <input className="form-control" {...register("description")} />
          </div>
          <input className="btn-primary text-white" type="submit" />
        </form>
      </div>
    </div>
    // <div>
    //
    // </div>
  );
};

export default AddReview;
