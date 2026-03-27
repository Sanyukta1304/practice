import "./App.css"; // importing CSS file for styling
import { useState } from "react"; // importing useState hook to manage state

// simple function to multiply two numbers
function mul(a, b) {
  return a * b;
}

// React functional component
function My_first_component() {
  const PI = 3.14; // constant value
  const [ans, setAns] = useState(0); 
  // ans = current value
  // setAns = function to update ans
  // initial value is 0

  return (
    <>
      {/* Heading */}
      <h1 className="hero">This is my first component.</h1>

      {/* Displaying PI value */}
      <p>This is a PI value {PI}</p>

      {/* Calling function inside JSX */}
      <p>This is mul value {mul(5, 6)}</p>

      {/* Button click updates state */}
      <button onClick={() => setAns(mul(6, 5))}>
        {ans} {/* displaying updated value */}
      </button>
    </>
  );
}

// exporting component so it can be used in other files
export default My_first_component;