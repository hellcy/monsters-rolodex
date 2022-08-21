import { useMemo } from "react";

export const useCalculateMemo = (someNumber) => {
  console.log("invoke useCalculateMemo");

  const expensiveCalculation = (someNumber) => {
    return someNumber + 1;
  };

  return useMemo(() => expensiveCalculation(someNumber), [someNumber]);
};
