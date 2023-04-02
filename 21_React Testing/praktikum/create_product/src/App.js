import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import CreateProduct from './component/page/CreateProduct';
import DataProduct from './component/Data/DataProduct';
import Login from './component/Form/Login';
import Register from './component/Form/Register';

function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/account/:id" element={<DataProduct/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
