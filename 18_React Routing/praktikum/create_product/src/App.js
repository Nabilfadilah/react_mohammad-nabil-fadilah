import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import CreateProduct from './component/page/CreateProduct';
// import "./App.css";
// import CreateProduct from './component/page/CreateProduct';
// import "./LandingPage.css"


function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);

  return (
    <>
      {/* <CreateProduct/>
      <LandingPage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createproduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
