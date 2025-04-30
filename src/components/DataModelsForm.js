import React, { useState } from 'react';

const DataModelsForm = ({ onSubmit, isLoading }) => {
  const [entities, setEntities] = useState([{ name: '', purpose: '' }]);

  const handleEntityChange = (index, field, value) => {
    const newEntities = [...entities];
    newEntities[index][field] = value;
    setEntities(newEntities);
  };

  const handleAddEntity = () => {
    if (entities.length < 3) {
      setEntities([...entities, { name: '', purpose: '' }]);
    }
  };

  const handleRemoveEntity = (index) => {
    if (entities.length > 1) {
      const newEntities = entities.filter((_, i) => i !== index);
      setEntities(newEntities);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter out empty entities before submitting
    const validEntities = entities.filter(e => e.name.trim() || e.purpose.trim());
    onSubmit({ entities: validEntities });
  };

  return (
    <div className="typeform-content">
      <div className="typeform-card">
        <form onSubmit={handleSubmit}>
          <div className="typeform-question">
            <h2 className="question-title">What are the 1–3 key data entities?</h2>
            <p className="question-description">
              Think about the core pieces of information you need to track (e.g., Users, Orders, Products). What is the main purpose for tracking each one?
            </p>
            
            <div className="custom-entities-container">
              {entities.map((entity, index) => (
                <div key={index} className="custom-entity-item">
                  <input
                    type="text"
                    className="typeform-input custom-entity-name-input"
                    placeholder={`Entity ${index + 1} Name (e.g., Users)`}
                    value={entity.name}
                    onChange={(e) => handleEntityChange(index, 'name', e.target.value)}
                    disabled={isLoading}
                    maxLength={50} // Limit length
                  />
                  <textarea
                    className="typeform-textarea custom-entity-purpose-input"
                    placeholder={`Purpose for tracking ${entity.name || `Entity ${index + 1}`} (e.g., Authenticate, personalize experience)`}
                    value={entity.purpose}
                    onChange={(e) => handleEntityChange(index, 'purpose', e.target.value)}
                    disabled={isLoading}
                    rows={3}
                  />
                  {entities.length > 1 && (
                    <button 
                      type="button" 
                      className="typeform-remove-button"
                      onClick={() => handleRemoveEntity(index)}
                      disabled={isLoading}
                      title="Remove Entity"
                    >
                      &times; {/* Use a multiplication sign for remove icon */}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {entities.length < 3 && (
              <button 
                type="button" 
                className="typeform-add-button"
                onClick={handleAddEntity}
                disabled={isLoading}
              >
                + Add Another Entity (up to 3)
              </button>
            )}
          </div>

          <div className="typeform-actions">
            <button 
              type="submit"
              className={`typeform-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || entities.every(e => !e.name.trim() && !e.purpose.trim())} // Disable if all are empty
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

export default DataModelsForm; 