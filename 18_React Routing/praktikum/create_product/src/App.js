import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import CreateProduct from './component/page/CreateProduct';
import DataProduct from './component/Data/DataProduct';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
