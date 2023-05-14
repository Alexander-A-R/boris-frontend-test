import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navigator} from './components/Navigator'
import {Main} from './components/Main'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path='navigator' element={<Navigator />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
