import React, { useEffect, useState } from 'react';

const AdviceCard = ({ initialAdvice, adviceNumber }) => {
  const [nextAdvice, setNextAdvice] = useState("");
  const [nextAdviceNumber, setNextAdviceNumber] = useState(adviceNumber);

  useEffect(() => {
    setNextAdvice(initialAdvice);
  }, [initialAdvice]);

  const handleDiceClick = () => {
    // Fetch the next advice or quote when the dice is clicked
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((data) => {
        setNextAdvice(data.slip.advice);
        setNextAdviceNumber(data.slip.id); // Update the next advice number
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="advice-card">
      <h2 className="advice-title">ADVICE #{nextAdviceNumber}</h2>
      {nextAdvice && <p className="advice-text">{nextAdvice}</p>}
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
