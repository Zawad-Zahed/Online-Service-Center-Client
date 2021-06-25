import React from "react";
import{ Link} from "react-router-dom";
import sideImage1 from "../../../images/slider1.jpg";
import sideImage2 from "../../../images/slider2.jpg";
import sideImage3 from "../../../images/slider3.jpg";

const HeaderMain = () => {
  return (
    <main
      style={{ height: "300px" }}
      className="row d-flex align-items-center row"
    >
      <div className="col-md-4 offset-md-1">
        <h1 className="text-primary">
          Online Service Center <br /> On Your Hand
        </h1>
        <p className="text-secondary">
          You only have to select your service & make payment. <br />
          Then we will be there for you.
        </p>
        <Link to="/login" className="nav-link ms-5 active">
          <button className="btn btn-primary">Get Services</button>
        </Link>
      </div>
      <div className="col-md-6">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner shadow rounded">
            <div class="carousel-item active">
              <img
                src={sideImage1}
                style={{ height: "300px", weight: "auto" }}
                className="d-block w-100 img-fluid d-inline-block align-text-top "
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-primary">
                <h5>Laptop Service</h5>
                <p>Any time you can get laptop service.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={sideImage2}
                style={{ height: "300px", weight: "auto" }}
                className="d-block w-100 img-fluid d-inline-block align-text-top "
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-primary">
                <h5>Computer Service</h5>
                <p>Any time you can get Computer service.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={sideImage3}
                style={{ height: "300px", weight: "auto" }}
                className="d-block w-100 img-fluid d-inline-block align-text-top  "
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-primary">
                <h5>Mobile Service</h5>
                <p>Any time you can get Mobile service.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
