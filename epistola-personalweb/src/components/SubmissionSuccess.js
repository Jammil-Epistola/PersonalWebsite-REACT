import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SubmissionSuccess = ({ formData }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    flexDirection: 'column',
    textAlign: 'center',
  };

  const accordionStyle = {
    width: '300px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>Thank you, {formData.name}!</h1>
      <h3>Your Message has been sent.</h3>
      <p><strong>Email:</strong> {formData.email}</p>

      {/* Bootstrap Accordion for the Message */}
      <div className="accordion" id="accordionExample" style={accordionStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              View Message
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse" 
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {formData.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
