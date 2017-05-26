import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const FlatButtonLink = ({ to, ...rest }) =>
    <FlatButton {...{
      containerElement: <Link to={to} />,
      ...rest,
    }} />;

FlatButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
};

FlatButtonLink.defaultProps = {
  style: {
    marginLeft: '0px',
    marginRight: '0px',
  },
};

export default FlatButtonLink;
