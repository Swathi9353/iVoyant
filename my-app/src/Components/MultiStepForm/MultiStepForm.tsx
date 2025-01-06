import React, { useState, ReactElement, FC } from 'react';

interface StepProps {
  data: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
}

interface MultiStepFormProps {
  steps: ReactElement<StepProps>[];
}

const MultiStepForm: FC<MultiStepFormProps> = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleChange = (data: Record<string, any>) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const CurrentStep = steps[currentStepIndex];

  return (
    <div>
      {React.cloneElement(CurrentStep, { data: formData, onChange: handleChange })}
      <div>
        {currentStepIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentStepIndex < steps.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
