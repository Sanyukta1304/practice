
function Car() {
  return (
    <>
      <p>hello from car.</p>
    </>

  );
} 




function FirstComp() {
  return (
    <div>
      <h1>My First Component</h1>
      <Car />
      <p>This is a simple React component.</p>
    </div>
  );
}



export default FirstComp;



/*
===========================
📄NOTES
===========================

👉 This is a React functional component
👉 It receives data using props
👉 It shows a heading
👉 It conditionally shows "Car" based on age

--------------------------------
✅ ACTUAL CODE (REMOVE COMMENTS TO USE)
--------------------------------

function FirstComp(props) {
  console.log(props.name);

  return (
    <>
      <h1>Hello from First component</h1>
      {props.age > 18 && <p>Car</p>}
    </>
  );
}

export default FirstComp;

--------------------------------
🧠 EXPLANATION
--------------------------------

1. function FirstComp(props)
   - This is a component
   - props = data coming from parent

2. console.log(props.name)
   - Prints name in browser console

3. return (...)
   - JSX (UI of component)

4. <> </>
   - Fragment (used to wrap elements)

5. <h1>
   - Always visible heading

6. {props.age > 18 && <p>Car</p>}
   - Conditional rendering
   - If age > 18 → show "Car"
   - Else → show nothing

7. export default FirstComp
   - Makes this component usable in other files
*/


import { useState } from "react";

fun