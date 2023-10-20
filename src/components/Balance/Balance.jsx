import { useState } from "react";
import Input from "../InputMoney/Input";
import "./Balance.scss";

const Balance = () => {
  const [inputMoney, setMoney] = useState(0);
  const [balance, setBalance] = useState(0);

  const calc = (subtract) => {
    let betrag = subtract ? balance - inputMoney : balance + Number(inputMoney);

    if (subtract) {
      Number(inputMoney) > balance
        ? alert("Du kannst so viel nicht abheben")
        : setBalance(betrag);
    } else {
      setBalance(betrag);
    }
  };
  return (
    <div className="bankWrapper">
      <h1>Banana Bank</h1>
      <div className="kontoWrapper">
        <h2>Mein Girokonto</h2>
        <section>
          <h2>{balance}€</h2>
          <p>Verfügbarer Betrag</p>
        </section>
        <Input setter={setMoney} />
      </div>
      <div className="buttons">
        <button onClick={() => calc(false)}>Einzahlen</button>
        <button onClick={() => calc(true)}>Auszahlen</button>
      </div>
    </div>
  );
};

export default Balance;
