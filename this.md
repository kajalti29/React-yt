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
----------------------------------------------------------------------------------
React interview me mostly ye puchte hain:
Virtual DOM kya hai
Props vs State
useState vs useEffect
Controlled vs Uncontrolled Components
React Router
Hooks
Lifecycle methods
Performance optimization
----------------------------------------------------------------------------------------
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
React creates new Virtual DOM
Compares with previous DOM (diffing)
Updates only changed elements

<!--Code Example -->
const [count, setCount] = React.useState(0);

<button onClick={() => setCount(count + 1)}>
  Click Me
</button>

<!-- 🟢 5️⃣ Real DOM vs Virtual DOM -->
| Real DOM                   | Virtual DOM               |
| -------------------------- | ------------------------- |
| Directly updates browser   | Lightweight JS copy       |
| Slow                       | Fast                      |
| Repaints full UI           | Updates only changed part |
| Manipulated by JS manually | Managed by React          |

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
 JSX = JavaScript + XML 
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript in React.

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

<!-- Q5: JSX rules? -->
* Return a single  parent element
* All tags closed
* Use className
* Use camelCase attributes

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

<!-- Inline styling in JSX-->
In JSX, inline styles are written as JavaScript objects.
function App() {
  return (
    <h1 style={{ color: "blue", backgroundColor: "lightgray" }}>
      Hello Kajalti
    </h1>
  );
}

<!-- class vs className -->
In JSX, we use className instead of class because class is a reserved keyword in JavaScript.

<!--What is an Expressions in JSX -->
Expressions in JSX allow us to write JavaScript code inside curly braces {}.

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
Think about a website like:
YouTube
It has:
Navbar
Sidebar
VideoCard
Comment Section
Each part is a separate component.
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

🟢 1️⃣ Functional Components
A Functional Component is a JavaScript function that returns JSX and are used to build UI in modern React.”

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
Think about a Product Card on Amazon.
Each card has:
Image
Title
Price
Structure same, data different.

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

<!-- 🟢 4️⃣ Export & Import -->
We use export and import to share components between different files.
-----------------------------------------------
5️⃣ Props
* What are Props?
* Passing data parent → child
* Multiple props
* Destructuring props
* Default props

<!-- 5️⃣ Props :- -->
Props are used to pass data from parent component to child component.
Props are read-only and help make components reusable and dynamic.

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

<!-- 1️⃣ Passing Props -->
Props are passed like HTML attributes inside a component.

💻 Example
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Greeting name="Kajalti" />;
}

Output:
Hello Kajalti

<!-- 🟢 2️⃣ Props Destructuring -->
“We commonly destructure props for cleaner and more readable code.”

<!-- 🟢 3️⃣ Default Props -->
Default props are used to set default values when no props are passed.
<!-- 
function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
} -->
If name is undefined → default value is used.

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
State is a built-in object in React that is used to store dynamic data in a component.
When state changes(update), the component re-renders automatically.

<!-- Real-World Example -->
Think of a counter app:
When you click the button → number increases.
That changing number is state.

Cart item count, Login status, Toggle button, Counter number,
Form input value.
<!--
 const [count, setCount] = useState(0); -->

 import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

 <!-- 4️⃣ What are Hooks? -->
 Hooks are special functions that allow functional components to use state and lifecycle features.
Examples:
useState
useEffect

 <!-- 5️⃣ useState Hooks (Most Important 🔥):- -->
useState is a React Hook that allows functional components to use state.
It returns an array with:
Current state value
Function to update the state

🔹 Basic Syntax
const [count, setCount] = useState(0);

count → current value
setCount → function to update
0 → initial value


🧠 Logic
Initial value = 0
Click button
setCount() updates state
Component re-renders
UI updates automatically

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

🟢 Multiple State
We can use multiple useState hooks.

import { useState } from "react";

function User() {
  const [name, setName] = useState("Kajalti");
  const [age, setAge] = useState(22);

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </>
  );
}

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
“React handles events using camelCase syntax like onClick, onChange, and onSubmit. Event handlers are passed as functions. For forms, we use preventDefault to stop page reload. When passing arguments, we use arrow functions to prevent immediate execution.”

<button onClick={() => alert("Clicked")}>
  Click Me
</button>
React me camelCase events use hote hain:
onClick
onChange
onSubmit
<!-- Real World -->
Button click, input change

🟢 1️⃣ onClick Event:-
When a button or element is clicked.

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

🟢 2️⃣ onChange Event:-

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello {name}</h2>
    </>
  );
}

🟢 3️⃣ onSubmit Event:-
When form is submitted.

function App() {

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
====================================================================================================
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

-----------------------------------
<!-- 2️⃣ if–else in React -->
“We can use normal JavaScript if/else statements outside JSX to render conditionally.”
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
Used when you want to render something only if condition is true. 
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
<!-- 🔥 9. What is Key in React? -->

Key is a special prop used when rendering lists.
It helps React identify which items changed, added, or removed.
In React, we use the map() function to render lists of data dynamically.

<!-- Real-Life Example -->
Think of:
Product list
Comments
Todo items
All are arrays rendered dynamically

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

2️⃣ Unique Keys (VERY IMPORTANT 🔥
Keys help React identify which items changed, added, or removed.
Keys must be unique.

function App() {
  const users = [
    { id: 1, name: "Kajalti" },
    { id: 2, name: "Rahul" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

<!-- 3️⃣ Why Keys are Important? (VERY IMPORTANT 🔥) -->
Keys help React optimize rendering by identifying which items have changed, added, or removed.

<!-- 5️⃣ Dynamic Lists-->
Dynamic Lists wo lists hoti hain jo user action ya data change hone par update hoti rehti hain (add, delete, update).

<!-- Real-world examples: -->
Todo list (task add / remove)
Shopping cart (item add / remove)
Student list (new student add)

---------------------------------------------------------------------------------------------------
🟡 PHASE 2: React Hooks (Very Important for Interview)
?
----------------------------------------------------------------------------------------------------
🔵 PHASE 3: Forms & API
1️⃣5️⃣ Controlled Components
Input handling
Form validation
1️⃣6️⃣ Uncontrolled Components
useRef with forms
1️⃣7️⃣ API Integration
fetch()
axios
Loading & Error handling

<!-- Controlled Components -->
<!-- 27. What is Context API? -->
Context API is used to avoid prop drilling.

<!-- 29. Controlled vs uncontrolled components? -->
Controlled components are managed by React state, while uncontrolled components are managed by the DOM.

<!-- 
import { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
} -->


--------------------------------------------------------------------------------------------------
🟣 PHASE 4: Routing
1️⃣8️⃣ React Router
Install React Router
BrowserRouter
Routes
Route
useParams
useNavigate

<!-- React Router -->
React Router is a library used in React applications to enable client-side routing. It allows navigation between different components or pages without reloading the entire webpage.

<!-- 🌍 Real-Life Example -->
Imagine a website with:
/ → Home page
/about → About page
/contact → Contact page
In a traditional website, the page reloads when you click a link.
With React Router:
The URL changes
The component changes
The page does NOT reload
This makes the app faster and smoother.
----------------------------------------------------------------------------------------------
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

