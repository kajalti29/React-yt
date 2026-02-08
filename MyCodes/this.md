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



