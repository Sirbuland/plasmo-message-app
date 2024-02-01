import type React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import Login from "./login"

export const Routing: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
)
