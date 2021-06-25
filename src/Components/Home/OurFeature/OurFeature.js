import React from "react";
import imgCom from "../../../images/laptop.png";
import imgMob from "../../../images/phone-repair-symbol.png";
import fast from "../../../images/stopwatch.png";
import "./OurFeature.css";

const OurFeature = () => {
  return (
    <section className="OurFeatureContainer">
      <h2 className="text-center">Our Feature</h2>
      <p className="text-center">
        There have a lot of feature that you need , This is a{" "}
        <strong>Online Service Center</strong> based on system and settings also
        we can fixed all of those things.
      </p>
      <div className="row d-flex p-3">
        <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center ">
            <div>
              <img
                className="shadow rounded p-3"
                src={imgCom}
                alt=""
                style={{ width: "10rem" }}
              />
            </div>
            <div>
              <h6>System & Settings</h6>
              <small>We always provide the Best Service </small>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center">
            <div>
              <img
                className="shadow rounded p-3"
                src={imgMob}
                alt=""
                style={{ width: "10rem" }}
              />
            </div>
            <div>
              <h6>Mobile Setting & Service</h6>
              <small>Everything We can do for YOU </small>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center">
            <div>
              <img
                className="shadow rounded p-3"
                src={fast}
                alt=""
                style={{ width: "10rem" }}
              />
            </div>
            <div>
              <h6>Time Action</h6>
              <small>On Time Delivery</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeature;
