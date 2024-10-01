import React, { useState } from 'react';
import DonationForm from './DonationForm'; // Import the DonationForm component
import './DonationCard.css';

const DonationCard = ({ donation }) => {
  const [showForm, setShowForm] = useState(false); // State to toggle between card and form

  // Function to handle the "Donate now" button click
  const handleDonateClick = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  return (
    <div>
      {/* Conditionally render the card or the form */}
      {showForm ? (
        <DonationForm />  // Show DonationForm component if the state is true
      ) : (
        <div className="card donation-card">
          <img src={donation.imageUrl} className="card-img-top" alt={donation.title} />
          <div className="card-body">
            <h5 className="card-title">{donation.title}</h5>
            <p className="card-date">{donation.date}</p>
            <p className="card-text">{donation.description}</p>
            <p className="card-donations"><strong>{donation.donations}</strong></p>
            {/* When "Donate now" is clicked, the form will appear */}
            <button onClick={handleDonateClick} className="btn btn-primary">
              Donate now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationCard;
