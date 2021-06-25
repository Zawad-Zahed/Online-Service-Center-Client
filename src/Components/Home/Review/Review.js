import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const Review = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://ancient-crag-99991.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="row m-3 p-3 shadow rounded">
      {reviews.map((review) => (
        <div className="card col-md-4 mb-1 ">
          <p>{review.description}</p>
          <div>
            <h4>
              <b>{review.name}</b>
            </h4>
            <p>
              {" "}
              <small>{review.designation}</small>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
