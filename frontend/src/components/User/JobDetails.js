import React from 'react';

const JobDetails = ({ match }) => {
  const jobId = match.params.jobId;

  // Fetch job details using jobId from the API

  return (
    <div>
      <h2>Job Details</h2>
      {/* Display job details */}
    </div>
  );
};

export default JobDetails;

