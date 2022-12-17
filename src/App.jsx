import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Rolls from "./components/Rolls";
import Title from "./components/Title";
import RollButton from "./components/RollButton";

function App() {
  //Generate New Die Function
  const GenerateNewDie = () => {
    const value = Math.ceil(Math.random() * 6);
    return {
      value: value,
      img: `../public/dice${value}.svg`,
      isHeld: false,
      id: nanoid(),
    };
  };

  //Randomise function when first load
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(GenerateNewDie());
    }
    return newDice;
  };

  //Dice array
  const [dice, setDice] = React.useState(allNewDice());

  //Win condition state
  const [tenzies, setTenzies] = React.useState(false);

  //Win conditoin Effect
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allEqual = dice.every((die) => die.value === firstValue);
    if (allHeld && allEqual) {
      setTenzies(true);
    }
  }, [dice]);

  //Restart Game func
  const restartGame = () => {
    setTenzies(false);
    setDice(allNewDice());
    setRolls(0);
  };

  //Rollcounting func
  const [rolls, setRolls] = React.useState(0);
  const rollCount = () => {
    setRolls((prev) => prev + 1);
  };

  //Reroll function
  const reRoll = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : GenerateNewDie();
      })
    );
    rollCount();
  };

  //Hold Function
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  //Mapping Dice
  const diceMap = dice.map((die) => (
    <Die
      isHeld={die.isHeld}
      key={die.id}
      id={die.id}
      value={die.value}
      img={die.img}
      holdDice={holdDice}
    />
  ));

  return (
    <div className="App">
      {tenzies && <Confetti className="confetti" />}
      <Title />
      <Rolls tenzies={tenzies} rolls={rolls} />
      <div className="diceContainer">{diceMap}</div>
      <RollButton tenzies={tenzies} reRoll={reRoll} restartGame={restartGame} />
    </div>
  );
}

export default App;
