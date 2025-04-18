import React from "react";

// functional component
function Button({ children, onClick }) {
  // onClick prop makes the button interactive
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
