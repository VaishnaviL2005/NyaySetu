import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Chatbot from './components/Chatbot';
import FIRForm from './components/FIRform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/firform" element={<FIRForm />} />
      </Routes>
    </Router>
  );
}

export default App;
