import React from 'react';

const DonationFilterButtons = () => {
  const filters = ['All', 'Disaster', 'Children', 'Food Crisis', 'Health', 'Education', 'Homeless', 'Animal', 'Pandemic', 'War Crisis'];
  
  return (
    <div className="filter-buttons">
      {filters.map((filter, index) => (
        <button key={index} className="btn btn-outline-info">
          {filter}
        </button>
      ))}
    </div>
  );
};

export default DonationFilterButtons;
