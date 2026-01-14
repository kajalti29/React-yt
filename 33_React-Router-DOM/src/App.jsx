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
// Example:
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </Routes>
// </BrowserRouter>


import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
    <Navbar/>
      {/* Routes */}
      <main> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </div>
  );
};
export default App;
