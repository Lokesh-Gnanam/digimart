
import './styles/CampaignCreation.css';
import React from "react";

function cam(){
  alert("You are successfully Campaign Created :)")
}


const CampaignForm = () => {
 
  

  return (
    <form className="campaign-form" >
      <h2>Create/Edit Marketing Campaign</h2>
      <div className="form-group">
        <label htmlFor="name">Campaign Name:</label>
        <input type="text" required />
        
        
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          
          
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          
          
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          
          
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
      
          required
        />
      </div>
      <button type="submit" onClick={cam} className="submit-btn">
        Save Campaign
      </button>
    </form>
  );
};

export default CampaignForm;
