import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [suggestedJobs, setSuggestedJobs] = useState([]);

	// Fetch and display job suggestions
  useEffect(() => {
    // Fetch job suggestions and update state
  }, []);

  return (
    <div>
      <h2>Welcome, {currentUser.username}!</h2>
      <p>Email: {currentUser.email}</p>
      <p>Location: {currentUser.location}</p>
      <p>Skills: {currentUser.skills}</p>

      <h3>Actions:</h3>
      <ul>
        <li><Link to="/user/job-list">View Jobs</Link></li>
        <li><Link to="/user/reviews">View Reviews</Link></li>
        {/* Add more links as needed */}

      <h3>Job Suggestions:</h3>
      {/* Display job suggestions */}

      </ul>
    </div>
  );
};

export default Dashboard;

