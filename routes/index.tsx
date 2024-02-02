import type React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import Login from "./login"
import './index.css'

export const Routing: React.FC = () => {

  return (
    <div className='main'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}
