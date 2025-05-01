import React from 'react';

const FinalStep = ({ onDownload }) => {
  const firebaseStudioLink = "https://studio.firebase.google.com/"; 

  return (
    <div className="typeform-content">
      <div className="typeform-card final-step-card">
        <div className="typeform-question">
          <h2 className="question-title">Your PRD is Ready!</h2>
          <p className="question-description">
            Your Product Requirements Document has been generated. Download the Markdown file below.
          </p>
          
          <div className="final-actions">
            <button 
              className="typeform-button download-final-btn" 
              onClick={onDownload}
            >
              Download PRD (Markdown)
            </button>
          </div>

          <h3 className="next-steps-title">Next Steps: Build with Firebase Studio</h3>
          <ol className="next-steps-list">
            <li>Go to <a href={firebaseStudioLink} target="_blank" rel="noopener noreferrer">Firebase Studio</a>.</li>
            <li>Click "+ New Workspace" and select the "React" template. When prompted, choose "JavaScript" as the language.</li>
            <li>In the file directory on the left, find the `README.md` file.</li>
            <li>Open your downloaded PRD file, copy its entire content, and paste it into the Firebase Studio `README.md`, completely replacing the existing template content.</li>
            <li>A panel should appear on the right with "Web" and "Gemini" tabs. Click the "Gemini" tab.</li>
            <li>Attach the `README.md` file to the Gemini chat and ask it: "Please read the attached PRD and complete the first step defined under Backend Development Steps."</li>
            <li>Continue instructing Gemini step-by-step, using the "Web" tab to preview your application as you build.</li>
          </ol>

          <p className="disclaimer">
            <strong>Disclaimer:</strong> For highly complex ideas, you may need to refine the PRD manually or consult with technical experts.
            This generated document provides a strong foundation but may require further elaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalStep; 