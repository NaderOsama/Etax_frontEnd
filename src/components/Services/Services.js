import React, { useEffect, useState } from "react";
import MainHeading from "../MainHeading/MainHeading";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data.results))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const listservices = services.map((ser) => {
    const cardClasses = ser.status === 0 ? "disabled-card" : "";

    return (
      <Link
        className={`col-lg-4 col-md-6 col-sm-12 p-3 ${cardClasses}`}
        to={`/services/${ser.id} `}
        key={ser.id}
      >
        <div className={`card ${cardClasses}`}>
          <h5 className="tiltle_services_card">{ser.name}</h5>
          <p className="body_services_card">{ser.description}</p>
          <span className="line"></span>
        </div>
      </Link>
    );
  });
  return (
    <>
      <div className="services text-center m-tb-120" id="service">
        <div className="containerr">
          <MainHeading
            heading={"الخدمات"}
            contentHeading={"كل الخدمات الضريبية في مكان واحد"}
          />
          <div className="cards-services">
            <div className="row">{listservices}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
