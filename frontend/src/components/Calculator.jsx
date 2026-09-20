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

