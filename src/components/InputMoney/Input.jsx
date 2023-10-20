const Input = ({ setter }) => {
  const inputMoney = (m) => {
    setter((money) => (money = m));
  };

  return (
    <input
      onChange={(e) => inputMoney(e.target.value)}
      type="number"
      placeholder="Betrag in €"
    />
  );
};

export default Input;
