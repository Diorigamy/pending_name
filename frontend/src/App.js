import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/User/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/user/dashboard" component={Dashboard} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;

