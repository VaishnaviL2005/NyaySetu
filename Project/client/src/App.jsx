import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Login from "./components/login.jsx";
import SignUp from "./components/register.jsx";
import Homepage from "./components/Homepage.jsx";
import Chatbot from "./components/Chatbot.jsx";
import FIRform from "./components/FIRform.jsx";
import TrackCase from "./components/Trackcase.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase.js";

function AppWrapper() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/";

  return (
    <div className="App">
      {isAuthPage ? (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/Homepage" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/chatbot" element={<Chatbot />} /> 
          <Route path="/firform" element={<FIRform />} /> 
          <Route path="/trackcase" element={<TrackCase />} /> 
        </Routes>
      )}
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
