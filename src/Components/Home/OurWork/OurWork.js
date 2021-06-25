import React from "react";
import sideImage1 from "../../../images/slider1.jpg";
import sideImage2 from "../../../images/slider2.jpg";
import sideImage3 from "../../../images/slider3.jpg";

const OurWork = () => {
  return (
    <div className="row m-5 justify-content-evenly rounded mb-3">
      <h3>Our Work Style</h3>

      <div className="card ml-5 shadow rounded" style={{ width: "18rem" }}>
        <img
          src={sideImage1}
          className="card-img-top p-2 mt-1 rounded shadow"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card ml-5 shadow rounded" style={{ width: "18rem" }}>
        <img
          src={sideImage2}
          class="card-img-top p-2 mt-1 rounded shadow"
          alt="..."
        />
        <div className="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card ml-5 shadow rounded" style={{ width: "18rem" }}>
        <img
          src={sideImage3}
          class="card-img-top p-2 mt-1 rounded shadow"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
