import { useState, useEffect } from "react";

export const useCalculateEffect = (someNumber) => {
  console.log("invoke useCalculateEffect");

  const [result, setResult] = useState(null);

  const expensiveCalculation = (someNumber) => {
    return someNumber + 1;
  };

  useEffect(() => {
    setResult(expensiveCalculation(someNumber));
  }, [someNumber]);

  return result;
};
