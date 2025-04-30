import React, { useState, useEffect } from 'react';
import KickoffForm from '../components/KickoffForm';
import FeaturesForm from '../components/FeaturesForm';
import DataModelsForm from '../components/DataModelsForm';
import WorkflowsForm from '../components/WorkflowsForm';
import UIStylingForm from '../components/UIStylingForm';
import GeneratingPlansStep from '../components/GeneratingPlansStep';
import FinalStep from '../components/FinalStep';
import MarkdownPreview from '../components/MarkdownPreview';
import Notification from '../components/Notification';
import { prdApi } from '../services/api';

const Home = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: 'default' });

  // Function to show notification
  const showNotification = (message, type = 'default') => {
    setNotification({ message, type });
  };

  // Step 1 Submit
  const handleKickoffSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    showNotification('Generating your PRD overview...', 'default');
    try {
      const response = await prdApi.kickoff(formData);
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(2);
        showNotification('Overview generated successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred with the API';
        setError(errorMsg);
        showNotification(`Failed to generate overview: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API.';
      if (error.response) errorMessage = `Server error: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('Kickoff error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Step 2 Submit
  const handleFeaturesSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    showNotification('Adding features to your PRD...', 'default');
    try {
      const response = await prdApi.overview({ currentMarkdown: markdown, features: formData.features });
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(3);
        showNotification('Features added successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred adding features';
        setError(errorMsg);
        showNotification(`Failed to add features: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API for features.';
      if (error.response) errorMessage = `Server error adding features: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server when adding features.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('Features error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3 Submit
  const handleDataModelsSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    showNotification('Adding data models to your PRD...', 'default');
    try {
      const response = await prdApi.dataModels({ currentMarkdown: markdown, entities: formData.entities });
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(4);
        showNotification('Data models added successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred adding data models';
        setError(errorMsg);
        showNotification(`Failed to add data models: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API for data models.';
      if (error.response) errorMessage = `Server error adding data models: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server when adding data models.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('Data models error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 4 Submit
  const handleWorkflowsSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    showNotification('Adding workflows to your PRD...', 'default');
    try {
      const response = await prdApi.workflows({ currentMarkdown: markdown, workflows: formData.workflows });
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(5);
        showNotification('Workflows added successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred adding workflows';
        setError(errorMsg);
        showNotification(`Failed to add workflows: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API for workflows.';
      if (error.response) errorMessage = `Server error adding workflows: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server when adding workflows.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('Workflows error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 5 Submit
  const handleUIStylingSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    showNotification('Adding UI styling info to your PRD...', 'default');
    try {
      const response = await prdApi.uiStyling({ currentMarkdown: markdown, inspiration: formData.inspiration });
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(6); // Move to Step 6 (Generate Plans)
        showNotification('UI styling added successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred adding UI styling';
        setError(errorMsg);
        showNotification(`Failed to add UI styling: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API for UI styling.';
      if (error.response) errorMessage = `Server error adding UI styling: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server when adding UI styling.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('UI styling error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 6: Generate Backend & Frontend Plans
  const handleGeneratePlans = async () => {
    setIsLoading(true);
    setError(null);
    showNotification('Generating implementation plans...', 'default');
    try {
      // Uses the backendPlan endpoint which now generates both
      const response = await prdApi.backendPlan({ currentMarkdown: markdown });
      if (response.success) {
        setMarkdown(response.data.markdown);
        setStep(7); // Move to Step 7 (Final Step)
        showNotification('Implementation plans generated successfully!', 'success');
      } else {
        const errorMsg = response.error || 'An error occurred generating implementation plans';
        setError(errorMsg);
        showNotification(`Failed to generate plans: ${errorMsg}`, 'error');
      }
    } catch (error) {
      let errorMessage = 'Failed to connect to the API for plan generation.';
      if (error.response) errorMessage = `Server error generating plans: ${error.response.data.error || 'Server error'}`;
      else if (error.request) errorMessage = 'No response from server when generating plans.';
      setError(errorMessage);
      showNotification(errorMessage, 'error');
      console.error('Plan generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render the current step's form
  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <KickoffForm onSubmit={handleKickoffSubmit} isLoading={isLoading} />;
      case 2:
        return <FeaturesForm onSubmit={handleFeaturesSubmit} isLoading={isLoading} />;
      case 3:
        return <DataModelsForm onSubmit={handleDataModelsSubmit} isLoading={isLoading} />;
      case 4:
        return <WorkflowsForm onSubmit={handleWorkflowsSubmit} isLoading={isLoading} />;
      case 5:
        return <UIStylingForm onSubmit={handleUIStylingSubmit} isLoading={isLoading} />;
      case 6: 
        // Use the renamed component and new handler
        return <GeneratingPlansStep onGenerate={handleGeneratePlans} isLoading={isLoading} />;
      case 7:
        // Render the final step component
        return <FinalStep onDownload={handleDownload} />;
      default:
        return <div>Unknown step {step}</div>;
    }
  };

  // Function to handle download
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'prd.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('PRD downloaded successfully!', 'success');
  };

  return (
    <div className="app-container">
      <div className="typeform-container">
        {error && <div className="error-message">{error}</div>}
        {renderCurrentStep()}
      </div>
      
      {/* Show MarkdownPreview for all steps except the final one */}
      {step < 7 && (
        <MarkdownPreview 
          markdown={markdown} 
          isLoading={isLoading && step !== 6} // Don't show preview loading when plans are generating
        />
      )}
      
      {/* Hide download button during final step (it's shown within FinalStep) */}
      {markdown && step < 7 && (
        <div className="download-button-container">
          <button 
            className="btn btn-primary download-btn" 
            onClick={handleDownload}
            disabled={isLoading}
          >
            Download PRD
          </button>
        </div>
      )}

      <Notification 
        message={notification.message} 
        type={notification.type} 
        onClose={() => setNotification({ message: '', type: 'default' })}
      />
    </div>
  );
};

export default Home; 