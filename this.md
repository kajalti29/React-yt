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


----------------------------------------------------------------------------
import React from 'react'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome</h1>
    </div>
  )
}

export default App


<!-- Components -> Navbar -->
import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"30px", background:"black",  color:"white", padding:"10px"}}>
        <h2>MyWebsite</h2>

        <ul style={{display:"flex", gap:"15px", listStyle:"none"}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar

----------------------------------------------------------------------------
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
-----------------------------------------------------
Props
<!-- Parent Component:- -->
import React from 'react'
import User from './Component/User'

const App = () => {
  return (
    <div>
        <User name="Ram" age="22"/>
        <User name="Aman" age="25"/>
    </div>
  )
}

export default App 



<!-- Child Component:- -->
import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default User

-----------------------------------------------------
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
-----------------------------------------------------
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
 ----------------------------------------------------
 <!-- State:- -->

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
----------------------------------------------------
 <!-- 4️⃣ What are Hooks? -->
Hooks are special functions that allow functional components to use state and lifecycle features.
Examples:
useState
useEffect

 <!-- 5️⃣ useState Hooks (Most Important 🔥):- -->
useState is a React Hook that is manage state.

🔹 Basic Syntax
<!-- const [count, setCount] = useState(0); -->

<!-- useEffect Hook -->
UseEffect is a React Hook that handle side effects(API call, Timer, Event listener, DOM Update).
<!-- 
useEffect(()=>{
 console.log("Component Mounted");
},[]); -->

Other Hooks
useRef → DOM reference
useContext → Global state
useReducer → Complex state
useMemo → Performance optimization
useCallback → Function memoization
-----------------------------------------------------
useState:-
<!-- 
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
} -->

<!-- Why state updates are asynchronous? -->
Because React batches updates for performance optimization.

🚀 6️⃣ useEffect:-
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

-----------------------------------------------------
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
=======================================================================================
<!-- 1️⃣ What is Conditional Rendering? -->
Conditional rendering means displaying different UI components based on a condition.
<!-- Real World Logic (Sabse Important) -->
🧠 Example 1: Light Switch
Switch ON → Light dikhegi
Switch OFF → Light nahi dikhegi
👉 That's Conditional Rendering hai


{isLogin ? <Home /> : <Login />}

If isLogin is true → <Home /> is rendered.
If isLogin is false → <Login /> is rendered.


<!-- 23. What are keys in React? -->
Keys are special attributes used to uniquely identify elements in a list.
<!-- 
const user = ["Ran", "Aman", "Ravi"];

users.map((user, index) => (
  <li key={index}>{user}</li>
)); -->


<!-- 24. Why are keys important? -->
Keys help React to:
Identify which items have changed
Update only the modified elements
Improve rendering performance
Without keys, React may re-render the entire list, which is inefficient.


<!-- 25. What is lifting state up? -->
Sharing state between components.

<Child sendData={setValue} />

<!-- 
function Parent() {
  const [value, setValue] = useState("");

  return <Child sendData={setValue} />;
} -->



<!-- 26. What is prop drilling? -->
Prop drilling means passing data (props) from a parent component to deeply nested child components, even when some middle components don’t need that data.
<App>
  <Parent>
    <Child>
      <GrandChild />
    </Child>
  </Parent>
</App>

Agar App ka data directly GrandChild ko chahiye,
par data ko Parent aur Child ke through pass karna pade → prop drilling


<!-- 27. What is Context API? -->
Context API is used to avoid prop drilling.

<!-- 
const UserContext = createContext();

<UserContext.Provider value="Ram">
  <Child />
</UserContext.Provider> -->


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
----------------------------------------------------
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
----------------------------------------------------
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
-----------------------------------------------------
----------------------------------------------------------------------------------------------------
<!-- 29. Controlled vs uncontrolled components? -->
A Controlled Component is a form element whose value is controlled by React state.
<!-- How it works -->
User types in input
onChange event runs
setName() updates state
UI re-renders

<!-- 
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Your Name: {name}</h2>
    </div>
  );
}

export default Form; -->


<!-- Form Validation Example -->
import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Email is required");
    } else {
      alert("Form submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

<!-- Uncontrolled Component:-  -->
uncontrolled components are managed by the DOM.

<!-- 
import { useRef } from "react";

function Form() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
 -->

 Difference: Controlled vs Uncontrolled

 | Controlled             | Uncontrolled   |
| ---------------------- | -------------- |
| Managed by React state | Managed by DOM |
| Uses `useState`        | Uses `useRef`  |
| Easier validation      | Less control   |

<!-- 1️⃣7️⃣ API Integration in React -->
React apps often fetch data from APIs.

Two common methods:
1️⃣ fetch()
<!-- 
fetch("https://api.com/data")
.then(res=>res.json())
.then(data=>console.log(data)) -->

2️⃣ axios 

<!-- axios.get("/users") -->
--------------------------------------------------------------------------------------------------
<!-- React Router -->
React Router allows navigation between pages in a React application.

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

<!-- Important concepts -->
BrowserRouter
Route
Link
NavLink
Dynamic Routing
----------------------------------------------------------------------------------------------
9. Optimization (Important for Interview)

<!-- Code Splitting -->
Code splitting breaks large JavaScript files into smaller chunks.
<!-- Benefits -->
Faster loading
Smaller bundle size
Better performance


<!-- React.memo -->
React.memo is a Higher Order Component (HOC) that prevents unnecessary re-rendering of a component.
If the props do not change, the component will not re-render.

Hindi:-
Component ko unnecessary re-render hone se bachata hai. Agar props change nahi hue to component dubara render nahi hoga.

<!-- useMemo -->
Expensive calculation ko cache karta hai.


<!-- useCallback -->
Function ko memorize karta hai


<!-- Avoid unnecessary re-renders -->
React me jab state ya props change hota hai tab component re-render hota hai.
Unnecessary re-render avoid karne ke ways: