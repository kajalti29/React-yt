
// localStorage means browser ki memory
// SessionStorage means Temporary browser storage

// Methods of local Storage
// localStorage.setItem("key", "value")  iska use data save  karne ke liye hota hai
// localStorage.setItem("name", "Kajal")

// localStorage.getItem("key") saved data nikalne ke liye
//  const name = localStorage.getItem("name")
// console.log(name) // Kajal

// localStorage.removeItem("name") :_single data delete karne ke liye
// localStorage.clear() :- puri localStorage khali karne ke liye



// import React from 'react'

// localStorage.setItem("name", "Kajal")

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App





// LocalStorage only string store karta hai, direct object/array nhi rkh sakta.

// 🔁 JSON.stringify & JSON.parse (MOST CONFUSING PART)
// * JSON.stringify()
// 👉 Object / array → string बनाता है

// JSON.stringify({name: "Kajal"})
// "{ "name": "Kajal" }"

// * JSON.parse()
// 👉 String → object बनाता है

// JSON.parse('{"name":"Kajal"}')
// { name: "Kajal" }


// 📌 LocalStorage में save = stringify
// 📌 LocalStorage से get = parse


import React from 'react'

const App = () => {
  const user =  {
    username: 'Sarthak',
    age: 18,
    city:'Bhopal'
  }
  localStorage.setItem('user', JSON.stringifyuser);
  


  return (
    <div>App</div>
  )
}

export default App