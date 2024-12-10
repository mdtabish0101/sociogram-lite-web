import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Loginn from "./pages/Loginn"



function App() {

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loginn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
