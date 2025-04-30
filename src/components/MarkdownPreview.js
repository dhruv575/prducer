import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ markdown, isLoading }) => {
  return (
    <div className="markdown-preview">
      <h2 className="preview-title">PRD Preview</h2>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loading">Generating content...</div>
        </div>
      ) : (
        <div className="markdown-content">
          <ReactMarkdown>{markdown || '# Your PRD will appear here'}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default MarkdownPreview; 