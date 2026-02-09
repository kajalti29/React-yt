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

