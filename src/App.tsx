import React from 'react';
import { OtpInput } from './components/OtpInput';
import './App.scss';

function App() {
  return (
    <div className="container">
      <OtpInput inputCount={4} inputLength={1} separator="-" />
    </div>
  );
}

export default App;
