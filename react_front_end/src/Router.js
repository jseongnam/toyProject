// Router.js
import Main from './pages/Main/Main'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
      <BrowserRouter>                                                                
        <Routes>                                                                  
          <Route path="/main" element={<Main />} /> 
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;