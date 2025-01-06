import React from 'react';
import MultiStepForm from './Components/MultiStepForm/MultiStepForm';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';

const App: React.FC = () => {
  const [data, setData] = React.useState({}); // Initialize data state

  const handleStepChange = (newData: any) => {
    setData(newData);
  };

  return (
    <MultiStepForm steps={[
      <Step1 key="step1" data={data} onChange={handleStepChange} />,
      <Step2 key="step2" data={data} onChange={handleStepChange} />
    ]} />
  );
};

export default App;