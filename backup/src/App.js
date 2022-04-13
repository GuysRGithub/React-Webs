import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero"
import {} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Home />
    </div>
  );
}

export default App;
