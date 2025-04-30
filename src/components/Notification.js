import React, { useEffect, useState } from 'react';

const Notification = ({ message, type = 'default', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!message) return;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message || !isVisible) return null;

  return (
    <div className={`toast toast-${type}`}>
      {message}
    </div>
  );
};

export default Notification; 