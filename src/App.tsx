import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Navigator} from './components/Navigator'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Link to="/navigator" className="leading-5 h-9 hover:bg-gray-200 text-center rounded mt-5 bg-gray-100 block py-2 px-2 w-24 mx-auto">Navigator</Link>} />
        <Route path='navigator' element={<Navigator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
