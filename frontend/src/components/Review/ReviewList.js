// ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
		<Link to={`/user/review/${review.id}`}>{review.title}</Link>
		//<h3>{review.title}</h3>
            <p>Content: {review.content}</p>
            <p>Rating: {review.rating}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;

