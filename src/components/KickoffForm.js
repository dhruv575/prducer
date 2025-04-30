import React, { useState } from 'react';
import logo from '../logo.png';

const KickoffForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    description: '',
    usePreset: false,
    presetChoice: ''
  });

  const presetOptions = [
    { 
      id: 'sales-chatbot', 
      label: 'Sales Chatbot – Our sales team struggles to follow up with leads consistently and personalize outreach at scale. We want to create an AI-powered chatbot that can automate initial conversations, qualify leads, and schedule meetings with human sales reps when prospects are ready to buy.' 
    },
    { 
      id: 'expense-dashboard', 
      label: 'Expense-Report Dashboard – Our finance team spends too much time processing expense reports and lacks visibility into spending patterns. We need a real-time dashboard that automatically categorizes expenses, flags policy violations, and provides actionable insights on team spending to help control costs.' 
    },
    { 
      id: 'onboarding-workflow', 
      label: 'Onboarding Workflow Manager – New employees take too long to become productive because our onboarding process is fragmented across different systems. We want to build a centralized workflow tool that guides new hires through training modules, policy acknowledgments, and team introductions with automated progress tracking.' 
    },
    { 
      id: 'feedback-collector', 
      label: 'Customer Feedback Collector – We\'re losing customers without understanding why because we lack a systematic way to gather and analyze feedback. We need an automated system that collects satisfaction surveys after key interactions, analyzes sentiment trends, and routes critical feedback to the appropriate teams for immediate action.' 
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePresetSelect = (presetId) => {
    setFormData({
      ...formData,
      usePreset: true,
      presetChoice: presetId
    });
  };

  return (
    <div className="typeform-content">
      <div className="typeform-brand">
        <img src={logo} alt="Wharton Logo" className="typeform-logo" />
        <div className="typeform-badge">PRD Producer</div>
      </div>
      
      <div className="typeform-card">
        <h1 className="typeform-title">Create your Firebase PRD</h1>
        <p className="typeform-description">
          Transform your idea into a comprehensive product requirements document in minutes using AI.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="typeform-question">
            <h2 className="question-title">What business challenge do you want to solve?</h2>
            <p className="question-description">
              Tell us in 2–3 sentences what problem you're addressing and how you'd like to approach it.
            </p>
            <textarea
              className="typeform-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your business challenge..."
              disabled={formData.usePreset || isLoading}
            />
          </div>

          <div className="typeform-question">
            <h2 className="question-title">Or select from our templates</h2>
            <p className="question-description">
              Choose one of these pre-defined product ideas to get started quickly.
            </p>
            
            <div className="typeform-options">
              {presetOptions.map((preset) => (
                <div 
                  key={preset.id} 
                  className={`typeform-option ${formData.usePreset && formData.presetChoice === preset.id ? 'selected' : ''}`}
                  onClick={() => !isLoading && handlePresetSelect(preset.id)}
                >
                  <div className="option-radio">
                    {formData.usePreset && formData.presetChoice === preset.id && (
                      <div className="option-radio-selected"></div>
                    )}
                  </div>
                  <div className="option-text">{preset.label}</div>
                </div>
              ))}
            </div>
          </div>

          {formData.usePreset && (
            <button
              type="button"
              className="typeform-text-button"
              onClick={() => setFormData({ ...formData, usePreset: false, presetChoice: '' })}
              disabled={isLoading}
            >
              Use custom description instead
            </button>
          )}

          <div className="typeform-actions">
            <button 
              type="submit"
              className={`typeform-button ${isLoading ? 'loading' : ''}`}
              disabled={
                isLoading || 
                (!formData.usePreset && !formData.description) || 
                (formData.usePreset && !formData.presetChoice)
              }
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

export default KickoffForm; 