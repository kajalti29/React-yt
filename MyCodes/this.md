<!-- 1️⃣ What is React? -->
React is a JavaScript library used to build fast and interactive user interfaces, especially single-page applications. It is component-based and maintained by Meta (Facebook).
It is Handles logic, state, props, JSX.
<!-- 
Example:-
function Hello(){
    return <h1>Hello React</h1>;
} -->

Logic:
Hello = component
HTML jaisa dikhta hai (JSX)
UI ka ek part return karta hai

<!-- 2️⃣ Why React is Used? -->
React is used because it is fast, reusable, easy to manage, and provides better performance using Virtual DOM.

<!-- Why companies prefer React over plain JS? -->
Companies prefer React because React provides a component-based architecture and efficient UI updates using Virtual DOM, which makes applications faster, scalable, and easier to maintain.

<!-- 3️⃣ React Features (VERY IMPORTANT) -->
React provides component-based architecture, Virtual DOM, JSX, one-way data binding, and reusability.

| Feature      | Logic            |
| Components   | UI ko chhote parts me tod dete hain |
| JSX          | JavaScript + HTML mix               |
| Reusability  | Ek component baar-baar use          |
| Virtual DOM  | Fast UI update                      |
| One-way data | Data control easy                   |
<!-- 
const name = "Kajal";
const element = <h1>Hello {name}</h1>; -->

<!-- 4️⃣ React vs JavaScript (Classic Interview Question) -->
JavaScript is a programming language, while React is a library built on JavaScript to create user interfaces.

<!-- 5️⃣ What is a SPA – Single Page Application -->
A Single Page Application loads only one HTML page and updates content dynamically without reloading the page.

Hindi:-
SPA me sirf ek hi HTML page load hota hai aur content dynamically update hota hai bina page reload ke.

<!-- Real-World Example -->
Gmail
Facebook
Instagram
👉 Click karo → page reload ❌
👉 Content change ✔️

📝 Task
<!-- 👉 Name any 2 SPA websites you use daily. -->
I use Gmail and YouTube daily.

<!-- 6️⃣ Virtual DOM (MOST IMPORTANT 🔥) -->
Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it with the previous version, and updates only the changed part in the real DOM.

Hindi:-
Virtual DOM real DOM ka lightweight copy hota hai. React pehle Virtual DOM update karta hai, phir sirf jo part change hua hai wahi real DOM me update karta hai.

<!-- Real Life Example -->

📘 Notebook analogy:
Tum pura page dubara nahi likhte
Sirf galat line erase karke sahi likhte ho
👉 Same kaam Virtual DOM karta hai


<!-- 🔁 Flow -->
State change
Virtual DOM update
Compare old vs new (diffing) 
<!--diffing mtlb old or new virtual DOM ko compare karna -->
Update only changed UI.

<!-- 🧩 Code Example -->

const [count, setCount] = React.useState(0);

<button onClick={() => setCount(count + 1)}>
  Click Me
</button>

<!-- Q: Is React framework? -->
👉 ❌ No, it is a library.
<!-- Q: Who developed React? -->
👉 Meta (Facebook) 2013
<!-- Q: React fast kyun hai? -->
👉 Virtual DOM ki wajah se
<!-- Q: SPA ka main benefit? -->
👉 Fast, smooth user experience.
----------------------------------------------------------------------
<!-- 3️⃣ JSX (JavaScript XML) -->
<!-- 1️⃣ What is JSX? -->
JSX stands for JavaScript XML. JSX is a syntax extension of JavaScript that allows us to write HTML-like code inside JavaScript in React.
JSX = JavaScript + HTML

JSX looks like HTML but it is not HTML. JSX follows JavaScript rules.

<!-- const element = <h1>Hello JSX</h1>; -->
👉 Ye dikhta HTML jaisa hai
👉 But actually JavaScript object hota hai.
<!-- 🔹 What is XML? -->
XML stands for Extensible Markup Language. It is used to store and transport data in a structured and readable format.

Hindi:-
XML ka full form Extensible Markup Language hota hai. Ye data ko store aur transport karne ke liye use hoti hai, ek structured format me.

<!-- JSX vs HTML -->

// JSX
<h1 className="title">Hello</h1>

// HTML
<h1 class="title">Hello</h1>

<!--What is an Expressions in JSX -->
Expressions in JSX allow us to write JavaScript code inside curly braces {}.

<!-- Expression kya hota hai? -->
👉 Jo value return kare
Allowed:
Variables
Math
Function call
Ternary operator

❌ Not allowed:
if-else (direct)
loops (direct)
<!-- 
const name = "Kajal";
const age = 22;

<h1>Hello {name}, Age: {age}</h1> -->

Math Example
<h2>Sum: {10 + 20}</h2>

<!-- 4️⃣ JSX Rules (INTERVIEW GOLD 🥇) -->
🔹 Rule 1: One Parent Element

return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);

Wrong
return (
  <h1>Hello</h1>
  <p>React</p>
);

Rule 2: Close All Tags
<img src="logo.png" />
<br />

🔹 Rule 3: Use className
<h1 className="heading">JSX</h1>

Rule 4: camelCase Attributes
<button onClick={handleClick}>Click</button>

<!-- 5️⃣ JSX with JavaScript (REAL WORLD) -->
JSX allows us to combine JavaScript logic with UI, making code more dynamic and readable.
Hindi:-
JSX hume JavaScript logic aur UI ko ek saath likhne deta hai, jisse code dynamic aur readable ho jata hai.
<!-- 
function App() {
  const isLoggedIn = true;

  return (
    <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
  );
} -->

Logic:
Condition JS se
UI JSX se
Ternary operator use kiya'

<!-- Q: Is JSX mandatory in React? -->
👉 ❌ No, but recommended
<!-- Q: Can browser read JSX directly? -->
👉 ❌ No
<!-- Q: JSX me if-else kyun nahi? -->
👉 Kyunki JSX expressions allow karta hai, statements nahi
<!-- XML self-closing tags kyun strict hain? -->
👉 XML strict syntax follow karta hai

<!-- Q: JSX me XML ka role? -->
👉 Syntax rules (closing, nesting)
------------------------------------------------------------------------------------------------------------------
<!-- 🟢 PHASE 2: Components (CORE of React) -->
<!-- 4️⃣ What is a Component? -->
A component is a reusable piece of UI in React. It is a JavaScript function that returns JSX.

<!-- Real-world Logic -->
👉 “Imagine a website as a building.”
Socho website ek building hai 🏢
Header
Footer
Sidebar
Button

👉 Har ek = component
👉 Baar-baar use = reuse
<!-- 
function Header() {
  return <h1>Welcome</h1>;
} -->
Logic:
Header = component
JSX return kar raha
UI ka ek part

<!-- 5️⃣ Functional Components (MOST USED 🔥) -->
A functional component is a JavaScript function that returns JSX. It is the most commonly used component type in modern React.
Hndi:-
Functional component ek JavaScript function hota hai jo JSX return karta hai. Aaj-kal React me ye sabse zyada use hota hai.
<!-- 
function Greeting() {
  return <h2>Hello User</h2>;
} -->

Or arrow function:-
<!-- 
const Greeting = () =>{
    return <h2>Hello User</h2>;
}; -->

Function = component
JSX = UI
Easy + clean

<!-- 6️⃣ Component Naming Rules (VERY IMPORTANT ❗) -->
A Component names must start with a capital letter Because React uses JSX, not pure HTML.
❌ Wrong
<!-- 
function header() {
  return <h1>Header</h1>;
} -->
✔️ Correct
<!-- 
function Header() {
  return <h1>Header</h1>;
} -->
🧠 Logic:
<header> = HTML tag
<Header /> = React component

<!-- 7️⃣ Reusable Components (INTERVIEW FAVORITE ⭐) -->
Reusable components are components that can be used multiple times with different data.

function Button() {
  return <button>Click Me</button>;
}
Use multiple times:

<Button />
<Button />
<Button />
🧠 Logic:
Ek baar likho
Baar-baar use karo
Same UI

<!-- 8️⃣ Component Composition (BIG WORD, SIMPLE LOGIC) -->
Component composition means using one component inside another component.
Hindi:-
Component composition ka matlab hota hai ek component ke andar doosra component use karna.

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
<!-- 5️⃣ Props  -->
<!-- 1️⃣ What are props? -->
Props are used to pass data from one component to another component in React. Props are read-only.

Simple Logic
Parent → data bhejta hai
Child → data receive karta hai

👉 Props = function parameters jaisa
<!-- 
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
} -->

Use:
<Greeting name="Kajal" />
name = prop
"Kajal" = value
props.name se access

<!-- 2️⃣ Passing data via props -->
Component ko data attributes ke through diya jata hai aur props object se receive kiya jata hai.

function User(props) {
  return <p>Age: {props.age}</p>;
}

<User age={22} />


Logic:
<!-- {} → JavaScript value
Number, string, boolean sab pass ho sakta hai -->

Multiple props
<User name="Kajal" age={22} city="Indore" />

<!-- 3️⃣ Props vs Variables (VERY IMPORTANT 🔥)
 -->
 Variables component ke andar hote hain, jabki props parent component se aate hain.

 function Demo(props) {
  let count = 10;

  return (
    <div>
      <p>{props.name}</p>
      <p>{count}</p>
    </div>
  );
}

<!-- 
Logic:
props.name → bahar se
count → andar ka variable -->


<!-- 4️⃣ Props with functions (INTERVIEW FAVORITE ⭐)
 -->
React me functions bhi props ke through pass kiye ja sakte hain, mainly event handling ke liye.

<!-- Real-world Logic -->
Button click → Child
Action handle → Parent

function Child(props) {
  return <button onClick={props.sayHello}>Click</button>;
}

function Parent() {
  function sayHello() {
    alert("Hello from Parent");
  }

  return <Child sayHello={sayHello} />;
}

Logic:
Parent ne function diya
Child ne use kiya
Control parent ke paas


<!-- 👉 “Props can be used to pass both data and functions.” -->
Props ke through hum parent component se child component ko
data (string, number, object) aur functions (events, handlers) dono bhej sakte hain.

<!-- Yahan kya pass ho raha hai? -->
Props	          Type
title	          Data (string)
onClickHandler	Function

<!-- 📌 Output behavior -->
Card me title show hoga
Button click → parent ka function run hoga

<!-- 5️⃣ Default Props -->
Default props ka use tab hota hai jab parent koi value pass na kare.

function Profile({ name = "Guest" }) {
  return <h2>Hello {name}</h2>;
}

<!-- Q: Props mutable hote hain? -->
👉 ❌ No, read-only
<!-- Props ka data kaun change kar sakta hai? -->
👉 Parent component
<!-- Props aur state me difference? -->
👉 Props = external, State = internal
<!-- Function props kyu use hote hain? -->
👉 Child → Parent communication

1️⃣ Ek Student component banao (name, marks props).
2️⃣ Ek Button component jisme click par parent function call ho
4️⃣ 3 students ko same component se render karo
-------------------------------------------------------------------------------------
<!-- 6️⃣ State (MOST IMPORTANT 🔥) -->
<!-- 1️⃣ What is State? -->
State is a built-in object in React used to store and manage data that can change over time and affects the UI.

Example:
Counter number
Login status
Form input value

Example (Without hook – concept)
<!-- let count = 0; // normal variable -->
❌ Problem:
Change hoga
UI re-render ❌
👉 Isliye React me state use hoti hai ✅

<!-- Real-life Example -->
Socho ek counter app:
Number 0 → 1 → 2 → 3
Ye number change ho raha hai, isliye ye state hai.
<!-- 

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
export default Counter; 
-->
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

