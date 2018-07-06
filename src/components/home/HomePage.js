import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Dashboard Page</h1>
        <p>Hello World</p>
        <Link to="/" className="btn btn-primary btn-lg">Logout</Link>
      </div>
    );
  }
}

export default HomePage;
