import React from 'react';
import DonationAmountButtons from './DonationAmountButtons';
import DonationForm from './DonationForm';
import './DonationPlan.css'; // Custom CSS for this component

const DonationPlan = () => {
  return (
    <div className="donation-plan">
      <div className="image-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOaA6ehid2KZ2hQH6qhLizA0lgIPLQ-6sbIrQy46Ut8pCkPMI" alt="Social Impact" /> {/* Replace with your image path */}
      </div>
      <div className="form-section">
        <h2>Social Impact Plan</h2>
        <p>Join our community of monthly donors</p>
        <DonationAmountButtons />
        <DonationForm />
      </div>
    </div>
  );
};

export default DonationPlan;
