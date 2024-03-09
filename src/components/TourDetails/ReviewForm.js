import React from "react";
import { Col, Row } from "react-bootstrap";

const ReviewForm = ({ reviews = [] }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tour-details__review-form">
      <h3 className="tour-details-two__title">Write a Comment</h3>
      <Row>
        <Col xl={6}>
          <div className="tour-details__review-form-left">
            <form onSubmit={handleSubmit} className="tour-details__review-form">
              <div className="tour-details__review-form-input">
                <input type="text" placeholder="Your Name" name="name" />
              </div>
              <div className="tour-details__review-form-input">
                <input type="text" placeholder="Review Title" name="review" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
      <div className="tour-details__review-form-textarea">
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Write Comment"></textarea>
          <button
            type="submit"
            className="thm-btn tour-details__review-form-btn"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
