// JobDetails.js
import React from 'react';

const JobDetails = ({ job }) => {
  const handleContact = () => {
    // Implement communication logic (e.g., messaging systme)

  return (
    <div>
      <h2>Job Details</h2>
      <p>Title: {job.title}</p>
      <p>Description: {job.description}</p>
	<p>Location: {job.location}</p>
	<p>Posted By: {job.postedBy}</p>
	  {/* Display more job details as needed */}
	<button>Accept Job</button>
	<button>Cancel Job</button>
	<button onClick={handleContact}>Contact Poster</button>
    </div>
  );
};

export default JobDetails;

