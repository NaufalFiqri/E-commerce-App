import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
        // Math.floor() == if 4.5 = 4, 3.5 = 3
      }
      {
        !Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )
        // if number is NOT integer, PRINT half star
      }
    </div>
  );
};

export default Rating;
