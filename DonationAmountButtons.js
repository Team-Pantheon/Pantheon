import React, { useState } from 'react';

const DonationAmountButtons = () => {
  const [selectedAmount, setSelectedAmount] = useState(300);

  return (
    <div className="donation-amount-buttons">
      <button
        className={`btn ${selectedAmount === 200 ? 'selected' : ''}`}
        onClick={() => setSelectedAmount(200)}
      >
        Rs. 200/MO
      </button>
      <button
        className={`btn ${selectedAmount === 300 ? 'selected' : ''}`}
        onClick={() => setSelectedAmount(300)}
      >
        Rs. 300/MO
      </button>
      <button
        className={`btn ${selectedAmount === 500 ? 'selected' : ''}`}
        onClick={() => setSelectedAmount(500)}
      >
        Rs. 500/MO
      </button>
      <button className="btn other-amount">Other Amount</button>
    </div>
  );
};

export default DonationAmountButtons;
