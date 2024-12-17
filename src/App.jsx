import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Loginn from "./pages/Loginn";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddPost from "./pages/AddPost"



function App() {

  return (
    <>
    <div>
    <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addpost" element={<AddPost/>}/>
        <Route path="/login" element={<Loginn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
