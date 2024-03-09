import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleComment = ({ comment = {} }) => {
  const {
    image,
    name,
    date,
    title,
    message,
    services,
    locations,
    amenities,
    prices,
    food,
  } = comment;

  return (
    <div className="tour-details__review-comment-single">
      <div className="tour-details__review-comment-top">
        <div className="tour-details__review-comment-top-img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
        </div>
        <div className="tour-details__review-comment-top-content">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="tour-details__review-comment-content">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleComment;
