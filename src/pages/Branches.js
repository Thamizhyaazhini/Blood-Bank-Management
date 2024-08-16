// src/pages/Branches.js
import React from 'react';
import Branch from '../components/Branch';
import branchData from '../data/branchData';

const Branches = () => {
  return (
    <div className="branches">
      <h2>Our Branches</h2>
      {branchData.map((branch, index) => (
        <Branch
          key={index}
          name={branch.name}
          address={branch.address}
          image={branch.image}
        />
      ))}
    </div>
  );
};

export default Branches;

