// ReviewDetails.js
import React from 'react';

const ReviewDetails = ({ review }) => {
  return (
    <div>
      <h2>Review Details</h2>
      <p>Title: {review.title}</p>
      <p>Content: {review.content}</p>
      <p>Rating: {review.rating}</p>
      <p>Posted By: {review.postedBy}</p>
      {/* Display more review details as needed */}
    </div>
  );
};

export default ReviewDetails;

