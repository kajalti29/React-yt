Tailwind ka use karne ke liye first of all- crate project name, then Instal tailwind
<!-- npm install tailwindcss @tailwindcss/vite -->

then add the vite.config.js :-import tailwindcss from '@tailwindcss/vite'

  plugins: [react(),tailwindcss()],

rafce:- isse bollar plate aa jayega
------------------------------------------------------------------------------------
📘 React Full Notes:-
<!-- 1️⃣ What is React? -->
React is a JavaScript library used to build user interfaces, especially single-page applications (SPA).

React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai.
🔹 Developed by Facebook (Meta)
🔹 Component-based architecture
🔹 Fast & efficient
👉 React mainly Single Page Applications (SPA) banane ke liye use hoti hai.

<!-- 2️⃣ Why React? -->
<!-- Q. Why do we use React? -->
👉 Because React is:
Fast performance
Component-based
Reusable code
Virtual DOM
Easy to manage UI

<!-- SPA (Single Page Application) -->
SPA me page reload nahi hota, sirf content change hota hai.
👉 “In an SPA (Single Page Application), the page does not reload; only the content changes.”

📌 Example: Gmail, Facebook

<!-- 3️⃣ Component -->
A Component is a reusable and independent part of a user interface in React.
Each component controls its own logic and UI, and together components build the whole application.

Hindi:-
Component React ka ek chhota-sa hissa hota hai jo UI ka ek part banata hai.
Har component apna alag logic aur design rakhta hai, aur milkar poori website/app banti hai.

<!-- 
function Hello() {
  return <h1>Hello React</h1>
} 
-->

<!-- 4️⃣ JSX(JavaScript XML)-->

 JSX = JavaScript + HTML 
JSX (JavaScript XML) is a syntax extension of JavaScript used in React that allows us to write HTML-like code inside JavaScript.
Hindi:-
JSX React me use hone wali ek special syntax hai jisme hum JavaScript ke andar HTML jaisa code likh sakte hain.
<!--

 const name = "Kajal";
return <h1>Hello {name}</h1> 
-->

<!-- 6️⃣ Components in React -->
🔹 Functional Component (Most Used):-

function Hello() {
  return <h1>Hello React</h1>
}

🔹 Arrow Function Component:-

const Hello = () => {
  return <h1>Hello</h1>
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- 5️⃣ Props :- -->
Props are used to pass data from parent component to child component.

Hindi:-
Props parent component se child component me data bhejne ke liye use hote hain.

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

6️⃣ State :-
State is used to store and manage data inside a component.
<!--
 const [count, setCount] = useState(0); -->

<!-- different between props and state -->

------------------------------------------------------------------------------------------------------------------------------------------------
<!-- 🪝 Hook :- -->
Hooks are special functions that let you use state, lifecycle, and other React features inside functional components.

<!-- Why Hooks were introduced? -->

Answer:
* To avoid class components
* To reuse logic easily
* To make code clean and readable

<!-- 🔑 Common React Hooks -->
* useState
* useEffect
* useContext
* useRef
* useMemo
* useCallback


1️⃣ useState – State handle karne ke liye
// * useState → Component ka data ya state manage karta hai

<!-- 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
} 
-->

2️⃣ useEffect – Side effects ke liye
// useEffect → Side effects handle karta hai(jaise API useCallback, DOM  mainipulation, event listener)
<!-- 
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");
}, []); 
-->
Component load hone ke baad ka kaam (API call, event, timer)

3️⃣ useContext – Global data use karne ke liye
// useContext → Global data share karta hai
// (Global data ko consume karne ke liye iWithout prop drilling)

// useRef → DOM ya value ko access karta hai.

// useReducer → Complex state logic handle karta hai

// useMemo & useCallback:- optimization ke liye unnecessary re-render avoid karne ke liye.

<!-- 📌 Component vs Hook (Short Difference) -->
| Component        | Hook                  |
| ---------------- | --------------------- |
| UI ka part       | Logic ka part         |
| JSX return karta | JSX return nahi karta |
| Reusable UI      | Reusable logic        |


<!-- 🔟 Events Handling in React:- -->
<!-- Events handle user actions like click, input, submit. -->
An event is an action performed by the user on a web page, such as a click, typing, or form submission.
Examples:
click
change
submit
keypress

<button onClick={handleClick}>Click</button>


<!-- 🔟 Conditional Rendering -->
Rendering UI based on conditions.

Hindi:-
Condition ke basis par UI show karna.

{isLogin ? <Home /> : <Login />}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- 1️⃣1️⃣ List & Keys:- -->
Keys help React identify elements.
Hindi:-
Keys React ko batate hain kaunsa element unique hai.

Ex:-1
items.map(item => <li key={item.id}>{item.name}</li>)


Ex:-2
const users = ["A", "B", "C"];

users.map((u, index) => (
  <li key={index}>{u}</li>
));


<!-- 🔹 18. What is Conditional Rendering? -->
Rendering components based on a condition is called conditional rendering.


<!-- Form Handling -->
Form handling means form ka data lena, manage karna, aur submit karna.

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
----------------------------------------------------------------------------------------------------------------------------

<!-- 1️⃣3️⃣ Lifting State Up -->
Sharing state between components.
Hindi:-
State ko parent component me le jana.

<Child sendData={setValue} />

<!-- 1️⃣6️⃣ React Router -->
// 👉 React Router DOM is used to handle routing and navigation in React applications without page reload.

// React-Router-DOM:-
// React Router DOM ek library hai jo React application me
// multiple pages (routes) banane ke kaam aati hai bina page reload ke.
//
// Ye Single Page Application (SPA) ko support karta hai,
// jisme URL change hota hai lekin page reload nahi hota.
//
// React Router DOM ka use karke hum:
// 1. Different pages create kar sakte hain (Home, About, Contact)
// 2. URL ke basis par component render kar sakte hain
// 3. Navigation fast aur smooth hoti hai
//
// Important Components:
// - BrowserRouter : Pure app ko wrap karta hai
// - Routes        : Saare routes ko hold karta hai
// - Route         : Path aur component define karta hai
// - Link / NavLink: Page reload bina navigation ke liye
//
<!-- 
// Example:
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </Routes>
// </BrowserRouter> 
-->


<Route path="/about" element={<About />} />

------------------------------------------------------------------------------------------------------------------------------------
<!-- 1️⃣4️⃣ Context API -->
Context API is used to avoid prop drilling.
Hindi:-
Context API React ka ek feature hai jo global data share karne ke kaam aata hai without props drilling.

// 📦 Context API me 3 main cheeze hoti hain:-

// 1️⃣ createContext:-
// Context banane ke liye
// const ThemeContext = React.createContext();

// 2️⃣ Provider:-
// Provider data supply karta hai (parent component)
// <ThemeContext.Provider value="dark">
//   <App />
// </ThemeContext.Provider>


// 3️⃣ Consumer / useContext
// Data use karne ke liye
// const theme = useContext(ThemeContext);


// Context API ka use kab kare?

// ✔️ Theme (dark / light)
// ✔️ User login data
// ✔️ Language (English / Hindi)
// ✔️ Cart / Wishlist
// ✔️ Settings

<!-- 1️⃣6️⃣ API Call (Axios / Fetch) -->
Used to fetch data from backend.
Hindi:-
Backend se data lene ke liye.


<!-- 1️⃣7️⃣ Virtual DOM:- -->
The Virtual DOM is a lightweight copy of the Real DOM created by React.
It helps React update the UI faster and efficiently.

Hindi:
Virtual DOM Real DOM ki ek copy hoti hai jo memory me rehti hai. React pehle Virtual DOM me changes karta hai, phir sirf zaroori part Real DOM me update karta hai.

<!-- setCount(count + 1); -->

--------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- ⚡ Virtual DOM vs Real DOM -->
| Virtual DOM         | Real DOM              |
| ------------------- | --------------------- |
| Memory me hota hai  | Browser me hota hai   |
| Fast updates        | Slow updates          |
| React use karta hai | Browser use karta hai |
| Lightweight         | Heavy                 |


<!-- 📌 Advantages -->
⚡ Fast performance
🔁 Efficient updates
🧠 Less browser work
📱 Smooth UI
----------------------------------------------------------------------------------------------------------------------------------------------
<!-- 1️⃣8️⃣ React Advantages -->
1️⃣ Component-Based Architecture
2️⃣ Virtual DOM
3️⃣ Reusable Code
4️⃣ Fast Performance
5️⃣ One-Way Data Binding
6️⃣ Easy to Learn
7️⃣ Strong Community Support
8️⃣ SEO Friendly
9️⃣ Used by Big Companies

📝 Exam / Interview One-Line Answer
React is popular because it is fast, component-based, reusable, and uses Virtual DOM for better performance.


### 1️⃣ **Component-Based Architecture**

**English:**
UI ko chhote-chhote reusable components me tod deta hai.

**Hindi:**
UI ko chhote-chhote parts (components) me divide karta hai, jisse code easy ho jata hai.

---

### 2️⃣ **Virtual DOM**

* Real DOM se fast hota hai
* Sirf changed part update karta hai
* Performance improve hoti hai ⚡

---

### 3️⃣ **Reusable Code**

* Ek component ko multiple jagah use kar sakte ho
* Time & effort bachata hai

---

### 4️⃣ **Fast Performance**

* Virtual DOM + smart updates
* Large applications ke liye best

---

### 5️⃣ **One-Way Data Binding**

**Hindi:**
Data ek direction me flow karta hai → bug kam hote hain

---

### 6️⃣ **Easy to Learn**

* JavaScript based
* HTML jaisa JSX syntax

---

### 7️⃣ **Strong Community Support**

* Bahut saare tutorials
* Libraries & tools easily available

---

### 8️⃣ **SEO Friendly**

* Server-side rendering support (Next.js)
* Search engines ke liye better

---

### 9️⃣ **Used by Big Companies**

* Facebook
* Instagram
* Netflix
* WhatsApp Web

--

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- 🔹 17. What is One-way Data Binding? -->
Data flows in one direction (Parent ➝ Child), which makes debugging easier.

<!-- What is Key in React? -->
Keys help React identify elements uniquely in lists and improve performance.
------------------------------------------------------------------------------------------------------------------------------------------------------------

