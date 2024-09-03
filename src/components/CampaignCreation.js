
import './styles/CampaignCreation.css';
import React, { useState } from "react";

const CampaignForm = () => {
  const [campaign, setCampaign] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Data Submitted: ", campaign);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <h2>Create/Edit Marketing Campaign</h2>
      <div className="form-group">
        <label htmlFor="name">Campaign Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={campaign.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={campaign.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={campaign.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={campaign.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={campaign.budget}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Save Campaign
      </button>
    </form>
  );
};

export default CampaignForm;
