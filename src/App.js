import React from "react";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Visa from "./components/Visa";
import About from './components/About';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Membership from "./pages/Membership";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/package" element={<Membership/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
