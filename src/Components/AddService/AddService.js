import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Admin/Sidebar/Sidebar";
const AddService = () => {
  const [serviceImg, setServiceImg] = useState(null);
  console.log(serviceImg);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      imageUrl: serviceImg,
      price: data.price,
    };
    const url = `https://ancient-crag-99991.herokuapp.com/addService`;
    // console.log(serviceData)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImgUpload = (e) => {
    console.log(e.target.files[0]);
    console.log("image");
    const imgData = new FormData();
    imgData.set("key", "f021f35eb940b98264d27bd19fe4d311");
    imgData.append("image", e.target.files[0]);
    console.log(imgData);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setServiceImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>{" "}
      </div>
      <div className="col-md-8">
        {" "}
        <form className="w-50 m-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Service Name</label>
          <input className="form-control" {...register("name")} />

          <label htmlFor="">Price</label>
          <input className="form-control" {...register("price")} />

          <input
            className="form-control"
            onChange={handleImgUpload}
            type="file"
          />

          <input className="form-control btn-primary " type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
