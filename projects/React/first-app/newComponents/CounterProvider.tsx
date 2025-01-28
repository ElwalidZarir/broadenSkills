import React, { useState } from "react";
import { CounterContext } from "./counterContext";

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increase }}>
      {children}
    </CounterContext.Provider>
  );
};
