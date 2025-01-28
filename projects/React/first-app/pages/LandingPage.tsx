import React from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <header className="landingheader">
        <div className="links">
          <div className="logo">
            <h1>SMS</h1>
          </div>
          <div className="links__pages">
            <nav>
              <ul>
                <li>FEATURES</li>
                <li>RESOURCES</li>
                <li>ENTERPRISE</li>
                <li>PRICING</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="auth__btns">
          <button id="signin">SIGNIN</button>
          <button id="getstarted">GET STARTED</button>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
