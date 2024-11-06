import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/Layout';
import Container from './components/Container';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*********** Arrays **********/

// Create
let myArray1 = ["blue", "green", 152, 26, true];
console.log("myArray1:", myArray1);

// Read
let a = myArray1[2];
console.log("a:", a);

// Array destructuring
let [b, c, d] = myArray1;
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

// Spread operator 
let myArray2 = ["one", ...myArray1, "two", "three"];
console.log("myArray2:", myArray2);

let myArray3 = [...myArray1, ...myArray2];
console.log("myArray3:", myArray3);

// For loop
for (let i = 0; i < myArray1.length; i++) {
  console.log("myArray1[" + i + "] = " + myArray1[i]);
}

// Map function
function fn1(x) {
  if (Number.isInteger(x)) {
    return x;
  }
}
let myArray4 = myArray1.map((x, idx) => {
  console.log("x:", x + " - idx:", idx);
  return x;
});
console.log("myArray4:", myArray4);

let myArray5 = myArray1.map(fn1);
console.log("myArray5:", myArray5);

// Delete array elements using splice and filter functions
let myArray6 = [...myArray1];
myArray6.splice(2, 1);
console.log("myArray6:", myArray6);

function filterFunction(x) {
  return Number.isInteger(x);
}
let myArray7 = myArray1.filter(filterFunction);
console.log("myArray7:", myArray7);

/************** JavaScript Objects **************/
let myObject1 = { firstName: "Berat", lastName: "Esen", age: 10, address: "İzmir/Torbalı" };
console.log("myObject1:", myObject1);

// Read
let f = myObject1.firstName;
console.log("First name:", f);

// Object destructuring
let { firstName, lastName } = myObject1;
console.log("First name:", firstName + " - Last name:", lastName);

// Spread operator 
let myObject3 = { ...myObject1, firstName: "Şeyhmuz", email: "seyhmuz.boz47@gmail.com" };
console.log("myObject3:", myObject3);
