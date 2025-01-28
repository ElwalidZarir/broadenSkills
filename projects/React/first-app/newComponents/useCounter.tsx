import { useContext } from "react";
import { CounterContext } from "./counterContext";

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("no context");
  }

  return context;
};

export default useCounter;
