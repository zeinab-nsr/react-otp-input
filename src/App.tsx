import React from 'react';
import { OtpInput } from './components/OtpInput';
import './App.scss';

function App() {
  return (
    <div className="container">
      <OtpInput label="Enter code:" inputCount={4} inputLength={1} separator="-" isNumeric />
    </div>
  );
}

export default App;
