import React, { useEffect, useState } from 'react';

const AdviceCard = () => {
  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState(1);

  useEffect(() => {
    fetchAdvice(); // Fetch initial advice when component mounts
  }, []);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(resp => resp.json())
      .then(data => {
        setAdvice(data.slip.advice);
        setAdviceNumber(data.slip_id);
      })
      .catch(error => console.error(error));
  };

  const handleDiceClick = () => {
    fetchAdvice(); // Fetch new advice on dice click
  };

  return (
    <div className="advice-card">
      <h2 className="advice-title">ADVICE #{adviceNumber}</h2>
      {advice && <p className="advice-text">{advice}</p>}
      <img
        src="/pattern-divider-desktop.svg"
        alt="Pattern Divider"
        className="divider"
      />
      <div className="dice-container">
        <img
          className="dice-img"
          src="/icon-dice.svg"
          alt="Dice Icon"
          onClick={handleDiceClick}
        />
      </div>
    </div>
  );
};

export default AdviceCard;
