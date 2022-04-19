import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCeFZPkFdKHCBN1W_GZbwRCj6FuzAmT7zY",
    authDomain: "smart-cart-dcb0c.firebaseapp.com",
    projectId: "smart-cart-dcb0c",
    storageBucket: "smart-cart-dcb0c.appspot.com",
    messagingSenderId: "829835628422",
    appId: "1:829835628422:web:0414f4c82e3f9518bba607",
    measurementId: "G-G5HRE8NK5F"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
