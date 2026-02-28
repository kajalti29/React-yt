React folder create :- npm create vite@latest New_folder_name

Ex :-
✔ Project name: … 5_react_code
✔ Package name: … 5_react_code
✔ Select a framework: › React
✔ Select a variant: › JavaScript

code run :- main  folder_name then current folder_name(current folder ko cd with current folder name aayega) 

after that run :- npm run dev

Tailwind ka use karne ke liye first of all- crate project name, then Instal tailwind
<!-- npm install tailwindcss @tailwindcss/vite -->

then add the vite.config.js :-import tailwindcss from '@tailwindcss/vite'

  plugins: [react(),tailwindcss()],

rafce:- isse bollar plate aa jayega

<!--
npm install
npm install -D tailwindcss 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p -->
------------------------------------------------------------------------------------
📘 React Full Notes:-
<!-- 1️⃣ What is React? -->
React is a JavaScript library used to build fast and interactive user interfaces, especially single-page applications. It is component-based and updates the UI efficiently using Virtual DOM.
It is Handles logic, props, JSX and state.
👉 Created by Facebook(meta).
<!-- 
Example:-
function Hello(){
    return <h1>Hello React</h1>;
} -->

Logic:
Here, Hello is a component.
HTML jaisa dikhta hai (JSX) 
UI ka ek part return karta hai

Real-World Example:-
Instagram’s like button ❤️ does not reload the entire page — it only updates the UI. That is React’s behavior.

<!-- 2️⃣ Why React? -->
<!-- Q. Why do we use React? -->
👉 Because React is:
* Component-based – UI is divided into small, separate parts (components)
* Fast performance – It updates only the changed part of the page.
* Reusable code – Components can be used again and again.
* Virtual DOM – Makes updates faster and more efficient.
* Easy to manage large application UI – Code is organized and easy to maintain

<!-- Why companies prefer React over plain JS? -->
Companies prefer React because React provides a component-based architecture and updates UI efficient using Virtual DOM, which makes applications faster, scalable, and easier to maintain.

<!-- 3️⃣ React Features (VERY IMPORTANT) -->
React provides component-based architecture, Virtual DOM, JSX, one-way data binding, and reusability.

 Feature:-
 Components:-UI ko chhote parts me tod dete hain 
 JSX       :- JavaScript + HTML mix               
 Reusability:- Ek component baar-baar use          
 Virtual DOM:- Fast UI update                      
 One-way data:- Data control easy                   
<!-- 
const name = "Kajal";
const element = <h1>Hello {name}</h1>; -->

<!--Why is React fast? -->
Because it updates only changed parts using Virtual DOM.

<!-- 4️⃣ React vs JavaScript (Classic Interview Question) -->
JavaScript is a programming language, while React is a library built on JavaScript to create user interfaces.

<!-- SPA (Single Page Application) -->
👉 “In an SPA (Single Page Application), the page does not reload; only the content changes.”

Example:
Facebook
Instagram
Gmail
Facebook
Netflix
When you click something, the page doesn’t reload fully.
Only content changes.

Task:-
<!-- 👉 Name any 2 SPA websites you use daily. -->
I use Gmail and YouTube daily.

💻 Basic SPA Concept

function App() {
  const [page, setPage] = React.useState("home");

  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>

      {page === "home" ? <h1>Home Page</h1> : <h1>About Page</h1>}
    </div>
  );
}
Explain:-
This is a React functional component named App.
It is using:
useState → to store data
onClick → event handling
Conditional rendering → show different UI based on state.
When user clicks:
Home button → setPage("home")
About button → setPage("about")
💡 setPage() updates state
💡 When state updates → React re-renders component
This is ternary operator.
If page === "home"
👉 Show <h1>Home Page</h1>
Else
👉 Show <h1>About Page</h1>


<!-- 6️⃣ Virtual DOM (MOST IMPORTANT 🔥) -->
Virtual DOM is a lightweight copy of the real DOM.React updates only the changed parts by comparing old and new virtual DOM (diffing process)

<!-- Real Life Example -->
Imagine you edit a paragraph in MS Word.
Instead of reprinting the entire book 📖
Only that paragraph gets updated.

That’s Virtual DOM logic.

<!-- 🔁 Flow -->
* State change
* Virtual DOM update
* Compare old vs new (diffing) 
diffing mtlb old or new virtual DOM ko compare karna 
* Update only changed UI.

<!--Code Example -->
const [count, setCount] = React.useState(0);

<button onClick={() => setCount(count + 1)}>
  Click Me
</button>

🟢 5️⃣ Real DOM vs Virtual DOM
<!-- Q: Is React framework? -->
👉 ❌ No, it is a library.
<!-- Q: Who developed React? -->
👉 Meta (Facebook) 2013
<!-- Q: Benefit of SAP? -->
👉 Fast, smooth user experience.
------------------------------------------------------
🔥 2️⃣ Setup & Environment
* Node.js install
* create-react-app
* Vite setup
* Folder structure samajhna
----------------------------------------------------
🔥 3️⃣ JSX
<!-- What is JSX(JavaScript XML)-->
 JSX = JavaScript + HTML 
JSX stands for JavaScript XML. It is a syntax extension of JavaScript that allows us to write HTML-like code inside JavaScript in React.

<!-- const element = <h1>Hello JSX</h1>; -->
👉 Ye dikhta HTML jaisa hai
👉 But actually JavaScript object hota hai.

<!--What is XML? -->
XML stands for Extensible Markup Language. It is used to store and transport data in a structured and readable format.

<!-- HTML vs JSX -->
<!-- 8. What is the difference between HTML and JSX? -->
👉 HTML is used to build web pages, while JSX is used in React to write UI inside JavaScript.

// JSX
<h1 className="title">Hello</h1>

// HTML
<h1 class="title">Hello</h1>


<!-- class vs className -->
?
<!--What is an Expressions in JSX -->
Expressions in JSX allow us to write JavaScript code inside curly braces {}.

<!-- Q5: JSX rules? -->
* One parent element
* All tags closed
* className
* camelCase attributes

🔹 Rule 1: One Parent Element
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);

<!-- Wrong -->
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

<!-- Inline styling -->
?

<!--JSX me if-else kyun nahi? -->
👉 Kyunki JSX expressions allow karta hai, statements nahi
---------------------------------------------------
4️⃣ Components
* Functional Components
* Component naming rules
* Reusable components
* Component file structure

<!-- What is a Component -->
A component is a reusable piece of UI in React. It is a JavaScript function that returns JSX.
Example: Navbar, Card, Button, Form.

<!-- Real-world Logic -->
“We break UI into small reusable components to make code clean and maintainable.”
<!-- 
function Welcome() {
  return <h1>Hello Kajal 👋</h1>;
}
export default Welcome; -->

✅ Types
1. Functional Component (Most used)
2. Class Component (Old way)

function Welcome() {
  return <h1>Hello Kajalti</h1>;
}

export default Welcome;

<!-- What is difference between functional and class component? -->
Functional → simple function, hooks use karta hai,Functional is preferred
Class → lifecycle methods use karta tha

<!--6️⃣ Component Naming Rules-->
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
<!-- 
function Button() {
  return <button>Click Me</button>;
}
Use multiple times: -->

<Button />
<Button />
<Button />
🧠 Logic:
Ek baar likho
Baar-baar use karo
Same UI
-----------------------------------------------
5️⃣ Props
* Props kya hote hai?
* Passing data parent → child
* Multiple props
* Destructuring props
* Default props

<!-- 5️⃣ Props :- -->
Props are used to pass data from parent component to child component.
“Props are read-only and help in making reusable components.”

Simple Logic
Parent → data bhejta hai
Child → data receive karta hai

<!-- 
function Student(props) {
  return <h2>{props.name}</h2>
} 
-->

👉 Parent → Child
<!-- 
function Child(props) {
  return <h1>{props.name}</h1>
}

<Child name="Kajal" 

/> -->


<!--3️⃣ Props vs Variables (VERY IMPORTANT 🔥)
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

<!-- Q: Props mutable hote hain? -->
👉 ❌ No, read-only
<!-- Props ka data kaun change kar sakta hai? -->
👉 Parent component
<!-- Props aur state me difference? -->
👉 Props = external, State = internal
<!-- Function props kyu use hote hain? -->
👉 Child → Parent communication
<!-- Props change kyu nahi kar sakte? -->
👉 Props read-only hote hain
👉 Control parent ke paas hota
<!-- Props vs Variables -->
Props → bahar se
Variables → component ke andar
-------------------------------------------------------
6️⃣ State
* useState Hook
* Updating state
* Counter example
* Controlled input field

6️⃣ State :-
State is a built-in object that store and manage dynamic data inside a component.
<!-- Real-World Example -->
Cart item count, Login status, Toggle button, Counter number,
Form input value.
<!--
 const [count, setCount] = useState(0); -->

 <!-- 4️⃣ What are Hooks? -->
 Hooks are special functions that allow functional components to use state and lifecycle features.
Examples:
useState
useEffect

 <!-- 5️⃣ useState Hooks (Most Important 🔥):- -->
 useState is a Hook used to manage state in functional components.

<!-- import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
} -->
Interview Logic:-
“State stores dynamic data. When state updates, component re-renders

<!-- Why state updates are asynchronous? -->
Because React batches updates for performance optimization.

<!-- 🚀 6️⃣ useEffect -->
useEffect is used to perform side effects in functional components.
Examples:
API call
Timer
Event listener
DOM update

<!-- 
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello</h1>;
}
 -->
“Empty dependency array means it runs only once after component mounts.”

--------------------------------------------------------
7️⃣ Event Handling
onClick
onChange
onSubmit
Passing arguments in events

<!-- 7️⃣ Event Handling -->
An event is an action performed by the user on a web page, such as a click, typing, or form submission.
Examples:
click
change
submit
keypress

<button onClick={() => alert("Clicked")}>
  Click Me
</button>
React me camelCase events use hote hain:
onClick
onChange
onSubmit
<!-- Real World -->
Button click, input change
<!-- 
function ButtonExample() {
  function handleClick() {
    alert("Button Clicked");
  }
  return <button onClick={handleClick}>Click Me</button>;
} -->

👉 React uses camelCase → onClick
=====================================================================================================
🟡 LEVEL 2 – Intermediate React
8️⃣ Conditional Rendering
if-else
Ternary operator
&& operator

<!-- Conditional Rendering -->
Conditional rendering means displaying different UI elements based on a condition.
Hindi:-
Conditional rendering ka matlab hota hai condition ke basis par UI ko show ya hide karna.
<!-- Real World Logic (Sabse Important) -->
🧠 Example 1: Light Switch
Switch ON → Light dikhegi
Switch OFF → Light nahi dikhegi
👉 That's Conditional Rendering hai

{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}

<!-- Real world: -->
User logged in → Dashboard
Not logged in → Login Page
-----------------------------------
<!-- 2️⃣ if–else in React -->
if–else is used outside JSX to decide what should be rendered.
<!-- 
function App() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <h1>Welcome</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
} -->
Logic:
JSX expressions allow karta hai
if–else = statement → bahar likhte
----------------------------------
<!-- 3️⃣ Ternary Operator (MOST USED 🔥) -->
The ternary operator is used inside JSX for conditional rendering.

<!-- condition ? truePart : falsePart -->

<!-- 
function App() {
  const isLoggedIn = false;

  return (
    <h1>
      {isLoggedIn ? "Welcome User" : "Please Login"}
    </h1>
  );
} -->

Logic:
Condition true → first value
False → second value
------------------------------------
<!-- 4️⃣ && operator-->
&& operator is used when we want to render something only if a condition is true.
 
<!-- 
function App() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
    </div>
  );
} -->
Logic:
True && JSX → JSX render
False && JSX → kuch nahi
-------------------------------------------------
9️⃣ Lists & Keys
map() in React
Why keys important?
Rendering dynamic list

<!-- 9️⃣ Lists & Keys -->
Keys help React identify elements.

const users = ["A", "B", "C"];

{users.map((user, index) => (
  <li key={index}>{user}</li>
))}

<!-- 
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

{users.map(user => (
  <p key={user.id}>{user.name}</p>
))} -->

<!-- 3️⃣ Why Keys are Important? (VERY IMPORTANT 🔥) -->
Keys help React optimize rendering by identifying which items have changed, added, or removed.

<!-- 5️⃣ Dynamic Lists-->
Dynamic Lists wo lists hoti hain jo user action ya data change hone par update hoti rehti hain (add, delete, update).

<!-- Real-world examples: -->
Todo list (task add / remove)
Shopping cart (item add / remove)
Student list (new student add)

<!-- Key kyu zaroori hai? -->
👉 Efficient rendering ke liye
<!--List kaise render karte hain? -->
👉 map() method se
<!--Index key kab use kar sakte? -->
👉 Jab list static ho
--------------------------------------------------
🔟 Forms in React
Controlled components
Form validation
Handling multiple inputs

<!-- Forms (Controlled Components) -->
In controlled components, form data is controlled by React state.

💻 Example
function Form() {
  const [email, setEmail] = useState("");

  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

“Input value comes from state and updates using onChange."
----------------------------------------------------
1️⃣1️⃣ useEffect Hook
Side effects kya hote hai?
API call example
Dependency array
Cleanup function
<!-- useEffect Hook -->
useEffect is used to perform side effects like API calls, timers, or subscriptions, event listener.

<!-- API Call -->
Fetching data from backend/server using fetch or axios.

<!-- import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
} -->

* Dependency array:-
The dependency array controls when useEffect runs.
Hindi:-
Dependency array ye decide karta hai ki useEffect kab run hoga

<!--Empty dependency array [] -->
useEffect(() => {
  console.log("Runs only once");
}, []);

👉 Sirf first render (mount) par

<!--With dependencies -->
useEffect(() => {
  console.log("Count changed");
}, [count]);
👉 Jab count change ho tab

* Cleanup function:-
Cleanup function is used to clean side effects like intervals, timers, or event listeners.

Example: Fan / Light
Fan ON kiya → chal raha hai
Room chhodte time → Fan OFF ❌
👉 OFF karna = Cleanup
---------------------------------------------------
1️⃣2️⃣ React Router
Install react-router-dom
BrowserRouter
Routes & Route
Link
useParams
useNavigate

<!-- React Router -->
React Router DOM is used to handle routing and navigation in React applications without page reload.
-------------------------------------------------
1️⃣3️⃣ Lifting State Up
* Parent-child communication
* Sharing state

<!-- Lifting State Up -->
Sharing state between components.
<Child sendData={setValue} />

--------------------------------------------------
1️⃣4️⃣ useRef
Access DOM element
Focus input example
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🟠 LEVEL 3 – Advanced React
1️⃣5️⃣ Context API

Global state

createContext

useContext

1️⃣6️⃣ Custom Hooks

Why custom hooks?

Creating reusable logic

1️⃣7️⃣ useReducer

Complex state handling

Reducer function

1️⃣8️⃣ Performance Optimization

React.memo

useMemo

useCallback

1️⃣9️⃣ Lazy Loading

React.lazy

Suspense

2️⃣0️⃣ Error Boundaries
🔵 LEVEL 4 – Real World React
2️⃣1️⃣ API Integration

Fetch

Axios

Loading state

Error handling

2️⃣2️⃣ CRUD Operations

Create

Read

Update

Delete

2️⃣3️⃣ Authentication

Login form

Token

Protected routes

2️⃣4️⃣ Local Storage

Save data

Get data

2️⃣5️⃣ Deployment

Netlify

Vercel

Build folder


<!-- 🎯 React Interview Important Topics -->

✔ Virtual DOM
✔ Hooks (useState, useEffect, useRef)
✔ Props vs State
✔ Controlled vs Uncontrolled components
✔ Key in React
✔ useEffect lifecycle
✔ Context API
✔ Performance optimization

💡

----------------------------------------------------------------------------------------------------------------------------
