import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import CreateProduct from './component/page/CreateProduct';
import DataProduct from './component/Data/DataProduct';
import Login from './component/Form/Login';
import Register from './component/Form/Register';
import ProtectedRoute from './component/Private/ProtectedRoute';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/createproduct" element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <CreateProduct setSignedIn={setIsSignedIn} />
            </ProtectedRoute>
          }/>

          <Route path="/account/:id" element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <DataProduct setSignedIn={setIsSignedIn} />
            </ProtectedRoute>
          }/>

          <Route path="/login" element={<Login setSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
