import { useState } from 'react';
import { OtpInput } from './components/OtpInput';
import './App.scss';

function App() {
  const [totalValue, setTotalValue] = useState('')

  return (
    <section className="container">
      <OtpInput label="Enter code:" inputCount={4} inputLength={1} separator="-" isNumeric onSubmit={(value: string) => setTotalValue(value)} />
      <span className="result">{totalValue}</span>
    </section>
  );
}

export default App;
