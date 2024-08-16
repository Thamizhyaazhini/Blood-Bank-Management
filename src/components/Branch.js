// src/components/Branch.js
import React from 'react';
import PropTypes from 'prop-types';
import './Branch.css';

const Branch = ({ name, address, image }) => {
  return (
    <div className="branch">
      <img src={image} alt={name} className="branch-image" />
      <div className="branch-details">
        <h3 className="branch-name">{name}</h3>
        <p className="branch-address">{address}</p>
      </div>
    </div>
  );
};

Branch.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Branch;
