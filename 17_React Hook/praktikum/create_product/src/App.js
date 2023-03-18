import React, { useEffect } from 'react';

import Navbar from "./component/Navbar/Navbar";
import Form from "./component/Form/Form";

import "./App.css";

function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);

  return (
    <>
      <Navbar/>
      <Form/>
    </>
  );
}

export default App;
