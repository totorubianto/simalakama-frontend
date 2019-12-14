import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Navbar } from './components/global/layout/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <PrimaryButton>Toto</PrimaryButton>
    </div>
  );
};

export default App;
