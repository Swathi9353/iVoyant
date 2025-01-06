import React from 'react';
import MultiStepForm from './Components/MultiStepForm/MultiStepForm';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';

const App: React.FC = () => {
  return (
    <MultiStepForm steps={[<Step1 />, <Step2 />]} />
  );
};

export default App;
