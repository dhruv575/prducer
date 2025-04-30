import React, { useState } from 'react';

const FeaturesForm = ({ onSubmit, isLoading }) => {
  const [features, setFeatures] = useState([{ title: '', description: '' }]);
  const [predefined, setPredefined] = useState({
    realtimeAlerts: false,
    roleBasedAccess: false,
    analyticsDashboard: false,
  });

  const predefinedOptions = [
    { id: 'realtimeAlerts', label: 'Real-time Alerts', description: 'Instantly notify users when important events occur.' },
    { id: 'roleBasedAccess', label: 'Role-Based Access', description: 'Control who can see and do what in the app.' },
    { id: 'analyticsDashboard', label: 'Analytics Dashboard', description: 'Give managers clear, actionable insights at a glance.' },
  ];

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  const handleAddFeature = () => {
    setFeatures([...features, { title: '', description: '' }]);
  };

  const handleRemoveFeature = (index) => {
    if (features.length > 1) {
      const newFeatures = features.filter((_, i) => i !== index);
      setFeatures(newFeatures);
    }
  };

  const handlePredefinedChange = (e) => {
    const { name, checked } = e.target;
    setPredefined({
      ...predefined,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine custom features and selected predefined features
    const allFeatures = [
      ...features.filter(f => f.title.trim() || f.description.trim()), // Include non-empty custom features
      ...predefinedOptions
        .filter(p => predefined[p.id])
        .map(p => ({ title: p.label, description: p.description }))
    ];
    onSubmit({ features: allFeatures });
  };

  return (
    <div className="typeform-content">
      <div className="typeform-card">
        <form onSubmit={handleSubmit}>
          <div className="typeform-question">
            <h2 className="question-title">Which 2–3 core features will make this product shine?</h2>
            <p className="question-description">
              Describe each in a sentence or two, then check any examples below or add your own.
            </p>
            
            {/* Predefined Features */}
            <div className="typeform-checkbox-options">
              {predefinedOptions.map((option) => (
                <label key={option.id} className="typeform-checkbox-option">
                  <input 
                    type="checkbox" 
                    className="checkbox-input" 
                    name={option.id} 
                    checked={predefined[option.id]}
                    onChange={handlePredefinedChange}
                    disabled={isLoading}
                  />
                  <span className="checkbox-label-text">
                    <strong>{option.label}:</strong> {option.description}
                  </span>
                </label>
              ))}
            </div>

            {/* Custom Features */}
            <h3 className="custom-features-title">+ Add your own features:</h3>
            {features.map((feature, index) => (
              <div key={index} className="custom-feature-item">
                <input
                  type="text"
                  className="typeform-input custom-feature-title-input"
                  placeholder="Feature Title (e.g., User Profiles)"
                  value={feature.title}
                  onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                  disabled={isLoading}
                />
                <textarea
                  className="typeform-textarea custom-feature-desc-input"
                  placeholder="Brief description of the feature..."
                  value={feature.description}
                  onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                  disabled={isLoading}
                />
                {features.length > 1 && (
                  <button 
                    type="button" 
                    className="typeform-remove-button"
                    onClick={() => handleRemoveFeature(index)}
                    disabled={isLoading}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              className="typeform-add-button"
              onClick={handleAddFeature}
              disabled={isLoading}
            >
              + Add Another Feature
            </button>
          </div>

          <div className="typeform-actions">
            <button 
              type="submit"
              className={`typeform-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
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

export default FeaturesForm; 