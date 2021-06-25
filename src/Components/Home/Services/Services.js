import React, { useEffect, useState } from "react";
import ServicesDetails from "../../Home/ServicesDetails/ServicesDetails";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);
  // console.log(service);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  return (
    <section className="serviceContainer">
      <div className="text-center mt-2">
        <h2>Our Services</h2>
      </div>
      <div>
        <div className="row ">
          {service.map((service) => (
            <ServicesDetails
              key={service._id}
              service={service}
            ></ServicesDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
