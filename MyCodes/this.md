








<!-- 8️⃣ Component Composition (BIG WORD, SIMPLE LOGIC) -->
Component composition means using one component inside another component.
👉 Ek component ke andar doosra component use karna

<!-- Real-world Example -->
App
Header
Content
Footer
<!-- 
function Header() {
  return <h1>Header</h1>;
}

function Footer() {
  return <h1>Footer</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
} -->

Logic:
App parent
Header, Footer child
Yehi composition hai

<!-- 9️⃣ Export / Import Components (VERY IMPORTANT) -->
Export and import are used to share components between different files.
Hindi:-
Export aur import ka use components ko ek file se doosri file me use karne ke liye hota hai.
<!-- 
Export
function Header() {
  return <h1>Header</h1>;
}

export default Header;

🔹 Import
import Header from "./Header";

function App() {
  return <Header />;
} -->

Logic:
export → bahar bhejna
import → andar lana
-----------------------------------------------------------------------------------------------
1️⃣ Ek Student component banao (name, marks props).
2️⃣ Ek Button component jisme click par parent function call ho
4️⃣ 3 students ko same component se render karo
-------------------------------------------------------------------------------------
<!-- 6️⃣ State (MOST IMPORTANT 🔥)
--------------------------------------
<!-- 2️⃣ useState Hook -->
useState is a React hook that allows functional components to use state.

<!-- const [state, setState] = useState(initialValue); -->

Example:-
<!-- 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
 -->
🧠 Logic:
count → current state
setCount → update karne ka function
0 → initial value

<!-- 3️⃣ Updating State (VERY IMPORTANT ❗) -->

setCount(count + 1);

<!-- 
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
} -->

4️⃣ State vs Props (INTERVIEW FAVORITE 🔥)

5️⃣ Multiple States (REAL WORLD 💡)
<!-- 
function UserProfile() {
  const [name, setName] = useState("Kajal");
  const [age, setAge] = useState(22);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
} -->

1️⃣Counter app banao (Increment / Decrement)
2️⃣ Button click par text change karo
3️⃣ Name + Age ke liye 2 states use karo
4️⃣ Ek child component me props + state dono use karo


import React from 'react'
import { useState } from 'react'

const App = () => {
      // 1️⃣ State to store count
    const[count, setCount] = useState(0)

      // 2️⃣ Functions to increment & decrement
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
export default App
<!-- useState kya return karta hai? -->
👉 Array → [state, setState]
<!-- Multiple states kaise manage karte? -->
👉 Multiple useState hooks
----------------------------------------------------------------------------------
<!-- 7️⃣ Events in React -->
Event Handling is the process of responding to user actions (like clicks, typing, mouse movements) or browser events (like page load).

<!-- 2️⃣ Types of Events -->
| Event Type    | Example      | What it does                                |
| ------------- | ------------ | ------------------------------------------- |
| `onClick`     | Button click | Triggered when a button is clicked          |
| `onChange`    | Input field  | Triggered when input value changes          |
| `onSubmit`    | Form         | Triggered when form is submitted            |
| `onMouseOver` | Hover        | Triggered when mouse hovers over an element |
| `onKeyDown`   | Keyboard     | Triggered when a key is pressed             |

<!-- 1️⃣ Mouse Events -->
onClick → Triggered when an element is clicked
onDoubleClick → Triggered on double click
onMouseEnter → When mouse enters an element
onMouseLeave → When mouse leaves an element

onClick → element click होने पर
onDoubleClick → element double click होने पर
onMouseEnter → mouse element में enter करे
onMouseLeave → mouse element से बाहर जाए

<!-- 2️⃣ Keyboard Events -->
onKeyDown → When a key is pressed down
onKeyUp → When a key is released

onKeyDown → key दबते ही trigger
onKeyUp → key छोड़ते ही trigger

<!-- 3️⃣ Form / Input Events -->
onChange → When input or textarea value changes
onSubmit → When a form is submitted
onFocus → When an input gains focus
onBlur → When an input loses focus

onChange → input या textarea का value change होने पर
onSubmit → form submit होने पर
onFocus → input पर focus आने पर
onBlur → input का focus हटने पर

<!-- 4️⃣ Other Useful Events -->
onLoad → When image/media loads successfully
onError → When image/media fails to load
onScroll → When an element is scrolled

onLoad → image/media load होने पर
onError → image/media load fail होने पर
onScroll → element scroll होने पर

<!-- onClick, onChange, onSubmit, onKeyDown, onFocus, onBlur -->

<!-- 3️⃣ Basic Example: Button Click -->
import React from "react";
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

export default App;

<!-- Arrow function -->
const handleClick = () => {
  alert("Button Clicked!");
};

<!-- Normal function -->
function handleClick() {
  alert("Button Clicked!");
}

ye dono use kr sakte hai 
---------------------------------------------------------------------------------
<!-- * State define karo → jo value app track karegi -->

const [name, setName] = useState("");

<!-- * Function banao → jo event par kaam karega -->

const handleClick = () => { alert("Button Clicked!"); }
const handleChange = (e) => { setName(e.target.value); }

<!-- * Event lagao JSX me → onClick, onChange, onMouseOver -->

<button onClick={handleClick}>Click Me</button>
<input onChange={handleChange} value={name}/>

2️⃣ onClick Event (MOST USED 🔥)
<button onClick={handleClick}>
3️⃣ onChange Event (VERY IMPORTANT ❗)
<!-- onChange kyu use hota hai? -->
👉 Input value track karne ke liye
<!-- ❓ Q21: e.target.value kya hota hai? -->
👉 Input ka current value
----------------------------------------
--------------------------------------
<!-- 1️⃣ Rendering Lists using map() -->
React me lists ko render karne ke liye JavaScript ke map() method ka use kiya jata hai.

<!-- Real-World Logic -->
Socho tumhare paas data list hai:
Students
Products
Users
Todos
👉 Har item ka same design, sirf data alag
<!-- 
const fruits = ["Apple", "Banana", "Mango"];

function App() {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
} -->

Logic:
map() loop jaisa
Har fruit ke liye <li> bana

<!-- 2️⃣ What are Keys? -->
Keys are special attributes used to uniquely identify list items in React.

<!-- Real-World Example -->
Socho class me roll number:
Naam same ho sakta hai
Roll number unique hota hai
👉 Key = Roll Number

{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}

<!-- 4️⃣ Best Key Practices (INTERVIEW GOLD 🥇) -->
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

{users.map(user => (
  <p key={user.id}>{user.name}</p>
))}

<!-- 5️⃣ Dynamic Lists (REAL WORLD ⭐) -->👉 
Dynamic Lists wo lists hoti hain jo user action ya data change hone par update hoti rehti hain (add, delete, update).

<!-- Real-world examples: -->
Todo list (task add / remove)
Shopping cart (item add / remove)
Student list (new student add)
------------------------------------------------------------------------------------------------------------------------------
<!-- 🟢 PHASE 4: Side Effects & Data -->
<!-- 1️⃣ What are Side Effects? -->
Side effects are operations that affect something outside the component, such as API calls, timers, subscriptions, DOM updates, or localStorage access.

<!-- Examples -->
Data fetch karna
setInterval / setTimeout
Event listeners add/remove

<!-- useEffect Syntax -->
useEffect is a React hook used to perform side effects in functional components.

useEffect(() => {
  // side effect code
}, []);
<!-- 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component rendered");
  });

  return <h1>Hello</h1>;
} -->


<!-- 3️⃣ Dependency Array [] -->
The dependency array controls when useEffect runs.
Hindi:-
Dependency array ye decide karta hai ki useEffect kab run hoga.

<!-- Case 2: Empty dependency array [] -->
useEffect(() => {
  console.log("Runs only once");
}, []);

👉 Sirf first render (mount) par

<!-- 🔹 Case 3: With dependencies -->
useEffect(() => {
  console.log("Count changed");
}, [count]);

👉 Jab count change ho tab

<!-- 4️⃣ Cleanup Function (VERY IMPORTANT ❗) -->
“Cleanup function is used to clean side effects like intervals, timers, or event listeners to prevent memory leaks.”

Example: Fan / Light
Fan ON kiya → chal raha hai
Room chhodte time → Fan OFF ❌
👉 OFF karna = Cleanup
<!-- 
useEffect(() => {
  // Side effect start

  return () => {
    // Cleanup code
  };
}, []); -->

🧩 Example (Timer cleanup)
<!-- 
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []); -->
Logic:
Component start → timer start
Component remove → timer stop
Memory leak avoid ✔️
<!-- 👉 Cleanup function return ke andar hota hai -->

<!-- 5️⃣ Component Lifecycle (Basic) -->
Component lifecycle refers to the phases a component goes through: mount, update, and unmount.

🔁 Lifecycle Phases with useEffect
| Phase   | useEffect                      |
| ------- | ------------------------------ |
| Mount   | `useEffect(() => {}, [])`      |
| Update  | `useEffect(() => {}, [state])` |
| Unmount | Cleanup function               |

<!-- 
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
 -->

useEffect kab run hota hai?
👉 Render ke baad

<!-- Q: Empty dependency array ka matlab? -->
👉 Run once (mount)

<!-- Q: Cleanup function kyu chahiye? -->
👉 Memory leaks avoid karne ke liye

<!-- Q: API call kahan karte hain? -->
👉 useEffect ke andar

<!-- Side effects kya hote hain? -->
👉 API calls, timers, subscriptions

<!-- ❓ Q30: useEffect kab run hota hai? -->
👉 Render ke baad

<!-- ❓ Q31: Dependency array kya karta hai? -->
👉 Effect kab run hoga decide karta hai

<!-- ❓ Logical Q: [] ka matlab? -->
👉 Sirf first render (mount)

<!-- API call kahan likhte hain? -->
👉 useEffect ke andar
---------------------------------------------------------------------------------------------------------------------

