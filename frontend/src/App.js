import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Common/PrivateRoute';
import Navbar from './components/Common/Navbar';
import Dashboard from './components/User/Dashboard';
import JobList from './components/User/JobList';
import JobDetails from './components/User/JobDetails';
import ReviewList from './components/Review/ReviewList';
import ReviewDetails from './components/Review/ReviewDetails';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import NotFound from './components/Common/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={/* Your Home Component */} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/user/dashboard" component={Dashboard} />
          <PrivateRoute path="/user/job-list" component={JobList} />
          <PrivateRoute path="/user/job/:jobId" component={JobDetails} />
          <PrivateRoute path="/user/reviews" component={ReviewList} />
          <PrivateRoute path="/user/review/:reviewId" component={ReviewDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

