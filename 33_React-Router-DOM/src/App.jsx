// React-Router-DOM:- 👉 React Router DOM is used to handle routing and navigation in React applications without page reload.

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


// React Router DOM ka use React app me multiple pages (routes) banane ke liye hota hai — bina page reload ke.
// Jaise: /login, /about, /profile etc.

// npm install react-router-dom


// Important Components :-
// | Component        | Kaam                                   |
// | ---------------  | -------------------------------------- |
// | `BrowserRouter`  | Router ko app ke around wrap karta hai |
// | `Routes`         | Saare routes ka container              |
// | `Route`          | Ek path ko ek component se jodta hai   |
// | `Link`           | Page reload ke bina navigation         |
// | `useParams`      | URL se dynamic data lena               |
// | `useNavigate`    | Programmatically page change           |


import React from 'react'

const App = () => {
  return (
    <div>
        
    </div>
  )
}

export default App