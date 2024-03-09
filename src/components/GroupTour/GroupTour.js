import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const GroupTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={require(`@/images/resources/popular-tours-two-img-6.png`).default.src}
            alt=""
          />
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> 8.0 Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href="group-tour">Charyn Canyon, Kolsay lake, Kaindy lake</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>$999</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">
            <li>
                <Link href="group-tour">12 HOURS</Link>
            </li>
            <li>
                <Link href="group-tour">ALMATY REGION</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupTour;
