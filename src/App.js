import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
