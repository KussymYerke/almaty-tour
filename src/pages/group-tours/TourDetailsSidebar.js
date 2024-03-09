import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";

const TourDetailsSidebar = () => {
  
  return (
    <div className="tour-details-two__sidebar">
      <div className="tour-details-two__last-minute">
        <h3 className="tour-details-two__sidebar-title">Last Minute</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {tourDetailsSidebar.map(({ id, title, image, price, location }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>${price}</h6>
                <h5>{title}</h5>
                <p>{location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourDetailsSidebar;
