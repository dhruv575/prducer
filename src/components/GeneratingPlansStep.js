import React, { useEffect } from 'react';

const GeneratingPlansStep = ({ onGenerate, isLoading }) => {
  // Trigger the generation automatically when the component mounts
  useEffect(() => {
    if (!isLoading) {
      onGenerate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="typeform-content">
      <div className="typeform-card">
        <div className="typeform-question">
          <h2 className="question-title">Generating Implementation Plans...</h2>
          <p className="question-description">
            Based on your inputs, we're now generating high-level plans for both your backend (Firebase) and frontend (React) setups.
          </p>
          {isLoading && (
            <div className="loading-spinner-container">
              <span className="button-loader"></span>
              <span>Please wait... This might take a moment.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratingPlansStep; 