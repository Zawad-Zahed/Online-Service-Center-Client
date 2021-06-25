import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form p-5">
      <h4 className="text-light">Contact Us</h4>
      <form className=" shadow rounded ">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Your Name *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Your Email *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Your Phone Number *"
              />
            </div>
            <div className="form-group">
              <button
                style={{ backgroundColor: "rgb(31, 116, 117)" }}
                className="btn text-light shadow"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="txtMsg"
                placeholder="Write your Query"
                className="form-control"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
