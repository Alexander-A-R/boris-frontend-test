import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navigator} from './components/Navigator'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Link to="/navigator">Navigator</Link>} />
        <Route path='navigator' element={<Navigator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
