import React, { useState } from 'react';

const WorkflowsForm = ({ onSubmit, isLoading }) => {
  const [workflows, setWorkflows] = useState(['']); // Start with one empty workflow

  const handleWorkflowChange = (index, value) => {
    const newWorkflows = [...workflows];
    newWorkflows[index] = value;
    setWorkflows(newWorkflows);
  };

  const handleAddWorkflow = () => {
    if (workflows.length < 3) {
      setWorkflows([...workflows, '']);
    }
  };

  const handleRemoveWorkflow = (index) => {
    if (workflows.length > 1) {
      const newWorkflows = workflows.filter((_, i) => i !== index);
      setWorkflows(newWorkflows);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter out empty workflows before submitting
    const validWorkflows = workflows.filter(w => w.trim());
    onSubmit({ workflows: validWorkflows });
  };

  return (
    <div className="typeform-content">
      <div className="typeform-card">
        <form onSubmit={handleSubmit}>
          <div className="typeform-question">
            <h2 className="question-title">Describe your top 2–3 core workflows</h2>
            <p className="question-description">
              Outline the steps in plain English for each major workflow. For example: 
              "1. User signs up → Receive welcome email → Complete profile → Start using dashboard"
            </p>
            
            <div className="custom-workflows-container">
              {workflows.map((workflow, index) => (
                <div key={index} className="custom-workflow-item">
                  <label className="workflow-label">Workflow {index + 1}:</label>
                  <textarea
                    className="typeform-textarea custom-workflow-input"
                    placeholder={`Describe workflow ${index + 1}...`}
                    value={workflow}
                    onChange={(e) => handleWorkflowChange(index, e.target.value)}
                    disabled={isLoading}
                    rows={4} // Adjust rows as needed
                  />
                  {workflows.length > 1 && (
                    <button 
                      type="button" 
                      className="typeform-remove-button workflow-remove-button"
                      onClick={() => handleRemoveWorkflow(index)}
                      disabled={isLoading}
                      title="Remove Workflow"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
            </div>

            {workflows.length < 3 && (
              <button 
                type="button" 
                className="typeform-add-button"
                onClick={handleAddWorkflow}
                disabled={isLoading}
              >
                + Add Another Workflow (up to 3)
              </button>
            )}
          </div>

          <div className="typeform-actions">
            <button 
              type="submit"
              className={`typeform-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || workflows.every(w => !w.trim())} // Disable if all are empty
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

export default WorkflowsForm; 