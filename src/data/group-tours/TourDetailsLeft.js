import SingleTour from "@/data/tour-folder/SingleTour";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "../../components/TourDetails/ReviewForm";
import ReviewScoreBar from "../../components/TourDetails/ReviewScoreBar";
import SingleComment from "../../components/TourDetails/SingleComment";
import popularToursTwo from "@/data/popularToursTwo";

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = () => {
  const [active, setActive] = useState(1);

  const groupTours = popularToursTwo.groupTours;

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{groupTours.overview}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {groupTours.overviewList.map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {groupTours.overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <h3 className="tour-details-two__title review-scores__title">
        Review Scores
      </h3>
      {/* <div className="tour-details__review-score">
        <div className="tour-details__review-score__content">
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div> */}
      <div className="tour-details__review-comment">
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </div>
      <ReviewForm reviews={reviews} />
    </div>
  );
};

export default TourDetailsLeft;
