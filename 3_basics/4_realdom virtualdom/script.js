// Real Dom:- DOM = document Object Model
// Real DOM matlab jo humare browser me hota hai wo actual DOM hota hai jise hum manipulate karte hain JavaScript ke through.
// Jaise ki hum kisi element ko select karte hain aur uske properties ko change karte hain, text change karte hain, style change karte hain etc.
// Ye sab changes directly real DOM me hote hain.


// Vitual DOM:- Virtual DOM ek lightweight copy hota hai real DOM ka jo React use karta hai performance improve karne ke liye.
// Jab bhi hum React me koi changes karte hain, React pehle Virtual DOM me changes karta hai, phir wo Virtual DOM ko real DOM se compare karta hai (is process ko reconciliation kehte hain) aur sirf wahi parts of real DOM ko update karta hai jo change hue hain.
// Isse performance better hoti hai kyunki real DOM ko baar-baar update karna costly operation hota hai.
// To summary me, real DOM wo hota hai jo browser me hota hai aur jise hum directly manipulate karte hain, jabki Virtual DOM ek abstraction layer hai jo React use karta hai taaki wo efficiently real DOM ko update kar sake.  

// Example of Real DOM manipulation:
document.getElementById("myElement").innerText = "Hello, Real DOM!";    
// Is code me hum directly real DOM me ek element ko select kar rahe hain aur uska text change kar rahe hain.

// Example of Virtual DOM in React:
import React from 'react';
import ReactDOM from 'react-dom';   

const element = <h1>Hello, Virtual DOM!</h1>;
ReactDOM.render(element, document.getElementById('root'));
// Is code me hum React ka use kar rahe hain jisme hum ek element create kar rahe hain aur usse render kar rahe hain.
// React internally Virtual DOM ka use karta hai taaki wo efficiently real DOM ko update kar sake.
// Jab bhi hum React me koi changes karte hain, React pehle Virtual DOM me changes karta hai, phir wo Virtual DOM ko real DOM se compare karta hai aur sirf wahi parts of real DOM ko update karta hai jo change hue hain.
// Isse performance better hoti hai kyunki real DOM ko baar-baar update karna costly operation hota hai.


// Note: Ye code tabhi chalega jab aapke paas React aur ReactDOM properly setup ho.

// Real DOM aur Virtual DOM ke beech ka farak samajhne ke liye ye examples hain.
// Aap inhe apne React project me try kar sakte hain.

