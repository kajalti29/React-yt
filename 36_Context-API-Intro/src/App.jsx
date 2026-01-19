// React Context API Introduction:-
// Context API React ka ek feature hai jo global data share karne ke kaam aata hai
// without props drilling.

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




import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App