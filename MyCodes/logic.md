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


1️⃣Button click par count increase karo
2️⃣ Input me name likho, niche live show karo
3️⃣ Button click par argument pass karo
4️⃣ Two inputs (email + password) handle karo


import React, { useState } from "react";

const App = () => {
  // 1️⃣ Button click count
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  // 2️⃣ Input name live display
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 3️⃣ Button click with argument
  const greet = (person) => {
    alert(`Hello, ${person}!`);
  };

  // 4️⃣ Two inputs: email + password
  const [form, setForm] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    const { name, value } = e.target; // name="email" or "password"
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Page reload nahi hoga
    alert(`Email: ${form.email}, Password: ${form.password}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>1️⃣ Button Click Count</h2>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increase Count</button>

      <hr />

      <h2>2️⃣ Live Name Display</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <p>Your name: {name}</p>

      <hr />

      <h2>3️⃣ Button Click with Argument</h2>
      <button onClick={() => greet("Kajal")}>Greet Kajal</button>

      <hr />

      <h2>4️⃣ Form: Email + Password</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleFormChange}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleFormChange}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

=============================================


```jsx
import React, { useState } from "react";

const AdminPanel = () => {
  return <h4>🔐 Admin Panel Access</h4>;
};

const App = () => {
  // 1️⃣ Login / Logout
  const [isLogin, setIsLogin] = useState(false);

  // 2️⃣ Show / Hide paragraph
  const [showPara, setShowPara] = useState(false);

  // 3️⃣ Age check
  const age = 20;

  // 4️⃣ Admin user
  const isAdmin = true;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* 1️⃣ Login / Logout */}
      <h2>1️⃣ Login Status</h2>
      <h3>{isLogin ? "Logged In" : "Logged Out"}</h3>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>

      <hr />

      {/* 2️⃣ Show / Hide Paragraph */}
      <h2>2️⃣ Show / Hide Paragraph</h2>
      <button onClick={() => setShowPara(!showPara)}>
        {showPara ? "Hide" : "Show"} Paragraph
      </button>
      {showPara && <p>👋 Ye paragraph toggle ho raha hai.</p>}

      <hr />

      {/* 3️⃣ Age Condition */}
      <h2>3️⃣ Age Check</h2>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>

      <hr />

      {/* 4️⃣ Admin Component */}
      <h2>4️⃣ Admin Access</h2>
      {isAdmin && <AdminPanel />}
    </div>
  );
};

export default App;
```

---

## 🧠 Real-World Logic (One-Line Each)

### 1️⃣ Login / Logout

👉 **User login hai?** → text + button change

### 2️⃣ Paragraph Show / Hide

👉 **Button dabao** → content dikhao ya chhupao

### 3️⃣ Age Check

👉 **Rule based UI** (Age ≥ 18)

### 4️⃣ Admin Component

👉 **Role based UI** (Normal user ≠ Admin)

---

## 🧩 Kab kaunsa syntax use kare?

| Situation                    | Use                      |
| ---------------------------- | ------------------------ |
| True / False ke beech choice | `condition ? A : B`      |
| Sirf true par dikhana        | `condition && Component` |
| Complex logic                | `if / else`              |

---

1️⃣ Page load par console message print karo
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Page loaded");
  }, []);

  return <h2>Page Load Example</h2>;
}

export default App;

2️⃣ Button click par count change hone par effect run karo
<!-- 
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App; -->

3️⃣ setInterval ke sath cleanup lagao
<!-- 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Interval cleared");
    };
  }, []);

  return <h2>Interval with Cleanup</h2>;
}

export default App; -->

4️⃣ Fake API call simulate karo (setTimeout)
<!-- 
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const fakeApi = setTimeout(() => {
      setData("Data loaded successfully");
    }, 2000);

    return () => {
      clearTimeout(fakeApi);
    };
  }, []);

  return <h2>{data}</h2>;
}

export default App; -->


| Question         | useEffect Pattern                |
| ---------------- | -------------------------------- |
| Page load        | `useEffect(() => {}, [])`        |
| State change     | `useEffect(() => {}, [state])`   |
| Interval / timer | Cleanup required                 |
| API call         | `useEffect + setTimeout / fetch` |

----------------------------------------------------------------------------------

