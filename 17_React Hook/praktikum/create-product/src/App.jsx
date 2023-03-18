import React, { useEffect } from 'react';

import Form from "./component/Form/Form"
import Navbar from "./component/Navbar/Navbar"
import Tabel from "./component/Tabel/Tabel";
import ButtonDS from "./component/Button/ButtonDS";
import Button from "./component/Button/Button";
import ButtonRandom from "./component/Button/ButtonRandom";
import "./App.css";
// import "./Script.js";

function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);
  
  return (
    <>
      <Navbar/>
      <Form/>
      <Button/>
      <ButtonRandom/>
      <Tabel/>
      <ButtonDS/>
    </>
  )
}

export default App
