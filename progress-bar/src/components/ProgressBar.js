import React, { useState } from "react";

const steps = [
  {
    label: "Address",
    step: 1,
  },
  {
    label: "Shipping",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
  {
    label: "Summary",
    step: 4,
  },
];

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  // calculating the width
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div className="main-container">
      <div className="step-container" style={{ "--progress-width": width }}>
        {steps.map(({ step, label }) => (
          <div className="step-wrapper" key={step}>
            <div
              className="step-style"
              step={activeStep >= step ? "completed" : "incomplete"}
            >
              {activeStep > step ? (
                <div className="check-mark">L</div>
              ) : (
                <div className="step-count">{step}</div>
              )}
            </div>
            <div className="steps-label-container">
              <div className="step-label">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button
          className="button-style"
          onClick={prevStep}
          disabled={activeStep === 1}
        >
          Previous
        </button>
        <button
          className="button-style"
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
