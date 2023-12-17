// JobList.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );
	
  return (
    <div>
      <h2>Job List</h2>
      <label>Filter by Title:</label>
      <input type="text" onChange={handleFilterChange} />
     <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/user/job/${job.id}`}>{job.title}</Link>
	    //<h3>{job.title}</h3>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <button>View Details</button>
            <button>Accept Job</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

