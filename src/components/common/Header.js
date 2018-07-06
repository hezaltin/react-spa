import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
// import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      {/* <IndexLink to="/home" activeClassName="active">Home</IndexLink>
      {" | "} */}
      <IndexLink to="/" activeClassName="active">Sign In</IndexLink>
      {" | "}
      <Link to="/signup" activeClassName="active">Sign Up</Link>
      {/* {loading && <LoadingDots interval={100} dots={20} />} */}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
