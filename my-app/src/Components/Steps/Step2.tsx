import React, { FC } from 'react';

interface StepProps {
  data: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
}

const Step2: FC<StepProps> = ({ data, onChange }) => (
  <div>
    <h2>Step 2</h2>
    <input
      type="text"
      name="lastName"
      value={data.lastName || ''}
      onChange={(e) => onChange({ lastName: e.target.value })}
    />
  </div>
);

export default Step2;
