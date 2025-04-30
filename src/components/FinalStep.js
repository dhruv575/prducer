import React from 'react';

const FinalStep = ({ onDownload }) => {
  const firebaseLink = "https://firebase.google.com/"; // Or a more specific link if desired

  return (
    <div className="typeform-content">
      <div className="typeform-card final-step-card">
        <div className="typeform-question">
          <h2 className="question-title">Your PRD is Ready!</h2>
          <p className="question-description">
            Your Product Requirements Document has been generated based on your inputs.
            You can now download the Markdown file and use it as a starting point for your project implementation.
          </p>
          
          <div className="final-actions">
            <button 
              className="typeform-button download-final-btn" 
              onClick={onDownload}
            >
              Download PRD (Markdown)
            </button>
            
            <a 
              href={firebaseLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="typeform-link-button"
            >
              Get Started with Firebase
            </a>
          </div>

          <p className="disclaimer">
            <strong>Disclaimer:</strong> For highly complex ideas, you may need to refine this plan manually or consult with technical experts.
            This generated PRD provides a strong foundation but may require further elaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalStep; 