import React from "react";

const StyledCard = () => {
  const divStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    color: "darkblue",
  };

  return (
    <div style={divStyle}>
      <h1>Title</h1>
      <p>description</p>
    </div>
  );
};

export default StyledCard;
