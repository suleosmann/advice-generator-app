import React, { useEffect, useState } from 'react';
import AdviceCard from './components/AdviceCard';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState(1); // Default advice number

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(resp => resp.json())
      .then(data => {
        setAdvice(data.slip.advice);
        // Extracting advice number from the fetched data
        setAdviceNumber(data.slip_id); // Adjust this based on your API response structure
      })
      .catch(error => console.error(error));
  }, []);

  return <AdviceCard initialAdvice={advice} adviceNumber={adviceNumber} />;
}

export default App;
