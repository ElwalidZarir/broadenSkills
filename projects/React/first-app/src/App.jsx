import { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import StyledCard from "../components/StyledCard";
import Button from "../components/Button";
import LandingPage from "../pages/LandingPage";
import Card from "../newComponents/Card";
import Application from "../newComponents/Application";
import { CounterProvider } from "../newComponents/counterProvider";
import Calc from "../newComponents/Calc";
import { Provider } from "react-redux";
import { store } from "../newComponents/store/store.ts";
import Posts from "../newComponents/Posts";

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
