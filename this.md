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
<!-- ❓ How do you handle API calls? -->
“I use useEffect hook to fetch data using fetch or axios when component loads.”

-------------------------------------------------------------------------------------------
📘 React Full Notes:-
<!-- 1️⃣ What is React? -->
“React is a JavaScript library used to build fast and interactive user interfaces. specialy Single Page Application.
It is component-based, so we can reuse code easily.
For example, in my project I created reusable components like navbar and cards.
In short, it helps build scalable and efficient UI.”

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

<!--4️⃣ React vs JavaScript (Classic Interview Question) -->
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

<!-- Q: Benefit of SAP? -->
👉 Fast, smooth user experience.

Task:-
<!-- 👉 Name any 2 SPA websites you use daily. -->
I use Gmail and YouTube daily.

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
Virtual DOM is a lightweight copy of the real DOM. React compares it and updates only change parts.
In short It improves performance.

<!-- Real Life Example -->
If only text changes → React updates only that part, not full page.
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
------------------------------------------------------
🔥 2️⃣ Setup & Environment
* Node.js install
* create-react-app
* Vite setup
* Folder structure samajhna
----------------------------------------------------
🔥 3️⃣What is JSX ?
<!-- What is JSX(JavaScript XML)-->
 JSX = JavaScript + XML 
JSX stands for JavaScript XML is a syntax that allows us to write HTML inside JavaScript.
For example, we write <h1>Hello</h1> inside JS.
In short, it makes code more readable.”

<!-- const element = <h1>Hello JSX</h1>; -->
👉 Ye dikhta HTML jaisa hai
👉 But actually JavaScript object hota hai.

<!-- 👉 Why use JSX? -->
Easy to read
Looks like HTML
Faster UI writing 

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
A component are eusable piece of UI in React. It is a JavaScript function that returns JSX.
For example, I create seperate components like Header and Footer.
In short, they improve reusability.”

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
✅ Functional vs Class Component?
Functional components are simple functions and use hooks.
Class components use lifecycle methods and are more complex.
Nowadays, we mostly use functional components.

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
Im
age
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
“I use props to pass data from parent to child, like sending user name to a component.”

Simple Logic
Parent → data bhejta hai
Child → data receive karta hai
<!-- 
function Welcome(props){
  return <h1>Hello {props.name}</h1>;
}
<Welcome name="Rahul" />
 -->
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
State is used to store dynamic data in a component.
When state changes(update), the component re-renders automatically.

<!-- Real-World Example -->
Think of a counter app:
When you click the button → number increases.
That changing number is state.

Cart item count, Login status, Toggle button, Counter number,
Form input value.
<!--
 const [count, setCount] = useState(0); -->

<!--7. Difference between State and Props? -->
| State                    | Props                  |
| ------------------------ | ---------------------- |
| Managed inside component | Passed from parent     |
| Mutable                  | Immutable              |
| Used for dynamic data    | Used for communication |
|can be changed            | Read-only              |

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
----------------------------------------------------------------------------
<!-- 5. Event Handling -->
👉 React uses camelCase
<!-- 
function ClickBtn() {
  function handleClick() {
    alert("Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
} -->
----------------------------------------------------
 <!-- 4️⃣ What are Hooks? -->
Hooks are special functions that allow functional components to use state and lifecycle features.

🔹 Basic Syntax
<!-- const [count, setCount] = useState(0); -->
 
 <!-- 5️⃣ useState Hooks (Most Important 🔥):- -->
 “useState is a React hook used to manage state in functional components.
For example, I use it to store user input or counter values.
In short, it helps update UI dynamically.”

const [name, setName] = useState("");
<!-- 
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
} -->
useState is used to manage local component state in functional components.
----------------------------------------------------------------------------
<!-- 🔁 2. useEffect (VERY IMPORTANT 🔥🔥) -->
UseEffect is a React Hook is used to handle side effects like API call, Timer, Event listener, DOM Update.

“useEffect is a React hook used to handle side effects like API calls or timers. It runs after the component renders. For example, I use it to fetch data from API when component loads. In short, it replaces lifecycle methods.”
<!-- 
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");
}, []); --> 👉 [] means run only once


👉 Used for:
API calls 
Side effects 
Lifecycle handling

👉 3 Types:
<!-- ✅ 1. Run on Every Render  -->
useEffect(() => {
  console.log("Runs every time");
});

<!-- ✅ 2. Run Only Once (like componentDidMount) -->
useEffect(() => {
  console.log("Runs once");
}, []);

<!-- ✅ 3. Run on Dependency Change -->
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);  
---------------------------------------------------------------------------
<!-- 🌐 3. useContext (AVOID PROPS DRILLING) -->
useContext is a react Hook is used to  access global data without passing props manually.

import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return ( 
    <UserContext.Provider value="Kajalti">
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <h1>{user}</h1>;
}
---------------------------------------------
<!-- 4. What is useRef? -->
useRef is used to access DOM elements directly.
For example, focusing an input field.
In short, it avoids re-render.”

<!-- const inputRef = useRef(); -->
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
----------------------------------------------
<!--5. useMemo →  -->
useMemo is a React Hook is Used to optimize performance by caching values.
For example, heavy calculations.
In short, it avoids unnecessary recalculation.”
<!-- const value = useMemo(()=>calculate(num),[num]) -->

import { useMemo } from "react";

const result = useMemo(() => {
  return expensiveFunction(data);
}, [data]);


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

-------------------------------------------------------------------------
<!-- 🎯 1. Difference between useMemo & useCallback -->
useMemo is used to memoize a value, while useCallback is used to memoize a function.
useMemo returns a computed result, and useCallback returns a function reference.

🔍 Simple Explanation 
useMemo → value store karta hai
useCallback → function store karta hai

<!-- ✅ useMemo (value) -->
const result = useMemo(() => num * 2, [num]);

<!-- ✅ useCallback (function) -->
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

<!-- 🎯 2. When to Optimize Performance? -->


======================================================================================================
<!-- 8. What is key in React? -->
“Key is used to identify elements in a list.
For example, I use unique id while rendering list items.
In short, it helps React update efficiently.”

<!-- 9. What is React Router? -->
“React Router is used for navigation without page reload.
For example, switching between Home and About pages.
In short, it enables SPA navigation.”

<!-- 14. What is props drilling? -->
“Props drilling means passing data through multiple levels unnecessarily.
For example, parent → child → child.
In short, it makes code complex.”

<!-- 15. What is Context API? -->
“Context API is used to share data globally.
For example, user authentication data.
In short, it avoids props drilling.”


<!-- 6. What is lifting state up? -->
“Lifting state up means moving state to a common parent.
For example, sharing data between components.
In short, it enables data sharing.”


<!-- 17. What is Fragment? -->
“Fragment allows grouping elements without adding extra DOM nodes.
For example, using <> </>.
In short, it keeps DOM clean.”



<!-- 18. What is reconciliation? -->
“Reconciliation is the process where React compares old and new Virtual DOM.
It updates only changed parts.
In short, it makes rendering efficient.”



<!-- 19. What is lazy loading? -->
“Lazy loading loads components only when needed.
For example, loading pages on demand.
In short, it improves performance.”


<!-- 20. What is Redux? -->
“Redux is a state management library used in large applications.
For example, managing global data like user info.
In short, it centralizes state.

===============================================================================================================================================================================
-----------------------------------------------------------------------
<!-- ❓ How to fetch API in React? -->
We use useEffect to call API and useState to store data.

import { useState, useEffect } from "react";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

<!-- ⏳ Loading State (Simple) -->
User ko pata chale data aa raha hai.
Loading shows data is coming.
const [loading, setLoading] = useState(true);

<!-- ❌ Error Handling (Simple) -->
Error shows if something goes wrong.
---------------------------------------------------------------------------
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
----------------------------------------------------------------------------
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

<!-- 
function App(){
  let isLogin = true;

  return ( 
    <div>
      {isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
}
 -->

<!-- 23. What are keys in React? -->
Keys are special attributes used to uniquely identify elements in a list.
<!-- 
const user = ["Ran", "Aman", "Ravi"];

users.map((user, index) => (
  <li key={index}>{user}</li>
)); -->

<!-- 24. Why are keys important? -->
Keys help React to:
Helps React identify elements
Improves performance
Avoids re-render issues

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
Context API allows sharing data globally without prop drilling.
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
--------------------------------------------------------------------------
<!-- 29. Controlled vs uncontrolled components? -->
Controlled components are managed by React state.
<input value={name} 
onChange={(e)=>setName(e.target.value)} />

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

<input ref={inputRef} />

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
000000---------------------------------------------------------------------


---------------------------------------------------------------------------
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
---------------------------------------------------
<!-- 🔥 17. What is Redux? (Basic) -->
Redux is a state management library used to manage global state.

<!-- 🔥 18. What is Lazy Loading? -->
Loading components only when needed.

<!-- const Home = React.lazy(() => import("./Home")); -->

<!-- 🔥 19. What is Debouncing? -->
Delay execution of a function to avoid unnecessary calls.

👉 Used in search input.

💡 BONUS: Real Interview Question
<!-- 👉 Q: How will you optimize performance in React? -->
Use useMemo
Use React.memo
Lazy loading
Avoid unnecessary re-renders
Proper key usage

-----------------------------------------------
<!-- React Router -->
React Router is used for navigation between pages in React apps.

<Route path="/about" element={<About />} />

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

<!-- 15. What is Fragment in React? -->
React Fragment allows grouping multiple elements without adding extra DOM node.

<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>

<!-- 24. What is Lazy Loading in React? -->
Loading components only when needed to improve performance.

<!-- const Home = React.lazy(()=>import("./Home")) -->
----------------------------------------------------------------------------------------------
9. Optimization (Important for Interview)

<!-- Code Splitting -->
Code splitting breaks large JavaScript files into smaller chunks.
<!-- Benefits -->
Faster loading
Smaller bundle size
Better performance

============================================================================================================
These check deep understanding 👇
🔥 Core Concept
<!-- 1. What happens when state changes? -->
When state changes, React re-renders the component
React updates only the changed parts by comparing old and new virtual DOM (diffing process)

<!-- Real Life Example -->
If only text changes → React updates only that part, not full page.

<!-- 2. Why we should not mutate state directly? -->
Because React may not detect the change properly, leading to no re-render.

<!-- 👉 Wrong: -->
state.count = 1;

<!-- 👉 Correct: -->
setCount(1);

<!-- 3. Difference between useEffect & useLayoutEffect? -->
| useEffect            | useLayoutEffect             |
| -------------------- | --------------------------- |
| Runs after DOM paint | Runs before DOM paint       |
| Non-blocking         | Blocking                    |
| Used for API calls   | Used for layout measurement |
<!-- 👉 Example: -->
API call → useEffect
DOM size calculation → useLayoutEffect


<!-- 4. What is reconciliation? -->
Reconciliation is the process where React compares old Virtual DOM with new Virtual DOM and updates only changed elements.

<!-- 5. What is React Fiber?  -->
React Fiber is the new rendering engine of React that makes rendering faster and smoother by breaking work into small units.

🔥 Hooks Deep
<!-- 6. Why hooks must be called at top level? -->
To maintain consistent order of hooks on every render.

<!-- 7. Difference between useMemo & useCallback? -->
useMemo is used to memoize a value, while useCallback is used to memoize a function.
useMemo returns a computed result, and useCallback returns a function reference.

<!-- 8. When NOT to use useEffect? -->
When no side effect is needed
For simple calculations

<!-- 9. What is dependency array problem? -->
If dependencies are missing → stale data bug
If too many → unnecessary re-renders
<!-- 
useEffect(() => {
  console.log(count);
}, []); // ❌ wrong (count missing) -->


<!-- 10. How to prevent re-renders? -->
React.memo
useMemo
useCallback
Proper key usage

<!-- 11. What is React.memo? -->
It prevents re-render if props don’t change.
<!-- export default React.memo(Component); -->

<!-- 12. When to use lazy loading? -->

🔥 Practical
<!-- 13. How to share data between components? -->
Parent → Props
Siblings → Lifting state up
Global → Context API / Redux

<!-- 14. How to handle forms? -->
Using controlled components (state).
<input value={name} onChange={(e) => setName(e.target.value)} />

15. What is lifting state up?

🔥 Advanced (Fresher+)
<!-- 16. What is Context API? -->
Used to share data globally without passing props manually.

<!-- 17. Props drilling problem? -->
Passing props through many layers unnecessarily.
👉 Solution: Context API

<!-- 18. Controlled vs uncontrolled? -->
| Controlled          | Uncontrolled      |
| ------------------- | ----------------- |
| React controls data | DOM controls data |
| Uses state          | Uses ref          |

<!-- 19. How React handles events? -->
React uses Synthetic Events (wrapper around native events) for better performance and consistency.

<!-- 20. Difference between SPA & MPA? -->
| SPA             | MPA              |
| --------------- | ---------------- |
| Single page     | Multiple pages   |
| Fast navigation | Page reload      |
| React apps      | Traditional apps |
