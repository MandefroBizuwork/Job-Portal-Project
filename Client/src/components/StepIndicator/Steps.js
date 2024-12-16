import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ steps = ['Step 1', 'Step 2', 'Step 3'], currentStep = 1 }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
          >
            <div className="circle">
              {index < currentStep ? '✓' : index + 1}
            </div>
            <span className="label">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`line ${index < currentStep ? 'completed-line' : ''}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
