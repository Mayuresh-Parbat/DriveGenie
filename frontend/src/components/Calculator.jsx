import { useState } from "react";

function Calculator() {
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [down, setDown] = useState("");

  const [monthly, setMonthly] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);

  const calculateEMI = () => {
    const principal = Number(price) - Number(down || 0);
    const rate = Number(interest) / 12 / 100;
    const numberOfMonths = Number(months);

    if (principal <= 0 || rate <= 0 || numberOfMonths <= 0) {
      alert("Enter valid positive values");
      return;
    }

    if (Number(down) > Number(price)) {
      alert("Down payment cannot exceed price");
      return;
    }

    const emi =
      (principal * rate * Math.pow(1 + rate, numberOfMonths)) /
      (Math.pow(1 + rate, numberOfMonths) - 1);

    const totalPayment = emi * numberOfMonths;
    const interestPayment = totalPayment - principal;

    setMonthly(Math.round(emi));
    setTotalLoan(Math.round(totalPayment));
    setTotalInterest(Math.round(interestPayment));
  };

  return (
    <section className="calculator">
      <div className="calc-left">
        <h2>Financing Calculator</h2>

        <p className="subtitle">
          Estimate your monthly auto loan payments with this calculator.
        </p>

        <div className="calc-grid">
          <div className="input-group">
            <label>Car Price (₹)</label>

            <input
              type="number"
              min="0"
              value={price}
              onChange={(event) => setPrice(Math.max(0, event.target.value))}
              placeholder="e.g. 500000"
            />
          </div>

          <div className="input-group">
            <label>Interest Rate (%)</label>

            <input
              type="number"
              min="0"
              step="0.1"
              value={interest}
              onChange={(event) =>
                setInterest(Math.max(0, event.target.value))
              }
              placeholder="e.g. 8.5"
            />
          </div>

          <div className="input-group">
            <label>Loan Term</label>

            <select
              value={months}
              onChange={(event) => setMonths(event.target.value)}
            >
              <option value="">Select duration</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
              <option value="72">72 months</option>
              <option value="84">84 months</option>
            </select>
          </div>

          <div className="input-group">
            <label>Down Payment (₹)</label>

            <input
              type="number"
              min="0"
              value={down}
              onChange={(event) => setDown(Math.max(0, event.target.value))}
              placeholder="optional"
            />
          </div>
        </div>

        <button className="calc-btn" onClick={calculateEMI}>
          Calculate
        </button>

        <div className="results">
          <div>
            <p>Monthly Payment</p>
            <h3>₹{monthly}</h3>
          </div>

          <div>
            <p>Total Interest</p>
            <h3>₹{totalInterest}</h3>
          </div>

          <div>
            <p>Total Loan</p>
            <h3>₹{totalLoan}</h3>
          </div>
        </div>
      </div>

      <div className="calc-right">
        <img
          src="https://www.pngarts.com/files/12/Aston-Martin-Silver-Car-Transparent-Image.png"
          alt="Silver Aston Martin"
        />
      </div>
    </section>
  );
}

export default Calculator;