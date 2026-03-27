import './App.css'
import FirstComp from './FirstComp';

function App() {
  return (
    <>
      <h1>Welcome to My React App</h1>
      <FirstComp />
    </>
  )
}

export default App





/*
===========================
📄 NOTES
===========================

👉 This is the main component
👉 We import and use FirstComp here

--------------------------------
✅ ACTUAL CODE (REMOVE COMMENTS TO USE)
--------------------------------

import FirstComp from "./FirstComp";

function App() {
  return (
    <>
      <FirstComp name="John" age={20} />
    </>
  );
}

export default App;

--------------------------------
🧠 EXPLANATION
--------------------------------

1. import FirstComp
   - Importing component from another file

2. <FirstComp name="John" age={20} />
   - Passing props:
     name = "John"
     age = 20

3. These props go into FirstComp(props)

4. Based on age:
   - age > 18 → "Car" is shown
   - age <= 18 → nothing is shown
*/