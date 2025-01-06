import React, { FC } from 'react';

interface StepProps {
  data: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
}

const Step1: FC<StepProps> = ({ data, onChange }) => (
  <div>
    <h2>Step 1</h2>
    <input
      type="text"
      name="firstName"
      value={data.firstName || ''}
      onChange={(e) => onChange({ firstName: e.target.value })}
    />
  </div>
);

export default Step1;
