import React, { useState } from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
