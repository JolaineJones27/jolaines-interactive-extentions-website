import React from "react";
import Button from "./Button"; // Step 6 of pseudocoding
import Toggle from "./Toggle.jsx";

// Step 10 & 11 of psuedocoding - pulling in the props from Home and creating Card
function Card({
  id,
  logo,
  name,
  description,
  isActive,
  removeItem,
  updateIsActive,
}) {
  return (
    <div className="card">
      <img src={logo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-changes">
      {/* // renders button to remove card if they want to */}
      <Button onClick={() => removeItem(id)}style={{ color: 'white' }}
        >Remove</Button>
      <div className="switch-container">
      {/* // renders switch to active or non active - changed to newState so it doesn't use the old one (isActive)*/}
      <Toggle
        isActive={isActive}
        onChange={(newState) => updateIsActive(id, newState)}
      />
    </div>
    </div>
    </div>
  );
}

export default Card;
