3️⃣ Basic Example: Button Click
<!-- import React from "react";

const App = () => {
  // Function that runs on click
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App; -->

4️⃣ Event with Parameters:- 
<!-- 
import React from "react";

const App = () => {
  const showMessage = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <button onClick={() => showMessage("Kajal")}>Say Hello</button>
    </div>
  );
};

export default App; -->


5️⃣ Handling Input Change:- 
<!-- 
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default App; -->
