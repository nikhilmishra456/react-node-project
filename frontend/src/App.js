import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Articles } from './Component/Articles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Articles/>}/>
      </Routes>
    </Router>
  );
}

export default App;
