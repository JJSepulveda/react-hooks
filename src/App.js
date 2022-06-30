import React, { useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Characters from './components/Characters';

import ThemeContext from './context/ThemeContext';

function App() {
  // add styles to the body element
  const { color, backgroundColor } = useContext(ThemeContext)
  
  useEffect(() => {
    // 👇 add class to body element
    // document.body.classList.add('bg-salmon');

    // 👇️ set style on body element
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    /* return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;

      document.body.classList.remove('bg-salmon');
    }; */
    // https://bobbyhadz.com/blog/react-set-body-style
  }, []);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
