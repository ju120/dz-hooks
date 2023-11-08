import React, { useState } from "react";

function Zbroji() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleNum1Change = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setNum1(newValue);
    }
  };

  const handleNum2Change = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setNum2(newValue);
    }
  };

  const izracunajZbroj = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <label>
        Unesite prvi broj:
        <input id="input-broj" type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Unesite drugi broj:
        <input id="input-broj" type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <button onClick={izracunajZbroj}>Zbroji</button>
      <p>Zbroj: {sum}</p>
    </div>
  );
}

export default Zbroji;
