import React from 'react';
import './styles/Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="report">
        <p>Campaign: "Summer Sale 2024"<br/><br/>
        Platform: Facebook<br/>
        <br/>Impressions: 1,200,000<br/>Reach: 900,000<br/>Engagement Rate: 3.5% (31,500 engagements)
        <br/>Likes: 20,000<br/>Shares: 8,000
        <br/>Comments: 3,500<br/>Click-Through Rate (CTR): 1.8% (21,600 clicks)
        <br/><br/>Insights:"The campaign reached 900,000 unique users, with an engagement rate of 3.5%. Despite the high number of impressions, the CTR was relatively low, indicating that the ad content may need to be more compelling or better targeted to drive more clicks."</p>
      </div>
      <div className="report">
        <p>Campaign: "New Product Launch"
        <br/><br/>Platform: Google Ads<br/><br/>
        Conversions: 5,000 purchases<br/>
        Conversion Rate: 2.5%<br/>
        Cost Per Conversion: $15<br/>
        Funnel Analysis:<br/>
        Impressions: 500,000<br/>
        Clicks: 100,000<br/>
        Add to Cart: 10,000<br/>
        Purchases: 5,000<br/><br/>
        Insights:
        "The campaign generated 5,000 purchases with a conversion rate of 2.5%. There was a significant drop-off between clicks and add-to-cart actions, suggesting potential friction points on the product page that may need optimization."</p>
      </div>
      <div className="report">
        <p>Campaign: "Back-to-School Special"<br/><br/>
          Platform: Instagram<br/><br/>
          Total Campaign Cost: $50,000<br/>
          Revenue Generated: $120,000<br/>
          Return on Investment (ROI): 140%<br/>
          Customer Acquisition Cost (CAC): $20<br/>
          Lifetime Value (LTV): $100<br/><br/>
          Insights:
          "The campaign achieved an ROI of 140%, generating $120,000 in revenue from a $50,000 investment. The CAC was $20, which is favorable considering the LTV of $100, making this a profitable campaign with strong long-term potential."</p>
      </div>
    </div>
  );
};

export default Analytics;