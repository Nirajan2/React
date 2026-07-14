import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ItemList from './components/ItemList.jsx'
import products from "./data/products.js";

function App() {
  return (
    <>
      <Header />
      <ItemList products={products} />
      <Footer />
    </>
  );
}

export default App;