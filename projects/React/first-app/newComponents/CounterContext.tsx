import { createContext } from "react";

interface ICounterContext {
  counter: number;
  increase: () => void;
}

export const CounterContext = createContext<ICounterContext | null>(
  null
);
