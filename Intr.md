⚙️ Intermediate React Interview Questions

<!-- 17. Why were Hooks introduced? -->
* To avoid class components
* To reuse logic easily
* To make code clean and readable

<!-- 18. Name some commonly used hooks. -->
* useState
* useEffect
* useContext
* useRef
* useMemo
* useCallback

<!-- 19. What is `useState`? -->
useState is used to manage state.

const [count, setCount] = useState(0);


<!-- 20. What is `useEffect`? -->
useEffect handles side effects like API calls.

21. Difference between `useEffect` and lifecycle methods?

<!-- 22. What is conditional rendering? -->
Rendering components based on a condition is called conditional rendering.

{isLogin ? <Home /> : <Login />}


<!-- 23. What are keys in React? -->
Keys list ke items ko uniquely identify karti hain.

<!-- 24. Why are keys important? -->
They help React to update only changed items efficiently.

<!-- 25. What is lifting state up? -->
Sharing state between components.

<Child sendData={setValue} />

<!-- 26. What is prop drilling? -->
Prop drilling means passing data (props) from a parent component to deeply nested child components, even when some middle components don’t need that data.

Hindi (Simple):
Jab data (props) ko parent component se child → grandchild → next child tak bhejna padta hai, aur beech ke components ko us data ki zarurat hi nahi hoti, usse prop drilling kehte hain.

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

28. Difference between Context API and props?

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


<!-- 
import { useRef } from "react";

function Uncontrolled() {
  const inputRef = useRef();

  return <input ref={inputRef} />;
} -->


<!-- 30. What is event handling in React? -->
Handling user actions like click, submit.
-----------------------------------------------------------------------------------------------------------------

## 🚀 Advanced React Interview Questions

<!-- 31. What is reconciliation in React? -->
Reconciliation is the process by which React updates the UI efficiently by comparing the previous Virtual DOM with the new Virtual DOM.

Hindi:
Reconciliation ek process hai jisme React purane Virtual DOM aur naye Virtual DOM ko compare karke UI ko efficiently update karta hai।

<!-- 32. What is diffing algorithm? -->
Diffing algorithm is used by React to find the minimum number of changes between old and new Virtual DOM.

Hindi:
Diffing algorithm React ka method hai jo purane aur naye Virtual DOM ke beech difference nikalta hai, taki kam se kam changes ho।

<!-- 33. What is memoization? -->
Memoization is a technique to store the result of expensive function calls and reuse them.

Hindi:
Memoization ek technique hai jisme function ka result store kar liya jata hai taaki bar-bar calculate na karna pade।

<!-- 34. What is `useMemo`? -->
useMemo is a React hook that memorizes the result of a calculation to improve performance.

<!-- 35. What is `useCallback`? -->
useCallback function ko memory me save karta hai taaki har render par naya function na bane।

<!-- 36. Difference between `useMemo` and `useCallback`? -->
| useMemo         | useCallback        |
| --------------- | ------------------ |
| Memorizes value | Memorizes function |
| Returns value   | Returns function   |

<!-- 37. What is `useRef`? -->
useRef is a hook used to access DOM elements or store mutable values without re-rendering.

38. Difference between `useRef` and `useState`?

<!-- 39. What is higher-order component (HOC)? -->
HOC is a function that takes a component and returns a new enhanced component.

<!-- 40. What is lazy loading in React? -->
Lazy loading loads components only when they are needed.

Hindi:
Lazy loading me component tab load hota hai jab uski jarurat ho।.

<!-- 42. What is React Fragment? -->
Fragment allows grouping elements without extra DOM nodes.

Hindi:
Fragment bina extra div add kiye elements ko group karta hai।

<!-- 43. What is Error Boundary? -->
Error Boundary handles JavaScript errors in child components.

<!-- 44. What is Strict Mode? -->
Strict Mode highlights potential problems during development.

<!-- 45. How does React handle performance optimization? -->
Using memoization, Virtual DOM, lazy loading, and Pure Components.

<!-- 46. What is server-side rendering (SSR)? -->
SSR renders React pages on the server before sending to browser.

Hindi:
SSR me page server par render hota hai browser ke paas bhejne se pehle

<!-- 47. Difference between CSR and SSR? -->
✅ CSR – Client Side Rendering:-In CSR, the page is rendered in the browser using JavaScript.

✅ SSR – Server Side Rendering:-In SSR, the page is rendered on the server and sent as HTML to the browser.

<!-- 48. What are React best practices? -->
Use functional components
Keep components small
Use keys in lists
Optimize re-renders

<!-- 49. What is Redux? -->
Redux is a state management library used to manage global state.

<!-- 50. Difference between Redux and Context API? -->

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- 51 What is the difference between React and ReactDOM? -->
React:-
React is a JavaScript library used to build user interfaces, especially single-page applications (SPA).
It is Handles logic, state, props, JSX

ReactDOM:-
ReactDOM renders them to the browser DOM.
ReactDOM UI ko browser DOM me render karta hai
<!-- 
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
 -->

<!-- 52 What is create-react-app? -->
create-react-app is a tool to quickly create a React project with preconfigured setup.

<!-- npx create-react-app myApp -->

<!--53  What is the role of index.js in React? -->
index.js React app ka entry point hota hai.
root.render(<App />);

<!--54 Why do we use key attribute in lists? -->
Helps React identify which items changed, added, or removed.
Improves performance during re-rendering
{items.map(item => <li key={item.id}>{item.name}</li>)}


<!-- 55 What happens when state changes in React? -->
State change hone par component re-render hota hai.
setCount(count + 1);


<!-- 56 Can we use JavaScript inside JSX? How? -->
✅ Yes, using curly braces {}
Haan, {} ke andar JavaScript likhte hain.

<!-- 
const name = "Rahul";
<h1>Hello {name}</h1>
 -->

<!-- 57 What are fragments and why are they used? -->
Fragments allow group elements without creating extra DOM nodes.

<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>


<!-- 58 Difference between className and class? -->
class is a JavaScript keyword

React uses className instead

<div className="container"></div>


<!--59 What is default export vs named export? -->
Default export allows one export per file, named export allows multiple.

Default Export:-
<!-- 
export default App;
import App from "./App"; -->

Named Export:-
<!-- 
export const add = () => {};
import { add } from "./file"; -->


60 What is the role of render()?
---------------------------------------------------------------------------------------------------------------------------------------------------------------
🟡 Intermediate Level

<!--61 What are side effects in React? -->
Jo kaam render ke alawa hote hain (API call, timer, event listener) unhe side effects kehte hain.

useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);

<!--62 How many times does useEffect run? -->
useEffect ka run dependency array par depend karta hai.

<!-- 63 What is dependency array in useEffect? -->
Dependency array decide karta hai ki useEffect kab run kare.

useEffect(() => {
  console.log("Count updated");
}, [count]);


<!--64 What is cleanup function in useEffect? -->

<!-- 65 What is React.memo? -->
React.memo is a Higher Order Component that prevents unnecessary re-renders
if props do not change.

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h2>{name}</h2>;
});


<!--66 Difference between React.memo and useMemo? -->

What is lifting state up with example?


<!-- 68 How do you pass data from child to parent? -->
By passing a function as prop from parent to child.

function Parent() {
  const [msg, setMsg] = useState("");

  return <Child sendData={setMsg} />;
}

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hi Parent")}>
      Click
    </button>
  );
}


<!-- 69 What is controlled form validation? -->
In controlled form validation, React state controls form inputs and validates them.

const [email, setEmail] = useState("");

const handleChange = (e) => {
  setEmail(e.target.value);
};

<input value={email} onChange={handleChange} />


<!-- 70 Why should we avoid direct DOM manipulation? -->
We avoid direct DOM manipulation because React manages the DOM using Virtual DOM.

setColor("red");

----------------------------------------------------------------------------------------------------------------------------------------------------------
🔵 Advanced Level
<!-- What is reconciliation and why is it important? -->
Reconciliation is the process by which React updates the DOM by comparing the previous Virtual DOM with the new one.

<!-- Why important? -->
Makes UI updates fast
Avoids full DOM re-render
Improves performance using Virtual DOM diffing

<!-- How does React decide what to re-render? -->

=================================================-------=================================================================================================================================================================================================================

<!-- Counter App -->
Logic
Create a state count
Increase value when button clicked
Decrease value when button clicked
Reset counter


import React, { useState } from "react";
function Counter() {
const [count, setCount] = useState(0);
return (
<div>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Increase</button>
<button onClick={()=>setCount(count-1)}>Decrease</button>
<button onClick={()=>setCount(0)}>Reset</button>
</div>
);
}

export default Counter;
