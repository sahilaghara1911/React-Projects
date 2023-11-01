import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-[1000px]  bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard  isLoggedIn={isLoggedIn}/>
          </PrivateRoute>
        
        }></Route>
      </Routes>
    </div>
  );
};

export default App;
