import React, { useState } from 'react';

const UIStylingForm = ({ onSubmit, isLoading }) => {
  const [inspiration, setInspiration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inspiration });
  };

  return (
    <div className="typeform-content">
      <div className="typeform-card">
        <form onSubmit={handleSubmit}>
          <div className="typeform-question">
            <h2 className="question-title">What look and feel inspires you?</h2>
            <p className="question-description">
              Which website or brand's style do you admire? Describe the colors, layout, tone, or any element you love.
              Example: "I love Stripe's clean white space and subtle micro-animations."
            </p>
            <textarea
              className="typeform-textarea ui-inspiration-input"
              placeholder="Describe your UI inspiration here..."
              value={inspiration}
              onChange={(e) => setInspiration(e.target.value)}
              disabled={isLoading}
              rows={5} // Adjust rows as needed
              required // Make input required for this step
            />
          </div>

          <div className="typeform-actions">
            <button 
              type="submit"
              className={`typeform-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || !inspiration.trim()} // Disable if empty
            >
              {isLoading ? (
                <>
                  <span className="button-loader"></span>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <span>Continue</span>
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UIStylingForm; 