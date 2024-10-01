import React from 'react';
import DonationCard from './DonationCard';

const DonationList = () => {
  const donations = [
    {
      id: 1,
      title: "Flood in Lamboa",
      date: "June 27, 2023",
      description: "Lamboa community needs your help for crisis management from 3 days of non-stop flooding.",
      donations: "230 donations",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkZ5pg7JeV3Jf8Rs97yw_BfSMo3Ye8jG_EQ&s"  // Replace this path with your actual image path
    },
    {
      id: 2,
      title: "Tsunami in Malika",
      date: "June 21, 2023",
      description: "Emergency tsunami has hit Malika, Tasrud district. Help our affected brothers and sisters.",
      donations: "362 donations",
      imageUrl: "https://i.natgeofe.com/n/0f9e3b7a-d3ca-4418-8e61-f605b4e04bc5/02-rikuzentakata-japan.jpg"
    },
    // Add more donations
  ];

  return (
    <div className="donation-list row">
      {donations.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

export default DonationList;
